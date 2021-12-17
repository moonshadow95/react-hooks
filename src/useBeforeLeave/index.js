import {useBeforeLeave} from "./useBeforeLeave";

const App = () => {
    const dontGo = () => console.log("Please don't go");
    useBeforeLeave(dontGo);
    return <div className="App">
        <h1>don't go!</h1>
    </div>;
};

export default App;