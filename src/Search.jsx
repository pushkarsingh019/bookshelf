import { useContext } from "react";
import NavBar from "./Navbar";
import { storeContext } from "./store";
import SearchBook from "./components/SearchBook";

const Search = () => {
    const { searchedBooks, implementSearch } = useContext(storeContext);
    return (
        <section className="layout my-3 mx-6">
            <NavBar />
            <br />
            <div className="flex justify-center items-center w-full">
                <input
                    type="text"
                    placeholder="search"
                    className="px-2 py-1.5 text-base border-2 border-black outline-none rounded-md"
                    onChange={(event) => implementSearch(event.target.value)}
                />
            </div>
            <br />
            <div className="text-center md:flex md:justify-around md:flex-wrap gap-y-8 ">
                {searchedBooks.length === 0 ? (
                    <p className="text-xl">no products found {":(("}</p>
                ) : (
                    searchedBooks.map((book) => {
                        return (
                            <SearchBook
                                id={book.id}
                                key={book.id}
                                name={book.name}
                                author={book.author}
                                image={book.image}
                                shelf={book.shelf}
                                mode={`search`}
                            />
                        );
                    })
                )}
            </div>
        </section>
    );
};

export default Search;
