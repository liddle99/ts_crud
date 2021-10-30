import { useEffect, useState } from "react";
import axios from "axios";
import { IData } from "../../interface/Content";
import { Link } from "react-router-dom";
// import ReadComponent from "../../component/read/readComponent";
import DeleteContainer from "../delete/deleteContainer";
import "../../component/css/read.css";

const ReadContainer = (data: any) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const idx = data.match.params.id;
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/Content", {
                params: {
                    idx: idx,
                },
            })
            .then((res: IData) => {
                console.log(res.data[0].idx);

                setTitle(res.data[0].title);
                setContent(res.data[0].content);
                console.log(title)
                console.log(content)
            });
    }, []);
    return (
        <div>
            <div className="read-title">{title}</div>
            <div className="read-content">{content}</div>
            <div className="tieBox">
                <DeleteContainer idx={idx}></DeleteContainer>
                <Link to={`/update/${idx}`}>update</Link>
            </div>
        </div>
        // <ReadComponent title={title} content={content} idx={idx}></ReadComponent>
    );
};
export default ReadContainer;
