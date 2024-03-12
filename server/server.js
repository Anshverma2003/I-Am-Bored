import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/getData', async (req, res) => {

    try {
        const { type, participants } = req.body;
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
        const result = response.data;
        // console.log(result);
        res.json(result);
    } catch (error) {
        console.error("Error occurred:", error.message);
        res.status(500).json({ error: "An error occurred while fetching data" });
    }
});

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
})