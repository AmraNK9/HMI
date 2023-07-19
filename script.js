

//scroll reveal
var slideRight1 = {
    distance: '120%',
    duration: 1200,
    origin: 'right',
    opacity: .6
};
var slideRight2 = {
    delay:500,
    distance: '120%',
    duration: 1200,
    origin: 'right',
    opacity: .6
};
var slideRight3 = {
    delay:1000,
    distance: '120%',
    duration: 1200,
    origin: 'right',
    opacity: .6
};
var slideRight4 = {
    delay:1500,
    distance: '120%',
    duration: 1200,
    origin: 'right',
    opacity: .6
};
var slideLeft1 = {
    delay:0,
    distance: '120%',
    duration: 1200,
    origin: 'left',
    opacity: .6
};
var slideLeft2 = {
    delay:500,
    distance: '120%',
    duration: 1200,
    origin: 'left',
    opacity: .6
};
ScrollReveal().reveal('.slideRight1',slideRight1)
ScrollReveal().reveal('.slideRight2',slideRight2)

ScrollReveal().reveal('.slideRight3',slideRight3)
ScrollReveal().reveal('.slideRight4',slideRight4)

var scaleUp1 = {
    delay:0,
    distance:'30%',
    duration:1200,
    origin:'left',
    scale:0.5,
    opacity:.5,
}
var scaleUp2 = {
    delay:0,
    distance:'30%',
    duration:1200,
    origin:'right',
    scale:0.5,
    opacity:.5,
}
var scaleUp3 = {
    delay:0,
    distance:'30%',
    duration:1200,
    origin:'left',
    scale:0.5,
    opacity:.5,
}

var scaleUpBottom = {
    delay:0,
    distance:'30%',
    duration:1200,
    origin:'bottom',
    scale:0.5,
    opacity:.5,
}



ScrollReveal().reveal('#text-card1',scaleUp1)

ScrollReveal().reveal('#text-card2',scaleUp2)
ScrollReveal().reveal('#text-card3',scaleUp3)

ScrollReveal().reveal('#course-1',slideLeft1)
ScrollReveal().reveal('#course-2',slideRight1)
ScrollReveal().reveal('#course-3',slideLeft2)
ScrollReveal().reveal('#course-4',slideRight2)

ScrollReveal().reveal('#ip-left',slideLeft1)
ScrollReveal().reveal('#ip-right',slideRight1)
ScrollReveal().reveal('#ip-btn',scaleUpBottom)




ScrollReveal().reveal('#ip-left-2',slideLeft1)
ScrollReveal().reveal('#ip-right-2',slideRight1)
ScrollReveal().reveal('#ip-btn-2',scaleUpBottom)


const loader = document.querySelector('.loader')

window.onload(
    loader.style.display = "none"
)