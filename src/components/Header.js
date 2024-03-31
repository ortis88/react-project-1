import "../assets/sass/Header.scss"

import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/comment">評論區</Link></li>
                    <li><Link to="/nopage">沒畫面</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
