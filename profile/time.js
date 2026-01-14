  function updateTime() {
    const timeEl = document.getElementById("time");
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    timeEl.innerHTML = "⏰ " + time;
  }

  updateTime();
  setInterval(updateTime, 60000);
