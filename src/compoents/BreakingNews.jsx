import './BreakingNews.css';

function BreakingNews({ article }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const handleReadMore = () => {
        if (article.url) {
            window.open(article.url, '_blank');
        }
    };

    return (
        <section className="breaking-news">
            <div className="breaking-badge">BREAKING NEWS</div>
            <div className="breaking-content">
                <img
                    src={article.urlToImage || article.image || 'https://via.placeholder.com/600x300?text=No+Image'}
                    alt={article.title}
                    className="breaking-image"
                />
                <div className="breaking-text">
                    <h2>{article.title}</h2>
                    <p>{article.description || article.content || 'No description available'}</p>
                    <div className="breaking-footer">
                        <span className="news-source">
                            {article.source?.name || article.source || 'Unknown Source'}
                        </span>
                        {article.publishedAt && (
                            <span className="news-date">{formatDate(article.publishedAt)}</span>
                        )}
                        {article.url && (
                            <button className="read-more-btn" onClick={handleReadMore}>
                                Read Full Article →
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BreakingNews;
