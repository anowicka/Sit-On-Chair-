document.addEventListener("DOMContentLoaded", function () {

    //zadanie 1
    var listElements = document.querySelectorAll('nav > ul > li'); //tablica
    console.log(listElements);
    for (var i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener('mouseover', function (show) {
            // console.log('show');
            // console.log(this.firstElementChild);
            if (this.firstElementChild !== null) {
                // console.log(this.firstElementChild);
                this.firstElementChild.style.display = 'block';
            }
        });
    }
    //zadanie 2 
    var pictureOne = document.querySelector('.pht1');
    pictureOne.addEventListener("mousemove", function (event) {
        pictureOne.firstElementChild.style.visibility = 'hidden';
    });
    var pictureTwo = document.querySelector('.pht2');
    pictureTwo.addEventListener("mousemove", function (event) {
        pictureTwo.firstElementChild.style.visibility = 'hidden';
    });
    pictureOne.addEventListener("mouseout", function (event) {
        pictureOne.firstElementChild.style.visibility = 'visible';
    });
    pictureTwo.addEventListener("mouseout", function (event) {
        pictureTwo.firstElementChild.style.visibility = 'visible';
    });
    //zadanie 3 
    var leftArrow = document.querySelector('.left-arrow');
    console.log(leftArrow);
    var rightArrow = document.querySelector('.right-arrow');
    console.log(rightArrow);
    var photos = document.querySelectorAll('.slider-images li');
    console.log(photos);
    var index = 0;
    photos[index].classList.add("visible");
    rightArrow.addEventListener("click", function (event) {
        var counter = 0;
        var counterValue = counter + 1;
        photos[index].classList.remove("visible");
        if (index === photos.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        photos[index].classList.add("visible");
    });
    leftArrow.addEventListener("click", function (event) {
        photos[index].classList.remove("visible");
        if (index === 0) {
            index = photos.length - 1;
        }
        else {
            index--;
        }
        photos[index].classList.add("visible");
    });
    //zadanie 4
    //     var listaRodzaj = document.getElementsByClassName('drop_down_list');
    //    listaRodzaj.addEventListener("click", function(event){
    //        
    //    });
});