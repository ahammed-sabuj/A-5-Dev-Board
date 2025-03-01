document.getElementById('theme-change').addEventListener('click', function () {
    const bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); 
    document.body.style.backgroundColor = bgColor;
});
