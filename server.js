import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use('/', (req , res) =>{
    res.json("SUCCESS")
})

// const URI =
//   "mongodb+srv://admin:admin123@cluster0.xvdds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// app.use(bodyParser.json({ limit: "30mb " }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

// mongoose
//   .connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     author: {
//       type: String,
//       required: true,
//       default: "Anonymous",
//     },
//     attachment: String,
//     likeCount: {
//       type: Number,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );

// const myBlog = mongoose.model("post", blogSchema);

// app.get("/", async (req, res) => {
//   try {
//     const posts = await myBlog.find({});
//     console.log("Post", posts);
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// });

app.listen(process.env.PORT, () => {
});
