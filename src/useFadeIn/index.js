import {useFadeIn} from "./useFadeIn";

const App = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 3);
    return (
        <div className="App">
            <h1 {...fadeInH1}>hello</h1>
            <p {...fadeInP}>laalalalsldalalalal</p>
        </div>
    );
};
export default App;
