import { Request, Response, NextFunction} from "express";
import { verifyToken } from "../../util/jwt";

const jwtChecker = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.token;
        console.log('jwtchecker',token);
        if (typeof token !== "string" || token === "null") {
            throw "not_login";
        }

        const userId = verifyToken(token).id;
        res.locals.user = userId;
        console.log('jwtChecker',userId);
        next()
    } catch (err) {
        throw err;
    }
};


export default jwtChecker;
