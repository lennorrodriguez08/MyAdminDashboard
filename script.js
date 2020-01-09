document.addEventListener('DOMContentLoaded', function() {
    var pageBtn = document.querySelector('#target-page'); 
    var subPage = document.querySelector('.sub-page');
    var angleRight = document.querySelector('.fa-angle-right');
    var forExit = document.querySelector('.branding .fa-angle-double-down');
    pageBtn.addEventListener('change', function(e) {
        
        if (pageBtn.checked) {
            subPage.style.display = 'block';
            angleRight.classList.add('rotate');
        }
        else {
            subPage.style.display = 'none';
            angleRight.classList.remove('rotate');
        }
        
    });
    
     
    var menu = document.querySelector('.fa-bars');
    var sideBar = document.querySelector('.sidebar');
    var homePage = document.querySelector('.homepage');
    
    menu.addEventListener('click', function(e) {
       
            sideBar.style.display = 'none';
            forExit.style.display = 'block';
            menu.style.display = 'none';  
            homePage.style.left = '10px';
        
    })
    
    
    forExit.addEventListener('click', function(e) {
        
        sideBar.style.display = 'block';
        forExit.style.display = 'none';
        menu.style.display = 'block';
        homePage.style.left = '190px';
        
    })
    
});