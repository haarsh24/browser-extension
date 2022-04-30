
import { useState } from "react";
const Todayfocus = () => {
    const [inputFocus, setInputFocus] = useState("");
    const [focus, setFocus] = useState("");
    const [focusStatus, setFocusStatus] = useState(false);
    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            setFocus(inputFocus);
            localStorage.setItem("focus", inputFocus);
            setInputFocus("");
        }
    }

    const checkedHandler = (e) => {
        setFocusStatus(e.target.checked);
        localStorage.setItem("focusStatus", e.target.checked);
    }

    const deleteHandler = () => {
        setFocus("");
        localStorage.removeItem("focus");
    }
    return (
        <>
            <div className="flex flex-col text-4xl ">
                <div>
                    <label>Focus for Today :</label>
                </div>
                <div className="flex justify-center ">
                    {!focus && <input type="text"
                        className=" p-2 m-5 input"
                    placeholder="Enter your focus"
                    onChange={(e) => setInputFocus(e.target.value)}
                    onKeyDown={(e) => keyDownHandler(e)}
                />}
                {focus && <>
                    <div className="flex">
                        <span className={`mr-3 ${focusStatus && "line-through"}`}>
                            <input 
                                className="mr-2 input"
                            type="checkbox"
                        onChange={(e)=>checkedHandler(e)}
                            /> {focus}
                            </span>
                   
                <button onClick={deleteHandler} > <span className="material-icons ">delete</span> </button>
                        </div></>}
                        </div>
            </div>
        </>
    )
}

export {Todayfocus}