import "../css/create.css";
import { IValue } from "../../interface/Content";

interface IProps {
    select(e: IValue): void;
}

const SelectComponent = (params: IProps) => {
    return (
        <div className="categoryBox">
            <select
                className="selectCategory"
                name="category"
                onChange={params.select}
            >
                <option value="todo">todo</option>
                <option value="diary">diary</option>
                <option value="note">note</option>
                <option value="study">study</option>
            </select>
        </div>
    );
};
export default SelectComponent;
