export interface Content {
    title: string;
    content: string;
    idx: number;
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
