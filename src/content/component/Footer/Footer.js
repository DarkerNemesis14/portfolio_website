import "./Footer.css"
import { Link } from "react-scroll"

const Footer = () => {
    return (
        <footer>
            <span>Created By <Link className="link" to="home" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Rafiad Sadat</Link> | &copy; 2022 All Rights Reserved</span>
        </footer>
    );
}
 
export default Footer;