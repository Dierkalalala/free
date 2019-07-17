function nextSlide() {
    let currentSlide = document.querySelector('.active__slide');
    let nextSlide = currentSlide.nextElementSibling;
    currentSlide.classList.remove('active__slide');
    if(nextSlide == null){
        document.getElementsByClassName('slider__item')[0].classList.add('active__slide');
        return false;
    }
    nextSlide.classList.add('active__slide');
    nextSlide.classList.add('keyframe');


}
function prevSlide() {
    let currentSlide = document.querySelector('.active__slide');
    let prevSlide = currentSlide.previousElementSibling;
    currentSlide.classList.remove('active__slide');
    if(prevSlide == null){
        let slides = document.getElementsByClassName('slider__item');
        slides[slides.length - 1].classList.add('active__slide');
        return false
    }
    prevSlide.classList.add('active__slide');

}
function showOrderForm(n) {

    let orderWindow = document.getElementsByClassName('consultation-wrapper')[0]
    orderWindow.classList.toggle('consultation-wrapper-active')
    document.documentElement.classList.add('overflow')

    if(n == 1){
        orderWindow.getElementsByTagName('h2')[0].innerText = "Получить консультацию"
    } else {
        orderWindow.getElementsByTagName('h2')[0].innerText = "Регистрация на оказание услуг"
    }
}
function closeOrderForm() {
    let orderWindow = document.getElementsByClassName('consultation-wrapper')[0]
    orderWindow.classList.toggle('consultation-wrapper-active');
    document.documentElement.classList.remove('overflow')
}
window.onload = function () {
    let orderButtons = document.getElementsByClassName('about__item-btn');
    Array.from(orderButtons).forEach((button) => {
        button.addEventListener('click', () => {
            showOrderForm(0)
        })
    })
    setTimeout(() => {
        let preloader = document.getElementById('preloader')
        if  ( !preloader.classList.contains('loaded') ) {
            preloader.classList.add('loaded')
        }
    }, 1000)
}
