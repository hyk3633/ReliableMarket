//신상품 슬라이드
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev2'),
    slideWidth = 300,
    slideMargin = 30,
    nextBtn = document.querySelector('.next2');

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    function moveSlide(num){
      slides.style.left = -num * 330 + 'px';
      currentIdx = num;
    }
    nextBtn.addEventListener('click',function(){
      if(currentIdx < slideCount - 3){
        moveSlide(currentIdx + 1);
      }else{
        moveSlide(0);
      }
      
    });
    prevBtn.addEventListener('click',function(){
      if(currentIdx > 0){
        moveSlide(currentIdx - 1);
      }else{
        moveSlide(slideCount - 3);
      }
      
    });

//인기상품 슬라이드
var pageIndex = 1;
displaySlide(pageIndex);

function plusSlide(n) {
  displaySlide(pageIndex += n);
}

function slidePage(n) {
  displaySlide(pageIndex = n);
}

function displaySlide(n) {
  var j;
  var page = document.getElementsByClassName("popular_single");
  var menu = document.getElementsByClassName("menu");
  if (n > page.length) {pageIndex = 1}    
  if (n < 1) {pageIndex = page.length}
  for (j = 0; j < page.length; j++) {
    page[j].style.display = "none";  
  }
  for (j = 0; j < menu.length; j++) {
      menu[j].className = menu[j].className.replace(" active", "");
  }
  page[pageIndex-1].style.display = "block";  
  menu[pageIndex-1].className += " active";
}

//상품 목록 화면 카테고리 펼치기
function unfold() {

  var title = document.getElementById("title");
  var content = document.getElementById("content");

  if(content.style.display=="none") {
    content.style.display=''; 
    title.innerText = '➤ 누르면 접기';
  } 
  else {
    content.style.display = 'none';
    title.innerText = '➤ 누르면 펼치기';
  }
}

//상품 목록 정렬
function sorting(type) {
  var i;
  var sorttype = type;
  var content = document.getElementById(1);
  var content2;
  var parent = content.parentNode;

  if(sorttype=="asc") {
    for(i=9; i>0; i--) {
      content = document.getElementById(i);
      parent.insertBefore(content, parent.firstChild);
    }
  }
  else if(sorttype=="desc") {
    for(i=1; i<=9; i++) {
      content = document.getElementById(i);
      parent.insertBefore(content, parent.firstChild);
    }
  }
  else {
    for(i=11; i<=19; i++) {
      content2 = document.getElementById(i);
      content = content2.parentNode;
      parent = content.parentNode;
      parent.insertBefore(content, parent.firstChild);
    }
  }
}

//찜하기
function wishlist_notLoggedin() {
  
  alert("로그인 후 이용해 주시기 바랍니다.");
  
}
function wishlist() {
  
  alert("찜목록에 추가했습니다.");
  
}

//총 상품금액 계산
function priceCalcul() {
  var price = document.getElementById("saleprice").innerText;
  var quantity = document.getElementById("quantity").value;
  var price_split = price.split(",");
  var finalprice;

  price = parseInt(price_split[0]+price_split[1]);
  if(quantity<1) {
    alert("1개 이상만 구매가능합니다.")
    document.getElementById("quantity").value = 1;
  }
  else if(quantity>100){
    alert("최대 100개 까지 구매가능합니다.")
    document.getElementById("quantity").value = 100;
  }
  quantity = document.getElementById("quantity").value;
  finalprice = price*parseInt(quantity);
  
  document.getElementById("finalprice").innerText = numberWithCommas(finalprice)+"원";
  
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* 로그인 체크 (미리 저장된 테스트용 id/pw) */

function loginchk() {
	var chk_id = document.getElementById("id").value;
	var chk_pw = document.getElementById("pw").value;
  
  //지정된 id : admin1
  //지정된 password : admin123!
	if (chk_id == "admin1" && chk_pw == "admin123!") {
		alert(chk_id + " 님 반갑습니다.");
		location.href = "../HTML-LoginOK/index.html";
	}
	else if(chk_id.length==0){
		alert("아이디를 입력하세요.");
  }
  else if(chk_pw.length==0){
		alert("비밀번호를 입력하세요.");
  }
  else {
    alert("아이디, 비밀번호가 틀렸거나 존재하지 않는 아이디 입니다.");
  }
}

/* 로그인시 Enter 키 눌렀을때 작동되게 하기 */
function enterKey() {
	if (window.event.keyCode == 13) {
		loginchk();
	}
}

/*--------------
 [ 회원가입화면 ]
--------------*/

function sign_up_chk() {
  var sign_up_id = document.getElementById("sign_up_id").value;
  var sign_up_email = document.getElementById("sign_up_email").value;
  var sign_up_domain = document.getElementById("sign_up_domain").value;
  var sign_up_pw = document.getElementById("sign_up_pw").value;
  var sign_up_pwchk = document.getElementById("sign_up_pwchk").value;
  var sign_up_name = document.getElementById("sign_up_name").value;
  var sign_up_agency = document.getElementById("sign_up_agency").value;
  var sign_up_number_first = document.getElementById("sign_up_number_first").value;
  var sign_up_number_second = document.getElementById("sign_up_number_second").value;
  var sign_up_number_third = document.getElementById("sign_up_number_third").value;
  var sign_up_terms1 = document.getElementById("sign_up_terms1").checked;
  var sign_up_terms2 = document.getElementById("sign_up_terms2").checked;
  var sign_up_terms3 = document.getElementById("sign_up_terms3").checked;
  var pattern = /[`~!@#$%^&*|\\\'";:\/?]/gi;
	var pattern2 = /[0-9]/;
	var pattern3 = /[a-zA-Z]/;


  /* 아이디 유효성 체크 */
	if (sign_up_id.length == 0) {
		alert("아이디를 입력해주세요.");
		return;
	}
	else if (sign_up_id.search(/\s/) != -1) {
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;
	}
	else if (pattern.test(sign_up_id)) {
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;
  }
  /* 이메일 체크 */
  else if (sign_up_email.length == 0) {
    alert("이메일을 입력해주세요.");
		return;
  }
  else if (sign_up_domain == "") {
    alert("이메일 주소를 선택해주세요.");
		return;
  }
	/* 비밀번호 유효성 체크 */
	else if (!pattern2.test(sign_up_pw) || !pattern3.test(sign_up_pw) || !pattern.test(sign_up_pw) || sign_up_pw.length < 8) {
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;
	}
	/* 비밀번호 재확인 */
	else if (sign_up_pw != sign_up_pwchk) {
		alert("입력하신 비밀번호가 다릅니다.")
		return;
	}
	/* 이름 체크 */
  else if(sign_up_name.length == 0) {
    alert("이름을 입력해주세요.");
		return;
  }
  else if(pattern3.test(sign_up_name)) {
    alert("이름은 한글로 입력해주세요.");
		return;
  }
  /* 휴대폰 번호 체크 */
  else if(sign_up_agency=="") {
    alert("통신사를 선택해주세요.");
		return;
  }
  else if(sign_up_number_first==""){
    alert("휴대폰 번호 앞자리를 선택해주세요.");
		return;
  }
  else if(sign_up_number_second.length==0){
    alert("휴대폰 번호를 입력해주세요.");
		return;
  }
  else if(sign_up_number_third.length==0){
    alert("휴대폰 번호를 입력해주세요.");
		return;
  }
  /* 약관 동의 체크 */
  else if(sign_up_terms1==false || sign_up_terms2==false || sign_up_terms3==false){
    alert("약관에 동의해주세요.");
		return;
  }
  else {
    if (confirm("입력한 정보로 가입하시겠습니까?") == true) {
      alert("회원가입을 환영합니다! 메인페이지에서 다시 로그인 해주세요.");
      location.href = "../main.html"
    }
  }
}

/*----------
 [ ID 찾기 ]
----------*/

function send_by_email() {
  var findID_email = document.getElementById("findID_email").value;
  var findID_domain = document.getElementById("findID_domain").value;

  if (findID_email.length == 0) {
    alert("이메일을 입력해주세요.");
		return;
  }
  else if (findID_domain == "") {
    alert("이메일 주소를 선택해주세요.");
		return;
  }
  else {
    alert("등록된 이메일 주소로 인증번호가 발송되었습니다.");
		return;
  }

}
function findID_by_email() {
  var findID_verifyNumber = document.getElementById("findID_verifyNumber").value;

  if(findID_verifyNumber=="") {
    alert("잘못된 인증번호 입니다.")
  }
  else {
    alert("회원님의 아이디는 [abmin1] 입니다.");
    return;
  }
}

function send_by_phonenumber() {
  var findID_agency = document.getElementById("findID_agency").value;
  var findID_number_first = document.getElementById("findID_number_first").value;
  var findID_number_second = document.getElementById("findID_number_second").value;
  var findID_number_third = document.getElementById("findID_number_third").value;

  if(findID_agency=="") {
    alert("통신사를 선택해주세요.");
		return;
  }
  else if(findID_number_first==""){
    alert("휴대폰 번호 앞자리를 선택해주세요.");
		return;
  }
  else if(findID_number_second.length==0){
    alert("휴대폰 번호를 입력해주세요.");
		return;
  }
  else if(findID_number_third.length==0){
    alert("휴대폰 번호를 입력해주세요.");
		return;
  }
  else {
    alert("등록된 이메일 주소로 인증번호가 발송되었습니다.");
		return;
  }
}
function findID_by_phonenumber() {
  var findID_verifyNumberP = document.getElementById("findID_verifyNumberP").value;

  if(findID_verifyNumberP=="") {
    alert("잘못된 인증번호 입니다.")
  }
  else {
    alert("회원님의 아이디는 [abmin1] 입니다.");
    return;
  }

}
/* 비밀번호 찾기 */
function findPW() {
  var findPW_id = document.getElementById("findPW_id").value;
  var findPW_name = document.getElementById("findPW_name").value;
  var findPW_email = document.getElementById("findPW_email").value;
  var findPW_domain = document.getElementById("findPW_domain").value;

  if (findPW_id.length == 0) {
    alert("아이디를 입력해주세요.");
		return;
  }
  else if (findPW_name.length == 0) {
    alert("이름을 입력해주세요.");
		return;
  }
  else if (findPW_email.length == 0) {
    alert("이메일을 입력해주세요.");
		return;
  }
  else if (findPW_domain == "") {
    alert("이메일 주소를 선택해주세요.");
		return;
  }
  else {
    if(findPW_id == "admin1") {
      alert("등록된 이메일 주소로 임시 비밀번호가 발송되었습니다.");
      return;
    }
    else {
      alert("가입되지 않은 아이디입니다.");
      return;
    }
  }
}