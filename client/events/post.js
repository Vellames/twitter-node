Template.post.events({

    "submit form": function(event, template){
        console.log("Oie");
        event.preventDefault();
        var textArea = template.find("textarea");
        Meteor.call("publishPost", textArea.value, Meteor.user().profile.name);
        textArea.value = "";
    }

});