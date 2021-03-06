import { useState } from "react";
import Input from "../../component/create/input";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import CreateButton from "../../component/create/createButton";

interface Content {
    title: string;
    content: string;
}

interface ChangeValue {
    target: {
        value: string;
        name: string;
    };
}

const Teamboard = (params: { category: string }) => {
    const history = useHistory();
    const [boardContent, setBoardContent] = useState<Content>({
        title: "",
        content: "",
    });
    const getData = (e: ChangeValue) => {
        const { value, name } = e.target;
        const tmp = { ...boardContent, [name]: value };
        setBoardContent(tmp);
        console.log(tmp);
    };

    const createValue = async () => {
        const token: string | null = localStorage.getItem("accessToken");

        if (token === null) {
            return false;
        }
        if (boardContent.title !== "") {
            await Axios.post(
                "http://localhost:5000/api/insert",
                {
                    category: params.category,
                    title: boardContent.title,
                    content: boardContent.content,
                },
                {
                    headers: {
                        token: token,
                    },
                }
            )
                .then((res) => {
                    alert("success!");
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
            history.push("/main");
        } else {
            alert("제목을 입력하세요.");
        }
    };
    return (
        <>
            <Input getData={getData} />
            <CreateButton write={createValue}>write</CreateButton>
        </>
    );
};
export default Teamboard;
