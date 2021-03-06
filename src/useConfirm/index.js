import {useConfirm} from "./useConfirm";

const App = () => {
    const deleteWorld = () => console.log("Deleted the world")
    const abort = () => console.log("Aborted")
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort)
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default App;


