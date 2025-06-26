// 입력 시 다음 칸 자동 이동
const cardInputs = document.querySelectorAll('.card-input');

cardInputs.forEach((input, idx) => {
  input.addEventListener('input', () => {
    if (input.value.length === 4 && idx < cardInputs.length - 1) {
      cardInputs[idx + 1].focus();
    }
  });
});

// "다음" 버튼 클릭 시
document.getElementById('submitCard').addEventListener('click', function () {
  // 카드번호 4칸 합치기
  let cardNumber = '';
  cardInputs.forEach(input => {
    cardNumber += input.value.trim();
  });

  // 이름과 이메일 입력값 가져오기
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();

  // 로컬스토리지에 저장
  localStorage.setItem('cardNumber', cardNumber);
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);

  // 예약 정보 모달로 이동 (예: 모달 전환)
  document.getElementById('modalWrap').style.display = 'none';
  document.getElementById('reserveModal').style.display = 'block';
});


// "취소" 버튼 클릭 시
document.getElementById("cancleReserveInfo").addEventListener("click", () => {
  // 로컬스토리지 값 삭제
  localStorage.removeItem('cardNumber');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');

  // 찜 페이지로 이동
  location.href = "jjim.html"; // ← 찜 페이지 경로로 수정
});

// "예약" 버튼 클릭 시
document.getElementById("confirmReserveInfo").addEventListener("click", () => {
  // 예약 모달 닫기
  document.getElementById('reserveModal').style.display = 'none';

  // (선택) alert 표시
  alert("예약이 완료되었습니다!");
});
