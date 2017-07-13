Meteor.startup(function () {
	if (Workouts.find().count() == 0) {
		workout1 = {
			name: 'curl',
			tags: 'bicept',
			desc: 'bend elbows with weights'
		};
		Workouts.insert(workout1);
	}
});
