require("dotenv").config();

console.log("chai and code");
//express is all about request and response
const express = require("express");
const app = express();
const port = 3000;

const mygitData = {
  login: "Siddvi12",
  id: 138220005,
  node_id: "U_kgDOCD0R5Q",
  avatar_url: "https://avatars.githubusercontent.com/u/138220005?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Siddvi12",
  html_url: "https://github.com/Siddvi12",
  followers_url: "https://api.github.com/users/Siddvi12/followers",
  following_url: "https://api.github.com/users/Siddvi12/following{/other_user}",
  gists_url: "https://api.github.com/users/Siddvi12/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Siddvi12/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Siddvi12/subscriptions",
  organizations_url: "https://api.github.com/users/Siddvi12/orgs",
  repos_url: "https://api.github.com/users/Siddvi12/repos",
  events_url: "https://api.github.com/users/Siddvi12/events{/privacy}",
  received_events_url: "https://api.github.com/users/Siddvi12/received_events",
  type: "User",
  site_admin: false,
  name: "VIKASH SINGH",
  company: "JSW",
  blog: "",
  location: "KARNATAKA",
  email: null,
  hireable: null,
  bio: "HELLO EVERYONE, WELCOME",
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2023-06-30T12:17:50Z",
  updated_at: "2023-10-06T08:51:58Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("https://twitter.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>please hire me</h1>");
});

app.get("/mygit", (req, res) => {
  res.json(mygitData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
