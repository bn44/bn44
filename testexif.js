var ExifImage = require('exif').ExifImage;

try {
    new ExifImage({ image : '2.jpg' }, function (error, image) {
        if (error){
            console.log('Error: '+error.message);
       } else{
            console.log(image);
            console.log("-------------------------------");

            console.log(image.gps[5].tagName); // Do something with your data!
            console.log(image.gps[5].value);
             
	    console.log("_______________________________");
            console.log("-------------------------------");
            }

    });
} catch (error) {
    console.log('Error: ' + error);
}
