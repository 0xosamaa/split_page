const ps5 = document.querySelector('.ps5')
const xbox = document.querySelector('.xbox')

function resizeLeft() {
    ps5.classList.toggle('active')
    
}

function resizeRight() {
    xbox.classList.toggle('active')
}

xbox.addEventListener('mouseover', resizeRight)
xbox.addEventListener('mouseout', resizeRight)
ps5.addEventListener('mouseover', resizeLeft)
ps5.addEventListener('mouseout', resizeLeft)