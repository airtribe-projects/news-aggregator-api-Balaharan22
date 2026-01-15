const fetch = require("node-fetch");

module.exports = {
    async fetchNews() {
        const API_KEY = process.env.NEWS_API_KEY;

        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );

        if (!response.ok) {
            throw { code: 500, message: "Failed to fetch news" };
        }

        const data = await response.json();
        return data.articles;
    }
};
