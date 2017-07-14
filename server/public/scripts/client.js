console.log('JS sourced');

// first param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function() {
    // Code that runs when our controller is initialized
    // Can think of this as our document.ready -- this means controller is ready
    // putting a variable on our controller for ease of understanding and reading the code
    // then anything we connect to welcome can be accessed in the html with dot notation
    var posts = this;
    posts.test = "Make sure this works";
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
});
