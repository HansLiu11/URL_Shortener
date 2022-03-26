const express = require("express");
const config = require("../config");
const urlModel = require("../model/index");

module.exports = () => {
    const router = express.Router();
    router.use(express.urlencoded({ extended: false }));

    router.post('/api/v1/urls', async (req,res) => {
        try {
            const {url, expireAt} = req.body;
            expired = new Date(expireAt);
            // console.log(expired);
            const result = await urlModel.addUrl(url, expired);

            res.status(200).json({
                id: String(result.id),
                shortUrl: "http://localhost:" + config.port + '/' + result.id
            });
        } catch (error) {
            return next(error);
        }
        
    });

    router.get('/:url_id', async (req, res, next) => {
        try {
            const urlId = req.params.url_id;
            const result = await urlModel.getUrl(urlId);
            if(result){
                console.log(result.url);
                res.status(200).redirect(301,result.url);
            }
            else{
                const err = new Error("Not Found");
                res.status(404);
                next(err);
            }
        } catch (error) {
            return next(error);
        }
    });

    return router;
};