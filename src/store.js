import { createContext, useState } from "react";
import { bookData } from "./data";

export const storeContext = createContext();

export const Context = ({children}) => {
    const [books, setBooks] = useState(bookData);
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [library, setLibrary] = useState([]);
    const store = {
        books,
        searchedBooks,
        library,
        handleCategoryChange : (id, newCategory) => {
            const updatedBooks = [...books].map(book => book.id === id ? {...book, shelf : newCategory} : book);
            setBooks(updatedBooks);
        },
        implementSearch : (searchText) => {
            setSearchedBooks([...books].filter(book => book.name.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase())));
        },
        addToLibrary : (id) => {
            const bookToAdd = books.filter(book => book.id === id);
            setLibrary([...library, bookToAdd[0]]);
            console.log(library)
        }
    }
    return <storeContext.Provider value={store}>
        {children}
    </storeContext.Provider>
}