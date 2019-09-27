let button = document.querySelector('button');
let li = document.querySelectorAll('li');

function nextPicture() {

}
function checkActiveClass() {

}
function removeActiveClass() {
    li[getCurrentLiIndex()].classList.remove('active')
}
function addActiveClass() {
    li[getNextLiIndex()].classList.add('active')
}
function getCurrentLiIndex() {
    let arr = Array.from(li);
    return arr.findIndex(item => item.className == 'active');
}
function getNextLiIndex() {
    if(getCurrentLiIndex() == li.length - 1 ) return 0;
    return getCurrentLiIndex() + 1;
}
