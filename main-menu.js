const menuBtn = document.getElementById('menuBtn');
const popupMenu = document.getElementById('popupMenu');

menuBtn.addEventListener('click', function () {
  if (popupMenu.style.display === 'block') {
    popupMenu.style.display = 'none';
  } else {
    popupMenu.style.display = 'block';
  }
});

// Optional: Hide menu if clicking outside
document.addEventListener('click', function(event) {
  if (event.target !== menuBtn && !popupMenu.contains(event.target)) {
    if (popupMenu.style.display === 'block') {
      popupMenu.style.display = 'none';
    }
  }
});
