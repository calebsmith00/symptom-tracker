import { navigationLinks } from "./links";
import "./navbar.scss";

export default function Navbar() {
  const retrieveLinks = (): JSX.Element[] => {
    return navigationLinks.map(
      (navigationLink: JSX.Element, index: number): JSX.Element => {
        return <p key={index}>{navigationLink}</p>;
      }
    );
  };

  return (
    <div className="navbar">
      <p>Symptom Tracker App</p>
      <span className="navbar-links">{retrieveLinks()}</span>
    </div>
  );
}
