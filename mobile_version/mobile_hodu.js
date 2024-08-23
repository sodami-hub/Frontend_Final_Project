const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailChk(email) {
    if(pattern.test(email) === false) { 
        return false; }
    else { 
        return true; }
}

function openWindow(email) {
    let options = 'width=650, height=450, top=10, left=10';
    window.open('mobile_modal.html?email='+email,'_blank',options);
}

function check(email) {
    var emailInput = document.getElementById('email');

    var email = emailInput.value;

    if (emailChk(email)) {    
        openModal();
        e.preventDefault();
    } else {
        alert("이메일을 정확히 입력하세요.")
        e.preventDefault();
    }
}
// 이메일 전송 및 모달 창 닫기
function sendData() {
    const urlparams = new URL(location.href).searchParams;
    const email = urlparams.get('email');
    const modal = document.querySelector("#modal");

    alert('당신의 이메일 주소('+email+')를 서버로 전송합니다.');
    modal.style.display="none";    
}

// 모달 창 열기
function openModal() {
    const modal = document.querySelector("#modal");
    modal.style.display="block";
    e.preventDefault();
}