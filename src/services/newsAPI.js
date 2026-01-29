// NewsAPI service
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const newsAPI = {
    // Get top headlines by category
    getHeadlinesByCategory: async (category = 'general', pageSize = 30) => {
        try {
            const response = await fetch(
                `${BASE_URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching headlines:', error);
            return { articles: [], status: 'error' };
        }
    },

    // Get headlines by source
    getHeadlinesBySource: async (sources, pageSize = 30) => {
        try {
            const response = await fetch(
                `${BASE_URL}/top-headlines?sources=${sources}&pageSize=${pageSize}&apiKey=${API_KEY}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching headlines by source:', error);
            return { articles: [], status: 'error' };
        }
    },

    // Search articles by keyword
    searchArticles: async (query, pageSize = 30, page = 1) => {
        try {
            const response = await fetch(
                `${BASE_URL}/everything?q=${query}&pageSize=${pageSize}&page=${page}&sortBy=publishedAt&apiKey=${API_KEY}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error searching articles:', error);
            return { articles: [], status: 'error' };
        }
    },

    // Get general headlines (breaking news)
    getBreakingNews: async (pageSize = 1) => {
        try {
            const response = await fetch(
                `${BASE_URL}/top-headlines?category=general&pageSize=${pageSize}&apiKey=${API_KEY}`
            );
            const data = await response.json();
            return data.articles ? data.articles[0] : null;
        } catch (error) {
            console.error('Error fetching breaking news:', error);
            return null;
        }
    },
};

export const CATEGORIES = [
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
    { id: 'general', label: 'General', icon: '📰' },
    { id: 'health', label: 'Health', icon: '⚕️' },
    { id: 'science', label: 'Science', icon: '🔬' },
    { id: 'sports', label: 'Sports', icon: '⚽' },
    { id: 'technology', label: 'Technology', icon: '💻' },
];

export const POPULAR_SOURCES = [
    { id: 'bbc-news', name: 'BBC News' },
    { id: 'cnn', name: 'CNN' },
    { id: 'the-guardian-uk', name: 'The Guardian' },
    { id: 'the-new-york-times', name: 'New York Times' },
    { id: 'the-washington-post', name: 'Washington Post' },
    { id: 'associated-press', name: 'Associated Press' },
    { id: 'reuters', name: 'Reuters' },
    { id: 'the-wall-street-journal', name: 'Wall Street Journal' },
    { id: 'techcrunch', name: 'TechCrunch' },
    { id: 'espn', name: 'ESPN' },
];
