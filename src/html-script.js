document.getElementById('toggle-sidebar').addEventListener('click',function () {
    const sidebar = document.querySelector('aside');
    sidebar.classList.toggle('collapsed');
});