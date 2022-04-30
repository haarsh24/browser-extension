const GoogleSearch = () => {
    return (
        <>
            <form action="https://www.google.com/search" name="searchform">
            <input name="sitesearch" type="hidden" />
                <input
                    className=" p-2 m-5 input transparent"
                    type="text"
                    name="q"
                 placeholder="Google search"
                />
                <button className=" border rounded-full p-1 input" type="submit"><span className="material-icons ">search</span></button>
             
            </form>
        </>
    )
}

export {GoogleSearch}