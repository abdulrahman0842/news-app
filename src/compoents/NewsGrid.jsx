import NewsCard from './NewsCard';
import './NewsGrid.css';

function NewsGrid({ articles }) {
    return (
        <section className="news-grid-section">
            <h2 className="section-title">More News</h2>
            <div className="news-grid">
                {articles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}

export default NewsGrid;
