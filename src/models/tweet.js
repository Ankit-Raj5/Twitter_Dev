import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        max: [250, "Tweet can't be more than 250 characters"]
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    image:{
        type: String
    }
}, {timestamps: true});



// tweetSchema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \nCreated by: ${this.userEmail}`;
// });

// tweetSchema.pre('save', function(next){
//     console.log('Inside a hook');
//     next();
// })


const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;