import { useHistory } from "react-router-dom";
import axios from "axios";

interface IIndex {
    idx: string;
}

const DeleteContainer = (params: IIndex) => {
    const history = useHistory();
    console.log(params.idx);
    const deleteButton = async () => {
        const tmp = params.idx;
        await axios
            .post("http://localhost:5000/api/delete", {
                idx: tmp,
            })
            .then((res) => {
                alert("Delete Success");
            });
        history.push("/");
    };

    return (
        <div>
            <button onClick={deleteButton}>delete</button>
        </div>
    );
};
export default DeleteContainer;
