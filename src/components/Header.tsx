import { Search, Logo } from "@/assets";
import { FaGithub } from "react-icons/fa";

function Header({
  onSearchChange,
}: {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <header className="header">
      <div className="header-inner_container">
        <div className="header-left">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <h1 className="h3-bold md:h2-bold w-full text-center">Projects</h1>
        </div>
        <nav
          className="flex gap-1 px-4 w-full rounded-lg bg-dark-4 items-center"
          aria-label="Search Projects"
        >
          <img src={Search} alt="search" className="w-6 h-6" />
          <input
            type="text"
            placeholder="Search"
            className="header-search"
            onChange={onSearchChange}
          />
          <a
            href="https://github.com/CodaMystique/Project-Manager"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-auto"
          >
            <FaGithub className="text-white" size={28} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
