function countdown() {
    // Lấy ngày hiện tại
    const now = new Date();
  
    // Lấy ngày thi THPT Quốc gia
    const examDate = new Date("2024-07-07");
  
    // Tính toán số ngày còn lại
    const days = (examDate - now) / (1000 * 60 * 60 * 24);
  
    // Tính toán số giờ còn lại
    const hours = (days - Math.floor(days)) * 24;
  
    // Tính toán số phút còn lại
    const minutes = (hours - Math.floor(hours)) * 60;
  
    // Tính toán số giây còn lại
    const seconds = (minutes - Math.floor(minutes)) * 60;
  
    // Cập nhật phần tử `countdown`
    document.getElementById("countdown").innerHTML = `
      <div class="days">${days}</div>
      <div class="hours">${hours}</div>
      <div class="minutes">${minutes}</div>
      <div class="seconds">${seconds}</div>
    `;
  
    // Lặp lại hàm sau mỗi giây
    setTimeout(countdown, 1000);
  }
  
  // Chạy hàm đếm ngược khi trang web được tải
  window.onload = countdown;
  