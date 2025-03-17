var path = "photo1.jpeg:photo2.jpeg:photo3.jpeg";
var images = path.split(":");
var currentindex = 0;

var image = document.createElement("img");
let div1 = document.getElementById("div");
image.height = 200;
image.width = 800;
image.src = "images/"+images[currentindex];
image.alt = "photo";
div1.after(image);
setTimeout(next,3000);
function next(){
    if(currentindex == 3) currentindex = 0;
    image.src = "images/"+images[currentindex++];
    setTimeout(next,3000);
}

function back(){
    if(currentindex == 0) currentindex = 3;
    image.src = "images/"+images[--currentindex];
}
