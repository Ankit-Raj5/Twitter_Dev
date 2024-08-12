import TweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-s3-config.js";
const singleuploader = upload.array('image', 10);


const tweetService = new TweetService();

export const createTweet = async (req, res)=>{
    
    try {
        singleuploader(req, res, async function (err, data){
            if (err) {
                return res.status(500).json({ error: err });
            }
            console.log('Image url is :', req.files);

            const payload = req.body;
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success: true,
                message: "Tweet created successfully",
                data: response,
                err: {}
            });
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Tweet not created",
            data: {},
            err: error
        });
    }
}

export const getTweet = async (req, res) =>{
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Tweet fetched successfully from service",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Tweet not fetched",
            data: {},
            err: error
        });
    }
}