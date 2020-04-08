const toggleButton = document.querySelector('.src');
const bg = document.querySelector('body');
const heading = document.querySelector('header .top-section .header-left h1');
const followerCount = document.querySelector('#follower-count');
const cardTop = document.querySelectorAll('.social-box');
const cardContentTop = document.querySelectorAll('.user');
const cardStatNumber = document.querySelectorAll('.follower-count');
const numberType = document.querySelectorAll('.what-number');
const overviewToday = document.querySelector('.overview h1');
const overCards = document.querySelectorAll('.cmn')
const overCardStatNumber = document.querySelectorAll('.stat-number');
const overCardsStatName = document.querySelectorAll('.stat-name p');
const modeName = document.querySelector('.header-right p');
const line = document.querySelector('.line');
const refrenceElementForLine = document.querySelector('.header-right');


toggleButton.addEventListener('change', () => {
    // LIGHT MODE
    if (toggleButton.checked) {
        bg.style.backgroundColor = 'hsl(0, 0%, 100%)';
        heading.style.color = 'hsl(230, 17%, 14%)';
        followerCount.style.color = 'hsl(228, 12%, 44%)';
        overviewToday.style.color = 'hsl(230, 17%, 14%)';
        modeName.style.color = 'hsl(230, 17%, 14%)';
        modeName.textContent = 'Light Mode';
        for (let i = 0; i < 4; i++) {
            cardTop[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
            cardContentTop[i].style.color = 'hsl(230, 17%, 14%)';
            cardStatNumber[i].style.color = 'hsl(230, 17%, 14%)';
            numberType[i].style.color = 'hsl(228, 12%, 44%)';
        }
        for (let i = 0; i < 8; i++) {
            overCards[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
            overCardStatNumber[i].style.color = 'hsl(230, 17%, 14%)';
            overCardsStatName[i].style.color = 'hsl(230, 17%, 14%)';
        }


    }
    // DARK MODE
    else {
        bg.style.backgroundColor = 'hsl(230, 17%, 14%)';
        heading.style.color = 'white';
        followerCount.style.color = 'hsl(228, 34%, 66%)'
        overviewToday.style.color = 'white';
        modeName.style.color = 'white';
        modeName.textContent = 'Dark Mode';
        for (let i = 0; i < 4; i++) {
            cardTop[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
            cardContentTop[i].style.color = 'hsl(228, 34%, 66%)';
            cardStatNumber[i].style.color = 'white';
            numberType[i].style.color = 'hsl(228, 34%, 66%)';
        }
        for (let i = 0; i < 8; i++) {
            overCards[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
            overCardStatNumber[i].style.color = 'white';
            overCardsStatName[i].style.color = 'hsl(228, 34%, 66%)';
        }
    }
});

function addTheBreakLine(x) {
    if(x.matches) {
        line.style.display = 'block';
    }
    else {
        line.style.display = 'none';
    }
}

let x = window.matchMedia("(max-width: 620px)");
addTheBreakLine(x);
x.addListener(addTheBreakLine);