import Users from "../database/models/user.models";
import { generateJWT } from "../util/jwt";
import { userSignIn } from "../interface/bodyInterface";

const signIn = async (user: userSignIn) => {
    const userData: any = await Users.findOne({ where: { email: user.email } });
    if (userData === null) {
        console.log("user not found");
    }

    if (userData.password !== user.password) {
        console.log("password failed");
    }

    const token = await generateJWT({ id: userData.id });

    return {
        token,
        user: {
            email: userData.email,
            name: userData.name,
        },
    };
};
export default signIn;
