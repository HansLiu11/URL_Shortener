const scheduleLoader =  require("./schedule");
const expressLoader  =  require("./express");

module.exports=async (expressApp) => {
    expressLoader(expressApp);
    console.log("✌️ Express loaded");
    scheduleLoader();
    console.log("✌️ Schedule loaded");
  };

  