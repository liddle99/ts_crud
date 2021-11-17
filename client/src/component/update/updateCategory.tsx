import { ChangeValue } from "../../interface/Content";

interface IProps {
    getValue(e: ChangeValue): void;
    category: string;
}

const UpdateCategory = (params: IProps) => {
    return (
        <div className="categoryBox">
            <select
                className="selectCategory"
                name="category"
                onChange={params.getValue}
                value={params.category}
            >
                <option value="todo">todo</option>
                <option value="diary">diary</option>
                <option value="note">note</option>
                <option value="study">study</option>
            </select>
        </div>
    );
};
export default UpdateCategory;
