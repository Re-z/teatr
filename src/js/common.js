


//repertory
//var repAside = document.querySelector('.rep__aside');
//repAside.addEventListener('click', function(ev){
//    var target = ev.target,
//        allLi  = document.querySelectorAll('.rep__aside ul li'),
//        allArticles = document.querySelectorAll('.rep__content article'),
//        showId = target.getAttribute('data-id'),
//        selectedShow = document.getElementById(showId),
//        insertedList = target.nextElementSibling,
//        arrow = target.querySelector('.rep__list-title span');
//
//    if(target.tagName == "LI"){
//        //adding active-class to nav menu
//        allLi.forEach(function(item){
//            item.classList.remove('is-active')
//        });
//        target.classList.add('is-active');
//
//        //show main block
//        allArticles.forEach(function(item){
//            item.classList.remove('is-visible')
//        });
//        selectedShow.classList.add('is-visible');
//    }
//
//    else if(target.classList.contains('rep__list-title')){
//        insertedList.classList.toggle('is-visible')
//        arrow.classList.toggle('is-active');
//    }
//});


//gallery
var photo = document.querySelector('.photo');

photo.addEventListener('click',function(ev){
    var target = ev.target,
        galImgs = document.querySelectorAll('.photo img'),
        overlay = document.querySelector('.photo__overlay'),
        targetSrc = target.getAttribute('src'),
        sliderImg = overlay.querySelector('.photo__slider-img');
    if(target.tagName == "IMG") {
        sliderImg.setAttribute('src', targetSrc);
        overlay.classList.add('is-visible');

    }




});