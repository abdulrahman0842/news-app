import { Link } from 'react-router-dom';
import { POPULAR_SOURCES } from '../services/newsAPI';
import './SourcesList.css';

function SourcesList() {
    return (
        <section className="sources-section">
            <div className="sources-container">
                <h2 className="sources-title">Popular News Sources</h2>
                <div className="sources-list">
                    {POPULAR_SOURCES.map((source) => (
                        <Link
                            key={source.id}
                            to={`/source/${source.id}`}
                            className="source-item"
                        >
                            <span className="source-icon">📡</span>
                            <span className="source-name">{source.name}</span>
                            <span className="source-arrow">→</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SourcesList;
