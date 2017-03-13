//header burger
function showMobileMenu(){
    var burger = document.querySelector('.header__burger');
    if(burger){
        var nav = document.querySelector('.header__nav');
        burger.addEventListener('click', function(){
            nav.classList.toggle('is-visible');
        })
    }

}
showMobileMenu();


//repertory
function changeRepertoryOnAsideClick(){
    var repAside = document.querySelector('.rep__aside');
    if(repAside){
        repAside.addEventListener('click', function(ev){
            var target = ev.target,
                allLi  = document.querySelectorAll('.rep__aside ul li'),
                allArticles = document.querySelectorAll('.rep__content article'),
                showId = target.getAttribute('data-id'),
                selectedShow = document.getElementById(showId),
                insertedList = target.nextElementSibling,
                arrow = target.querySelector('.rep__list-title span');

            if(target.tagName == "LI"){
                //adding active-class to nav menu
                allLi.forEach(function(item){
                    item.classList.remove('is-active')
                });
                target.classList.add('is-active');

                //show main block
                allArticles.forEach(function(item){
                    item.classList.remove('is-visible')
                });
                selectedShow.classList.add('is-visible');
            }

            else if(target.classList.contains('rep__list-title')){
                insertedList.classList.toggle('is-visible')
                arrow.classList.toggle('is-active');
            }
        });
    }
}
changeRepertoryOnAsideClick();

function changeRepertoryOnArticleClick(){
    var repertoryBlock = document.querySelector('.rep');
    if(repertoryBlock){
        repertoryBlock.addEventListener('click', function (ev) {
            var target = ev.target;
            if(target.tagName === "H4") {
                target.classList.toggle('is-active');
                target.nextElementSibling.classList.toggle('is-visible');
            }
        })
    }
};
changeRepertoryOnArticleClick();
//gallery
function gallerySlider() {
    var photo = document.querySelector('.photo');
    if(photo && (window.matchMedia('(min-width: 1024px)').matches))  {
        photo.addEventListener('click',function(ev){
            var target = ev.target,
                overlay = document.querySelector('.photo__overlay'),
                targetSrc = target.getAttribute('src'),
                sliderImg = overlay.querySelector('.photo__slider-img'),
                closeBtn = document.querySelector('.photo__slider-close');
            var sliderNext = document.querySelector('.photo__slider-right');
            var sliderPrev = document.querySelector('.photo__slider-left');
            var galImgs = document.querySelectorAll('.photo__img');


            if(target.tagName == "IMG") {
                sliderImg.setAttribute('src', targetSrc);
                //show slider
                overlay.classList.add('is-visible');
                //close slider
                closeBtn.addEventListener('click', function(){
                    overlay.classList.remove('is-visible');
                });
                //next slide
                sliderNext.addEventListener('click', nextSlide);
                //prev slide
                sliderPrev.addEventListener('click', prevSlide);
            }

            function nextSlide() {
                if(target.nextElementSibling) {
                    var nextSiblingSrc = target.nextElementSibling.getAttribute('src');
                    sliderImg.setAttribute('src', nextSiblingSrc);
                    target = target.nextElementSibling;
                }
                else {
                    target = galImgs[0];
                    sliderImg.setAttribute('src', target.getAttribute('src'))
                }
            }

            function prevSlide(){
                if(target.previousElementSibling.tagName == "IMG") {
                    var prevSiblingSrc = target.previousElementSibling.getAttribute('src');
                    sliderImg.setAttribute('src', prevSiblingSrc);
                    target = target.previousElementSibling;
                }
                else {
                    target = galImgs[(galImgs.length - 1)];
                    sliderImg.setAttribute('src', target.getAttribute('src'))
                }
            }
        });
    }
}
gallerySlider();


//scrollTop
function runScroll() {
    scrollTo(document.body, 0, 400);
}
var scrollme;
scrollme = document.querySelector(".footer__to-top");
scrollme.addEventListener("click",runScroll,false);

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}


