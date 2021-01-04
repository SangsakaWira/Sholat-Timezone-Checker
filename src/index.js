const express = require("express");
const moment = require("moment-timezone");
const app = express();

app.get("/", async (req, res) => {
  let report = {
    username: "sangsakawira",
    hour: moment().tz("Asia/Jakarta").format("HH:MM:SS"),
    date: moment().tz("Asia/Jakarta").format("ll")
  };
  let sholat;
  if ("09:00:00" < report.hour && report.hour < "13:00:00") {
    sholat = "Dhuha";
  } else if ("13:00:00" < report.hour && report.hour < "15:00:00") {
    sholat = "Dzuhur";
  } else if ("15:00:00" < report.hour && report.hour < "18:00:00") {
    sholat = "Ashar";
  } else if ("18:00:00" < report.hour && report.hour < "19:30:00") {
    sholat = "Maghrib";
  } else {
    sholat = "Isya";
  }

  res.send({
    ...report,
    sholat: sholat
  });
});

app.get("/current-active-sholat", async (req, res) => {
  let sholat = "";
  if (
    "09:00:00" < moment().tz("Asia/Jakarta").format("HH:MM:SS") &&
    moment().tz("Asia/Jakarta").format("HH:MM:SS") < "13:00:00"
  ) {
    sholat = "Dhuha";
  } else if (
    "13:00:00" < moment().tz("Asia/Jakarta").format("HH:MM:SS") &&
    moment().tz("Asia/Jakarta").format("HH:MM:SS") < "15:00:00"
  ) {
    sholat = "Dzuhur";
  } else if (
    "15:00:00" < moment().tz("Asia/Jakarta").format("HH:MM:SS") &&
    moment().tz("Asia/Jakarta").format("HH:MM:SS") < "18:00:00"
  ) {
    sholat = "Ashar";
  } else if (
    "18:00:00" < moment().tz("Asia/Jakarta").format("HH:MM:SS") &&
    moment().tz("Asia/Jakarta").format("HH:MM:SS") < "19:30:00"
  ) {
    sholat = "Maghrib";
  } else {
    sholat = "Isya";
  }

  res.send({
    date: moment().tz("Asia/Jakarta").format("ll"),
    hour: moment().tz("Asia/Jakarta").format("HH:MM:SS"),
    sholat: sholat
  });
});

app.listen(8080);
