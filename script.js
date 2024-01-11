const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
//Ham hien thi modal
function showModal() {
    modal.classList.add('open')
}
//Ham an modal
function hidenModal() {
    modal.classList.remove('open')
}
//Lap qua tung nut click
for(const buybtn of buyBtns){
    buybtn.addEventListener('click',showModal)
}
//Chon dau x de tat
modalClose.addEventListener('click',hidenModal)
modalContainer.addEventListener('click', function (event){
    event.stopPropagation()
})
