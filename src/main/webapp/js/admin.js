$(() => {
  $('.tab').on('click', function () {
    // 탭 활성화 상태 변경
    $('.tab').removeClass('active');
    $(this).addClass('active');

    // 탭 인덱스로 섹션 노출 전환
    const index = $(this).index();
    const sectionIds = ['#sales', '#clients', '#reserve'];

    $('.main-section').removeClass('active');
    $(sectionIds[index]).addClass('active');
  });
  
  const pastelColors = [
    '#A3D8F4', '#F7C8E0', '#FDE2E4', '#B5EAEA',
    '#FFDAC1', '#D5AAFF', '#A0E7E5', '#B4F8C8',
    '#FBE7C6', '#BEE3DB', '#FFB5E8', '#C7CEEA'
  ];

  const monthlyCtx = document.getElementById('monthlySalesChart').getContext('2d');
  const weeklyCtx = document.getElementById('weeklySalesChart').getContext('2d');

  const $monthContainer = $('.month-dropdown');
  const $weekContainer = $('.week-dropdown');

  // 월 드롭다운 커스텀 생성
  const $monthSelect = $('<select id="monthSelect"></select>');
  for (let i = 1; i <= 12; i++) {
    $monthSelect.append(`<option value="${i}">${i}월</option>`);
  }
  $monthContainer.append($monthSelect);

  // 주차 드롭다운 커스텀 생성
  const $weekSelect = $('<select id="weekSelect"></select>');
  for (let i = 1; i <= 4; i++) {
    $weekSelect.append(`<option value="${i}">${i}주차</option>`);
  }
  $weekContainer.append($weekSelect);

  let salesData;
  let monthlyChart;
  let weeklyChart;
  let currentMonth = 1;

  // 제목 업데이트
  const updateTitles = (month, week) => {
    const monthlyValue = salesData.monthlySales[month - 1];
    const weekValue = salesData.weeklySales[month][week - 1] || 0;
    $('.chart-title.monthly').text(`월별 매출: ${monthlyValue.toLocaleString()}원`);
    $('.chart-title.weekly').text(`주별 매출: ${weekValue.toLocaleString()}원`);
  };

  // 주별 차트 렌더링
  const renderWeeklyChart = (month) => {
    const weeklyData = salesData.weeklySales[month];
    if (weeklyChart) weeklyChart.destroy();

    weeklyChart = new Chart(weeklyCtx, {
      type: 'bar',
      data: {
        labels: weeklyData.map((_, i) => `${i + 1}주차`),
        datasets: [{
          label: `${month}월 주별 매출`,
          data: weeklyData,
          backgroundColor: pastelColors[month - 1]
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: val => val.toLocaleString() + '원'
            }
          }
        }
      }
    });
  };

  // 월별 차트 렌더링
  const renderMonthlyChart = (data) => {
    monthlyChart = new Chart(monthlyCtx, {
      type: 'bar',
      data: {
        labels: [...Array(12).keys()].map(i => `${i + 1}월`),
        datasets: [{
          label: '월별 매출',
          data: data.monthlySales,
          backgroundColor: pastelColors,
          borderWidth: 2,
          borderColor: '#2A95A9'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: val => val.toLocaleString() + '원'
            }
          }
        }
      }
    });
  };

  // 데이터 fetch 및 초기 렌더링
  fetch('data/sales.json')
    .then(res => res.json())
    .then(data => {
      salesData = data;

      // 초기 렌더: 1월 1주차
      renderMonthlyChart(data);
      renderWeeklyChart(1);
      updateTitles(1, 1);

      // 월 선택 이벤트
      $monthSelect.on('change', function () {
        currentMonth = Number($(this).val());
        $weekSelect.val(1); // 주차 초기화
        renderWeeklyChart(currentMonth);
        updateTitles(currentMonth, 1);
      });

      // 주차 선택 이벤트
      $weekSelect.on('change', function () {
        const selectedWeek = Number($(this).val());
        updateTitles(currentMonth, selectedWeek);
      });
    });
});
