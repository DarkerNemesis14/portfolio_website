import "./Footer.css"
import { HashLink } from "react-router-hash-link"

const Footer = () => {
    return (
        <footer>
            <span>Created By <HashLink spy={ true } smooth={ true } offset={ 0 } duration={ 1000 } className="link" to="/#home">Rafiad Sadat</HashLink> | &copy; 2022 All Rights Reserved</span>
        </footer>
    );
}
 
export default Footer;