import { useContext } from "react";
import { categories } from "../data";
import { storeContext } from "../store";

const Book = ({ name, author, id, shelf, image, mode }) => {
    const { handleCategoryChange } = useContext(storeContext);
    return (
        <div className="text-left w-36 h-max md:w-44 lg:w-64">
            <img
                src={image}
                alt={name}
                className="h-36 md:54 lg:h-56 w-auto object-contain shadow-xl mb-2"
            />
            <p className="text-lg font-medium wrapper">{name}</p>
            <p className="text-md text-gray-700 mt-0">{author}</p>
            <select
                className="text-sm px-0 py-0.5 bg-emerald-100"
                onChange={(event) => {
                    console.log(event.target.value);
                    handleCategoryChange(id, event.target.value);
                }}
            >
                {categories.map((category) => {
                    return (
                        <option
                            value={category}
                            selected={category === shelf ? true : false}
                        >
                            {category}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Book;
