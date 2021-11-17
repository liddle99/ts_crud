import "../css/update.css";
import { ChangeValue } from "../../interface/Content";

interface IProps {
    getValue(e: ChangeValue): void;
    title: string;
    content: string;
    updateValue(): void;
}

const updateInput = (params: IProps) => {
    return (
        <div>
            <input
                className="title-input"
                onChange={params.getValue}
                type="text"
                name="title"
                defaultValue={params.title}
            />
            <textarea
                className="content-input"
                onChange={params.getValue}
                name="content"
                defaultValue={params.content}
            />
            <div className="updateBox">
                <button className="updateButton" onClick={params.updateValue}>
                    update
                </button>
            </div>
        </div>
    );
};
export default updateInput;
