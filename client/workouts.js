Template.workouts.helpers({
  workouts() {
    ws = Workouts.find({
      tag: /ab/i
    }, {
      sort: {
        createdBy: -1
      }
    });
    console.dir(ws);
    return ws;
  },

})

Template.workout.helpers({
  owner(w) {
    //console.dir(w);
    //console.log(Meteor.userId());
    return (w.user == Meteor.userId()) || (w.user == "Np48HjAAj2AbFdjbZ");
  }
})

Template.workout.events({
  "click span#remove" (event, instance) {
    //console.dir(this);
    Workouts.remove(this.workout._id);
  }
})
