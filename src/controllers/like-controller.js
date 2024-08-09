import LikeService from "../services/like-service.js";

const likeservice = new LikeService();
export const toggleLike = async (req, res) =>{
    try {
        const response = await likeservice.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            message: "Like toggled successfully",
            success: true,
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            success: false,
            data: {},
            err: error
        });
    }
}