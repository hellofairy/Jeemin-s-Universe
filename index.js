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


// 마우스 커서
var colour = "random"; // "random" can be replaced with any valid colour ie: "red"...
var sparkles = 100;// increase of decrease for number of sparkles falling

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

colours=new Array('#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','ff00ff')

n = 10;
y = 0;
x = 0;
n6=(document.getElementById&&!document.all);
ns=(document.layers);
ie=(document.all);
d=(ns||ie)?'document.':'document.getElementById("';
a=(ns||n6)?'':'all.';
n6r=(n6)?'")':'';
s=(ns)?'':'.style';

if (ns){
	for (i = 0; i < n; i++)
		document.write('<layer name="dots'+i+'" top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>');
}

if (ie)
	document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

if (ie||n6){
	for (i = 0; i < n; i++)
		document.write('<div id="dots'+i+'" style="position:absolute;top:0px;left:0px;width:'+i/2+'px;height:'+i/2+'px;background:#ff0000;font-size:'+i/2+'"></div>');
}

if (ie)
	document.write('</div></div>');
(ns||n6)?window.captureEvents(Event.MOUSEMOVE):0;

function Mouse(evnt){

	y = (ns||n6)?evnt.pageY+4 - window.pageYOffset:event.y+4;
	x = (ns||n6)?evnt.pageX+1:event.x+1;
}

(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;

function animate_cursor (){

	o=(ns||n6)?window.pageYOffset:0;

	if (ie)con.style.top=document.body.scrollTop + 'px';

	for (i = 0; i < n; i++){

		var temp1 = eval(d+a+"dots"+i+n6r+s);

		randcolours = colours[Math.floor(Math.random()*colours.length)];

		(ns)?temp1.bgColor = randcolours:temp1.background = randcolours; 

		if (i < n-1){

			var temp2 = eval(d+a+"dots"+(i+1)+n6r+s);
			temp1.top = parseInt(temp2.top) + 'px';
			temp1.left = parseInt(temp2.left) + 'px';

		} 
		else{

			temp1.top = y+o + 'px';
			temp1.left = x + 'px';
		}
	}

	setTimeout("animate()",10);
}

animate_cursor();

window.onload=function() { if (document.getElementById) {
	var i, rats, rlef, rdow;
	for (var i=0; i<sparkles; i++) {
		var rats=createDiv(3, 3);
		rats.style.visibility="hidden";
		rats.style.zIndex="999";
		document.body.appendChild(tiny[i]=rats);
		starv[i]=0;
		tinyv[i]=0;
		var rats=createDiv(5, 5);
		rats.style.backgroundColor="transparent";
		rats.style.visibility="hidden";
		rats.style.zIndex="999";
		var rlef=createDiv(1, 5);
		var rdow=createDiv(5, 1);
		rats.appendChild(rlef);
		rats.appendChild(rdow);
		rlef.style.top="2px";
		rlef.style.left="0px";
		rdow.style.top="0px";
		rdow.style.left="2px";
		document.body.appendChild(star[i]=rats);
	}
	set_width();
	sparkle();
}}

function sparkle() {
	var c;
	if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
		ox=x;
		oy=y;
		for (c=0; c<sparkles; c++) if (!starv[c]) {
			star[c].style.left=(starx[c]=x)+"px";
			star[c].style.top=(stary[c]=y+1)+"px";
			star[c].style.clip="rect(0px, 5px, 5px, 0px)";
			star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
			star[c].style.visibility="visible";
			starv[c]=50;
			break;
		}
	}
	for (c=0; c<sparkles; c++) {
		if (starv[c]) update_star(c);
		if (tinyv[c]) update_tiny(c);
	}
	setTimeout("sparkle()", 40);
}

function update_star(i) {
	if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
	if (starv[i]) {
		stary[i]+=1+Math.random()*3;
		starx[i]+=(i%5-2)/5;
		if (stary[i]<shigh+sdown) {
			star[i].style.top=stary[i]+"px";
			star[i].style.left=starx[i]+"px";
		}
		else {
			star[i].style.visibility="hidden";
			starv[i]=0;
			return;
		}
	}
	else {
		tinyv[i]=50;
		tiny[i].style.top=(tinyy[i]=stary[i])+"px";
		tiny[i].style.left=(tinyx[i]=starx[i])+"px";
		tiny[i].style.width="2px";
		tiny[i].style.height="2px";
		tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
		star[i].style.visibility="hidden";
		tiny[i].style.visibility="visible"
	}
}

function update_tiny(i) {
	if (--tinyv[i]==25) {
		tiny[i].style.width="1px";
		tiny[i].style.height="1px";
	}
	if (tinyv[i]) {
		tinyy[i]+=1+Math.random()*3;
		tinyx[i]+=(i%5-2)/5;
		if (tinyy[i]<shigh+sdown) {
			tiny[i].style.top=tinyy[i]+"px";
			tiny[i].style.left=tinyx[i]+"px";
		}
		else {
			tiny[i].style.visibility="hidden";
			tinyv[i]=0;
			return;
		}
	}
	else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
	if (e) {
		y=e.pageY;
		x=e.pageX;
	}
	else {
		set_scroll();
		y=event.y+sdown;
		x=event.x+sleft;
	}
}

window.onscroll=set_scroll;
function set_scroll() {
	if (typeof(self.pageYOffset)=='number') {
		sdown=self.pageYOffset;
		sleft=self.pageXOffset;
	}
	else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		sdown=document.body.scrollTop;
		sleft=document.body.scrollLeft;
	}
	else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		sleft=document.documentElement.scrollLeft;
		sdown=document.documentElement.scrollTop;
	}
	else {
		sdown=0;
		sleft=0;
	}
}

window.onresize=set_width;
function set_width() {
	var sw_min=999999;
	var sh_min=999999;
	if (document.documentElement && document.documentElement.clientWidth) {
		if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
		if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
	}
	if (typeof(self.innerWidth)=='number' && self.innerWidth) {
		if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
		if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
	}
	if (document.body.clientWidth) {
		if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
		if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
	}
	if (sw_min==999999 || sh_min==999999) {
		sw_min=800;
		sh_min=600;
	}
	swide=sw_min;
	shigh=sh_min;
}

function createDiv(height, width) {
	var div=document.createElement("div");
	div.style.position="absolute";
	div.style.height=height+"px";
	div.style.width=width+"px";
	div.style.overflow="hidden";
	return (div);
}

function newColour() {
	var c=new Array();
	c[0]=255;
	c[1]=Math.floor(Math.random()*256);
	c[2]=Math.floor(Math.random()*(256-c[1]/2));
	c.sort(function(){return (0.5 - Math.random());});
	return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}