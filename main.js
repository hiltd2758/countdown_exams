// Set the date you're counting down to
const countDownDate = new Date("June 3, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    console.log("Countdown expired");
  }
}, 1000);
