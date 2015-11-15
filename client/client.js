Template.switch_form.helpers({
    buildings: function(){
        console.log(Meteor.subscribe("buildings"));
        console.log(Buildings.find());
        return Buildings.find({});
    }
});

Template.switch_form.events({
    "click #submit": function(event){
        var switches = $("status");
        //switches =
    }
})