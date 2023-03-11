window.onload = function() {
  var progressBar = document.querySelector(".progress-bar");

  var width = 0;
  var interval;

  function startInterval() {
    interval = setInterval(function() {
      if (width >= 100) {
        width = 0;
      } else {
        width += 10;
        progressBar.style.width = width + "%";
      }
    }, 500);
  }

  startInterval();
}
