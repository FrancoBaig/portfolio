import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

function GetData() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {
        getData(db, "user", setUserData);
        getData(db, "projects", setProjectsData);
    }, []);

    useEffect(() => {
        handleLoading(userData);
        handleLoading(projectsData);
    }, [userData, projectsData]);

    console.log(projectsData);

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

    const handleLoading = (...params) => {
        if (params.every((param) => param === null)) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    };

    return { loading, userData, projectsData };
}

export default GetData;
