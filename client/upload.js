Template.upload.events({
  "click #js-submit"(event,instance){
    console.log("hey it worked");
    var name = $("#js-name").val();
    var description = $("#js-description").val();
    var tag= $("#js-tag").val();
    p = {name:name, description:description, tag:tag, createdBy: new Date(), user:Meteor.userId()};
    console.dir(p);
    Workouts.insert(p);
  },
})
