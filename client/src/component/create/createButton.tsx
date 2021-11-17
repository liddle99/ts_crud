import "../css/create.css";

interface IProps {
    write(): void;
    children: string;
}

const CreateButton = (params: IProps) => {
    return (
        <button className="createButton" onClick={params.write}>
            write
        </button>
    );
};
export default CreateButton;
