import { GoogleSearch } from "../Components/GoogleSearch"
import { Todayfocus } from "../Components/Todayfocus"

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col h-screen justify-center align-center items-center">
            <Todayfocus />
            <GoogleSearch/>
            </div>
        </>    
    )

}

export {Homepage}