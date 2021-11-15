import { useEffect, useState } from "react";
import axios from "axios";
import { IData } from "../../interface/Content";
import ReadComponent from "../../component/read/readComponent";

const ReadContainer = (data: any) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const idx = data.match.params.id;
    const token: string | null = localStorage.getItem("token");

    useEffect(() => {
        const test = async () => {
            if (token === null) {
                return await false;
            }
            axios
                .get("http://localhost:5000/api/Content", {
                    params: {
                        idx: idx,
                    },
                    headers: {
                        token: token,
                    },
                })
                .then((res: IData) => {
                    setTitle(res.data[0].title);
                    setContent(res.data[0].content);
                });
            console.log(idx);
        };
        test();
    }, [idx, token]);
    return (
        <ReadComponent
            title={title}
            content={content}
            idx={idx}
        ></ReadComponent>
    );
};
export default ReadContainer;
