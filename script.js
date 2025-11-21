// ===== ДАННЫЕ КВАРТИР (10 штук) =====
const apartments = [
  {
    id: 1,
    title: "Квартира 1",
    price: "4 000 ₽",
    number: "№1",
    type: "Уютная евродвушка",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/1.1.jpg",
        "images/1.2.jpg",
        "images/1.3.jpg",
        "images/1.4.jpg",
        "images/1.5.jpg",
        "images/1.6.jpg",
        "images/1.7.jpg",
        "images/1.8.jpg",
        "images/1.9.jpg",
        "images/1.10.jpg",
    ]
  },
  {
    id: 2,
    title: "Квартира 2",
    price: "3 500 ₽",
    number: "№2",
    type: "Видовая квартира с панорамой на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/2.1.jpg",
        "images/2.2.jpg",
        "images/2.3.jpg",
        "images/2.4.jpg",
        "images/2.5.jpg",
        "images/2.6.jpg",
        "images/2.7.jpg",
        "images/2.8.jpg",
        "images/2.9.jpg",
        "images/2.10.jpg",
    ]
  },
  {
    id: 3,
    title: "Квартира 3",
    price: "4 500 ₽",
    number: "№3",
    type: "Просторная евродвушка с видом на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/3.1.jpg",
        "images/3.2.jpg",
        "images/3.3.jpg",
        "images/3.8.jpg",
        "images/3.9.jpg",
        "images/3.5.jpg",
        "images/3.6.jpg",
        "images/3.7.jpg",
        "images/3.10.jpg",
        "images/3.11.jpg",
        "images/3.12.jpg",
        
    ]
  },
  {
    id: 4,
    title: "Квартира 4",
    price: "4 500 ₽",
    number: "№4",
    type: "Двухкомнатная квартира",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/4.3.jpg",
        "images/4.2.jpg",
        "images/4.1.jpg",
        "images/4.4.jpg",
        "images/4.5.jpg",
        "images/4.6.jpg",
        "images/4.7.jpg",
        "images/4.8.jpg",
        "images/4.9.jpg",
        "images/4.11.jpg",
        "images/4.12.jpg",
        "images/4.13.jpg",
        "images/4.14.jpg",

    ]
  },
  {
    id: 5,
    title: "Квартира 5",
    price: "3 000 ₽",
    number: "№5",
    type: "Студия с видом на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/5.1.jpg",
        "images/5.2.jpg",
        "images/5.3.jpg",
        "images/5.4.jpg",
        "images/5.5.jpg",
        "images/5.6.jpg",
        "images/5.7.jpg",
        "images/5.8.jpg",
        "images/5.9.jpg",
        "images/5.10.jpg",
    ]
  },
  {
    id: 6,
    title: "Квартира 6",
    price: "4 000 ₽",
    number: "№6",
    type: "Евродвушка с видом на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/6.1.jpg",
        "images/6.2.jpg",
        "images/6.3.jpg",
        "images/6.4.jpg",
        "images/6.5.jpg",
        "images/6.6.jpg",
        "images/6.7.jpg",
        "images/6.8.jpg",
        "images/6.9.jpg",
        "images/6.10.jpg",
        "images/6.12.jpg",
    ]
  },
  {
    id: 7,
    title: "Квартира 7",
    price: "4 000 ₽",
    number: "№7",
    type: "Евродвушка с панорамой на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/7.1.jpg",
        "images/7.2.jpg",
        "images/7.4.jpg",
        "images/7.5.jpg",
        "images/7.6.jpg",
        "images/7.7.jpg",
        "images/7.8.jpg",
        "images/7.9.jpg",
        "images/7.10.jpg",
    ]
  },
  {
    id: 8,
    title: "Квартира 8",
    price: "4 000 ₽",
    number: "№8",
    type: "Двухкомнатная квартира с видом на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/8.1.jpg",
        "images/8.2.jpg",
        "images/8.3.jpg",
        "images/8.4.jpg",
        "images/8.5.jpg",
        "images/8.6.jpg",
        "images/8.7.jpg",
        "images/8.8.jpg",
        "images/8.9.jpg",
        "images/8.10.jpg",
    ]
  },
  {
    id: 9,
    title: "Квартира 9",
    price: "4 000 ₽",
    number: "№9",
    type: "Однокомнатная квартира",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/9.1.jpg",
        "images/9.2.jpg",
        "images/9.3.jpg",
        "images/9.4.jpg",
        "images/9.5.jpg",
        "images/9.6.jpg",
        "images/9.7.jpg",
        "images/9.8.jpg",
        "images/9.9.jpg",
        "images/9.10.jpg",
    ]
  },
  {
    id: 10,
    title: "Квартира 10",
    price: "4 000 ₽",
    number: "№10",
    type: "Двухкомнатная квартира с панорамой на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/10.1.jpg",
        "images/10.2.jpg",
        "images/10.3.jpg",
        "images/10.4.jpg",
        "images/10.5.jpg",
        "images/10.6.jpg",
        "images/10.7.jpg",
        "images/10.8.jpg",
        "images/10.9.jpg",
        "images/10.10.jpg",
    ]
  },
  {
    id: 11,
    title: "Квартира 11",
    price: "4 000 ₽",
    number: "№11",
    type: "Двухкомнатная квартира",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/11.1.jpg",
        "images/11.2.jpg",
        "images/11.3.jpg",
        "images/11.4.jpg",
        "images/11.5.jpg",
        "images/11.6.jpg",
        "images/11.7.jpg",
        "images/11.8.jpg",
        "images/11.9.jpg",
        "images/11.10.jpg",
    ]
  },
  {
    id: 12,
    title: "Квартира 12",
    price: "3 000 ₽",
    number: "№12",
    type: "Двухкомнатная квартира с панорамой на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/12.1.jpg",
        "images/12.2.jpg",
        "images/12.3.jpg",
        "images/12.4.jpg",
        "images/12.5.jpg",
        "images/12.6.jpg",
        "images/12.7.jpg",
        "images/12.8.jpg",
        "images/12.9.jpg",
    ]
  },
  {
    id: 13,
    title: "Квартира 13",
    price: "3 000 ₽",
    number: "№13",
    type: "Двухкомнатная квартира с панорамой на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/13.1.jpg",
        "images/13.2.jpg",
        "images/13.3.jpg",
        "images/13.4.jpg",
        "images/13.5.jpg",
        "images/13.6.jpg",
        "images/13.8.jpg",
    ]
  },
  {
    id: 14,
    title: "Квартира 14",
    price: "3 000 ₽",
    number: "№14",
    type: "Двухкомнатная квартира с панорамой на р. Дон",
    location: "ЖК «Белый ангел», Береговая 6",
    images: ["images/14.1.jpg",
        "images/14.2.jpg",
        "images/14.3.jpg",
        "images/14.4.jpg",
        "images/14.5.jpg",
        "images/14.6.jpg",
        "images/14.7.jpg",
    ]
  }
];

// ====== ХЕДЕР ПРИ СКРОЛЛЕ ======
function setupHeaderScroll() {
  const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

if (!header) return;

// Отключаем поведение на внутренних страницах
if (header.classList.contains("header--inner")) return;

if (!hero) return;

window.addEventListener("scroll", () => {
    const heroHeight = hero.offsetHeight;
    if (window.scrollY > heroHeight - 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
}

// ====== МАСКА ТЕЛЕФОНА ======
function setupPhoneMask() {
  const phoneInput = document.getElementById("bookingPhone");
  if (!phoneInput) return;

  phoneInput.value = "+7 (";

  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.startsWith("7") || value.startsWith("8")) {
      value = value.substring(1);
    }

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    let formattedValue = "+7 (";

    if (value.length > 0) {
      formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += ") " + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += "-" + value.substring(6, 8);
    }
    if (value.length > 8) {
      formattedValue += "-" + value.substring(8, 10);
    }

    e.target.value = formattedValue;
  });

  phoneInput.addEventListener("blur", function () {
    const digits = this.value.replace(/\D/g, "");
    if (digits.length !== 11) {
      this.style.borderColor = "#ef4444";
      this.style.backgroundColor = "#fef2f2";
    } else {
      this.style.borderColor = "";
      this.style.backgroundColor = "";
    }
  });

  phoneInput.addEventListener("focus", function () {
    this.style.borderColor = "";
    this.style.backgroundColor = "";
  });

  phoneInput.addEventListener("keydown", function (e) {
    if (e.key === "Backspace" || e.key === "Delete") {
      if (this.value.length <= 4) {
        e.preventDefault();
        this.value = "+7 (";
      }
    }
  });
}

function validatePhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 11;
}

// ====== ОБРАБОТКА ОШИБОК КАРТИНОК (about, позже можно расширить) ======
function setupImageErrorHandling() {
  document.querySelectorAll(".about-img").forEach((img) => {
    img.addEventListener("error", function () {
      this.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmYWZjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk0YTBhZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
      this.alt = "Изображение временно недоступно";
      this.classList.add("image-fallback");
    });
  });
}

// ====== HЕБОЛЬШАЯ "ЛЕНИВАЯ" ЗАГРУЗКА (если появятся .card-image) ======
function setupLazyLoading() {
  document.querySelectorAll(".card-image img").forEach((img) => {
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");
  });
}

// ====== ФОКУС ВНУТРИ МОДАЛКИ ======
function trapFocus(modal) {
  const focusables = modal.querySelectorAll(
    "a,button,input,select,textarea,[tabindex]:not([tabindex='-1'])"
  );
  if (!focusables.length) return;
  const first = focusables[0],
    last = focusables[focusables.length - 1];

  function loop(e) {
    if (e.key !== "Tab") return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  modal.addEventListener("keydown", loop);
  setTimeout(() => first.focus(), 0);
}

// ====== СЛАЙДЕР КВАРТИР (roomsSlider*) ======
function setupRoomsSlider() {
  const img = document.getElementById("roomsSliderImage");
  const priceEl = document.getElementById("roomsSliderPrice");
  const numEl = document.getElementById("roomsSliderNumber");
  const typeEl = document.getElementById("roomsSliderType");
  const locEl = document.getElementById("roomsSliderLocation");
  const moreBtn = document.getElementById("roomsSliderMore");
  const dotsBox = document.getElementById("roomsSliderDots");
  const prevBtn = document.querySelector(".rooms-slider-arrow-prev");
  const nextBtn = document.querySelector(".rooms-slider-arrow-next");

  // Если блока нет — ничего не делаем
  if (!img || !dotsBox) return;

  const dots = Array.from(dotsBox.querySelectorAll(".rooms-dot"));

  // Формируем список квартир ДЛЯ СЛАЙДЕРА по точкам
  const heroApartments = dots
    .map((dot) => {
      const id = Number(dot.dataset.apartmentId);
      return apartments.find((a) => a.id === id);
    })
    .filter(Boolean);

  if (heroApartments.length === 0) return;

  let currentIndex = 0;

  function showByIndex(i) {
    const apt = heroApartments[i];
    if (!apt) return;

    currentIndex = i;

    img.src = apt.images && apt.images.length ? apt.images[0] : "";
    priceEl.textContent = apt.price || "";
    numEl.textContent = apt.number || "";
    typeEl.textContent = apt.type || "";
    locEl.textContent = apt.location || "";

    // подсветка точек
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === i);
    });
  }

  // Клик по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showByIndex(index);
    });
  });

  // Стрелки
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const i =
        (currentIndex - 1 + heroApartments.length) % heroApartments.length;
      showByIndex(i);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const i = (currentIndex + 1) % heroApartments.length;
      showByIndex(i);
    });
  }

  // Кнопка "Узнать больше" — бронь выбранной квартиры
  if (moreBtn) {
    moreBtn.addEventListener("click", () => {
      const apt = heroApartments[currentIndex];
      if (!apt) return;
      openBookingModal(String(apt.id));
    });
  }

  // Клик по картинке — модалка с фото квартиры
  img.addEventListener("click", () => {
    const apt = heroApartments[currentIndex];
    if (!apt) return;
    openApartmentModal(apt.id);
  });

  // Показать первую квартиру
  showByIndex(0);
}

// ====== ГАЛЕРЕЯ КВАРТИРЫ (модальное окно) ======
let currentApartment = null;
let currentImageIndex = 0;

function preloadImages(imageUrls) {
  if (!imageUrls || !imageUrls.length) return;
  imageUrls.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function openApartmentModal(apartmentId, imageIndex = 0) {
  const idNum = Number(apartmentId);
  const apt = apartments.find((a) => a.id === idNum);

  const modal = document.getElementById("apartmentModal");
  if (!modal || !apt) {
    console.error("Квартира не найдена или модалка отсутствует:", apartmentId);
    return;
  }

  currentApartment = apt;

  // без картинок — просто 0
  if (!Array.isArray(apt.images) || apt.images.length === 0) {
    currentImageIndex = 0;
  } else {
    // clamping: не даём выйти за пределы массива
    const maxIndex = apt.images.length - 1;
    const safeIndex = Math.min(Math.max(0, imageIndex), maxIndex);
    currentImageIndex = safeIndex;
  }

  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  trapFocus(modal);

  preloadImages(apt.images);
  updateGallery();

  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    document
      .querySelectorAll(".modal-gallery img, .modal-thumbnails img")
      .forEach((img) => {
        img.addEventListener("error", function () {
          this.src =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmYWZjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk0YTBhZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
          this.alt = "Фото недоступно";
          this.classList.add("image-fallback");
        });
      });
  }, 100);
}

function updateGallery() {
  const gallery = document.querySelector(".modal-gallery");
  const thumbnails = document.getElementById("modalThumbnails");

  if (!gallery || !thumbnails || !currentApartment || !currentApartment.images.length)
    return;

  gallery.innerHTML = `
    <div class="main-image-container">
      <img src="${currentApartment.images[currentImageIndex]}"
           alt="${currentApartment.title} - Фото ${currentImageIndex + 1}"
           class="main-image">
      <button class="gallery-nav gallery-prev" onclick="prevImage()" aria-label="Предыдущее фото">‹</button>
      <button class="gallery-nav gallery-next" onclick="nextImage()" aria-label="Следующее фото">›</button>
      <div class="image-counter">${currentImageIndex + 1} / ${currentApartment.images.length}</div>
    </div>
  `;

  thumbnails.innerHTML = "";
  currentApartment.images.forEach((imageSrc, index) => {
    const thumb = document.createElement("img");
    thumb.src = imageSrc;
    thumb.alt = `Миниатюра ${index + 1}`;
    thumb.className =
      "thumbnail " + (index === currentImageIndex ? "active" : "");
    thumb.onclick = () => changeImage(index);
    thumbnails.appendChild(thumb);
  });
}

function changeImage(index) {
  if (!currentApartment) return;
  currentImageIndex = index;
  updateGallery();
}

function nextImage() {
  if (!currentApartment) return;
  currentImageIndex =
    (currentImageIndex + 1) % currentApartment.images.length;
  updateGallery();
}

function prevImage() {
  if (!currentApartment) return;
  currentImageIndex =
    (currentImageIndex - 1 + currentApartment.images.length) %
    currentApartment.images.length;
  updateGallery();
}

function closeApartmentModal() {
  const modal = document.getElementById("apartmentModal");
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  currentApartment = null;
  currentImageIndex = 0;
}

// ====== МОДАЛКА БРОНИ ======
function openBookingModal(apartmentId = "") {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  trapFocus(modal);

  if (apartmentId && document.getElementById("bookingApartment")) {
    document.getElementById("bookingApartment").value = apartmentId;
  }

  const today = new Date().toISOString().split("T")[0];
  const checkinInput = document.getElementById("bookingCheckin");
  const checkoutInput = document.getElementById("bookingCheckout");

  if (checkinInput) {
    checkinInput.min = today;
    checkinInput.value = "";
  }
  if (checkoutInput) {
    checkoutInput.min = today;
    checkoutInput.value = "";
  }

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// ====== ВАЛИДАЦИЯ ФОРМЫ БРОНИ ======
function validateBookingForm() {
  const checkin = document.getElementById("bookingCheckin");
  const checkout = document.getElementById("bookingCheckout");
  const name = document.getElementById("bookingName");
  const phone = document.getElementById("bookingPhone");
  const apartment = document.getElementById("bookingApartment");

  if (!checkin || !checkout || !name || !phone || !apartment) {
    alert("Ошибка: не все поля формы найдены");
    return false;
  }

  if (
    !checkin.value ||
    !checkout.value ||
    !name.value ||
    !phone.value ||
    !apartment.value
  ) {
    alert("Пожалуйста, заполните все обязательные поля");
    return false;
  }

  if (checkout.value <= checkin.value) {
    alert("Дата выезда должна быть после даты заезда");
    return false;
  }

  const checkinDate = new Date(checkin.value);
  const checkoutDate = new Date(checkout.value);
  const nights = Math.ceil(
    (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
  );

  if (nights < 1) {
    alert("Минимальное бронирование - 1 ночь");
    return false;
  }

  if (!validatePhone(phone.value)) {
    alert("Пожалуйста, введите корректный номер телефона (10 цифр после +7)");
    phone.style.borderColor = "#ef4444";
    phone.style.backgroundColor = "#fef2f2";
    phone.focus();
    return false;
  }

  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
  if (!nameRegex.test(name.value.trim())) {
    alert("Пожалуйста, введите корректное имя (только буквы)");
    name.style.borderColor = "#ef4444";
    name.style.backgroundColor = "#fef2f2";
    name.focus();
    return false;
  }

  return true;
}

function getFormData() {
  const checkin = document.getElementById("bookingCheckin").value;
  const checkout = document.getElementById("bookingCheckout").value;
  const apartment = document.getElementById("bookingApartment");
  const name = document.getElementById("bookingName").value;
  const phone = document.getElementById("bookingPhone").value;
  const email = document.getElementById("bookingEmail").value;
  const guests = document.getElementById("bookingGuests").value;
  const comment = document.getElementById("bookingComment").value;

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const nights = Math.ceil(
    (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
  );

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

// ====== ОТПРАВКА В TELEGRAM через /api/booking ======
async function sendToTelegram(formData) {
  const message = `
Новая заявка на бронирование!

🏠 Квартира: ${formData.apartment}
📅 Даты: ${formData.checkin} - ${formData.checkout}
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email || "не указан"}
👥 Гостей: ${formData.guests}
💬 Комментарий: ${formData.comment || "нет"}
⏰ Время: ${new Date().toLocaleString()}
  `.trim();

  const r = await fetch("send_booking.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message })/*  */
});

  const data = await r.json();
  return data.ok;
}

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close" aria-label="Закрыть уведомление">×</button>
    </div>
  `;

  if (!document.querySelector("#notification-styles")) {
    const styles = document.createElement("style");
    styles.id = "notification-styles";
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
      .notification-success { border-left-color: #10b981; }
      .notification-error { border-left-color: #ef4444; }
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
      .notification-close:hover { color: var(--dark); }
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
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

  notification
    .querySelector(".notification-close")
    .addEventListener("click", function () {
      notification.style.animation = "slideIn 0.3s ease reverse";
      setTimeout(() => notification.remove(), 300);
    });

  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideIn 0.3s ease reverse";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// ====== УСПЕШНАЯ ОТПРАВКА ФОРМЫ ======
async function showBookingSuccess() {
  const form = document.getElementById("bookingForm");
  const submitBtn = form.querySelector(".submit-btn");

  if (!submitBtn) return;

  const originalHtml = submitBtn.innerHTML;

  submitBtn.classList.add("loading");
  submitBtn.disabled = true;
  form.classList.add("form-loading");

  try {
    const formData = getFormData();
    const isSent = await sendToTelegram(formData);

    if (isSent) {
      submitBtn.classList.remove("loading");
      submitBtn.classList.add("success");
      const textSpan = submitBtn.querySelector(".btn-text");
      if (textSpan) textSpan.textContent = "✅ Заявка отправлена!";

      setTimeout(() => {
        closeBookingModal();
        form.reset();
        submitBtn.classList.remove("success", "loading");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
        form.classList.remove("form-loading");

        showNotification(
          "Спасибо! Мы свяжемся с вами в течение 30 минут для подтверждения бронирования.",
          "success"
        );
      }, 2000);
    } else {
      throw new Error("Не удалось отправить заявку");
    }
  } catch (error) {
    console.error("Ошибка отправки:", error);

    submitBtn.classList.remove("loading");
    submitBtn.classList.add("error");
    const textSpan = submitBtn.querySelector(".btn-text");
    if (textSpan) textSpan.textContent = "❌ Ошибка отправки";

    setTimeout(() => {
      submitBtn.classList.remove("error", "loading");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
      form.classList.remove("form-loading");

      showNotification(
        "Произошла ошибка при отправке. Пожалуйста, позвоните нам напрямую.",
        "error"
      );
    }, 2000);
  }
}

// ====== НАСТРОЙКА ФОРМЫ ======
function setupBookingForm() {
  const form = document.getElementById("bookingForm");
  const checkinInput = document.getElementById("bookingCheckin");
  const checkoutInput = document.getElementById("bookingCheckout");

  if (!form) return;

  let isSubmitting = false;

  if (checkinInput) {
    checkinInput.addEventListener("change", function () {
      if (this.value && checkoutInput) {
        checkoutInput.min = this.value;
        if (checkoutInput.value && checkoutInput.value <= this.value) {
          checkoutInput.value = "";
        }
      }
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isSubmitting) return;
    if (!validateBookingForm()) return;

    isSubmitting = true;
    showBookingSuccess().finally(() => {
      isSubmitting = false;
    });
  });
}

// ====== МОБИЛЬНЫЙ UX ДЛЯ ГАЛЕРЕИ (свайпы) ======
function enhanceMobileUX() {
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener(
    "touchstart",
    function (e) {
      if (e.target.closest(".modal-gallery")) {
        touchStartX = e.changedTouches[0].screenX;
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "touchend",
    function (e) {
      if (e.target.closest(".modal-gallery")) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }
    },
    { passive: true }
  );

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

// ====== INIT ======
document.addEventListener("DOMContentLoaded", function () {
  setupImageErrorHandling();
  setupLazyLoading();
  enhanceMobileUX();
  setupPhoneMask();
  setupHeaderScroll();
  setupRoomsSlider(); // hero-слайдер
  setupBookingForm();

  // Мобильное меню
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      const isExpanded = navList.classList.toggle("active");
      menuToggle.textContent = isExpanded ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", isExpanded);
      document.body.style.overflow = isExpanded ? "hidden" : "auto";
    });

    document.querySelectorAll(".nav-list a").forEach((link) => {
      link.addEventListener("click", function () {
        navList.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      });
    });
  }

  // Кнопки бронирования (шапка + hero)
  // Кнопки бронирования (только шапка)
const bookButtons = document.querySelectorAll(".book-btn");
bookButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    openBookingModal();
  });
});

  // Кнопки "Узнать больше" в карточках (если появятся)
  const detailButtons = document.querySelectorAll(".card-btn");
  detailButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const apt = apartments[index];
      if (apt) openApartmentModal(apt.id);
    });
  });

  // Клик по оверлеям модалок
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", function () {
      closeApartmentModal();
      closeBookingModal();
    });
  });
});

// ESC + стрелки для галереи
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeApartmentModal();
    closeBookingModal();
  }
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});

console.log("DonSide: hero-слайдер и бронирование инициализированы");