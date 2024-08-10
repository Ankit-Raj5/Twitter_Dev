import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res)=>{
    
    try {
        const response = await commentService.create(req.query.modelType, req.query.modelId, req.user.id, req.body.content);
        return res.status(201).json({
            success: true,
            message: "new comment created successfully",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "comment not created",
            data: {},
            err: error
        });
    }
}