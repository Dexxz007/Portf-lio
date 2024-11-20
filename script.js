window.onload = function() {
    function updateImage() {
        var img = document.getElementById('imagem-capa'); 
        var width = window.innerWidth;

        if (width < 450) {
            img.src = 'Capa-1500s.jpg';
            img.style.height = '80%';
        } else if (width <= 768) {
            img.src = 'Capa-1500s.jpg';
            img.style.height = '100%'; 
        } else {
            img.src = 'Capa-1500.jpg'; 
            img.style.height = '100%';
        }
    }
    
    function toggleHeader() {
        var header = document.getElementById('esconder');
        var width = window.innerWidth;

        if (width <= 768) {
            header.style.display = 'none'; 
        } else {
            header.style.display = 'flex';
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            header.style.zIndex = '1000';
        }
    }

    toggleHeader();
    window.onresize = toggleHeader; 



    updateImage();
    window.onresize = updateImage; 

    function updateStyles() {
        var titulo = document.getElementsByClassName('titulo')[0];
        var blocoPrincipal = document.getElementsByClassName('bloco-principal')[0];
        var width = window.innerWidth;

        if (width <= 768) {
            titulo.style.paddingLeft = '20px'; 
        } else {
            titulo.style.paddingLeft = '110px'; 
        }

        if (width <= 768) {
            blocoPrincipal.style.marginLeft = '0';
            blocoPrincipal.style.marginRight = '0';
        } else {
            blocoPrincipal.style.marginLeft = '100px';
            blocoPrincipal.style.marginRight = '100px';
        }
    }

    updateStyles();
    window.onresize = updateStyles;




}
