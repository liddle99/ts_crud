import { IUser } from "../../../interface/Content";
import { useState } from "react";
import axios from "axios";

interface ChangeValue {
    target: {
        value: string;
        name: string;
    };
}

const RegisterContainer = () => {
    const [userData, setUserData] = useState<IUser>({
        userEmail: "",
        password: "",
        name: "",
    });
    const getValue = (e: ChangeValue) => {
        const { value, name } = e.target;
        const tmp = { ...userData, [name]: value };
        setUserData(tmp);
        console.log(tmp);
    };
    const handleClick = async () => {
        if (!userData.userEmail) {
            alert("email을 입력하세요");
        } else if (!userData.password) {
            alert("password를 입력하세요");
        } else if (!userData.name) {
            alert("name을 입력하세요");
        } else {
            await axios
                .post("http://localhost:5000/api/auth/signup", {
                    email: userData.userEmail,
                    password: userData.password,
                    name: userData.name,
                })
                .then((res) => {
                    alert("등록 완료!");
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="ID"
                name="userEmail"
                onChange={getValue}
            />
            <input
                type="text"
                placeholder="password"
                name="password"
                onChange={getValue}
            />
            <input
                type="text"
                placeholder="name"
                name="name"
                onChange={getValue}
            />
            <button onClick={handleClick}>signup</button>
        </div>
    );
};

export default RegisterContainer;
