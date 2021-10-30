import { Link } from "react-router-dom";
import { Content } from "../../interface/Content";
import "../css/main.css";

export default function ContentView(params: any) {
    const view = params.value;
    return (
        <div className="viewTitle">
            {view.map((element: Content, index: number) => (
                <div key={index}>
                    <Link className='readTitle' to={`/post/${element.idx}`}>
                        {element.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}