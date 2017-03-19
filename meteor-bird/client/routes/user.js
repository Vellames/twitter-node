Router.route("/user/:_id", function(){
    this.render("user", {
        data : function(){
            var _id = this.params._id;
            this.subscribe("posts", _id).wait();
            this.subscribe("friendship", _id);
            this.subscribe("user", _id);
            var isFollowing = Friendships.isFollowing(_id);
            Session.set("currentUserId", _id);
            Session.set("isFollowing", isFollowing);
            return {
                user: Meteor.users.findOne({_id: _id}),
                posts: Posts.list([_id]),
                followers: Friendships.followers(_id),
                followings: Friendships.followings(_id)
            }
        }
    })
}, {name : "user"});

Router.route("/user/:_id/follow", function(){
    var _id = this.params._id;
    Meteor.call("followUser", _id);
    this.redirect("/user/" + _id);
}, {name : "user.follow"});

Router.route("/user/:_id/unfollow", function(){
   var _id = this.params._id;
   Meteor.call("unfollowUser", _id);
   this.redirect("/user/" + _id);
}, {name : "user.unfollow"});