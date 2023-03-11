window.addEventListener('load', function() {
  // simulate training process for 5 seconds
  setTimeout(function() {
    var loadingContainer = document.querySelector('.loading-container');
    loadingContainer.parentNode.removeChild(loadingContainer);
  }, 5000);
});
