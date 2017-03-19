Posts = new Mongo.Collection("posts");

Posts.publish = function(message, userName){
    this.insert({
        message: message,
        date: new Date(),
        userId: Meteor.userId(),
        name: userName
    });
};

Posts.list = function(usersId){
    return this.find(
        {userId: {"$in" : usersId}},
        {sort: {time: -1, name: 1}}
    );
};