import express from "express";
import cros from "cros";

const app = express();
app.use(express.json());
app.use(cros);

const data = [
    {
        id: 1,
        name: "moti"
    },
    {
        id: 2,
        name: "moti"
    },
    {
        id: 3,
        name: "moti"
    }
]

app.listen(3000, ()=>{
    console.log("the server is ready");
});

app.get("/api/status", (req, res)=>{
    res.json(data)
})