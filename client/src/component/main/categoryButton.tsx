import "../css/main.css";

export default function categoryButton(params: any) {
    return (
        <div className="categoryButton">
            <button
                className="todoButton"
                onClick={params.handleClick}
                value="todo"
            >
                todo
            </button>
            <button
                className="diaryButton"
                onClick={params.handleClick}
                value="diary"
            >
                diary
            </button>
            <button
                className="noteButton"
                onClick={params.handleClick}
                value="note"
            >
                note
            </button>
            <button
                className="studyButton"
                onClick={params.handleClick}
                value="study"
            >
                study
            </button>
        </div>
    );
}
