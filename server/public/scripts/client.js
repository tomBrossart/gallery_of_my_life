console.log('JS sourced');

// first param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function() {
  var posts = this;
  // verify ng controller and html are playing nice
  posts.test = "Make sure this works";
  // array of objects for titles, photos, descriptions
  posts.photosArray = [
    {
      pic: {img: 'image_1.png', visible: true},
      title: 'Lago Atitlan in Guatemala',
      description: {text: 'What a climb! The view of the volcanos and the lake was stunning', visible: false},
    },
    {
      pic: {img: 'image_2.png', visible: true},
      title: 'Brother Matt\'s Wedding',
      description: {text: 'The second marriage in my family was a great Houston, TX gathering.', visible: false},
    },
    {
      pic: {img: 'image_3.png', visible: true},
      title: 'Friendly bus rider in Thailand',
      description: {text: 'Exhausted Tom sleeps on bus ride to refugee camp while his seat mate smiles.', visible: false},
    },
    {
      pic: {img: 'image_4.png', visible: true},
      title: 'Life changing electric bike purcahse',
      description: {text: 'Owning an electric bike has enabled me to bike-commute year round with much less sweat, and more smiles.', visible: false},
    },
    {
      pic: {img: 'image_5.png', visible: true},
      title: 'Wonderful encounter',
      description: {text: 'I met Dessa at a Coco event, she is a great speaker and performer!', visible: false},
    },
    {
      pic: {img: 'image_6.png', visible: true},
      title: 'Growing with a new family',
      description: {text: 'Getting to know my fiance\'s family over the last few years has been great.', visible: false},
    },
  ];

  posts.togglePhoto = function(item) {
    console.log('Toggle clicked', posts.photosArray);
    item.pic.visible = !item.pic.visible;
    item.description.visible = !item.description.visible;
  };
});
