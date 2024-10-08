
// 이벤트가 발생할 때까지 기다리는 함수
function waitForEvent(element, eventName) {
    return new Promise((resolve) => {
        element.addEventListener(eventName, function handler(event) {
            element.removeEventListener(eventName, handler);
            resolve(event);
        });
    });
}

// 이메일 정규식 검사 및 패턴 체크
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailChk(email) {
    return pattern.test(email);
}

// 모달 창 열기/닫기 함수
function toggleModal(display) {
    const modal = document.querySelector("#modal");
    modal.style.display = display;
}

let emailvalue ="";
// 이메일 유효성 검사 및 모달 열기
function check(e) {
    e.preventDefault(); // 이벤트 기본 동작 방지
    e.stopPropagation(); // 이벤트 버블링 방지

    let emailInput = document.getElementById('email');
    let email = emailInput.value;

    if (emailChk(email)) {  
        emailvalue= email;  
        toggleModal('block');
        waitForEvent(document.getElementById('modal-btn'), 'click').then(() => {
            toggleModal('none');
        });
    } else {
        alert("이메일을 정확히 입력하세요.");
        document.getElementById('email').value = null;
    }
}

// 이메일 전송 및 모달 창 닫기
function sendData() {
    alert('당신의 이메일 주소('+emailvalue+')를 서버로 전송합니다.');
    document.getElementById('email').value = null;
    toggleModal("none");
}

