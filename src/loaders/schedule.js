const job = require("../schedule");
const CronJob = require('cron').CronJob;

module.exports = () => {
    try {
        // delete expired shorturl everyday
        const myjob = new CronJob('* 0 * * *', job['delete'],null, true);
        myjob.start();
    } catch (error) {
        console.log(error.message);
    }
}
