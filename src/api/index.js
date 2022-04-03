const express = require("express");
const config = require("../config");
const { body } = require("express-validator");
const urlModel = require("../model/index");
const middleware = require("./middleware");

module.exports = () => {
    const router = express.Router();
    router.use(express.urlencoded({ extended: false }));

    /*
    * POST /api/v1/urls to save a new url.
    */
    router.post('/api/v1/urls', 
        [
            body("url").isString(),
            body("expireAt").isString(),
        ],
        middleware.validateParams,
        async (req,res) => {
        try {
            const {url, expireAt} = req.body;
            expired = new Date(expireAt);
            // console.log(expired);
            const result = await urlModel.addUrl(url, expired);
            const shortUrl = (config.port == 80)? "http://localhost/" + result.id 
                                : "http://localhost:" + config.port +"/" + result.id;

            res.status(200).json({
                id: String(result.id),
                shortUrl: shortUrl
            });
        } catch (error) {
            return next(error);
        }
    });

    /*
    * GET /:url_id route to retrieve the original url and redirect given its id.
    */
    router.get('/:url_id', async (req, res, next) => {
        try {
            const urlId = req.params.url_id;
            const result = await urlModel.getUrl(urlId);
            if(result){
                console.log(result.url);
                res.redirect(301,result.url);
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