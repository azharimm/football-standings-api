const axios = require('axios')

exports.params = process.env.DATA_PARAMS;

module.exports = axios.create({
    baseURL: process.env.DATA_URL,
});
