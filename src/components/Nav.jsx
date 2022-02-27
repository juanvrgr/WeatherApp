import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

export default function Nav({ onSearch }) {
    return (
        <nav className="navbar sticky-top navbar-light">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a href="https://github.com/juanvrgr" target="_blank" rel="noreferrer">
                        <img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"} className={styles.logo} alt="logo Henry" srcSet="" />
                    </a>
                    <a href="https://www.linkedin.com/in/juan-manuel-vergara-dev/" target="_blank" rel="noreferrer">
                        <img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"} className={styles.logo} alt="logo Henry" srcSet="" />
                    </a>
                </div>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
}