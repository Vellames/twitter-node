 Meteor.publish("posts", function(_id){
    return Posts.list(Friendships.timelineIds(_id));
 });

Meteor.publish("friendship", function(_id){
    return Friendships.followersAndFollowings(_id);
});

Meteor.publish("user", function(_id){
    return Meteor.users.find({_id: _id});
});