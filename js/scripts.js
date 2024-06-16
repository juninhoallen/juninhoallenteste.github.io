document.addEventListener('DOMContentLoaded', function() {
    // Menu de navegação móvel
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Função para configurar galerias
    function setupGallery(buttonId, galleryId) {
        const viewMoreButton = document.getElementById(buttonId);
        const galleryImages = document.querySelectorAll(`#${galleryId} img`);

        if (viewMoreButton && galleryImages) {
            const initialVisibleCount = 5;

            // Mostrar as primeiras imagens inicialmente
            galleryImages.forEach((img, index) => {
                if (index < initialVisibleCount) {
                    img.classList.add('visible');
                }
            });

            // Configurar o botão de visualização para alternar entre mostrar mais e menos fotos
            viewMoreButton.addEventListener('click', function() {
                const isViewingMore = viewMoreButton.textContent === 'View More Photos';
                galleryImages.forEach((img, index) => {
                    if (isViewingMore) {
                        img.classList.add('visible');
                    } else {
                        if (index >= initialVisibleCount) {
                            img.classList.remove('visible');
                        }
                    }
                });
                viewMoreButton.textContent = isViewingMore ? 'View Less Photos' : 'View More Photos';
            });

            // Configurar a funcionalidade de clique para abrir o modal
            galleryImages.forEach(img => {
                img.addEventListener('click', function() {
                    openModal(img);
                });
            });
        }
    }

    // Configurar galerias
    setupGallery('view-more-button-bryan', 'bryan-gallery');
    setupGallery('view-more-button-francesca', 'francesca-gallery');
    setupGallery('view-more-button-piercing', 'piercing-gallery');

    // Modal de imagem
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.getElementsByClassName('close')[0];

    function openModal(img) {
        if (modal && modalImg) {
            modal.style.display = 'block';
            modalImg.src = img.src;
        }
    }

    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = 'none';
        };
    }

    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Configurar modal para as imagens de cuidados
    const careImages = document.querySelectorAll('#aftercare .aftercare-images img');
    if (careImages) {
        careImages.forEach(img => {
            img.addEventListener('click', function() {
                openModal(img);
            });
        });
    }
});
