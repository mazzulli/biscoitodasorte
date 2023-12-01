const btnCookie = document.querySelector('#imgCookie')
const btnReset  = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const main = document.querySelector('main')
const msg1 = document.querySelector('.msg1')
const msg2 = document.querySelector('.msg2')


btnCookie.addEventListener('click', function(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    main.classList.add('resize')    
})

btnReset.addEventListener('click', function(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    main.classList.remove('resize')
    msg1.classList.toggle('hide')
    msg2.classList.toggle('hide')
})