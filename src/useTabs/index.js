import {useTabs} from "./useTabs";

const content = [
    {
        tab:"Section 1",
        content: "I'm the Section 1 of the content"
    },
    {
        tab:"Section 2",
        content: "I'm the Section 2 of the content"
    }
]

const App = () => {
    const {currentItem, changeItem} = useTabs(0,content)
    return (
        <div className="App">
            {content.map((section, index)=>
                <button onClick={()=>changeItem(index)}>{section.tab}</button>)
            }
            <div>{currentItem.content}</div>
        </div>
    );
};

export default App;