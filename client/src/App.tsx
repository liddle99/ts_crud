import { BrowserRouter, Route } from "react-router-dom";
import Create from "./container/create/create";
import Main from "./container/main/main";
import ReadContainer from "./container/read/readContainer";
import UpdateContainer from "./container/update/updateContainer";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Main} />
            <Route path="/post/:id" component={ReadContainer} />
            <Route path="/create" component={Create} />
            <Route path="/update/:idx" component={UpdateContainer} />
        </BrowserRouter>
    );
}

export default App;
