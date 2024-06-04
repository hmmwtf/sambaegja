window.onload = function() {
    var stories = document.querySelectorAll('.thisWeekStory');
    var popup = document.getElementById('popup');
    var popupOverlay = document.getElementById('popupOverlay');
    var popupClose = document.getElementById('popupClose');

    stories.forEach(function(story) {
        story.addEventListener('click', function() {
            popupOverlay.style.display = 'block';
            popup.style.display = 'block';
        });
    });

    popupClose.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
        popup.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
        popup.style.display = 'none';
    });
};
