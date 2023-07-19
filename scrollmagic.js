const tab1 = document.querySelector('#text-card1');
const tab2 = document.querySelector('#text-card2');
const body = document.querySelector('body');
const container = document.querySelector('div.container');
tab1.style.left = '0px';
let box=parseInt((window.innerWidth/2),10);

let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
let scrollDirection;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > previousScrollPosition) {
    scrollDirection = 'down';
    if((parseInt(tab1.style.marginLeft, 10)+220)>box){
       
    }         
    else
    {
    tab1.style.marginRight = (window.scrollY)+ 'px';
    tab2.style.marginLeft = (window.scrollY )+ 'px';} 
    
  
  } else if (currentScrollPosition < previousScrollPosition) {
    scrollDirection = 'up';
    tab1.style.marginRight = (window.scrollY )+ 'px';
    tab2.style.marginLeft = (window.scrollY )+ 'px';
  }

  previousScrollPosition = currentScrollPosition;

  // Log the scroll direction
  console.log('Scroll direction:', scrollDirection);
});