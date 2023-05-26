import SearchBar from "./SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";


const NavBar = ({onSearch}) => {

    return (
        <div className={style.nav}>
          <SearchBar onSearch={onSearch}/>

            <Link to='/Home'>
            <button className={style.btnHome}>Home</button>
            </Link>


            <Link  to='/About'>
            <button className={style.btnAbout}>About</button>
            </Link>

            <Link to='/Favorites'>
            <button className={style.btnFavorites}>Favorites</button>
            </Link>
        </div>
    );
};

export default NavBar;