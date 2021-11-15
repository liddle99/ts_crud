import { BrowserRouter, Route } from "react-router-dom";
import Create from "./container/create/create";
import Main from "./container/main/main";
import ReadContainer from "./container/read/readContainer";
import UpdateContainer from "./container/update/updateContainer";
import signUp from "./container/login/register/registerContainer";
import signIn from "./container/login/login/loginContainer";

function App() {
    return (
        <BrowserRouter>
            <Route path="/main" component={Main} />
            <Route path="/post/:id" component={ReadContainer} />
            <Route path="/create" component={Create} />
            <Route path="/update/:idx" component={UpdateContainer} />
            <Route path="/signup" component={signUp} />
            <Route exact path="/" component={signIn} />
        </BrowserRouter>
    );
}

export default App;
