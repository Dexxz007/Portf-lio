window.addEventListener('load', function() {
    function updateImage() {
        var img = document.getElementById('imagem-capa'); 
        if (!img) return;
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
            if (header) {
                header.parentNode.removeChild(header); 
            }
        } else if (!header) {
            var newHeader = document.createElement('header');
            newHeader.id = 'esconder';
            document.body.insertBefore(newHeader, document.body.firstChild);
        }
    }

    function updateStyles() {
        var titulo = document.getElementsByClassName('titulo')[0];
        var blocoPrincipal = document.getElementsByClassName('bloco-principal')[0];
        if (!titulo || !blocoPrincipal) return;
        var width = window.innerWidth;

        titulo.style.paddingLeft = '20px'; 

        if (width <= 768) {
            blocoPrincipal.style.marginLeft = '0';
            blocoPrincipal.style.marginRight = '0';
        } else {
            blocoPrincipal.style.marginLeft = '20px';
            blocoPrincipal.style.marginRight = '20px';
        }
    }

    function toggleDashboard(buttonId, textContentId) {
        const button = document.querySelector(buttonId);
        const textContent = document.querySelector(textContentId);
        const triangle = button?.querySelector('.triangle');

        if (button && textContent && triangle) {
            button.addEventListener('click', () => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
                textContent.classList.toggle('hidden');
                triangle.style.transform = isExpanded ? 'rotate(90deg)' : 'rotate(180deg)';
            });
        }
    }

    function adjustMarginForTextContent() {
        var element1 = document.getElementById('text-content-1');
        var element2 = document.getElementById('text-content-2');
        var element3 = document.getElementById('text-content-3');

        if (window.innerWidth <= 600) {
            element1.style.marginLeft = '55px';
            element2.style.marginLeft = '55px';
            element3.style.marginLeft = '55px';
        } else if (window.innerHeight >= 950) {
            element1.style.marginLeft = '300px';
            element2.style.marginLeft = '300px';
            element3.style.marginLeft = '300px';
        } else {
            element1.style.marginLeft = '';
            element2.style.marginLeft = '';
            element3.style.marginLeft = '';
        }
    }

    updateImage();
    toggleHeader();
    updateStyles();
    adjustMarginForTextContent();

    toggleDashboard('#button-1', '#text-content-1');
    toggleDashboard('#button-2', '#text-content-2');
    toggleDashboard('#button-3', '#text-content-3');

    window.addEventListener('resize', function() {
        updateImage();
        toggleHeader();
        updateStyles();
        adjustMarginForTextContent();
    });
});

function showMobileMessage() {
    const msgCelular = document.querySelector('.msg-celular');

    function checkScreenSize() {
        if (window.innerWidth <= 768) { 
            msgCelular.style.display = 'block';
        } else {
            msgCelular.style.display = 'none';
        }
    }


    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}


showMobileMessage();