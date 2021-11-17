import "../css/main.css";
interface IProps {
    handleClick(value: string): void;
}

const categoryButton = (params: IProps) => {
    return (
        <div className="categoryButton">
            <button
                className="todoButton"
                onClick={() => params.handleClick("todo")}
            >
                todo
            </button>
            <button
                className="diaryButton"
                onClick={() => params.handleClick("diary")}
            >
                diary
            </button>
            <button
                className="noteButton"
                onClick={() => params.handleClick("note")}
            >
                note
            </button>
            <button
                className="studyButton"
                onClick={() => params.handleClick("study")}
            >
                study
            </button>
        </div>
    );
};
export default categoryButton;
