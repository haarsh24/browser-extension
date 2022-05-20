import { GoogleSearch } from "../Components/GoogleSearch"
import { Quote } from "../Components/Quote"
import { Time } from "../Components/Time"
import { Todayfocus } from "../Components/Todayfocus"
import { Todo } from "../Components/todo"
import { Weather } from "../Components/Weather"

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col h-screen ">
            
                <div className="h-screen flex justify-center items-center flex-col">
                <Weather />
            <Todayfocus />
                    <GoogleSearch />
                    
                    <Time/>
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