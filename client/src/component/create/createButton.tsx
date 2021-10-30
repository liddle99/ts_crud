import "../css/create.css"

export default function CreateButton(params: any) {
    return (
        <button className="createButton" onClick={params.write}>
            write
        </button>
    );
}
