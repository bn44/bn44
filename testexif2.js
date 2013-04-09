f = require('exif');

exif('1.jpg', function(err, obj){
  console.log(obj);
})
