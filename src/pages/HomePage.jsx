import { useState, useEffect, useMemo } from 'react';
import { newsAPI } from '../services/newsAPI';
import Header from '../compoents/Header';
import Sidebar from '../compoents/Sidebar';
import BreakingNews from '../compoents/BreakingNews';
import SourcesList from '../compoents/SourcesList';
import NewsGrid from '../compoents/NewsGrid';
import './HomePage.css';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [articles, setArticles] = useState([]);
    const [breakingNews, setBreakingNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                // Fetch breaking news
                const breaking = await newsAPI.getBreakingNews(1);
                setBreakingNews(breaking);

                // Fetch general news articles
                const data = await newsAPI.getHeadlinesByCategory('general', 20);
                if (data.status === 'ok') {
                    setArticles(data.articles || []);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    // Handle search
    const filteredArticles = useMemo(() => {
        if (!searchTerm.trim()) return articles;

        return articles.filter(
            (article) =>
                article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, articles]);

    const defaultBreakingNews = {
        title: 'Welcome to The Daily',
        description: 'Your source for the latest news from around the world. Browse by category or news source to stay informed.',
        image: 'https://images.unsplash.com/photo-1677442d019cecf8978ab40908666efb5de8f5135?w=800&h=600&fit=crop',
        source: 'The Daily News',
    };

    return (
        <div className="home-page">
            <Header onSearch={setSearchTerm} />
            <div className="page-wrapper">
                <Sidebar />
                <main className="main-content">
                    {breakingNews ? (
                        <BreakingNews article={breakingNews} />
                    ) : (
                        <BreakingNews article={defaultBreakingNews} />
                    )}

                    <SourcesList />

                    <section className="news-section">
                        {loading ? (
                            <div className="loading-container">
                                <div className="spinner"></div>
                                <p>Loading latest news...</p>
                            </div>
                        ) : filteredArticles.length > 0 ? (
                            <>
                                <h2 className="section-title">More News</h2>
                                <NewsGrid articles={filteredArticles} />
                            </>
                        ) : (
                            <div className="no-results">
                                <p>No articles found matching your search.</p>
                            </div>
                        )}
                    </section>
                </main>
            </div>
            <footer className="footer">
                <p>&copy; 2026 The Daily. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
