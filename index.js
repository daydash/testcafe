const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const { loadPyodide } = require("pyodide");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
const port = 5000;
app.get("/", (req, res) => {
  console.log("hiiiiii");
  try {
    exec("npx testcafe chrome ./tests/test1.js", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing code: ${error}`);
        return;
      }

      console.log("Code output:", stdout);
      console.error("Code errors:", stderr);
    });
  } catch (error) {
    console.log(err);
  }
  return res.status(200).json({ success: true });
});
app.listen(port, () => console.log(`Example app listening on port, ${port}!`));
