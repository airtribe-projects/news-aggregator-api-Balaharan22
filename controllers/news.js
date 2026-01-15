const newsService = require('../services/news');

exports.getNews = async (req, res) => {
    try {
        const articles = await newsService.fetchNews();
        return res.status(200).json({ news: articles });
    } catch (err) {
        return res.status(err.code || 500).json({ error: err.message });
    }
};
