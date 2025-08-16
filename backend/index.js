require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { OrderModel } = require("./models/OrderModel");
const { WatchListModel } = require("./models/WatchListModel")

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const AuthRoute = require("./routes/authRoute");
const showRoute = require("./routes/showdata")
const app = express();
mongoose.connect(url)
    .then(() => console.log(" MongoDB connected"))
    .catch(err => console.error(" MongoDB connection error:", err));

app.use(cors({
    origin: ["https://trade-x-6snf.vercel.app", "https://trade-x-6snf.vercel.app/login"], 
  credentials: true,       
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", AuthRoute);
app.use("/", showRoute);

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    await newOrder.save();
    res.send("Order Saved !!")
})

app.get("/stocks/:uid", async (req, res) => {
    const { uid } = req.params;
    const stock = await WatchListModel.findOne({ name: uid }); // name tum uid ke roop me use kar rahe ho
    if (!stock) {
        return res.status(404).json({ error: "Stock not found" });
    }
    res.json({ price: stock.price });
});


app.listen(PORT, () => {
    console.log("App is listening to the port")
})

