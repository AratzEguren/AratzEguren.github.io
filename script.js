document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('closed');

    const toggleButton = document.getElementById('toggleSidebar');
    if (sidebar.classList.contains('closed')) {
        
        toggleButton.style.marginLeft = '210px'; 
        toggleButton.style.backgroundColor = '#001F3F'; 
    } else {
        
        toggleButton.style.marginLeft = '0px'; 
        toggleButton.style.backgroundColor = '#3A6D8C'; 
    }
});
