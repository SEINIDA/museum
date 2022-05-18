document.addEventListener('DOMContentLoaded', function() {

	const $slides = document.querySelectorAll('.slides > .slides-container > p');
	const $indicators = document.querySelectorAll('.slides > .slides-pagination > li > a');
	
	const $btnPrev = document.querySelector('.slides > a.prev');
	const $btnNext = document.querySelector('.slides > a.next');

	const $btnAuto = document.querySelector('.slides>.btn_auto'); //자동재생 버튼

	let intervalKey = null;

	let nowIdx = Math.floor(Math.random()*2); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let oldIdx = nowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$slides[nowIdx].classList.add('on');
	$indicators[nowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$indicators.forEach(function($indicator, idx){

		$indicator.addEventListener('click', function(evt){
			evt.preventDefault();

			oldIdx = nowIdx;
			nowIdx = idx;

			//이전 인디케이터 비활성화
			$indicators[oldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$indicators[nowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$slides[oldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$slides[nowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.addEventListener('click', function(evt){
		evt.preventDefault();
		oldIdx = nowIdx;

		if(nowIdx<2){
			nowIdx++;
		}else{
			nowIdx=0;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$btnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		oldIdx = nowIdx;

		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx=2;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$btnAuto.addEventListener('click', function() {
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.click();
			}, 2000);
		}
	});

	 // 메뉴셀렉팅
	 const $mnu_1 = $('header>nav>.gnb>li:nth-child(1)>a');
	 const $mnu_2 = $('header>nav>.gnb>li:nth-child(2)>a');
	 const $mnu_3 = $('header>nav>.gnb>li:nth-child(3)>a');
	 const $mnu_4 = $('header>nav>.gnb>li:nth-child(4)>a');
	 const $mnu_5 = $('header>nav>.gnb>li:nth-child(5)>a');
	 const $mnu_6 = $('header>nav>.gnb>li:nth-child(6)>a');
 
	 console.log($mnu_1);
 
	 // 첫메뉴 클릭이벤트 구문
	 
	 $mnu_1.on('click',function(evt){
		 evt.preventDefault();
		 
		 console.log('첫번째 메뉴 클릭 성공~!');
 
		 $('html, body').animate({
			 scrollTop:1001
	 
 
		 });
 
	 });
 
		 
	 $mnu_2.on('click',function(evt){
		 evt.preventDefault();
		 
		 console.log('두번째 메뉴 클릭 성공~!');
 
		 $('html, body').animate({
			 scrollTop:1909
	 
 
		 });
 
	 });
 
	 $mnu_3.on('click',function(evt){
		 evt.preventDefault();
		 
		 console.log('세번째 메뉴 클릭 성공~!');
 
		 $('html, body').animate({
			 scrollTop:2827
	 
 
		 });
 
	 });
 
	 $mnu_4.on('click',function(evt){
		 evt.preventDefault();
		 
		 console.log('네번째 메뉴 클릭 성공~!');
 
		 $('html, body').animate({
			 scrollTop:3753
	 
 
		 });
 
	 });
 
	 $mnu_5.on('click',function(evt){
		 evt.preventDefault();
		 
		 console.log('다섯번째 메뉴 클릭 성공~!');
 
		 $('html, body').animate({
			 scrollTop:4657
	 
 
		 });
 
	 });
 
	 $mnu_6.on('click',function(evt){
		 evt.preventDefault();
		 
		 console.log('여섯번째 메뉴 클릭 성공~!');
 
		 $('html, body').animate({
			 scrollTop:5570
	 
 
		 });
 
	 });
});