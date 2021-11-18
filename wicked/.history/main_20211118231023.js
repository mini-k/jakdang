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

window.addEventListener('scroll', () => {
  let offSet = window.pageYOffset;
  const portfolioCustomOffset = document.getElementById('portfolio__custom').getBoundingClientRect().top + offSet - 2;
  const portfolioReadymadeOffset = document.getElementById('portfolio__readymade').getBoundingClientRect().top + offSet - 2;
  const portfolioEducationOffset = document.getElementById('portfolio__education-process').getBoundingClientRect().top + offSet - 2;
  const portfolioFinishOffset = document.getElementById('portfolio__education-process').getBoundingClientRect().bottom + offSet - 2;
  let currentOffset = window.scrollY || document.documentElement.scrollTop;

  if (currentOffset > portfolioFinishOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.remove('active-menu');
    smallMenuReadymade.classList.remove('active-menu');
    smallMenuEducation.classList.remove('active-menu');
  } else if (currentOffset >= portfolioEducationOffset && currentOffset < portfolioFinishOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.remove('active-menu');
    smallMenuReadymade.classList.remove('active-menu');
    smallMenuEducation.classList.add('active-menu');
  } else if (currentOffset >= portfolioReadymadeOffset && currentOffset < portfolioEducationOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.remove('active-menu');
    smallMenuReadymade.classList.add('active-menu');
    smallMenuEducation.classList.remove('active-menu');
  } else if (currentOffset >= portfolioCustomOffset && currentOffset < portfolioReadymadeOffset) {
    smallMenu.style.display = 'block';
    smallMenuCustom.classList.add('active-menu');
    smallMenuReadymade.classList.remove('active-menu');
    smallMenuEducation.classList.remove('active-menu');
  } else if (currentOffset < portfolioCustomOffset) {
    smallMenu.style.display = 'none';
  };
});

// Display small size of portfolio-menu End


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});