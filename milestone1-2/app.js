var toggleButton = document.getElementById('toggle-hobbies');
var hobby = document.getElementById('ho');
toggleButton.addEventListener('click', function () {
    if (hobby.style.display === 'none') {
        hobby.style.display = 'block';
    }
    else {
        hobby.style.display = 'none';
    }
});
