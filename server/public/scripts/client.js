console.log('JS sourced');

// first param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function() {
    var posts = this;
    // verify ng controller and html are playing nice
    posts.test = "Make sure this works";
    // create array of objects for titles, photos, descriptions
    posts.testObject = [
        {
          img: 'image_1.png',
          title: 'Lago Atitlan in Guatemala',
        },
        {
          img: 'image_2.png',
          title: 'Brother Matt\'s Wedding',
        },
        {
          img: 'image_3.png',
          title: 'Friendly bus rider in Thailand',
        },
        {
          img: 'image_4.png',
          title: 'Life changing electric bike purcahse',
        },
        {
          img: 'image_5.png',
          title: 'Wonderful encounter',
        },
        {
          img: 'image_6.png',
          title: 'Growing with a new family',
        },
    ];
    // posts.photosArray = ['image_1.png', 'image_2.png', 'image_3.png', 'image_4.png', 'image_5.png', 'image_6.png'];
    // posts.titleArray = ['Lago Atitlan in Guatemala', 'Brother Matt\'s Wedding', 'Friendly bus rider in Thailand', 'Life changing electric bike purcahse', 'Wonderful encounter', 'Growing with a new family'];
    // // do I want to send all of these at the same time or should I send dsc later?
    posts.addPhotos = function(image, name, description) {
      console.log('New photos', posts.photosArray);
    };
});


/*
reference from earlier project

console.log(this);
console.log('MessageController');
messages.messagesArray = [];
messages.addPost = function(name, post) {
  var newPost = {name: name, post: post, visible: true};
  console.log('New Post, ', messages.messagesArray);
  messages.messagesArray.push(newPost);
};

messages.deletePost = function(index) {
  messages.messagesArray.splice(index, 1);
};


*/
