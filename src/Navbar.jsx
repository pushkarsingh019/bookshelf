import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex justify-between items-center">
            <p className="text-3xl font-medium font-serif">BookShelf</p>
            <ul className="list-style-none flex gap-x-8">
                <li
                    onClick={() => navigate(`/`)}
                    className="text-lg text-sky-600 hover:underline hover:cursor-pointer"
                >
                    bookshelf
                </li>
                <li
                    onClick={() => navigate(`/search`)}
                    className="text-lg text-sky-600 hover:underline hover:cursor-pointer"
                >
                    search
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
