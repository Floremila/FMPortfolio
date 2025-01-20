document.addEventListener('DOMContentLoaded', () => {
 
    const toggleButton = document.getElementById('toggle-button');
    const extraInfo = document.getElementById('extra-info');

  
    if (toggleButton && extraInfo) {
        toggleButton.addEventListener('click', () => {
            if (extraInfo.style.display === 'none') {
                extraInfo.style.display = 'block';
                toggleButton.textContent = 'Show less';
            } else {
                extraInfo.style.display = 'none';
                toggleButton.textContent = 'Show more';
            }
        });

        toggleButton.addEventListener('mouseover', () => {
            toggleButton.style.transform = 'scale(1.2)'; 
            toggleButton.style.transition = 'transform 0.3s'; 
        });

        toggleButton.addEventListener('mouseout', () => {
            toggleButton.style.transform = 'scale(1)'; 
        });
    }

    const filterSelect = document.getElementById('filter-select');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            const filterValue = filterSelect.value;  
            console.log("Filtro seleccionado: ", filterValue); 

            const articles = document.querySelectorAll('.tech-article');  
            console.log("Artículos encontrados: ", articles);  

            articles.forEach(article => {
                article.classList.remove('hidden');  

                
                if (filterValue !== 'all' && !article.classList.contains(filterValue)) {
                    console.log("Ocultando artículo: ", article); 
                    article.classList.add('hidden');
                }
            });
        });
    }


    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
      
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
