Template.upload.events({
  "click #js-submit" (event, instance) {

    console.log("hey it worked");
    var name = $("#js-name").val();
    var description = $("#js-description").val();
    var tag = $("#js-tag").val();
    if (!name || !description || !tag) {
      //alert("you must fill out all field");
      $('#submit-error').fadeIn();
      return;
    }
    var w = Workouts.findOne({
      description: description
    });
    if (w) {
      // Workouts.remove(w._id);
      $('#submit-dupe').fadeIn();
      return;
    }
    p = {
      name: name,
      description: description,
      tag: tag,
      createdBy: new Date(),
      user: Meteor.userId()
    };
    console.dir(p);
    Workouts.insert(p);
    $('#submit-alert').fadeIn(); //success dialogue
    $('#submit-error').hide(); //remove other alerts
    $('#submit-dupe').hide();

    $("#js-name").val(""); //remove text after submission
    $("#js-description").val("");
    $("#js-tag").val("");


  },
  "click #login-dropdown" (event, instance) {
    Accounts._loginButtonsSession.set('dropdownVisible', true);
    if ($(window).width() < 767) {
      //small screen, load other JS files
      $('.navbar-toggle').click();
      //console.log('mobile toggle');
    }
    //console.log('dropdownVisible');
  },


})
