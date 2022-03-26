const job = require("../schedule");
const CronJob = require('cron').CronJob;

module.exports = () => {
    try {
        // delete expired shorturl everyday
        const myjob = new CronJob({
            cronTime: '0 0 0 * * *',
            onTick: job['delete'],
            runOnInit: true
        });

        myjob.start();
    } catch (error) {
        console.log(error.message);
    }
}
