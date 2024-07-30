const express = require('express');

const connect = require('./config/database');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository');

const app = express();

app.listen(3000, async () =>{
    console.log('Server is running');
    await connect();
    console.log('MongoDB connected');

    const tweets = await Tweet.find({
        content:  ['First tweet', 'my tweet', '123d5f']
    });

    console.log(tweets);
    
 
// {create tweet
    // const tweet = await Tweet.create({
    //     content: 'Second tweet'
    // });
    // console.log(tweet);

    //find tweets
    // const tweets = await Tweet.find();

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: 'tweet with hooks'});
    // const comment = await Comment.create({content: 'new Comment!'});
    // tweet.comments.push(comment);

    // // console.log(tweet);
    // // tweet.comments.push({content: 'first comment here'});
    // await tweet.save();
     

    // const tweet = await tweetRepo.getAll(0, 4);
    // console.log(tweet[0].contentWithEmail);}
});

