import { Link } from 'react-router-dom';
import { CATEGORIES } from '../services/newsAPI';
import './Categories.css';

function Categories() {
    return (
        <section className="categories-section">
            <div className="categories-container">
                <h2 className="categories-title">Browse by Category</h2>
                <div className="categories-grid">
                    {CATEGORIES.map((category) => (
                        <Link
                            key={category.id}
                            to={`/category/${category.id}`}
                            className="category-card"
                        >
                            <span className="category-icon">{category.icon}</span>
                            <h3 className="category-name">{category.label}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
