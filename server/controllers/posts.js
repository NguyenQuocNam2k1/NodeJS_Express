import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log("Posts: ",posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ error: err})
    }
}

export const createPost = async (req , res) => {
    try {
        const updatePost = req.body;

        const post = await PostModel.findOneAndUpdate({_id: updatePost._id} , updatePost , {new: true});
        // Giải thích new : true 
        // Trước khi tìm được và update data trong DB thì thằng post sẽ nhận giá trị cũ của thằng chưa được update
        // nhưng khi có new : true thì nó sẽ nhận lại giá trị sau khi update
        await post.save();

        res.status(200).json(post)
    } catch (error) {
        
    }
} 

export const updatePost =  async (req , res) => {
    try {
        const updatePost = req.body;

        const post = new PostModel(updatePost);
        await post.save();

        res.status(200).json(post)
    } catch (error) {
        
    }
} 