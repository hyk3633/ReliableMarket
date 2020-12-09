
//상품 이미지 마우스오버 효과

var bigPic = document.querySelector("#bigImg");            //큰 사진
var smallPics = document.querySelectorAll(".smallImg");    //작은 사진(여러개)
 
for(var k = 0 ; k < smallPics.length ; k++){
    smallPics[k].addEventListener("mouseover", changepic);  //이벤트 처리
}
 
function changepic(){   //사진 바꾸는 함수
    var smallPicAttribute = this.getAttribute("src");
    bigPic.setAttribute("src", smallPicAttribute); 
}