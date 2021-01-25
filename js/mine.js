var imgs = document.getElementsByClassName("my-img");
var overlaycontainer = document.querySelector(".overlaycontainer");

var overlaybox = document.querySelector(".overlaybox");
var prev =document.getElementById("prev");
var next =document.getElementById("next");

var arrimgs = [];

for(var i =0 ; i < imgs.length ; i++)
{
    arrimgs.push(imgs[i]);
}


var globalindex;

for(var i =0 ; i< imgs.length ; i++)
{

   imgs[i].addEventListener('click' , function(e){
    var imgtar =e.target;

    var index = arrimgs.indexOf(imgtar);

    globalindex=index;

     overlaycontainer.style.display= "block";
     
     var imgsrc=imgtar.src;
     overlaybox.style.backgroundImage="url("+imgsrc+")";


     

   })
}

var closeBtn = document.getElementById("close");
closeBtn.onclick=function()
{
    overlaycontainer.style.display= "none";
}

next.onclick=function()
{
    globalindex++;
    if(globalindex===arrimgs.length)
    {
        globalindex=0;
    }
    var imgsrc =arrimgs[globalindex].src;
    overlaybox.style.backgroundImage="url("+imgsrc+")";
}
prev.onclick=function()
{
    globalindex--;
    if(globalindex<0)
    {
        globalindex=arrimgs.length-1;
    }
    var imgsrc =arrimgs[globalindex].src;
    overlaybox.style.backgroundImage="url("+imgsrc+")";
}