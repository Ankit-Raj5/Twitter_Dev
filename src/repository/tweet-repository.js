import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
    
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw error;
        }
    }


    // async update(tweetId, data){
    //     try {
    //         const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new: true});
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        } catch (error) {
            throw error;
        }
    }


    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async getAll(offset, limit){
        
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            throw error;
        }
    }
}

export default TweetRepository;