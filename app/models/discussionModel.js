module.exports.getDiscussion = (userId, discussionId, cb) => {
    cb([
        {
            "commentId": "1",
            "userId": "2031-92301213123",
            "userName": "Eduardo",
            "comment": "ALBUM TÁ BOM DEMAIS!!!!!! AMEI!!!!!!!"
        },
        {
            "commentId": "2",
            "userId": "1-29300121312",
            "userName": "Rebeca",
            "comment": "Poxa, já teve albuns melhores... este está bom, mas nossa... decaiu muito"
        },
        {
            "commentId": "3",
            "userId": "1012-30131231",
            "userName": "Matheus",
            "comment": "first"
        },
        {
            "commentId": "4",
            "userId": "1032912-31",
            "userName": "Glauber", 
            "comment": "NAO CONSIGO PARAR DE OUVIR ISSOOOOOOO"
        }
    ])
}

module.exports.getAllDiscussions = (userId, cb) =>  {
    cb([
        {
            "id": 1, 
            "artist": "emicida",
            "postName": "AmarElo",
            "user": userId
        }
    ])
}