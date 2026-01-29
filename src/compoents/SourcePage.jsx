import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsAPI, POPULAR_SOURCES } from '../services/newsAPI';
import Header from './Header';
import NewsGrid from './NewsGrid';
import './SourcePage.css';

function SourcePage() {
    const { sourceId } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const sourceObj = POPULAR_SOURCES.find((src) => src.id === sourceId);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const data = await newsAPI.getHeadlinesBySource(sourceId, 30);
                if (data.status === 'ok') {
                    setArticles(data.articles || []);
                    setError(null);
                } else {
                    setError('Failed to fetch articles from this source');
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
    }, [sourceId]);

    return (
        <div className="app">
            <Header onSearch={() => { }} />
            <main className="main-content">
                <div className="source-header">
                    <Link to="/" className="back-link">← Back to Home</Link>
                    <h1 className="source-page-title">
                        📡 {sourceObj?.name}
                    </h1>
                    <p className="source-description">
                        Latest articles from {sourceObj?.name}
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
                        <p>This news source might have limited API access.</p>
                    </div>
                ) : articles.length > 0 ? (
                    <NewsGrid articles={articles} />
                ) : (
                    <div className="no-articles">
                        <p>No articles available from this source at the moment.</p>
                    </div>
                )}
            </main>
            <footer className="footer">
                <p>&copy; 2026 The Daily. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default SourcePage;
