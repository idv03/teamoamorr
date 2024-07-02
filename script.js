document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const question = document.querySelector('.question'); 
    const gif = document.querySelector('.gif');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');

    yesBtn.addEventListener('click', () => {
        question.innerHTML = "Te amoo!";
        gif.src = "https://i.pinimg.com/originals/c5/0a/c9/c50ac977b8a89140fc3f7bcb1a05e146.gif";

    });

    noBtn.addEventListener('mouseover', () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
});