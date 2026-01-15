const userService = require('../services/auth');

exports.signup = async (req, res) => {
    try {
        const { name, email, password, preferences } = req.body;
        const result = userService.signup(name, email, password, preferences);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(err.code || 500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = userService.login(email, password);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(err.code || 500).json({ error: err.message });
    }
};

exports.getPreferences = (req, res) => {
    try {
        const result = userService.getPreferences(req.user.email);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(err.code || 500).json({ error: err.message });
    }
};

exports.updatePreferences = (req, res) => {
    try {
        const { preferences } = req.body;
        const result = userService.updatePreferences(req.user.email, preferences);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(err.code || 500).json({ error: err.message });
    }
};
