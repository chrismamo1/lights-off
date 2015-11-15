
Meteor.startup(function(){
    if(Buildings.find().count() == 0) {
        for (var i = 1; i < 20; i++) {
            Buildings.insert({
                "floor": {
                    "room": {
                        "switch": {
                            number: i
                        },
                        "number": Math.round((Math.random() * 100))
                    }
                }
            });
        }
    }
});




Meteor.publish('buildings', function(){
    return Buildings.find();
});