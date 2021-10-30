import { useState, useEffect } from "react";
import Axios from "axios";
import { Content, IData } from "../../interface/Content";
import { useHistory } from "react-router-dom";
import "../../component/css/update.css";
import SelectComponent from "../../component/create/selectComponent";

interface ChangeValue {
    target: {
        value: string;
        name: string;
    };
}

const UpdateContainer = (data: any) => {
    const history = useHistory();
    const idx = data.match.params.idx;
    const [board, setBoard] = useState<Content>({
        title: "",
        content: "",
        idx: 0,
        category: "",
    });
    useEffect(() => {
        Axios.get("http://localhost:5000/api/Content", {
            params: {
                idx: idx,
            },
        }).then((res: IData) => {
            setBoard(res.data[0]);
        });
    }, []);

    const getValue = (e: ChangeValue) => {
        const { value, name } = e.target;
        const index = data.match.params.idx;
        const tmp = { ...board, [name]: value, idx: index };
        setBoard(tmp);
        console.log(tmp);
    };

    const updateValue = async () => {
        await Axios.post("http://localhost:5000/api/update", {
            title: board.title,
            content: board.content,
            idx: board.idx,
            category: board.category,
        })
            .then((res) => {
                alert("Update success");
                console.log(res);
                console.log(board.category)
            })
            .catch((error) => {
                console.log(error);
            });
        history.push("/");
    };
    console.log(board.category)
    return (
        <div>
            <input
                className="title-input"
                placeholder="제목"
                onChange={getValue}
                type="text"
                name="title"
                value={board.title}
            />
            <textarea
                placeholder="내용"
                className="content-input"
                onChange={getValue}
                name="content"
                value={board.content}
            />
            <div className="updateBox">
                <button className="updateButton" onClick={updateValue}>
                    update
                </button>
            </div>
            <SelectComponent select={getValue}></SelectComponent>
        </div>
    );
};
export default UpdateContainer;