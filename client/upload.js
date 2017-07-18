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
  },
  "click #login-dropdown" (event, instance) {
    Accounts._loginButtonsSession.set('dropdownVisible', true);
    if ($(window).width() < 767 || $(window).height() < 737) {
      //small screen, load other JS files
      $('.navbar-toggle').click();
      //console.log('mobile toggle');
    }
    //console.log('dropdownVisible');
  },


})
