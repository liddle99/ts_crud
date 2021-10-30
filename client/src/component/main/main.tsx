import "../css/main.css";
import { Link } from "react-router-dom";

export default function main(chlidren: any) {
    return (
        <h2 className="headBox">
            <span>나만쓰는 게시판</span>
            <Link className="createPage" to={`/create`}>
                write
            </Link>
        </h2>
    );
}
