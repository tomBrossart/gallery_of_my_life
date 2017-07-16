# gallery_of_my_life

## APP OVERVIEW
"Gallery of my Life" is a gallery of 6 or more pictures...from my life. When you click on a picture, you'll see a brief synopsis of why I chose to display that photo. Users can also heart/thumbs up/favorite my photos as many times as they want.

##Technologies
Node/Express - to serve files
Angular - client-side logic
CSS - flexing style muscles
Heroku - to make site available to the world

--------------------------

## Refactor Ideas
[ ] Create data persistance for likes and comments
[ ] instead of hiding photo have opacity drop to 0.2 and overlay description
[ ] improve responsiveness
[ ] Create a form that will take comments for each of your photos. Display the comments when a "Show Comments" button is clicked.

Rough Work Process

FRIDAY
[X] initial scaffolding
[X] sketch outline
[X] psuedo code and schedule
[X] use bootstrap to hardcode wireframe
[X] stub out PhotoController
[X] experiment with angular


SATURDAY MORNING
[X] select 6 photos and save in imags folder
[X] create array of images in client js
[X] create array of titles
[X] create array of descriptions
[X] create ng-repeat div to add imgs from client.js to DOM and use ng-src?
  https://docs.angularjs.org/api/ng/directive/ngSrc
[X] create counters (arrays) for each photos likes using ngClick
[X] setup toggle so that clicking photo hides it and shows text description of image
  use ng-click on the photo...
[X] add heart icon (as button?) that when clicked increases loved count

SATURDAY AFTERNOON
[X] refine CSS
  - border radius photos
  - center photos in their divs
  -  figure out how to
  - add a border to
   vertical-align: middle; for h2


SUNDAY
[X] review
[X] work on responsiveness
[X] host on heroku
