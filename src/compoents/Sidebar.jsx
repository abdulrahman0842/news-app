import { Link } from 'react-router-dom';
import { CATEGORIES } from '../services/newsAPI';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Categories</h3>
            </div>
            <nav className="categories-nav">
                {CATEGORIES.map((category) => (
                    <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="category-link"
                    >
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-text">{category.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
