const page = document.querySelector('.page');
const title = document.querySelector('.container_title');
const text = document.querySelector('.container_text');
const image = document.querySelector('.container_img');
let hours = new Date().getHours();

if(hours == 8 ||hours == 9 || hours == 14 || hours == 15 || hours == 20 || hours == 21){
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
    if(hours >= 8 && hours < 11){
        time = 'Чекаємо 10 години'
    }else if (hours >= 14 && hours < 17){
        time = 'Чекаємо 16 години'
    }else if (hours >= 20 && hours < 23){
        time = 'Чекаємо 22 години'
    }

    return time
}

function getTimeToNotLight(){
    let newTime = '';
    if(hours >= 0 && hours < 8){
        newTime = 'Очікуваний час відключення - 08:00'
    }else if (hours >= 10 && hours < 14){
        newTime = 'Очікуваний час відключення - 14:00'
    }else if (hours >= 16 && hours < 20){
        newTime = 'Очікуваний час відключення - 20:00'
    }

    return newTime
}
