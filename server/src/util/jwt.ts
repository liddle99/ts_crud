import config from "../config/config";
import jwt from "jsonwebtoken";

interface Props {
    id: number;
}
type ITokenPayload = {
    id: number;
    type: "accessToken" | "refreshToken";
};
export const generateJWT = ({ id }: Props) => {
    try {
        const accessToken: string = jwt.sign(
            {
                id,
                type: "accessToken",
            },
            config.jwt,
            {
                expiresIn: "7d",
            }
        );
        const refreshToken: string = jwt.sign(
            {
                id,
                type: "refreshToken",
            },
            config.jwt
        );
        return { accessToken, refreshToken };
    } catch (error) {
        throw error;
    }
};

export const verifyToken = (token: string) => {
    try {
        const verify = jwt.verify(token, config.jwt);
        console.log(verify);
        return verify as ITokenPayload;
    } catch (err) {
        throw err;
    }
};

