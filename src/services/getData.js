import { useState, useEffect } from "react";
import {
    collection,
    onSnapshot,
    query,
    getDocs,
    orderBy
} from "firebase/firestore";
import { db } from "../firebaseConfig";

function GetData() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const [projectsData, setProjectsData] = useState([]);

    const [prueba, setPrueba] = useState([]);

    useEffect(() => {
        getData(db, "user", setUserData);
        getOrderedData(
            db,
            "projects",
            projectsData,
            setProjectsData,
            "date",
            "desc"
        );
    }, []);

    useEffect(() => {
        handleLoading(userData);
        handleLoading(projectsData);
    }, [userData, projectsData, prueba]);

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

    return { loading, userData, projectsData };
}

export default GetData;
