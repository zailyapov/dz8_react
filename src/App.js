import React, { useState } from "react";

function ParentComponent(props) {
    const [childCount, setChildCount] = useState(0)

    function addChilren() {
        setChildCount(childCount + 1)
    }

    return (
        <div className="parent">
            <h1>{props.title}</h1>
            <button onClick={addChilren}>Добавить месяц</button>
            {[...Array(childCount)].map((_, index) =>(
                <ChildComponent key={index} text={`Месяц ${index + 1}`} />
            ))}
        </div>
    )
}

function ChildComponent({text}) {
    return (
        <p>{text}</p>
    )
}

function App() {
    return (
        <ParentComponent title='Месяц!' />
    )
}

export default App
