// Progressive loading Start
const observer = lozad('.lozad', {
    rootMargin: '2000px 0px'
  });
  observer.observe();
// Progressive loading End

// Display current year in footer Start
const year = document.querySelector('#currentYear');
let now = new Date();
let currentYear = now.getFullYear();
year.innerText = currentYear;
// Display current year in footer End

// Move to portfolio section Start
const menuToCustom = document.getElementsByClassName('menuToCustom');
const menuToReadymade = document.getElementsByClassName('menuToReadymade');
const menuToEducationProcess = document.getElementsByClassName('menuToEducationProcess');

const menuToCustomArray = Object.keys(menuToCustom).map(function(key) {
  return menuToCustom[key];
});
const menuToReadymadeArray = Object.keys(menuToReadymade).map(function(key) {
  return menuToReadymade[key];
});
const menuToEducationProcessArray = Object.keys(menuToEducationProcess).map(function(key) {
  return menuToEducationProcess[key];
});

menuToCustomArray.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('portfolio__custom').scrollIntoView();
  })
});
menuToReadymadeArray.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('portfolio__readymade').scrollIntoView();
  })
});
menuToEducationProcessArray.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('portfolio__education-process').scrollIntoView();
  })
});
// Move to portfolio section End

// Display small size of portfolio-menu Start
const smallMenu = document.getElementById('smallMenu');
const smallMenuCustom = document.getElementById('smallMenuCustom');
const smallMenuReadymade = document.getElementById('smallMenuReadymade');
const smallMenuEducation = document.getElementById('smallMenuEducation');
let offSet = window.pageYOffset;
const portfolioCustomOffset = document.getElementById('portfolio__custom').getBoundingClientRect().top + offSet;
const portfolioReadymadeOffset = document.getElementById('portfolio__readymade').getBoundingClientRect().top + offSet + 1000;
const portfolioEducationOffset = document.getElementById('portfolio__education-process').getBoundingClientRect().top + offSet +1000;
const portfolioFinishOffset = document.getElementById('portfolio__education-process').getBoundingClientRect().bottom + offSet +1000;

console.log(portfolioCustomOffset);
console.log(portfolioReadymadeOffset);
console.log(portfolioEducationOffset);
console.log(portfolioFinishOffset);

// window.addEventListener('scroll', () => {
//   console.log(window.pageYOffset);

// });

window.addEventListener('scroll', () => {
  let currentOffset = document.documentElement.scrollTop;
  console.log(currentOffset);

  if (currentOffset > portfolioFinishOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.remove('active-menu');
    smallMenuReadymade.classList.remove('active-menu');
    smallMenuEducation.classList.remove('active-menu');
  } else if (currentOffset > portfolioEducationOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.remove('active-menu');
    smallMenuReadymade.classList.remove('active-menu');
    smallMenuEducation.classList.add('active-menu');
  } else if (currentOffset > portfolioReadymadeOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.remove('active-menu');
    smallMenuReadymade.classList.add('active-menu');
    smallMenuEducation.classList.remove('active-menu');
  } else if (currentOffset > portfolioCustomOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.add('active-menu');
    smallMenuReadymade.classList.remove('active-menu');
    smallMenuEducation.classList.remove('active-menu');
  } else if (currentOffset < portfolioCustomOffset) {
    smallMenu.style.display = 'none';
  }
})

// Display small size of portfolio-menu End

// 포트폴리오 메뉴 작은 버전
// window.addEventListener('scroll', function() {
//   let offSet = window.pageYOffset;
//   // console.log(offSet);

//   let customOffset = document.getElementById('portfolio__custom').getBoundingClientRect().top + offSet;
//   let readymadeOffset = document.getElementById('portfolio__readymade').getBoundingClientRect().top + offSet;
//   let processOffset = document.getElementById('portfolio__education-process').getBoundingClientRect().top + offSet;
//   let finishOffset = document.querySelector('.about').getBoundingClientRect().top + offSet - 700;

//   if (document.documentElement.scrollTop > finishOffset) {
//     document.getElementById("menu_education-process").style.top = "-80px";
//     document.getElementById("menu_readymade").style.top = "-80px";
//     document.getElementById("menu_custom").style.top = "-80px";
//   } else if (document.documentElement.scrollTop > processOffset) {
//     document.getElementById("menu_education-process").style.top = "0";
//   } else if (document.documentElement.scrollTop > readymadeOffset) {
//     document.getElementById("menu_education-process").style.top = "-80px";
//     document.getElementById("menu_readymade").style.top = "0";
//   } else if (document.documentElement.scrollTop > customOffset) {
//     document.getElementById("menu_readymade").style.top = "-80px";
//     document.getElementById("menu_custom").style.top = "0";
//   } else {
//     document.getElementById("menu_custom").style.top = "-80px";
//   }
// });

// console.log(customOffset);
// console.log(customOffset + window.pageYOffset);
// console.log(readymadeOffset);
// console.log(readymadeOffset + window.pageYOffset);
// console.log(processOffset);
// console.log(processOffset + window.pageYOffset);
// console.log(finishOffset);

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.documentElement.scrollTop > finishOffset) {
//     document.getElementById("menu_education-process").style.top = "-80px";
//   } else if (document.documentElement.scrollTop > processOffset) {
//     document.getElementById("menu_education-process").style.top = "0";
//   } else if (document.documentElement.scrollTop > readymadeOffset) {
//     document.getElementById("menu_education-process").style.top = "-80px";
//     document.getElementById("menu_readymade").style.top = "0";
//   } else if (document.documentElement.scrollTop > customOffset) {
//     document.getElementById("menu_readymade").style.top = "-80px";
//     document.getElementById("menu_custom").style.top = "0";
//   } else {
//     document.getElementById("menu_custom").style.top = "-80px";
//   }
// }