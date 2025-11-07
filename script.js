// Данные квартир
const apartments = {
    1: {
        title: "Квартира 1",
        description: "Просторная квартира с панорамными окнами и современным ремонтом. Идеально подходит для пар или небольшой семьи. Есть полностью оборудованная кухня и современная сантехника.",
        price: "4 000 ₽/ночь",
        images: [
            "images/apartment-1-1.jpg",
            "images/apartment-1-2.jpg",
            "images/apartment-1-3.jpg",
            "images/apartment-1-4.jpg",
            "images/apartment-1-5.jpg",
            "images/apartment-1-6.jpg",
            "images/apartment-1-7.jpg",
            "images/apartment-1-8.jpg",
            "images/apartment-1-9.jpg",
            "images/apartment-1-10.jpg"
        ]
    },
    2: {
        title: "Квартира 2", 
        description: "Двухкомнатная квартира с видом на город. Просторная гостиная и уютная спальня. Современная кухня-гостиная и большая ванная комната.",
        price: "4 000 ₽/ночь",
        images: [
            "images/apartment-2-1.jpg",
            "images/apartment-2-2.jpg",
            "images/apartment-2-3.jpg",
            "images/apartment-2-4.jpg",
            "images/apartment-2-5.jpg",
            "images/apartment-2-6.jpg",
            "images/apartment-2-7.jpg",
            "images/apartment-2-8.jpg",
            "images/apartment-2-9.jpg",
            "images/apartment-2-10.jpg",
            "images/apartment-2-11.jpg",
            "images/apartment-2-12.jpg"
        ]
    },
    3: {
        title: "Квартира 3",
        description: "Светлая квартира-студия с панорамными окнами. Современный дизайн, функциональная планировка. Идеально для молодых пар или бизнес-поездок.",
        price: "4 000 ₽/ночь",
        images: [
            "images/apartment-3-1.jpg",
            "images/apartment-3-2.jpg",
            "images/apartment-3-3.jpg",
            "images/apartment-3-4.jpg",
            "images/apartment-3-5.jpg",
            "images/apartment-3-6.jpg",
            "images/apartment-3-7.jpg",
            "images/apartment-3-8.jpg",
            "images/apartment-3-9.jpg",
            "images/apartment-3-10.jpg",
            "images/apartment-3-11.jpg",
            "images/apartment-3-12.jpg",
            "images/apartment-3-13.jpg"
        ]
    },
    4: {
        title: "Квартира 4",
        description: "Просторная трёхкомнатная квартира для семьи. Две спальни, гостиная и большая кухня. Идеально для семейного отдыха или длительного проживания.",
        price: "4 000 ₽/ночь",
        images: [
            "images/apartment-4-1.jpg",
            "images/apartment-4-2.jpg",
            "images/apartment-4-3.jpg",
            "images/apartment-4-4.jpg",
            "images/apartment-4-5.jpg",
            "images/apartment-4-6.jpg",
            "images/apartment-4-7.jpg",
            "images/apartment-4-8.jpg",
            "images/apartment-4-9.jpg",
            "images/apartment-4-10.jpg",
            "images/apartment-4-11.jpg",
            "images/apartment-4-12.jpg",
            "images/apartment-4-13.jpg",
            "images/apartment-4-14.jpg"
        ]
    },
    5: {
        title: "Квартира 5",
        description: "Уютная квартира с современным евроремонтом. Качественные отделочные материалы, новая техника. Отличный вариант для комфортного проживания.",
        price: "4 000 ₽/ночь",
        images: [
            "images/apartment-5-1.jpg",
            "images/apartment-5-2.jpg",
            "images/apartment-5-3.jpg",
            "images/apartment-5-4.jpg",
            "images/apartment-5-5.jpg",
            "images/apartment-5-6.jpg",
            "images/apartment-5-7.jpg",
            "images/apartment-5-8.jpg",
            "images/apartment-5-9.jpg",
            "images/apartment-5-10.jpg",
            "images/apartment-5-11.jpg",
            "images/apartment-5-12.jpg"
        ]
    }
};

let currentApartment = null;
let currentImageIndex = 0;

// Функции модального окна
function openApartmentModal(apartmentId) {
    currentApartment = apartments[apartmentId];
    currentImageIndex = 0;
    
    const modal = document.getElementById('apartmentModal');
    
    if (!currentApartment) {
        console.error('Квартира не найдена:', apartmentId);
        return;
    }
    
    // Создаем галерею и миниатюры
    updateGallery();
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateGallery() {
    const gallery = document.querySelector('.modal-gallery');
    const thumbnails = document.getElementById('modalThumbnails');
    
    if (!currentApartment || !currentApartment.images.length) return;
    
    // Главное фото
    gallery.innerHTML = `
        <div class="main-image-container">
            <img src="${currentApartment.images[currentImageIndex]}" alt="${currentApartment.title} - Фото ${currentImageIndex + 1}" class="main-image">
            <button class="gallery-nav gallery-prev" onclick="prevImage()">‹</button>
            <button class="gallery-nav gallery-next" onclick="nextImage()">›</button>
            <div class="image-counter">${currentImageIndex + 1} / ${currentApartment.images.length}</div>
        </div>
    `;
    
    // Миниатюры внизу
    thumbnails.innerHTML = '';
    currentApartment.images.forEach((imageSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imageSrc;
        thumb.alt = `Миниатюра ${index + 1}`;
        thumb.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumb.onclick = () => changeImage(index);
        thumbnails.appendChild(thumb);
    });
}

function changeImage(index) {
    currentImageIndex = index;
    updateGallery();
}

function nextImage() {
    if (!currentApartment) return;
    currentImageIndex = (currentImageIndex + 1) % currentApartment.images.length;
    updateGallery();
}

function prevImage() {
    if (!currentApartment) return;
    currentImageIndex = (currentImageIndex - 1 + currentApartment.images.length) % currentApartment.images.length;
    updateGallery();
}

function closeApartmentModal() {
    const modal = document.getElementById('apartmentModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentApartment = null;
    currentImageIndex = 0;
}

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeApartmentModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Закрытие по клику на оверлей
document.querySelector('.modal-overlay').addEventListener('click', closeApartmentModal);

// МОБИЛЬНОЕ МЕНЮ
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            menuToggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Обработчики для кнопок
    const bookButtons = document.querySelectorAll('.book-btn, .cta-button, .card-btn');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Форма бронирования будет добавлена позже!');
        });
    });
});

console.log('DonSide apartments grid loaded!');