
Meteor.startup(function(){
    if(Rooms.find().count() == 0) {
        for (var i = 1; i < 20; i++) {
            Rooms.insert({
                    "switch": {
                        number: i
                    },
                    "number": Math.round((Math.random() * 100))
                });
        }
    }
});




Meteor.publish('rooms', function(){
    return Rooms.find();
});