# gallery_of_my_life

## APP OVERVIEW
"Gallery of my Life" is a gallery of 6 or more pictures...from my life. When you click on a picture, you'll see a brief synopsis of why I chose to display that photo. Users can also heart/thumbs up/favorite my photos as many times as they want.

##Technologies
Node/Express - to serve files
Angular - client-side logic
CSS - flexing style muscles
Heroku - to make site available to the world

--------------------------

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
[ ] create array of descriptions
[X] create ng-repeat div to add imgs from client.js to DOM and use ng-src?
  https://docs.angularjs.org/api/ng/directive/ngSrc
[ ] create counters (arrays) for each photos likes using ngClick
<button ng-click="count = count + 1" ng-init="count=0">
Increment
</button>
<span>
count: {{count}}
</span>
[ ] setup toggle so that clicking photo drops opacity to 0.2 and shows text description of image
  use ng-click on the photo...
[ ] add heart icon (as button?) that when clicked increases loved count

SATURDAY AFTERNOON
[ ] refine CSS
[ ] host on heroku
