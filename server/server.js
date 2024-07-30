import express from "express";
import cors from "cors";
import mainRouter from './routes/mainRouter'

const PORT = 3001;
const app = express();
app.use(cors());


app.use(express.static('../build'));


app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});