// Set your anniversary start date here:
const startDate = new Date("2025-05-06"); // Example: May 6, 2025

function updateDisplay() {
  const now = new Date();
  
  // Calculate how many full months you've been dating
  let months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }
  document.getElementById("months").textContent = `${months} Months`;

  // Calculate the date of your next anniversary
  const nextAnniversary = new Date(startDate);
  nextAnniversary.setMonth(startDate.getMonth() + months + 1);
  
  const diff = nextAnniversary - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent = 
    `Next month anniversary in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateDisplay();
setInterval(updateDisplay, 1000);
