// index.html
const contact_circle = document.querySelector('.contact_circle'); //연락
const circle_1 = document.querySelector('.circle_1'); //소개
const circle_2 = document.querySelector('.circle_2'); //활동
const circle_3 = document.querySelector('.circle_3'); //스킬
const circle_4 = document.querySelector('.circle_4'); //작품
const circle_5 = document.querySelector('.circle_5'); //땅콩

const circle_1_text = document.querySelector('.circle_1_text');

let angle = 0;  // 초기 각도

let is_circle_1_hovered = false;
let is_circle_2_hovered = false;
let is_circle_3_hovered = false;
let is_circle_4_hovered = false;
let is_circle_5_hovered = false;

// circle 1에 마우스를 올릴 때
circle_1.addEventListener("mouseenter", () => {
  if (!is_circle_1_hovered) {
    circle_1.classList.add("hovered");
    circle_1_text.classList.add("color_change");
    is_circle_1_hovered = true;
  }
});

// circle1 1에서 마우스를 뗄 때
circle_1.addEventListener("mouseleave", () => {
  if (!is_circle_2_hovered) {
    circle_1.classList.remove("hovered");
    circle_1_text.classList.remove("color_change");
    is_circle_1_hovered = false;
  }
});

// circle 2에 마우스를 올릴 때
circle_2.addEventListener("mouseenter", () => {
  is_circle_2_hovered = true;
  circle_1.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_1_text.classList.remove("color_change");
  circle_2.classList.add("hovered");
  circle_3.style.zIndex = 5;
  circle_4.style.zIndex = 6;
});

// circle 2에서 마우스를 뗄 때
circle_2.addEventListener("mouseleave", () => {
  is_circle_2_hovered = false;
  circle_2.classList.remove("hovered");

  // circle 2을 떠났을 때, 바깥 원이 hover 상태면 다시 반영
  if (is_circle_1_hovered) {
    circle_1.classList.add("hovered");
    circle_1_text.classList.add("color_change");
  }
});

// circle 3에 마우스를 올릴 때
circle_3.addEventListener("mouseenter", () => {
  is_circle_3_hovered = true;
  circle_1.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_1_text.classList.remove("color_change");
  circle_2.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_3.classList.add("hovered");
  circle_4.style.zIndex = 6;
});

// circle 3에서 마우스를 뗄 때
circle_3.addEventListener("mouseleave", () => {
  is_circle_3_hovered = false;
  circle_3.classList.remove("hovered");

  // circle 3을 떠났을 때, 바깥 원이 hover 상태면 다시 반영
  if (is_circle_1_hovered) {
    circle_1.classList.add("hovered");
    circle_1_text.classList.add("color_change");
  }
  else if (is_circle_2_hovered) {
    circle_2.classList.add("hovered");
  }
});

// circle 4에 마우스를 올릴 때
circle_4.addEventListener("mouseenter", () => {
  is_circle_4_hovered = true;
  circle_1.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_1_text.classList.remove("color_change");
  circle_2.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_3.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_4.classList.add("hovered");
});

// circle 4에서 마우스를 뗄 때
circle_4.addEventListener("mouseleave", () => {
  is_circle_4_hovered = false;
  circle_4.classList.remove("hovered");

  // circle 4을 떠났을 때, 바깥 원이 hover 상태면 다시 반영
  if (is_circle_1_hovered) {
    circle_1.classList.add("hovered");
    circle_1_text.classList.add("color_change");
  }
  else if (is_circle_2_hovered) {
    circle_2.classList.add("hovered");
  }
  else if (is_circle_3_hovered) {
    circle_3.classList.add("hovered");
  }
});

// circle 5에 마우스를 올릴 때
circle_5.addEventListener("mouseenter", () => {
  is_circle_5_hovered = true;
  circle_1.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_1_text.classList.remove("color_change");
  circle_2.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_3.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_4.classList.remove("hovered"); // 바깥 원의 hover 상태를 즉시 제거
  circle_5.classList.add("hovered");
});

// circle 5에서 마우스를 뗄 때
circle_5.addEventListener("mouseleave", () => {
  is_circle_5_hovered = false;
  circle_5.classList.remove("hovered");

  // circle 5을 떠났을 때, 바깥 원이 hover 상태면 다시 반영
  if (is_circle_1_hovered) {
    circle_1.classList.add("hovered");
    circle_1_text.classList.add("color_change");
  }
  else if (is_circle_2_hovered) {
    circle_2.classList.add("hovered");
  }
  else if (is_circle_3_hovered) {
    circle_3.classList.add("hovered");
  }
  else if (is_circle_4_hovered) {
    circle_4.classList.add("hovered");
  }
});

// contact_circle 클릭 시 contact.html로 이동
contact_circle.addEventListener('click', function(event) {
  event.stopPropagation(); // 부모의 클릭 이벤트를 막음
  window.location.href = 'contact.html';
});

// circle_1 클릭 시 jeemin.html로 이동
circle_1.addEventListener('click', function() {
  window.location.href = 'jeemin.html';
});

// circle_2 클릭 시 activities.html로 이동
circle_2.addEventListener('click', function(event) {
  event.stopPropagation(); // 부모의 클릭 이벤트를 막음
  window.location.href = 'activities.html';
});

// circle_3 클릭 시 skills.html로 이동
circle_3.addEventListener('click', function(event) {
  event.stopPropagation(); // 부모의 클릭 이벤트를 막음
  window.location.href = 'skills.html';
});

// circle_4 클릭 시 craft.html로 이동
circle_4.addEventListener('click', function(event) {
  event.stopPropagation(); // 부모의 클릭 이벤트를 막음
  window.location.href = 'craft.html';
});

// circle_5 클릭 시 peanut.html로 이동
circle_5.addEventListener('click', function(event) {
  event.stopPropagation(); // 부모의 클릭 이벤트를 막음
  window.location.href = 'peanut.html';
});


function animate() {
    const circle_1_Radius = circle_1.offsetWidth / 2;  // 바깥 원의 반지름
    const circle_2_Radius = circle_2.offsetWidth / 2;  // 안쪽 원의 반지름
    const circle_3_Radius = circle_3.offsetWidth / 2;  // 안쪽 원의 반지름
    const circle_4_Radius = circle_4.offsetWidth / 2;  // 안쪽 원의 반지름
    const circle_5_OrbitRadius = circle_1_Radius * 1.15;  // circle_5가 공전할 거리 (조정 가능)

    // 회전 반지름 조정
    const distance = circle_1_Radius - circle_2_Radius;
    const distance_2 = circle_1_Radius - circle_3_Radius;
    const distance_3 = circle_1_Radius - circle_4_Radius;

    angle += 0.006;  // 회전 속도 조절

    // 바깥 원의 반지름에 맞게 안쪽 원의 위치 계산
    const x = distance * Math.cos(angle);
    const y = distance * Math.sin(angle);

    const x2 = distance_2 * Math.cos(angle);
    const y2 = distance_2 * Math.sin(angle);

    const x3 = distance_3 * Math.cos(angle);
    const y3 = distance_3 * Math.sin(angle);

    // 안쪽 원의 위치 업데이트
    circle_2.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    circle_3.style.transform = `translate(-50%, -50%) translate(${x2}px, ${-y2}px)`;
    circle_4.style.transform = `translate(-50%, -50%) translate(${x3}px, ${y3}px)`;
    
    // circle_5는 circle_1의 바깥을 공전
    const x5 = circle_5_OrbitRadius * Math.cos(angle);
    const y5 = circle_5_OrbitRadius * Math.sin(angle);
    circle_5.style.transform = `translate(-50%, -50%) translate(${x5}px, ${-y5}px)`;

    requestAnimationFrame(animate);
}

animate();  // 애니메이션 시작