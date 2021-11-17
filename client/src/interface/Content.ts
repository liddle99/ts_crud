export interface Content {
    title: string;
    content: string;
    idx: string;
    category: string;
}
export interface IValue {
    target: {
        value: string;
    };
}
export interface IProps {
    data: Content;
}
export interface IData {
    data: Content[];
}
export interface IUser {
    userEmail: string;
    password: string;
    name: string;
}
export interface ChangeValue {
    target: {
        value: string;
        name: string;
    };
}
