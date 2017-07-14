Router.configure({
	layoutTemplate: 'layout',
});
Router.route('main', {
	path: '/'
});
Router.route("football");
Router.route("basketball");
Router.route("track");
Router.route("soccer");
Router.route("baseball");
Router.route("hockey");
Router.route("swimming");
Router.route("lacrosse");
Router.route("other");
Router.route("about");
Router.route("contact");
Router.route("upload");
Router.route("Abs");
Router.route("Back");
Router.route("Biceps");
Router.route("Triceps");
Router.route("Leg");
Router.route("Chest");


Router.route("workouts/:tag",
 {template:"workouts",
  data: function(){
		const tag = this.params.tag;
		console.log("looking up the tag: "+tag);
		console.log(tag=="all");
		if (tag=="all"){
			return {all:Workouts.find()};
		}

    const pattern = new RegExp(tag,"i");
		console.log("pattern= "+pattern);
		const c =
		  Workouts.find({tag:pattern}).fetch();
			console.dir(c);
		return {all:c};
	}});
Router.route("testing");
