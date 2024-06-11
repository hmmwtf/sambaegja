// 페이지가 로드될 때 스크롤 위치 설정
window.onload = function() {
    var scrollPoint = document.querySelectorAll('.thisWeekStory')[1]; //최신 스토리위치로 업로드되도록 1 수정해야 함 근데 데베 연결을 못해서..
    var scrollPosition = scrollPoint.getBoundingClientRect().top + window.scrollY - 200;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // 스크롤 애니메이션을 부드럽게 하기 위해 추가
    });
};
