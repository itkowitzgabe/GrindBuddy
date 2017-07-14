Template.workouts.helpers({
	workouts() {
		return Workouts.find({tag:/ab/i});
	}
})
