import { Link } from "react-router-dom";

function Homepage(){
    return(
        <div>this is homepage
            <nav>
                <ul>
                    <li><Link to="/comment">評論</Link></li>
                    <li><Link to="/nopage">沒畫面</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Homepage;