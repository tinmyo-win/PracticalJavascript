
const cron = require('node-cron');
const express = require('express');

const app = express();

cron.schedule("*/15 * * * * *", function(){
    console.log("--------------------------------");
    console.log("Running a task every 15 seconds");
})

app.listen(3120, () => {
    console.log("application listening......")
})