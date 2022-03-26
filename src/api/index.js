const express = require("express");
const urlModel = require("../model/index");

module.exports = () => {
    const router = express.Router();
    router.use(express.urlencoded({ extended: false }));
    // router.use("/v1");

    router.post('/api/v1/urls', async (req,res) => {
        const {url, expire} = req.body;
        expired = new Date(expire);
        // console.log(expired);
        const result = await urlModel.addUrl(url, expired);

        res.status(200).json({
            id: result.id,
            shortUrl: "http://localhost/" + result.id
        });
    });

    router.get('/:url_id', async (req, res) => {
        const urlId = req.params.url_id;
        const result = await urlModel.getUrl(urlId);
        if(result){
            console.log(result.url);
            res.status(200).redirect(301,result.url);
        }
        else{
            
        }
  
    })

    return router
};