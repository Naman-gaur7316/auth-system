const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const cors = require("cors");
const { connectToDb } = require("./DB/db");
const { indexRouter } = require("./routes");

const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;

connectToDb();

app.use("/api/v1", indexRouter)


app.listen(port, () => {
    console.log(`server is listening at port ${port}`)
})