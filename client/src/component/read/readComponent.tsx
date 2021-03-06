import { Link } from "react-router-dom";
import DeleteContainer from "../../container/delete/deleteContainer";
import "../css/read.css";

interface IProps {
    title: string,
    content: string,
    idx: string
}

const ReadComponent = (params: IProps) => {
    return (
        <div>
            <div className="read-title">{params.title}</div>
            <div className="read-content">{params.content}</div>
            <div className="tieBox">
                <DeleteContainer idx={params.idx}></DeleteContainer>
                <Link to={`/update/${params.idx}`}>update</Link>
            </div>
        </div>
    );
};

export default ReadComponent;