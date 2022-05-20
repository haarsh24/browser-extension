import { GoogleSearch } from "../Components/GoogleSearch"
import { Quote } from "../Components/Quote"
import { Todayfocus } from "../Components/Todayfocus"
import { Todo } from "../Components/todo"

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col h-screen ">
                <div className="h-screen flex justify-center items-center flex-col">
            <Todayfocus />
                    <GoogleSearch />
                    </div>
                <div className=" flex justify-between ">
                    <Quote/>
                    <Todo />
                    </div>

            </div>
        </>    
    )

}

export {Homepage}