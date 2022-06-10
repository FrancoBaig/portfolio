import React, { useState, useEffect, useContext, createContext } from "react";
import {
    collection,
    onSnapshot,
    query,
    getDocs,
    orderBy
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const dataContext = createContext([]);

function DataProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        getData(db, "user", setUser);
        getOrderedData(db, "projects", projects, setProjects, "date", "desc");
        getOrderedData(db, "skills", skills, setSkills, "percent", "desc");
        getOrderedData(
            db,
            "education",
            education,
            setEducation,
            "date",
            "desc"
        );

        getData(db, "hobbies", setHobbies);
    }, []);

    useEffect(() => {
        handleLoading(user, projects, skills, hobbies);
    }, [user, projects, skills, education, hobbies]);

    const getData = (db, table, setData) => {
        const ref = collection(db, table);
        onSnapshot(ref, (snapshot) => {
            setData(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                })
            );
        });
    };

    const getOrderedData = async (
        db,
        table,
        data,
        setData,
        by,
        order = "asc"
    ) => {
        const q = query(collection(db, table), orderBy(by, order));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let newData = { id: doc.id, ...doc.data() };
            setData((prev) => [...prev, newData]);
        });
    };

    const handleLoading = (...params) => {
        if (params.every((param) => param.length > 0)) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    };

    return (
        <dataContext.Provider
            value={{ loading, user, projects, skills, education, hobbies }}
        >
            {children}
        </dataContext.Provider>
    );
}

export const useData = () => useContext(dataContext);
export default DataProvider;
