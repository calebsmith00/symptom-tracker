import { links } from "./links";
import "./navbar.scss";

export default function Navbar() {
    const retrieveLinks = (): JSX.Element[] => {
        return links.map((link: string): JSX.Element => {
            return <p>{link}</p>
        })
    }
    
    return (
        <div className="navbar">
            <p>Symptom Tracker App</p>
            <span className="navbar-links">
                {retrieveLinks()}
            </span>
        </div>
    )
}