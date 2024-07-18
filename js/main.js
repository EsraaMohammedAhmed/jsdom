

var imgs = Array.from(document.getElementsByClassName("card-img") )
var lightBoxContainer = document.getElementById("lightBoxContainer")
var lightBoxItem = document.getElementById("lightBoxItem")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var currentIndexSlide = 0 ;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {

        currentIndexSlide  = imgs.indexOf(e.target)

        lightBoxContainer.style.display = "flex"
        var imgSrc = e.target.src 
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
        console.log(currentIndexSlide);
    })
}
// nextSilde
next.addEventListener("click", nextSilde)
function nextSilde(){
    currentIndexSlide++
    if (currentIndexSlide > imgs.length - 1  ) {
            currentIndexSlide = 0
    }
    var imgSrc = imgs[currentIndexSlide].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
 
}

prev.addEventListener("click", prevSilde)
function prevSilde(){
    currentIndexSlide--
    if (currentIndexSlide < 0   ) {
            currentIndexSlide = imgs.length - 1
    }
    var imgSrc = imgs[currentIndexSlide].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
 
}
 

//closeSlider 
close.addEventListener("click", closeSlider)

function closeSlider() {
    lightBoxContainer.style.display = "none"
}


document.addEventListener("keydown", function(e) {
    if (e.keyCode === 39 ) {
        nextSilde()
    }
    else if (e.keyCode === 37 ) {
        prevSilde()
    }
    else if (e.keyCode === 27 ) {
        closeSlider()
    }
})




// var arr = ["close", "closeSlider" ]

// arr.indexOf("close") ==