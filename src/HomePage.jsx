import Book from "./components/Book";
import { useContext } from "react";
import { storeContext } from "./store";
import NavBar from "./Navbar";

const HomePage = () => {
    const { books, library } = useContext(storeContext);
    return (
        <section className="layout m-3 mx-6">
            <NavBar />
            <div className="categories">
                <div className="currently-reading my-4">
                    <label className="text-2xl">In your library</label>
                    <hr />
                    <br />
                    <div className="flex flex-wrap gap-x-8 gap-y-10 md:gap-x-16 lg:gap-x-24">
                        {library.length === 0 ? (
                            <p>no books in your library...</p>
                        ) : (
                            library.map((book) => {
                                return (
                                    <Book
                                        key={book.id}
                                        id={book.id}
                                        name={book.name}
                                        author={book.author}
                                        shelf={book.shelf}
                                        image={book.image}
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
            <div className="categories">
                <div className="currently-reading my-4">
                    <label className="text-2xl">currently reading</label>
                    <hr />
                    <br />
                    <div className="flex flex-wrap gap-x-8 gap-y-10 md:gap-x-16 lg:gap-x-24">
                        {books
                            .filter(
                                (book) => book.shelf === "currently reading"
                            )
                            .map((book) => {
                                return (
                                    <Book
                                        key={book.id}
                                        id={book.id}
                                        name={book.name}
                                        author={book.author}
                                        shelf={book.shelf}
                                        image={book.image}
                                    />
                                );
                            })}
                    </div>
                </div>
                <br />
                <br />
                <div className="currently-reading my-4">
                    <label className="text-3xl">want to read</label>
                    <hr />
                    <br />
                    <div className="flex flex-wrap gap-x-8 md:gap-x-16 gap-y-10 lg:gap-x-24">
                        {books
                            .filter((book) => book.shelf === "want to read")
                            .map((book) => {
                                return (
                                    <Book
                                        id={book.id}
                                        key={book.id}
                                        name={book.name}
                                        author={book.author}
                                        shelf={book.shelf}
                                        image={book.image}
                                    />
                                );
                            })}
                    </div>
                </div>
                <br />
                <br />
                <div className="currently-reading my-4">
                    <label className="text-3xl">read</label>
                    <hr />
                    <br />
                    <div className="flex flex-wrap gap-x-8 md:gap-x-16 gap-y-10 lg:gap-x-24">
                        {books
                            .filter((book) => book.shelf === "read")
                            .map((book) => {
                                return (
                                    <Book
                                        id={book.id}
                                        key={book.id}
                                        name={book.name}
                                        author={book.author}
                                        shelf={book.shelf}
                                        image={book.image}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
