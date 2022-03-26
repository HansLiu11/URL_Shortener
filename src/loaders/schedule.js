const job = require("../schedule");
const cron = require('node-cron');

module.exports = () => {
    try {
        // delete expired url everyday
        cron.schedule('* 0 * * *', job['delete'],{
            scheduled: true,
            timezone: "Asia/Taipei",
        }).start();
    } catch (error) {
        console.log("delete failed");
    }
}
