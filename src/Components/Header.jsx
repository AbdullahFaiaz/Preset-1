import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="border">
            This is Header <br/>
            <NavLink to={"/page1"}><button>GO to Page 1</button></NavLink>
            <br />
            <NavLink to={"/"}><button>GO to Home</button></NavLink>
        </div>
    );
};

export default Header;