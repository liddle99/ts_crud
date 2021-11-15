import { useState, useEffect } from "react";
import Axios from "axios";
import { Content, IData } from "../../interface/Content";
import { useHistory } from "react-router-dom";
import UpdateInput from "../../component/update/updateInput";
import SelectComponent from "../../component/update/updateCategory";

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
    const token: string | null = localStorage.getItem("token");
    useEffect(() => {
        const test = () => {
            if (token === null) {
                return false;
            }
            Axios.get("http://localhost:5000/api/Content", {
                params: {
                    idx: idx,
                },
                headers: {
                    token: token,
                },
            }).then((res: IData) => {
                setBoard(res.data[0]);
                console.log(res.data[0]);
            });
        };
        test();
    }, [idx, token]);

    const getValue = (e: ChangeValue) => {
        const { value, name } = e.target;
        const tmp = { ...board, [name]: value, idx: idx };
        setBoard(tmp);
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
            })
            .catch((error) => {
                console.log(error);
            });
        history.push("/main");
    };
    return (
        <div>
            <UpdateInput
                title={board.title}
                content={board.content}
                getValue={getValue}
                updateValue={updateValue}
            ></UpdateInput>
            <SelectComponent
                getValue={getValue}
                category={board.category}
            ></SelectComponent>
        </div>
    );
};
export default UpdateContainer;
