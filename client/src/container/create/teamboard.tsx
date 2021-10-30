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
        await Axios.post("http://localhost:5000/api/insert", {
            category: params.category,
            title: boardContent.title,
            content: boardContent.content,
        })
            .then((res) => {
                alert("등록 완료!");
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        history.push("/");
    };

    return (
        <>
            <Input getData={getData} />
            <CreateButton write={createValue}>write</CreateButton>
        </>
    );
};
export default Teamboard;