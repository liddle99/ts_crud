import express from "express";
import cors from "cors";
import rootController from "./router/controllers/rootController";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", rootController);

app.listen(5000, () => {
    console.log(`running on port ${5000}`);
});
