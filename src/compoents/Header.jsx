import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onSearch }) {
    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="app-title-link">
                    <h1 className="app-title">The Daily</h1>
                </Link>
                <div className="search-bar-wrapper">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search news articles..."
                        onChange={handleSearchChange}
                    />
                    <span className="search-icon">🔍</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
