

export default function UpdateCategory(params: any) {
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
    )
}
