import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Match from "./Components/Match";
import Summary from "./Components/Summary";
import Cover from "./Components/Cover";
import Edit from "./Components/Edit";
import Landing from "./Components/Landing";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Footer from "./Components/Footer";
import {AiOutlineMenu} from "react-icons/ai";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Menu = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Summary",
      url: "/summary",
    },
    {
      title: "Match",
      url: "/match",
    },
    {
      title: "Cover",
      url: "/cover",
    },
    {
      title: "Edit",
      url: "/edit",
    },
  ];

  return (
    <header className="bg-red-400 py-4 fixed w-full">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="hidden md:flex ">
          
            {Menu.map((item, index) => {
              return (
                <Link
                  className="text-white font-bold text-lg mr-4 hover:text-blue-800"
                  to={item.url}
                  key={index}
                >
                  {item.title}
                </Link>
              );
            })}
       
        </nav>
        <div className="flex items-center">
          <select className="bg-gray-600 text-white py-1 px-2 rounded">
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
          <Link to="/login" className="text-white font-bold text-lg ml-4">
            Login
          </Link>
        </div>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <AiOutlineMenu />    
        </button>
        {menuOpen && (
          <div className="md:hidden w-full flex justify-end">
            <nav className="fixed font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {Menu.map((item, index) => (
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={item.url}
                  onClick={toggleMenu}
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/match" element={<Match />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
