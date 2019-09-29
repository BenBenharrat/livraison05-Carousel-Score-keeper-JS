let button = document.querySelector('button');
let li = document.querySelectorAll('li');
let currentLiIndex = 0;

function nextPicture() {
    removeActiveClass();
    currentLiIndex++
    getNextLiIndex()
    addActiveClass();
}

function removeActiveClass() {
    li[currentLiIndex].classList.remove('active')
}

function addActiveClass() {
    li[currentLiIndex].classList.add('active')
}

function getNextLiIndex() {
    if (currentLiIndex >= li.length ) {
        currentLiIndex =0;
    }
}

button.addEventListener('click', nextPicture);






/* 
function getCurrentLiIndex() {
    let arr = Array.from(li);
    return arr.findIndex(item => item.className == 'active');
} */