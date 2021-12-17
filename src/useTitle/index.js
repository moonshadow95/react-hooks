import {useTitle} from "./useTitle";

const App = () => {
    const titleUpdater = useTitle("Loading...")
    setTimeout(()=>titleUpdater("HOME"), 2000)
    return (
        <div className="App">
            <h1>Hi</h1>
        </div>
    );
};

export default App;