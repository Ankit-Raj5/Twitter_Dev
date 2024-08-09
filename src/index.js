import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';

import {UserRepository, TweetRepository} from './repository/index.js'
import LikeService from './services/like-service.js';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(3000, async () =>{
    console.log('Server is running');
    await connect();
    console.log('MongoDB connected'); 

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();

    const tweets = await tweetRepo.getAll(0,10);
    const users = await userRepo.getAll();


    //creating user
    // const user = await userRepo.create({
    //     email: 'abc@gmail.com',
    //     password: '123456',
    //     name: 'Admin'
    // });
    
    const likeservice = new LikeService();   
    await likeservice.toggleLike(
        tweets[0].id,
        'Tweet',
        users[0].id
    );
});

 