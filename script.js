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

// Функция для обработки ошибок загрузки изображений
function setupImageErrorHandling() {
    // Для карточек квартир
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
    const lazyImages = document.querySelectorAll('.card-image img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Убедимся, что изображение еще не загружено
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            // Сохраняем оригинальный src в data-src
            img.dataset.src = img.src;
            // Заменяем на маленькое placeholder изображение
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmYWZjIi8+PC9zdmc+';
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
}

// Функция для маски телефона
function setupPhoneMask() {
    const phoneInput = document.getElementById('bookingPhone');
    if (!phoneInput) return;

    // Устанавливаем начальное значение
    phoneInput.value = '+7 (';
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Убираем начальную 7 или 8
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.substring(1);
        }
        
        // Ограничиваем длину (10 цифр после +7)
        if (value.length > 10) {
            value = value.substring(0, 10);
        }
        
        // Форматируем номер
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

    // Валидация при уходе с поля
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

    // Очистка стилей при фокусе
    phoneInput.addEventListener('focus', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
    });

    // Обработка Backspace и Delete
    phoneInput.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            // Если пытаются удалить начало маски, предотвращаем
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
    return digits.length === 11; // +7 + 10 цифр
}

// Функция для улучшения мобильного UX
function enhanceMobileUX() {
    // Предотвращаем масштабирование при фокусе на полях ввода в iOS
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Улучшаем работу галереи на тач-устройствах
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
                // Свайп влево - следующее фото
                nextImage();
            } else {
                // Свайп вправо - предыдущее фото
                prevImage();
            }
        }
    }
    
    // Закрываем модальные окна при клике вне контента (уже есть, но улучшим для мобильных)
    document.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeApartmentModal();
            closeBookingModal();
        }
    }, { passive: true });
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

// Функции модального окна галереи
function openApartmentModal(apartmentId) {
    currentApartment = apartments[apartmentId];
    currentImageIndex = 0;
    
    const modal = document.getElementById('apartmentModal');
    
    if (!currentApartment) {
        console.error('Квартира не найдена:', apartmentId);
        return;
    }
    
    // Предзагрузка изображений галереи
    preloadImages(currentApartment.images);
    
    // Создаем галерею и миниатюры
    updateGallery();
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Обработка ошибок для модалки
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
    
    // Главное фото
    gallery.innerHTML = `
        <div class="main-image-container">
            <img src="${currentApartment.images[currentImageIndex]}" alt="${currentApartment.title} - Фото ${currentImageIndex + 1}" class="main-image">
            <button class="gallery-nav gallery-prev" onclick="prevImage()" aria-label="Предыдущее фото">‹</button>
            <button class="gallery-nav gallery-next" onclick="nextImage()" aria-label="Следующее фото">›</button>
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

// Функции для модального окна бронирования
function openBookingModal(apartmentId = '') {
    const modal = document.getElementById('bookingModal');
    
    // Если передан ID квартиры, выбираем её в форме
    if (apartmentId && document.getElementById('bookingApartment')) {
        document.getElementById('bookingApartment').value = apartmentId;
    }
    
    // Устанавливаем минимальную дату - сегодня
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('bookingCheckin');
    const checkoutInput = document.getElementById('bookingCheckout');
    
    if (checkinInput) {
        checkinInput.min = today;
        checkinInput.value = ''; // Сбрасываем значение
    }
    if (checkoutInput) {
        checkoutInput.min = today;
        checkoutInput.value = ''; // Сбрасываем значение
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
    
    // Проверка обязательных полей
    if (!checkin.value || !checkout.value || !name.value || !phone.value || !apartment.value) {
        alert('Пожалуйста, заполните все обязательные поля');
        return false;
    }
    
    // Проверка что дата выезда после даты заезда
    if (checkout.value <= checkin.value) {
        alert('Дата выезда должна быть после даты заезда');
        return false;
    }
    
    // Проверка минимального бронирования (1 ночь)
    const checkinDate = new Date(checkin.value);
    const checkoutDate = new Date(checkout.value);
    const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    
    if (nights < 1) {
        alert('Минимальное бронирование - 1 ночь');
        return false;
    }
    
    // ОБНОВЛЕННАЯ ПРОВЕРКА ТЕЛЕФОНА
    if (!validatePhone(phone.value)) {
        alert('Пожалуйста, введите корректный номер телефона (10 цифр после +7)');
        phone.style.borderColor = '#ef4444';
        phone.style.backgroundColor = '#fef2f2';
        phone.focus();
        return false;
    }
    
    // Проверка имени (только буквы и пробелы)
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
    
    // Расчет количества ночей
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
    const BOT_TOKEN = '8569135069:AAGxg4hOGcSIaemwy1vusiHfNbkTflV5sKk';
    const CHAT_IDS = [
        2121761373,           // Ваш личный ID  
        -1003253038474        // ID группы
    ];
    
    const message = `
🎯 НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ

🏠 Квартира: ${formData.apartment}
📅 Даты: ${formData.checkin} - ${formData.checkout} (${formData.nights} ночей)
👤 Гость: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email || 'не указан'}
👥 Гостей: ${formData.guests}
💬 Комментарий: ${formData.comment || 'нет'}

⏰ Время заявки: ${new Date().toLocaleString()}
    `;
    
    try {
        // Отправляем всем получателям из массива CHAT_IDS
        const sendPromises = CHAT_IDS.map(chatId => 
            fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'HTML'
                })
            })
        );
        
        // Ждем завершения всех отправок
        const results = await Promise.all(sendPromises);
        const jsonResults = await Promise.all(results.map(r => r.json()));
        
        // Проверяем что все сообщения отправлены успешно
        const allSent = jsonResults.every(result => result.ok);
        
        return allSent;
        
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
        return false;
    }
}

// Функция для показа уведомлений
function showNotification(message, type = 'info') {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Закрыть уведомление">×</button>
        </div>
    `;
    
    // Добавляем стили для уведомления
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
    
    // Добавляем уведомление на страницу
    document.body.appendChild(notification);
    
    // Обработчик закрытия уведомления
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Автоматическое закрытие через 5 секунд
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
    
    // Сохраняем оригинальный текст
    const originalHtml = submitBtn.innerHTML;
    
    // Показываем состояние загрузки
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    form.classList.add('form-loading');
    
    try {
        // Получаем данные формы
        const formData = getFormData();
        
        // Отправляем в Telegram
        const isSent = await sendToTelegram(formData);
        
        if (isSent) {
            // Успешная отправка
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            submitBtn.querySelector('.btn-text').textContent = '✅ Заявка отправлена!';
            
            // Через 2 секунды закрываем форму
            setTimeout(() => {
                closeBookingModal();
                form.reset();
                submitBtn.classList.remove('success', 'loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHtml;
                form.classList.remove('form-loading');
                
                // Показываем всплывающее уведомление
                showNotification('Спасибо! Мы свяжемся с вами в течение 30 минут для подтверждения бронирования.', 'success');
            }, 2000);
        } else {
            throw new Error('Не удалось отправить заявку');
        }
        
    } catch (error) {
        console.error('Ошибка отправки:', error);
        
        // Ошибка отправки
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('error');
        submitBtn.querySelector('.btn-text').textContent = '❌ Ошибка отправки';
        
        setTimeout(() => {
            submitBtn.classList.remove('error', 'loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHtml;
            form.classList.remove('form-loading');
            
            // Показываем всплывающее уведомление об ошибке
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
    
    let isSubmitting = false; // Защита от множественных отправок
    
    // Обновляем минимальную дату для выезда при выборе заезда
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
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Защита от множественных отправок
        if (isSubmitting) return;
        
        // Базовая валидация
        if (!validateBookingForm()) {
            return;
        }
        
        isSubmitting = true;
        showBookingSuccess().finally(() => {
            isSubmitting = false;
        });
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    setupImageErrorHandling();
    setupLazyLoading();
    enhanceMobileUX();
    setupPhoneMask();
    setupHeaderScroll();
    
    // Мобильное меню
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = navList.classList.toggle('active');
            menuToggle.textContent = isExpanded ? '✕' : '☰';
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Блокируем прокрутку тела при открытом меню
            document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
        });
        
        // Закрываем меню при клике на ссылку
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
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Чтобы не открывалась галерея
            openBookingModal((index + 1).toString());
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

console.log('DonSide apartments grid loaded with Telegram booking!');