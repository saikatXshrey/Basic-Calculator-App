const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const clearbtn = document.querySelector('.btn-clear');
const equalbtn = document.querySelector('.btn-equal');

for(let i=0; i < btns.length; i++){
    btns[i].addEventListener('click',function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

equalbtn.addEventListener('click',function(){
    if(screen.value === ''){
        alert('Input is Empty!');
    }else{
        let value = eval(screen.value);
        screen.value = value;
    }
})

clearbtn.addEventListener('click',function(){
    screen.value = '';
})