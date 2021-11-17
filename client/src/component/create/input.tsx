import "../css/create.css";
import { ChangeValue } from "../../interface/Content";

interface IProps {
    getData(e: ChangeValue): void;
}

const input = ({ getData }: IProps) => {
    return (
        <div>
            <input
                className="title-input"
                type="text"
                placeholder="제목"
                onChange={getData}
                name="title"
            />
            <textarea
                className="content-input"
                placeholder="내용"
                name="content"
                onChange={getData}
            />
        </div>
    );
};
export default input;
