//더보기, 접기
document.addEventListener('DOMContentLoaded', function(){ //DOM 생성 후 이벤트 리스너 등록
    //더보기 버튼 이벤트 리스너
    document.querySelector('.btn_open').addEventListener('click', function(e){
        
        let classList = document.querySelector('.detailinfo').classList; // 더보기 프레임의 클래스 정보 얻기
        let contentHeight = document.querySelector('.detailinfo > .product_showMax').offsetHeight; //컨텐츠 높이 얻기
  
        if(classList.contains('product_show')){
            classList.remove('product_show');
            if(contentHeight > 300){
                classList.add('product_showMax');
            }else{
                document.querySelector('.btn_open').classList.add('hide');
            }
        }
        //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
        if(!classList.contains('product_show')){
            e.target.classList.add('hide');
            document.querySelector('.btn_close').classList.remove('hide');
        }
    });
  });
  // 감추기 버튼 이벤트 리스너
  document.querySelector('.btn_close').addEventListener('click', function(e){
    e.target.classList.add('hide');
    document.querySelector('.btn_open').classList.remove('hide'); // 더보기 버튼 감춤
    document.querySelector('.detailinfo').classList.add('product_show'); // 초기 감춤 상태로 복귀
  });
  //컨텐츠 로딩 완료 후 높이 기준으로 클래스 재처리
  window.addEventListener('load', function(){
    let contentHeight = document.querySelector('.detailinfo > .product_showMax').offsetHeight; //컨텐츠 높이 얻기
    if(contentHeight <= 300){
        document.querySelector('.detailinfo').classList.remove('product_show'); // 초기값보다 작으면 전체 컨텐츠 표시
        document.querySelector('.btn_open').classList.add('hide'); // 버튼 감춤
    }
  });