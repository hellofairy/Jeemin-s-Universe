// craft.html
const index_circle = document.querySelector('.index_circle'); //Jeemin Universe로 돌아가기

// index_circle 클릭 시 index.html로 이동
index_circle.addEventListener('click', function(event) {
  event.stopPropagation(); // 부모의 클릭 이벤트를 막음
  window.location.href = 'index.html';
  console.log("실행");
  
});