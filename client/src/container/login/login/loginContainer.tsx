import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

interface ChangeValue {
    target: {
        value: string;
        name: string;
    };
}
interface IData {
    userEmail: string;
    password: string;
}

const LoginContainer = () => {
    const history = useHistory();
    const [userData, setUserData] = useState<IData>({
        userEmail: "",
        password: "",
    });
    const getValue = (e: ChangeValue) => {
        const { value, name } = e.target;
        const tmp = { ...userData, [name]: value };
        setUserData(tmp);
        console.log(tmp);
    };
    const handleClick = () => {
        if (!userData.userEmail) {
            alert("email을 입력하세요");
        } else if (!userData.password) {
            alert("password를 입력하세요");
        } else {
            axios
                .post("http://localhost:5000/api/auth/signIn", {
                    email: userData.userEmail,
                    password: userData.password,
                })
                .then((res: any) => {
                    alert("login success");
                    console.log(res.data.data.token.accessToken);
                    console.log(res.data.data.token.refreshToken);
                    localStorage.setItem(
                        "accessToken",
                        res.data.data.token.accessToken
                    );
                    localStorage.setItem(
                        "refreshToken",
                        res.data.data.token.refreshToken
                    );
                    history.push("/main");
                })
                .catch(() => {
                    alert("아이디 또는 패스워드를 확인하세요");
                });
        }
    };
    return (
        <div>
            <input type="text" name="userEmail" onChange={getValue} />
            <input type="text" name="password" onChange={getValue} />
            <button onClick={handleClick}>Login</button>
        </div>
    );
};
export default LoginContainer;
