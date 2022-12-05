const page = document.querySelector('.page');
const title = document.querySelector('.container_title');
const text = document.querySelector('.container_text');
const image = document.querySelector('.container_img');
let hours = new Date().getHours();

if(hours == 9 ||hours == 10 || hours == 15 || hours == 16 || hours == 21 || hours == 22){
    page.style.backgroundColor = '#464545';
    title.textContent = 'Наразі у Миколаєві немає світла'
    image.src='img/301.png'
    text.textContent = getTimeToTheLight();
}else {
    page.style.backgroundColor = '#f6f6d3';
    title.textContent = 'Наразі у Миколаєві є світло';
    image.src='img/3022.png'
    text.textContent = getTimeToNotLight();
}

function getTimeToTheLight(){
    let time = '';
    if(hours >= 9 && hours < 11){
        time = 'Чекаємо до 11:00'
    }else if (hours >= 15 && hours < 17){
        time = 'Чекаємо до 17:00'
    }else if (hours >= 21 && hours < 23){
        time = 'Чекаємо 23:00'
    }

    return time
}

function getTimeToNotLight(){
    let newTime = '';
    if(hours >= 0 && hours < 9){
        newTime = 'Очікуваний час відключення 09:00'
    }else if (hours >= 11 && hours < 16){
        newTime = 'Очікуваний час відключення - 15:00'
    }else if (hours >= 17 && hours < 22){
        newTime = 'Очікуваний час відключення - 21:00'
    }

    return newTime
}
