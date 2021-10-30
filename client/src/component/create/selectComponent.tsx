import "../css/create.css";

const SelectComponent = (params: any) => {
    return (
        <div className="categoryBox">
            <select
                className="selectCategory"
                name="category"
                id=""
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
