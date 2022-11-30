// main.js
const { run } = require("probot");
const app = require("./index.js").default;

// pass a probot app function
run(app);
