
const circle_1 = document.querySelector('.circle_1');
const circle_2 = document.querySelector('.circle_2');
const circle_3 = document.querySelector('.circle_3');
const circle_4 = document.querySelector('.circle_4');
const circle_5 = document.querySelector('.circle_5'); // 새로운 원 추가
let angle = 0;  // 초기 각도

function animate() {
    const outerRadius = circle_1.offsetWidth / 2;  // 바깥 원의 반지름
    const innerRadius = circle_2.offsetWidth / 2;  // 안쪽 원의 반지름
    const circle5OrbitRadius = outerRadius * 1.2;  // circle_5가 공전할 거리 (조정 가능)

    // 회전 반지름 조정
    const distance = outerRadius - innerRadius;

    angle += 0.006;  // 회전 속도 조절

    // 바깥 원의 반지름에 맞게 안쪽 원의 위치 계산
    const x = distance * Math.cos(angle);
    const y = distance * Math.sin(angle);

    // 안쪽 원의 위치 업데이트
    circle_2.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    circle_3.style.transform = `translate(-50%, -50%) translate(${x}px, ${-y}px)`;
    circle_4.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    
    // circle_5는 circle_1의 바깥을 공전
    const x5 = circle5OrbitRadius * Math.cos(angle);
    const y5 = circle5OrbitRadius * Math.sin(angle);
    circle_5.style.transform = `translate(-50%, -50%) translate(${x5}px, ${-y5}px)`;

    requestAnimationFrame(animate);
}

animate();  // 애니메이션 시작
