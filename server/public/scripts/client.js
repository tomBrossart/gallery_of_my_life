console.log('JS sourced');

// first param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function() {
    var posts = this;
    // verify ng controller and html are playing nice
    posts.test = "Make sure this works";
    // create array for pushing photos to
    posts.photosArray = ['img test', 'img test 2', 'img test 3'];
    // do I want to send all of these at the same time or should I send dsc later?
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
