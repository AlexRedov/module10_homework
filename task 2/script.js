//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
const btn1 = document.querySelector('.btn__1');
const btn2 = document.querySelector('.btn__2');

function getWidthHeightScreen() {
  let width = window.screen.width;
  let height = window.screen.height;
  return alert(` Размеры текущего экрана: ширина - ${width} px, высота - ${height} px`);
}

function getWidthHeightViewing() {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  return alert(` Размеры области просмотра: ширина - ${width} px, высота - ${height} px`);
}

btn1.addEventListener('click', getWidthHeightScreen);
btn2.addEventListener('click', getWidthHeightViewing);
