const { Op } = require("sequelize");
const { Url } =  require("../loaders/database");


class URLModel {
    addUrl = async (url, expireAt) => {
        const result = await Url.create({
            url,
            expireAt
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the url."
            });
        });

        if(result){
            console.log(result.id);
            return result;
        }
        console.log('successfully created!!');

    };

    getUrl = async (urlid) => {
        const res = await Url.findOne({
            where:{
                id: urlid
            }
        });
        // console.log(res[0].id);
        return res;
    };

    deleteExpiredUrl = async() => {
        try {
            await Url.destroy({
                where:{
                    expireAt:{
                        [Op.lt]: new Date()
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
        
    }
};

module.exports = new URLModel()