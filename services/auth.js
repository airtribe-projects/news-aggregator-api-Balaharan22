const users = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {

    signup(name, email, password, preferences) {
        if (!email) {
            throw { code: 400, message: "Email is required" };
        }

        const exists = users.find(u => u.email === email);
        if (exists) {
            throw { code: 400, message: "User already exists" };
        }

        users.push({ name, email, password, preferences });
        return { message: "User registered" };
    },

    login(email, password) {
        const user = users.find(u => u.email === email);
        if (!user) {
            throw { code: 404, message: "User not found" };
        }

        if (user.password !== password) {
            throw { code: 401, message: "Invalid password" };
        }

        const token = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { token };
    },

    getPreferences(email) {
        const user = users.find(u => u.email === email);
        if (!user) {
            throw { code: 404, message: "User not found" };
        }

        return { preferences: user.preferences };
    },

    updatePreferences(email, newPreferences) {
        const user = users.find(u => u.email === email);
        if (!user) {
            throw { code: 404, message: "User not found" };
        }

        user.preferences = newPreferences;
        return { message: "Preferences updated" };
    }
};
