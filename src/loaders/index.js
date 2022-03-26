const databaseLoader =  require("./database");
const expressLoader  =  require("./express");

module.exports=async (expressApp) => {
    expressLoader(expressApp);
    console.log("✌️ Express loaded")
  };

  