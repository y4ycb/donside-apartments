// Данные квартир
const apartments = {
    1: {
        title: "Квартира 1",
        number: "№118",
        type: "Однокомнатная квартира",
        location: "ЖК «Белый ангел», Береговая 6",
        price: "4 000 ₽",
        description: "Просторная квартира с панорамными окнами и современным ремонтом. Идеально подходит для пар или небольшой семьи. Есть полностью оборудованная кухня и современная сантехника.",
        images: [
            "images/apartment-1-1.jpg",
            "images/apartment-1-2.jpg",
            // ...
        ]
    },
    2: {
        title: "Квартира 2",
        number: "№131",
        type: "Однокомнатная квартира",
        location: "ЖК «Белый ангел», Береговая 6",
        price: "4 000 ₽",
        description: "Двухкомнатная квартира с видом на город. Просторная гостиная и уютная спальня. Современная кухня-гостиная и большая ванная комната.",
        images: [
            "images/apartment-2-1.jpg",
            // ...
        ]
    },
    3: {
        title: "Квартира 3",
        number: "№144",
        type: "Студия",
        location: "ЖК «Белый ангел», Береговая 6",
        price: "4 000 ₽",
        description: "Светлая квартира-студия с панорамными окнами. Современный дизайн, функциональная планировка. Идеально для молодых пар или бизнес-поездок.",
        images: [
            "images/apartment-3-1.jpg",
            // ...
        ]
    },
    4: {
        title: "Квартира 4",
        number: "№196",
        type: "Двухкомнатная квартира",
        location: "ЖК «Белый ангел», Береговая 6",
        price: "4 000 ₽",
        description: "Просторная трёхкомнатная квартира для семьи. Две спальни, гостиная и большая кухня. Идеально для семейного отдыха или длительного проживания.",
        images: [
            "images/apartment-4-1.jpg",
            // ...
        ]
    },
    5: {
        title: "Квартира 5",
        number: "№214",
        type: "Однокомнатная квартира",
        location: "ЖК «Белый ангел», Береговая 6",
        price: "4 000 ₽",
        description: "Уютная квартира с современным евроремонтом. Качественные отделочные материалы, новая техника. Отличный вариант для комфортного проживания.",
        images: [
            "images/apartment-5-1.jpg",
            // ...
        ]
    }
};

function setupRoomsSlider() {
    const img      = document.getElementById('roomsSliderImage');
    const priceEl  = document.getElementById('roomsSliderPrice');
    const numEl    = document.getElementById('roomsSliderNumber');
    const typeEl   = document.getElementById('roomsSliderType');
    const locEl    = document.getElementById('roomsSliderLocation');
    const moreBtn  = document.getElementById('roomsSliderMore');
    const dotsBox  = document.getElementById('roomsSliderDots');
    const dots     = dotsBox ? dotsBox.querySelectorAll('.rooms-dot') : [];
    const prevBtn  = document.querySelector('.rooms-slider-arrow-prev');
    const nextBtn  = document.querySelector('.rooms-slider-arrow-next');

    if (!img || !dots.length) return;

    let currentIndex = 0; // индекс точки (0..N-1)

    function applyByIndex(i) {
        const dot = dots[i];
        if (!dot) return;

        const aptId = Number(dot.getAttribute('data-apartment-id'));
        const apt   = apartments[aptId];
        if (!apt || !apt.images || !apt.images.length) return;

        currentIndex = i;

        // точки
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        // фото
        img.src = apt.images[0];
        img.alt = `${apt.title} — фото`;
        img.dataset.apartmentId = String(aptId);

        // текст
        if (priceEl) priceEl.textContent = apt.price;
        if (numEl)   numEl.textContent   = apt.number;
        if (typeEl)  typeEl.textContent  = apt.type;
        if (locEl)   locEl.textContent   = apt.location;
    }

    // клики по точкам
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => applyByIndex(i));
    });

    // стрелки
    prevBtn && prevBtn.addEventListener('click', () => {
        const i = (currentIndex - 1 + dots.length) % dots.length;
        applyByIndex(i);
    });

    nextBtn && nextBtn.addEventListener('click', () => {
        const i = (currentIndex + 1) % dots.length;
        applyByIndex(i);
    });

    // стартовое состояние: активная точка или первая
    const initialIndex = Array.from(dots).findIndex(d => d.classList.contains('active'));
    applyByIndex(initialIndex >= 0 ? initialIndex : 0);

    // "Узнать больше" — пока просто открываем форму бронирования
    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            const aptId = Number(img.dataset.apartmentId || '1');
            // здесь можем передавать ID квартиры в форму
            openBookingModal(String(aptId));
        });
    }
}

// Функция для обработки ошибок загрузки изображений
function setupImageErrorHandling() {
    document.querySelectorAll('.card-image img, .about-img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmYWZjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk0YTBhZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
            this.alt = 'Изображение временно недоступно';
            this.classList.add('image-fallback');
        });
    });
}

// Функция предзагрузки изображений для галереи
function preloadImages(imageUrls) {
    imageUrls.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Функция ленивой загрузки для карточек квартир
function setupLazyLoading() {
  // Ничего не делаем: используем нативный loading="lazy" + decoding="async"
  document.querySelectorAll('.card-image img').forEach(img => {
    img.setAttribute('loading','lazy');
    img.setAttribute('decoding','async');
  });
}

// Функция для маски телефона
function setupPhoneMask() {
    const phoneInput = document.getElementById('bookingPhone');
    if (!phoneInput) return;

    phoneInput.value = '+7 (';
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.substring(1);
        }
        
        if (value.length > 10) {
            value = value.substring(0, 10);
        }
        
        let formattedValue = '+7 (';
        
        if (value.length > 0) {
            formattedValue += value.substring(0, 3);
        }
        if (value.length > 3) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length > 6) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length > 8) {
            formattedValue += '-' + value.substring(8, 10);
        }
        
        e.target.value = formattedValue;
    });

    phoneInput.addEventListener('blur', function() {
        const digits = this.value.replace(/\D/g, '');
        if (digits.length !== 11) {
            this.style.borderColor = '#ef4444';
            this.style.backgroundColor = '#fef2f2';
        } else {
            this.style.borderColor = '';
            this.style.backgroundColor = '';
        }
    });

    phoneInput.addEventListener('focus', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
    });

    phoneInput.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            if (this.value.length <= 4) {
                e.preventDefault();
                this.value = '+7 (';
            }
        }
    });
}

// Функция для валидации телефона
function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 11;
}

// Функция для улучшения мобильного UX
function enhanceMobileUX() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        if (e.target.closest('.modal-gallery')) {
            touchStartX = e.changedTouches[0].screenX;
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.closest('.modal-gallery')) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    }
}

function setupHeaderScroll() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    
    if (!header || !hero) return;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        if (scrollY > heroHeight - 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader();
}

let currentApartment = null;
let currentImageIndex = 0;

// ВСТАВИТЬ ПЕРЕД openApartmentModal
function trapFocus(modal) {
  const focusables = modal.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
  if (!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  function loop(e){
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  modal.addEventListener('keydown', loop);
  setTimeout(() => first.focus(), 0);
}

// Функции модального окна галереи
function openApartmentModal(apartmentId) {
    currentApartment = apartments[apartmentId];
    currentImageIndex = 0;
    
    const modal = document.getElementById('apartmentModal');
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    trapFocus(modal);
    
    if (!currentApartment) {
        console.error('Квартира не найдена:', apartmentId);
        return;
    }
    
    preloadImages(currentApartment.images);
    updateGallery();
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        document.querySelectorAll('.modal-gallery img, .modal-thumbnails img').forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmYWZjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk0YTBhZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                this.alt = 'Фото недоступно';
                this.classList.add('image-fallback');
            });
        });
    }, 100);
}

function updateGallery() {
    const gallery = document.querySelector('.modal-gallery');
    const thumbnails = document.getElementById('modalThumbnails');
    
    if (!currentApartment || !currentApartment.images.length) return;
    
    gallery.innerHTML = `
        <div class="main-image-container">
            <img src="${currentApartment.images[currentImageIndex]}" alt="${currentApartment.title} - Фото ${currentImageIndex + 1}" class="main-image">
            <button class="gallery-nav gallery-prev" onclick="prevImage()" aria-label="Предыдущее фото">‹</button>
            <button class="gallery-nav gallery-next" onclick="nextImage()" aria-label="Следующее фото">›</button>
            <div class="image-counter">${currentImageIndex + 1} / ${currentApartment.images.length}</div>
        </div>
    `;
    
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

// Функции для модального окна бронирования
function openBookingModal(apartmentId = '') {
    const modal = document.getElementById('bookingModal');
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    trapFocus(modal);
    
    if (apartmentId && document.getElementById('bookingApartment')) {
        document.getElementById('bookingApartment').value = apartmentId;
    }
    
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('bookingCheckin');
    const checkoutInput = document.getElementById('bookingCheckout');
    
    if (checkinInput) {
        checkinInput.min = today;
        checkinInput.value = '';
    }
    if (checkoutInput) {
        checkoutInput.min = today;
        checkoutInput.value = '';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Валидация данных формы
function validateBookingForm() {
    const checkin = document.getElementById('bookingCheckin');
    const checkout = document.getElementById('bookingCheckout');
    const name = document.getElementById('bookingName');
    const phone = document.getElementById('bookingPhone');
    const apartment = document.getElementById('bookingApartment');
    
    if (!checkin || !checkout || !name || !phone || !apartment) {
        alert('Ошибка: не все поля формы найдены');
        return false;
    }
    
    if (!checkin.value || !checkout.value || !name.value || !phone.value || !apartment.value) {
        alert('Пожалуйста, заполните все обязательные поля');
        return false;
    }
    
    if (checkout.value <= checkin.value) {
        alert('Дата выезда должна быть после даты заезда');
        return false;
    }
    
    const checkinDate = new Date(checkin.value);
    const checkoutDate = new Date(checkout.value);
    const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    
    if (nights < 1) {
        alert('Минимальное бронирование - 1 ночь');
        return false;
    }
    
    if (!validatePhone(phone.value)) {
        alert('Пожалуйста, введите корректный номер телефона (10 цифр после +7)');
        phone.style.borderColor = '#ef4444';
        phone.style.backgroundColor = '#fef2f2';
        phone.focus();
        return false;
    }
    
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    if (!nameRegex.test(name.value.trim())) {
        alert('Пожалуйста, введите корректное имя (только буквы)');
        name.style.borderColor = '#ef4444';
        name.style.backgroundColor = '#fef2f2';
        name.focus();
        return false;
    }
    
    return true;
}

// Получение данных формы
function getFormData() {
    const checkin = document.getElementById('bookingCheckin').value;
    const checkout = document.getElementById('bookingCheckout').value;
    const apartment = document.getElementById('bookingApartment');
    const name = document.getElementById('bookingName').value;
    const phone = document.getElementById('bookingPhone').value;
    const email = document.getElementById('bookingEmail').value;
    const guests = document.getElementById('bookingGuests').value;
    const comment = document.getElementById('bookingComment').value;
    
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    
    const apartmentText = apartment.options[apartment.selectedIndex].text;
    
    return {
        checkin,
        checkout,
        nights,
        apartment: apartmentText,
        name,
        phone,
        email,
        guests,
        comment
    };
}

// Отправка в Telegram
async function sendToTelegram(formData) {
  const message = `
Новая заявка на бронирование!

🏠 Квартира: ${formData.apartment}
📅 Даты: ${formData.checkin} - ${formData.checkout}
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email || 'не указан'}
👥 Гостей: ${formData.guests}
💬 Комментарий: ${formData.comment || 'нет'}
⏰ Время: ${new Date().toLocaleString()}
  `.trim();

  const r = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await r.json();
  return data.ok;
}

function setupRoomsPhotoCarousel() {
    const mainImg = document.getElementById('roomsGalleryImage');
    const dots = document.querySelectorAll('.rooms-dot');

    if (!mainImg || !dots.length) return;

    function setApartment(id) {
        const apt = apartments[id];
        if (!apt || !apt.images || !apt.images.length) return;

        mainImg.src = apt.images[0];
        mainImg.alt = `${apt.title} — фото`;
        mainImg.dataset.apartmentId = id;
    }

    // клики по точкам
    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const id = dot.getAttribute('data-apartment-id');

            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            setApartment(id);
        });
    });

    // стартовое состояние — по активной точке
    const activeDot = document.querySelector('.rooms-dot.active') || dots[0];
    if (activeDot) {
        setApartment(activeDot.getAttribute('data-apartment-id'));
    }

    // клик по большому фото — открыть модалку с галереей этой квартиры
    mainImg.addEventListener('click', () => {
        const id = Number(mainImg.dataset.apartmentId || '1');
        openApartmentModal(id);
    });
}

// Функция для показа уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Закрыть уведомление">×</button>
        </div>
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                border-left: 4px solid var(--accent);
                z-index: 10000;
                max-width: 400px;
                animation: slideIn 0.3s ease;
            }
            
            .notification-success {
                border-left-color: #10b981;
            }
            
            .notification-error {
                border-left-color: #ef4444;
            }
            
            .notification-content {
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .notification-message {
                flex: 1;
                color: var(--dark);
                font-size: 0.9rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: var(--secondary);
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: var(--dark);
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    left: 20px;
                    right: 20px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Показ успешной отправки и отправка в Telegram
async function showBookingSuccess() {
    const form = document.getElementById('bookingForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    if (!submitBtn) return;
    
    const originalHtml = submitBtn.innerHTML;
    
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    form.classList.add('form-loading');
    
    try {
        const formData = getFormData();
        const isSent = await sendToTelegram(formData);
        
        if (isSent) {
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            submitBtn.querySelector('.btn-text').textContent = '✅ Заявка отправлена!';
            
            setTimeout(() => {
                closeBookingModal();
                form.reset();
                submitBtn.classList.remove('success', 'loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHtml;
                form.classList.remove('form-loading');
                
                showNotification('Спасибо! Мы свяжемся с вами в течение 30 минут для подтверждения бронирования.', 'success');
            }, 2000);
        } else {
            throw new Error('Не удалось отправить заявку');
        }
        
    } catch (error) {
        console.error('Ошибка отправки:', error);
        
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('error');
        submitBtn.querySelector('.btn-text').textContent = '❌ Ошибка отправки';
        
        setTimeout(() => {
            submitBtn.classList.remove('error', 'loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHtml;
            form.classList.remove('form-loading');
            
            showNotification('Произошла ошибка при отправке. Пожалуйста, позвоните нам напрямую.', 'error');
        }, 2000);
    }
}

// Валидация формы бронирования
function setupBookingForm() {
    const form = document.getElementById('bookingForm');
    const checkinInput = document.getElementById('bookingCheckin');
    const checkoutInput = document.getElementById('bookingCheckout');
    
    if (!form) return;
    
    let isSubmitting = false;
    
    if (checkinInput) {
        checkinInput.addEventListener('change', function() {
            if (this.value && checkoutInput) {
                checkoutInput.min = this.value;
                if (checkoutInput.value && checkoutInput.value <= this.value) {
                    checkoutInput.value = '';
                }
            }
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (isSubmitting) return;
        
        if (!validateBookingForm()) {
            return;
        }
        
        isSubmitting = true;
        showBookingSuccess().finally(() => {
            isSubmitting = false;
        });
    });
}

function updateCarouselPreview(index) {
  const preview = document.getElementById('roomsPreviewImage');
  if (!preview) return;

  const apartmentId = index + 1; // т.к. слайды идут 0..N, а квартиры у нас 1..N
  const apt = apartments[apartmentId];

  if (!apt || !apt.images || !apt.images.length) return;

  preview.src = apt.images[0];
  preview.alt = `${apt.title} — превью`;
}

function initCarousel() {
  const viewport = document.querySelector('.rooms-carousel .carousel-viewport');
  const track    = document.querySelector('.rooms-carousel .carousel-track');
  const slides   = track ? track.querySelectorAll('.carousel-slide') : [];
  const prevBtn  = document.querySelector('.rooms-carousel .carousel-prev');
  const nextBtn  = document.querySelector('.rooms-carousel .carousel-next');
  const curEl    = document.querySelector('.rooms-carousel .current-slide');
  const totalEl  = document.querySelector('.rooms-carousel .total-slides');

  if (!viewport || !track || !slides.length) return;

  let index = 0;
  const GAP = parseInt(getComputedStyle(track).gap) || 16;

  totalEl && (totalEl.textContent = String(slides.length));

  function update() {
    const slideW = slides[0].offsetWidth;
    track.style.transform = `translateX(${-index * (slideW + GAP)}px)`;
    curEl && (curEl.textContent = String(index + 1));
    slides.forEach((s, i) => s.classList.toggle('active', i === index));

    // ОБНОВЛЯЕМ ФОТО ПОД ТЕКУЩУЮ КВАРТИРУ
    updateCarouselPreview(index);
  }

  prevBtn?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  nextBtn?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  // свайпы
  let sx = 0, dx = 0;
  viewport.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive:true });
  viewport.addEventListener('touchend',   (e) => {
    dx = e.changedTouches[0].clientX;
    if (sx - dx > 50) { index = (index + 1) % slides.length; update(); }
    if (dx - sx > 50) { index = (index - 1 + slides.length) % slides.length; update(); }
  }, { passive:true });

  // автолистание
  let timer = setInterval(() => {
    index = (index + 1) % slides.length;
    update();
  }, 5000);

  viewport.addEventListener('mouseenter', () => clearInterval(timer));
  viewport.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      index = (index + 1) % slides.length;
      update();
    }, 5000);
  });

  window.addEventListener('resize', update);
  update(); // сразу выставим правильную картинку и позицию
}

function setupRoomsStrip() {
    const mainImg = document.getElementById('roomsMainImage');
    const items = document.querySelectorAll('.rooms-item');

    if (!mainImg || !items.length) return;

    items.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-apartment-id');
            const apt = apartments[id];

            if (!apt || !apt.images || !apt.images.length) return;

            // меняем фото
            mainImg.src = apt.images[0];
            mainImg.alt = `${apt.title} — фото`;

            // переключаем активную кнопку
            items.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            // по клику на кнопку ещё и открываем модалку (если хочешь)
            // openApartmentModal(Number(id));
        });
    });

    // на старте синхронизируем картинку с первой активной кнопкой
    const active = document.querySelector('.rooms-item.active');
    if (active) {
        const id = active.getAttribute('data-apartment-id');
        const apt = apartments[id];
        if (apt && apt.images && apt.images.length) {
            mainImg.src = apt.images[0];
            mainImg.alt = `${apt.title} — фото`;
        }
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    setupImageErrorHandling();
    setupLazyLoading();
    enhanceMobileUX();
    setupPhoneMask();
    setupHeaderScroll();
    setupRoomsSlider();
    
    // Мобильное меню
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = navList.classList.toggle('active');
            menuToggle.textContent = isExpanded ? '✕' : '☰';
            menuToggle.setAttribute('aria-expanded', isExpanded);
            document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
        });
        
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    // Обработчики для кнопок бронирования
    const bookButtons = document.querySelectorAll('.book-btn, .cta-button');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openBookingModal();
        });
    });
    
    // Кнопка "Подробнее" в карточках тоже открывает бронирование
    const detailButtons = document.querySelectorAll('.card-btn');
    detailButtons.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openApartmentModal(index + 1);
  });
});
    
    // Инициализация формы бронирования
    setupBookingForm();
    
    // Закрытие модальных окон по клику на оверлей
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function() {
            closeApartmentModal();
            closeBookingModal();
        });
    });
});

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeApartmentModal();
        closeBookingModal();
    }
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

console.log('DonSide apartments carousel loaded with improved navigation!');