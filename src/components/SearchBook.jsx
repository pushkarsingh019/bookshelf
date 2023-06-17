import { useContext } from "react";
import { storeContext } from "../store";
import add from "../assets/add.svg";

const SearchBook = ({ name, author, id, shelf, image, mode }) => {
    const { addToLibrary } = useContext(storeContext);
    return (
        <div className="flex flex-col justify-center items-center w-36 h-max md:w-44 lg:w-64 relative px-2 py-3 border-2 shadow-md">
            <img
                src={image}
                alt={name}
                className="h-36 md:54 lg:h-56 w-auto object-contain shadow-xl mb-2"
            />
            <p className="text-lg font-medium wrapper">{name}</p>
            <p className="text-md text-gray-700 mt-0">{author}</p>
            <p className=" text-center text-sm px-1 py-0.5 bg-emerald-200 w-max">
                status : {shelf}
            </p>
            <img
                src={add}
                alt="add"
                className="absolute top-0 right-0 w-8 px-1 py-1 bg-green-500 rounded-full"
                onClick={() => addToLibrary(id)}
            />
        </div>
    );
};

export default SearchBook;
