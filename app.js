const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;


app.use(cors());

app.use(express.json(true));

const notebook = require("./route/notebook");
app.use("/api/notebook", notebook);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
