window.onload = function() {
  var progressBar = document.querySelector(".progress-bar");

  var width = 0;
  var interval = setInterval(function() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += 10;
      progressBar.style.width = width + "%";
    }
  }, 500);
}
