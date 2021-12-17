import {useInput} from "./useInput";

const App = () => {
    const maxLength = value => value.length <= 10;
    const name = useInput('Mr.', maxLength)
    return (
        <div className="App">
            <h1>Hello</h1>
            <input type="text" {...name}/>
        </div>
    );
}

export default App;