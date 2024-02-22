import Navbar from "../components/navbar"

function Birthday() {
    return(
        <div className="flex flex-col h-screen overflow-hidden">
            <Navbar/>
            <div className="flex flex-col justify-center items-center h-96 ">
            <div className="bg-white border rounded-md shadow-md w-96 p-6 flex flex-col justify-center  items-center">
            <h1 className="text-center">Birdthday Card</h1>
            <input
            type="text"
            placeholder="Enter Your Name"
            className="justify-center text-center border-2 border-gray-300 rounded-md p-1 m-2 w-80" />
            <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 w-48 justify-center items-center "
            >Done</button>
            </div>
        </div>
    </div>        
    )
}

export default Birthday