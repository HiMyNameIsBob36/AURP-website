const staffTimezone = "Australia/Sydney";
const timezoneLabel = "AEST";

function updateTime() {
  const timeEl = document.getElementById("time");
  if (!timeEl) return;

  const now = new Date();

  const time = now.toLocaleTimeString("en-AU", {
    timeZone: staffTimezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  // Get hour safely (0–23) in staff timezone
  const hour = parseInt(
    now.toLocaleString("en-AU", {
      timeZone: staffTimezone,
      hour: "numeric",
      hour12: false
    }),
    10
  );

  const isLate = hour >= 22 || hour < 6;
  const icon = isLate ? "🌙" : "⏰";

  timeEl.textContent = `${icon} ${time} (${timezoneLabel})`;
}

// Run AFTER page loads
updateTime();
setInterval(updateTime, 60000);
