const button = document.querySelector('buttonWrapper');
const visual = document.querySelector('control-ani');


button.addEventListener('click', () => {
  // 이미 클래스라고 선언해서 . 을 찍으면 안된다 
  visual.classList.toggle('is--active');
});