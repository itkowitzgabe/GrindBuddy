Template.workouts.helpers({
  workouts() {
    return Workouts.find({
      tag: /ab/i
    });
  }
})

Template.workout.helpers({
  owner(w) {
    console.dir(w);
    console.log(Meteor.userId());
    return w.user == Meteor.userId();
  }
})

Template.workout.events({
  "click span#remove" (event, instance) {
    console.dir(this);
    Workouts.remove(this.workout._id);
  }
})
