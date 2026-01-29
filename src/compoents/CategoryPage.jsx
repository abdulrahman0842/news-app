import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsAPI, CATEGORIES } from '../services/newsAPI';
import Header from './Header';
import NewsGrid from './NewsGrid';
import './CategoryPage.css';

function CategoryPage() {
    const { categoryId } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const categoryObj = CATEGORIES.find((cat) => cat.id === categoryId);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const data = await newsAPI.getHeadlinesByCategory(categoryId, 30);
                if (data.status === 'ok') {
                    setArticles(data.articles || []);
                    setError(null);
                } else {
                    setError('Failed to fetch articles');
                    setArticles([]);
                }
            } catch (err) {
                setError('Error loading articles');
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [categoryId]);

    return (
        <div className="app">
            <Header onSearch={() => { }} />
            <main className="main-content">
                <div className="category-header">
                    <Link to="/" className="back-link">← Back to Home</Link>
                    <h1 className="category-page-title">
                        {categoryObj?.icon} {categoryObj?.label} News
                    </h1>
                    <p className="category-description">
                        Latest news and updates from {categoryObj?.label?.toLowerCase()} section
                    </p>
                </div>

                {loading ? (
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Loading articles...</p>
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>❌ {error}</p>
                        <p>Please try again later.</p>
                    </div>
                ) : articles.length > 0 ? (
                    <NewsGrid articles={articles} />
                ) : (
                    <div className="no-articles">
                        <p>No articles found for this category.</p>
                    </div>
                )}
            </main>
            <footer className="footer">
                <p>&copy; 2026 The Daily. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default CategoryPage;
