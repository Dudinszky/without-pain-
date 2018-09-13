var prev = document.querySelector('.gallery .buttons #btn-prev');
var next = document.querySelector('.gallery .buttons #btn-next');
var image = document.querySelectorAll('.gallery .photos img');
var i = 0;

next.addEventListener('click', function () {
  image[i].className = '';
  i++;
  if (i >= image.length) {
    i = 0;
  }
  image[i].className = 'showed';
})

prev.addEventListener('click', function() {
  image[i].className = '';
  i --;
  if (i < 0) {
    i = image.length -1;
  }
  image[i].className = 'showed';
})

function myTranslate () {
  var rotate = document.getElementById('find');
  var hoverTarget = document.querySelector('.section');

  rotate.style.transform = 'translateX(440px)';

  hoverTarget.onmouseover = function () {
    rotate.style.transform = '';
  }
  hoverTarget.onmouseout = function () {
    rotate.style.transform = 'translateX(440px)';
  }
}
myTranslate();

function Mybutton () {
  var targetM = document.getElementById('find');
  var firstM = document.getElementById('btn-prev');
  var secondM = document.getElementById('btn-next');

  targetM.onmouseout = function () {
    firstM.style.display = 'none';
    secondM.style.display = 'none';
  }
  targetM.onmouseover = function (e) {
    firstM.style.display = 'block';
    secondM.style.display = 'block';
  }
}
Mybutton();