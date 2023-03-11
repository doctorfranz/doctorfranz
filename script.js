window.onload = function() {
  var progressBar = document.querySelector(".progress-bar");

  var width = 0;

  function startInterval() {
    setInterval(function() {
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
