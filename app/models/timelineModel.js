const mongoose = require('mongoose');

let timelineModel = () =>{
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    
    // let db = dbConnection;
    let Schema = mongoose.Schema;
    
    const timelineSchema = new Schema({
        user: String,
        content: String
    });
    timelineSchema.set('autoIndex', false)
    timelineSchema.set('toJSON', {virtuals: true})
    return mongoose.model('timeline', timelineSchema)
}

let post = timelineModel();

module.exports.getTopPosts = (userId, cb) => {
    post.find({})
        .then( posts => {
            cb(posts)
        })

}

module.exports.newPost = (userId, content, cb) => {
    let Npost = {
        "user": userId,
        "content": content
    }
    insertNewPost(Npost)
        .then(np => cb(np))

}

module.exports.getMyPosts = (userId, cb) => {
    post.find({"user":userId})
        .then( posts => {
            cb(posts)
        })
}

module.exports.deletePost = (id, cb) =>  {
    post.remove({"_id": id})
        .then(count => {
            cb(count.deletedCount)
        })
}

async function insertNewPost(Npost) {
    let ret = await post.create({user: Npost.user, content: Npost.content})
    return await ret.toJSON()
}