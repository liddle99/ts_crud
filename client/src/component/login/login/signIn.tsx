import { ChangeValue } from "../../../interface/Content";

interface IVoid {
    getValue(e: ChangeValue): void;
    handleClick(): void;
}

export default function SignIn(params: IVoid) {
    return (
        <div>
            <input
                type="text"
                className="signInUserId"
                name="userEmail"
                autoComplete="off"
                onChange={params.getValue}
            />
            <input
                type="password"
                className="signInPassword"
                name="password"
                autoComplete="off"
                onChange={params.getValue}
            />
            <button className="signUpButton" onClick={params.handleClick}>
                Login
            </button>
        </div>
    );
}
