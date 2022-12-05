const page = document.querySelector('.page');
const title = document.querySelector('.container_title');
const text = document.querySelector('.container_text');
const image = document.querySelector('.container_img');
let hours = new Date().getHours();

if(hours == 7 ||hours == 8 || hours == 13 || hours == 14 || hours == 19 || hours == 20){
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
    if(hours >= 7 && hours < 10){
        time = 'Чекаємо до 9:00'
    }else if (hours >= 13 && hours < 16){
        time = 'Чекаємо до 15:00'
    }else if (hours >= 19 && hours < 22){
        time = 'Чекаємо 21:00'
    }

    return time
}

function getTimeToNotLight(){
    let newTime = '';
    if(hours >= 0 && hours < 7){
        newTime = 'Очікуваний час відключення - 07:00'
    }else if (hours >= 9 && hours < 13){
        newTime = 'Очікуваний час відключення - 13:00'
    }else if (hours >= 15 && hours < 19){
        newTime = 'Очікуваний час відключення - 19:00'
    }

    return newTime
}
