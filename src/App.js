import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import Redux from "./components/redux";
import Mobx from "./components/mobx";
import State from "./components/state";
import Context from "./components/context";


function _App() {
    const history = useHistory();

    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <button onClick={() => history.push('/redux')}>Redux</button>
                    <button onClick={() => history.push('/mobx')}>mobx</button>
                    <button onClick={() => history.push('/state')}>State</button>
                    <button onClick={() => history.push('/context')}>Context</button>
                </Route>
                <Route path="/redux" exact>
                    <Redux/>
                </Route>
                <Route path="/mobx" exact>
                    <Mobx/>
                </Route>
                <Route path="/state" exact>
                    <State/>
                </Route>
                <Route path="/context" exact>
                    <Context />
                </Route>
            </Switch>

        </div>
    );
}

const App = () => {
    return (
        <Router>
            <_App/>
        </Router>
    )
}

export default App;
