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

// Функции модального окна галереи
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

// Валидация формы бронирования
function setupBookingForm() {
    const form = document.getElementById('bookingForm');
    const checkinInput = document.getElementById('bookingCheckin');
    const checkoutInput = document.getElementById('bookingCheckout');
    
    if (!form) return;
    
    // Обновляем минимальную дату для выезда при выборе заезда
    if (checkinInput) {
        checkinInput.addEventListener('change', function() {
            if (this.value && checkoutInput) {
                checkoutInput.min = this.value;
                // Если дата выезда раньше даты заезда - сбрасываем
                if (checkoutInput.value && checkoutInput.value <= this.value) {
                    checkoutInput.value = '';
                }
            }
        });
    }
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Базовая валидация
        if (!validateBookingForm()) {
            return;
        }
        
        // Показываем успешную отправку
        showBookingSuccess();
    });
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
    
    // Базовая проверка телефона (хотя бы 10 цифр)
    const phoneDigits = phone.value.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
        alert('Пожалуйста, введите корректный номер телефона');
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

// Показ успешной отправки и отправка в Telegram
async function showBookingSuccess() {
    const form = document.getElementById('bookingForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    if (!submitBtn) return;
    
    // Сохраняем оригинальный текст
    const originalText = submitBtn.textContent;
    
    // Меняем кнопку
    submitBtn.textContent = 'Отправляем заявку...';
    submitBtn.disabled = true;
    
    try {
        // Получаем данные формы
        const formData = getFormData();
        
        // Отправляем в Telegram
        const isSent = await sendToTelegram(formData);
        
        if (isSent) {
            submitBtn.textContent = 'Заявка отправлена!';
            submitBtn.style.background = '#10b981';
            
            // Через 2 секунды закрываем форму
            setTimeout(() => {
                closeBookingModal();
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                alert('Спасибо! Мы свяжемся с вами в течение 30 минут для подтверждения бронирования.');
            }, 2000);
        } else {
            throw new Error('Не удалось отправить заявку');
        }
        
    } catch (error) {
        submitBtn.textContent = 'Ошибка отправки';
        submitBtn.style.background = '#ef4444';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            alert('Произошла ошибка при отправке. Пожалуйста, позвоните нам напрямую.');
        }, 2000);
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            menuToggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
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