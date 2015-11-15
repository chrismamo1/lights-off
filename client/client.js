Template.switch_form.helpers({
    rooms: function(){
        console.log(Meteor.subscribe("rooms"));
        console.log(Rooms.find());
        return Rooms.find({});
    }
});

Template.switch_form.events({
    "click #submit": function(event){
        var switches = $("status");
        switches =
    }
})