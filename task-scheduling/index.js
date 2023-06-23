const process = require("process");
const fs = require("fs");
const os = require("os");
const cron = require("node-cron");
const express = require("express");

app = express();

// setting a cron job for every 15 seconds
cron.schedule("*/15 * * * * *", function () {
    let heap = process.memoryUsage().heapUsed / 1024 / 1024;
    let date = new Date().toISOString();
    const freeMemory = Math.round((os.freemem() * 100) / os.totalmem()) + "%";

    let csv = `${date}, ${heap}, ${freeMemory}\n`;

    fs.appendFile("demo.csv", csv, function (err) {
        if (err) throw err;
        console.log("server details logged!");
    });
});

app.listen(3120, () => {
    console.log("application listening.....");
});
