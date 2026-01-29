import './NewsCard.css';

function NewsCard({ article }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <article
            className="news-card"
            onClick={() => window.open(article.url, '_blank')}
        >
            <img
                src={article.urlToImage || 'https://via.placeholder.com/400x300?text=No+Image'}
                alt={article.title}
                className="card-image"
            />
            <div className="card-content">
                <h3 className="card-title">{article.title}</h3>
                <p className="card-description">
                    {article.description || 'No description available'}
                </p>
                <div className="card-footer">
                    <span className="card-source">{article.source?.name || 'Unknown Source'}</span>
                    <span className="card-date">{formatDate(article.publishedAt)}</span>
                </div>
            </div>
        </article>
    );
}

export default NewsCard;
