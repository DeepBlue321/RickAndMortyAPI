const express = require("express");
const fetch = require("node-fetch");

const app = express();
const URL = "https://rickandmortyapi.com/api/";
let characters = [];
let locations = [];

fetch(URL + "character/")
  .then((data) => data.json())

  .then((data) => (characters = data.results))
  .catch((err) => console.log(err));

fetch(URL + "location/")
  .then((data) => data.json())

  .then((data) => (locations = data.results))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.render("cards/index");
});
app.get("/characters", async (req, res) => {
  res.render("cards/characters", { characters: characters });
});
app.get("/locations", async (req, res) => {
  res.render("cards/locations", { locations: locations });
});

app.listen(5000);
