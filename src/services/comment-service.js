import {CommentRepository, TweetRepository} from '../repository/index.js';

class CommentService{
    constructor(){
        this.commentRepo = new CommentRepository();
        this.tweetRepo = new TweetRepository();
    }

    async create(modelType, modelId, userId, content){
        console.log(modelId, modelType, userId, content);
        if(modelType == 'Tweet'){ 
            var commentable = await this.tweetRepo.find(modelId);
        }
        else if(modelType == 'Comment'){
            var commentable = await this.commentRepo.get(modelId);
        }
        else{
            throw new Error('Invalid model type');
        }

        const comment = await this.commentRepo.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });

        commentable.comments.push(comment);
        await commentable.save();

        return comment;
    }
}

export default CommentService;