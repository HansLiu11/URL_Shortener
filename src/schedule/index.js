const model = require("../model");

module.exports = {
    delete: async () => {
        await model.deleteExpiredUrl();
    }
}