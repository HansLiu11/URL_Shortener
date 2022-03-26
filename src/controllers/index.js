const urlModel = require("../model/index");

const addShortUrl = (url, expired) => {
    expired = new Date(expired)
    // console.log(expired);
    urlModel.addUrl(url,"http://localhost/3", expired);
};

const getUrl = async (urlId) => {
    const res = await urlModel.getUrl(urlId);
    console.log(res.id);
};

module.exports = {
    addShortUrl,
    getUrl
};
