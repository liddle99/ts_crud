import { ChangeValue } from "../../../interface/Content";
interface IVoid {
    getValue(e: ChangeValue): void;
    handleClick(): void;
}
export default function SignUp(params: IVoid) {
    return (
        <div>
            <input
                type="text"
                placeholder="ID"
                autoComplete="off"
                name="userEmail"
                onChange={params.getValue}
                required
            />
            <input
                type="password"
                placeholder="password"
                autoComplete="off"
                name="password"
                onChange={params.getValue}
                required
            />
            ㅂ
            <input
                type="text"
                placeholder="name"
                autoComplete="off"
                name="name"
                onChange={params.getValue}
                required
            />
            <button onClick={params.handleClick}>signup</button>
        </div>
    );
}
