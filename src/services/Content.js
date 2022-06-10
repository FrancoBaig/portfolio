import { useState } from "react";

var contentful = require("contentful");

function Content() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

    var client = contentful.createClient({
        space: process.env.REACT_APP_SPACE_KEY,
        accessToken: process.env.REACT_APP_ACCESS_KEY
    });

    const getData = async (id) => {
        setLoading(true);
        try {
            const entries = await client
                .getEntry(id)
                .then((response) => setData(response.fields.nuevo));
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return { loading, data, getData };
}

export default Content;
