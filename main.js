// Main JavaScript for Diana Shutova Psychology Website
// Основной JavaScript для сайта психолога Дианы Шутовой

// Дожидаемся полной загрузки DOM перед выполнением кода
// Можно изменить на 'load' если нужно дождаться загрузки всех ресурсов
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех компонентов сайта
    // Порядок инициализации можно менять в зависимости от приоритетов
    initMobileMenu();       // Мобильное меню
    initScrollReveal();     // Анимации при прокрутке
    initTypewriter();       // Эффект печатной машинки
    initSmoothScroll();     // Плавная прокрутка
    initActiveNavigation(); // Активная навигация
});

// Mobile Menu Toggle - Переключение мобильного меню
function initMobileMenu() {
    // Получаем кнопку мобильного меню и само меню по их ID
    // Можно изменить ID на любые другие, если они отличаются в HTML
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Проверяем существование элементов перед работой с ними
    // Можно добавить другие условия или изменить логику проверки
    if (mobileMenuBtn && mobileMenu) {
        // Добавляем обработчик клика на кнопку меню
        // Можно изменить событие на 'touchstart' для мобильных устройств
        mobileMenuBtn.addEventListener('click', function() {
            // Переключаем класс 'hidden' для показа/скрытия меню
            // Можно изменить название класса на любой другой
            mobileMenu.classList.toggle('hidden');
        });
        
        // Закрытие мобильного меню при клике вне его области
        // Можно изменить событие на 'touchstart' для мобильных
        document.addEventListener('click', function(event) {
            // Проверяем, что клик был не по кнопке и не по меню
            // Можно добавить другие элементы в условие
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                // Добавляем класс 'hidden' для скрытия меню
                // Можно изменить название класса
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Scroll Reveal Animation - Анимации при прокрутке
function initScrollReveal() {
    // Получаем все элементы с классом 'reveal'
    // Можно изменить селектор на любой другой класс или тег
    const revealElements = document.querySelectorAll('.reveal');
    
    // Создаем наблюдатель за пересечением элементов с viewport
    const revealObserver = new IntersectionObserver((entries) => {
        // Обрабатываем каждую запись наблюдателя
        entries.forEach(entry => {
            // Проверяем, что элемент пересекается с viewport
            if (entry.isIntersecting) {
                // Добавляем класс 'active' для запуска анимации
                // Можно изменить название класса на любой другой
                entry.target.classList.add('active');
            }
        });
    }, {
        // Параметры наблюдателя:
        threshold: 0.1,  // Доля видимости элемента для срабатывания (0-1)
                        // Можно изменить: 0 (1px виден) - 1 (полностью виден)
        rootMargin: '0px 0px -50px 0px' // Отступы от краев viewport
                                       // Можно изменить на '0px' или другие значения
                                       // Формат: 'top right bottom left'
    });
    
    // Наблюдаем за каждым элементом
    // Можно добавить фильтрацию элементов перед наблюдением
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Typewriter Effect for Hero Section - Эффект печатной машинки для заголовка
// ИСПРАВЛЕННАЯ версия: эффект не сдвигает страницу вниз, а работает в фиксированном контейнере
function initTypewriter() {
    // Получаем элемент для эффекта печатной машинки
    // Можно изменить ID на любой другой
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        // === НОВЫЙ КОД: Фиксация высоты контейнера для предотвращения сдвига страницы ===
        // Устанавливаем стили контейнера для предотвращения сдвига страницы
        typedElement.style.cssText = `
            height: 60px;           /* ФИКСИРОВАННАЯ ВЫСОТА КОНТЕЙНЕРА (можно изменить: 40px, 80px, 100px) */
            display: flex;          /* FLEXBOX для вертикального центрирования */
            align-items: center;    /* ВЕРТИКАЛЬНОЕ ЦЕНТРИРОВАНИЕ ТЕКСТА (можно изменить: flex-start, flex-end) */
            overflow: hidden;       /* СКРЫТИЕ ПЕРЕПОЛНЕНИЯ, чтобы текст не вылезал за границы */
            min-height: 60px;       /* МИНИМАЛЬНАЯ ВЫСОТА для адаптивности (можно изменить аналогично height) */
            margin: 0;              /* УБИРАЕМ ВНЕШНИЕ ОТСТУПЫ, которые могут вызвать сдвиг */
            padding: 0;             /* УБИРАЕМ ВНУТРЕННИЕ ОТСТУПЫ */
        `;
        // === КОНЕЦ НОВОГО КОДА ===
        
        // Настройки эффекта печатной машинки
        const options = {
            strings: [  // Массив строк для отображения
                'Диана Шутова',                    // Можно изменить текст
                'Психолог',                       // Можно добавить/удалить строки
                'Помогаю справляться с тревогой'  // Можно изменить порядок
            ],
            typeSpeed: 80,      // Скорость набора текста (мс на символ)
                               // Можно изменить: 10 (очень быстро) - 200 (медленно)
            backSpeed: 50,      // Скорость удаления текста (мс на символ)
                               // Можно изменить аналогично typeSpeed
            backDelay: 2000,    // Задержка перед удалением текста (мс)
                               // Можно изменить: 500 (быстро) - 5000 (медленно)
            startDelay: 500,    // Задержка перед началом (мс)
                               // Можно изменить аналогично backDelay
            loop: true,         // Зацикливание эффекта (true/false)
                               // Можно изменить на false для однократного выполнения
            showCursor: true,   // Показывать курсор (true/false)
                               // Можно изменить на false для скрытия курсора
            cursorChar: '|',    // Символ курсора
                               // Можно изменить на любой другой символ: '_', '█', '❚'
            autoInsertCss: true // Автоматическая вставка CSS (true/false)
                               // Можно изменить на false если CSS добавлен вручную
        };
        
        // Инициализируем эффект печатной машинки
        // Можно изменить селектор на любой другой
        new Typed('#typed-text', options);
    }
}

// Smooth Scroll for Navigation Links - Плавная прокрутка для навигационных ссылок
function initSmoothScroll() {
    // Получаем все ссылки с якорями (начинаются с #)
    // Можно изменить селектор на более конкретный: '.nav a[href^="#"]'
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Обрабатываем каждую ссылку
    navLinks.forEach(link => {
        // Добавляем обработчик клика
        // Можно изменить на 'touchstart' для мобильных устройств
        link.addEventListener('click', function(e) {
            // Отменяем стандартное поведение ссылки
            e.preventDefault();
            
            // Получаем ID целевого элемента
            // Можно изменить способ получения атрибута
            const targetId = this.getAttribute('href');
            // Находим целевой элемент
            // Можно изменить селектор на более конкретный
            const targetElement = document.querySelector(targetId);
            
            // Проверяем существование целевого элемента
            if (targetElement) {
                // Вычисляем позицию прокрутки с учетом фиксированной навигации
                // Можно изменить значение 80 на высоту вашей навигации
                const offsetTop = targetElement.offsetTop - 80;
                
                // Выполняем плавную прокрутку
                window.scrollTo({
                    top: offsetTop,        // Целевая позиция
                    behavior: 'smooth'     // Плавная прокрутка
                                          // Можно изменить на 'auto' для мгновенной прокрутки
                });
            }
        });
    });
}

// Active Navigation Highlight - Подсветка активной секции в навигации
function initActiveNavigation() {
    // Получаем все секции с ID
    // Можно изменить селектор на более конкретный
    const sections = document.querySelectorAll('section[id]');
    // Получаем все навигационные ссылки
    // Можно изменить селектор на более конкретный
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    // Функция для подсветки активной секции
    function highlightActiveSection() {
        let current = ''; // Переменная для хранения ID текущей секции
        
        // Проверяем каждую секцию
        sections.forEach(section => {
            // Вычисляем верхнюю границу секции с отступом
            // Можно изменить значение 100 на другое для настройки чувствительности
            const sectionTop = section.offsetTop - 100;
            // Получаем высоту секции
            const sectionHeight = section.clientHeight;
            
            // Проверяем, находится ли пользователь в этой секции
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                // Сохраняем ID текущей секции
                current = section.getAttribute('id');
            }
        });
        
        // Обновляем стили навигационных ссылок
        navLinks.forEach(link => {
            // Удаляем активный класс
            // Можно изменить название класса
            link.classList.remove('text-primary');
            // Добавляем неактивный класс
            // Можно изменить название класса
            link.classList.add('text-secondary');
            
            // Проверяем, соответствует ли ссылка текущей секции
            if (link.getAttribute('href') === `#${current}`) {
                // Удаляем неактивный класс
                link.classList.remove('text-secondary');
                // Добавляем активный класс
                link.classList.add('text-primary');
                // Можно изменить названия классов на любые другие
            }
        });
    }
    
    // Добавляем обработчик события прокрутки с debounce для оптимизации
    // Можно изменить частоту вызова функции
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Первичный вызов для начальной установки
}

// Utility Functions - Вспомогательные функции
// Функция debounce для оптимизации частых вызовов
function debounce(func, wait) {
    // Таймер для отложенного вызова
    let timeout;
    // Возвращаем функцию, которая будет выполнена с задержкой
    return function executedFunction(...args) {
        // Функция для отложенного выполнения
        const later = () => {
            clearTimeout(timeout); // Очищаем предыдущий таймер
            func(...args);         // Выполняем оригинальную функцию
        };
        clearTimeout(timeout);     // Очищаем существующий таймер
        timeout = setTimeout(later, wait); // Устанавливаем новый таймер
                                          // Можно изменить значение wait (мс)
    };
}

// Add loading states for buttons - Добавление состояний загрузки для кнопок
document.addEventListener('click', function(e) {
    // Проверяем, что клик был по ссылке телефона или Telegram
    // Можно добавить другие типы ссылок
    if (e.target.matches('a[href^="tel:"]') || e.target.matches('a[href^="https://t.me/"]')) {
        // Добавляем состояние загрузки если нужно
        // Можно реализовать визуальное отображение загрузки
        console.log('Contact action triggered');
    }
});

// Performance optimization: Lazy load images - Оптимизация: ленивая загрузка изображений
function initLazyLoading() {
    // Проверяем поддержку IntersectionObserver
    if ('IntersectionObserver' in window) {
        // Создаем наблюдатель для изображений
        const imageObserver = new IntersectionObserver((entries, observer) => {
            // Обрабатываем каждую запись
            entries.forEach(entry => {
                // Проверяем, что изображение пересекается с viewport
                if (entry.isIntersecting) {
                    // Получаем изображение
                    const img = entry.target;
                    // Устанавливаем реальный src из data-src
                    // Можно изменить атрибут на любой другой
                    img.src = img.dataset.src;
                    // Удаляем класс ленивой загрузки
                    // Можно изменить название класса
                    img.classList.remove('lazy');
                    // Прекращаем наблюдение за этим изображением
                    imageObserver.unobserve(img);
                }
            });
        });

        // Наблюдаем за всеми изображениями с data-src
        // Можно изменить селектор на более конкретный
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading if needed - Инициализация ленивой загрузки при необходимости
// initLazyLoading(); // Раскомментировать для включения

// Add CSS custom properties for dynamic theming - Добавление CSS переменных для динамической темизации
function updateCSSCustomProperties() {
    // Получаем корневой элемент документа
    const root = document.documentElement;
    
    // Обновляем цвета в зависимости от текущей темы
    // Можно изменить значения цветов на любые другие
    root.style.setProperty('--primary-color', '#2C3E50');    // Основной цвет
    root.style.setProperty('--secondary-color', '#7F8C8D');  // Вторичный цвет
    root.style.setProperty('--accent-color', '#E8B4B8');     // Акцентный цвет
}

// Initialize CSS custom properties - Инициализация CSS переменных
updateCSSCustomProperties();

// Add scroll progress indicator - Индикатор прогресса прокрутки
function initScrollProgress() {
    // Создаем элемент индикатора прогресса
    const progressBar = document.createElement('div');
    // Устанавливаем стили индикатора
    progressBar.style.cssText = `
        position: fixed;           // Фиксированное позиционирование
        top: 0;                    // Сверху страницы
        left: 0;                   // Слева страницы
        width: 0%;                 // Начальная ширина 0%
        height: 3px;               // Высота индикатора
                                  // Можно изменить на любое значение
        background: #E8B4B8;       // Цвет индикатора
                                  // Можно изменить на любой другой цвет
        z-index: 1000;             // Высокий z-index для отображения поверх
        transition: width 0.1s ease; // Плавный переход ширины
                                    // Можно изменить длительность и тип перехода
    `;
    // Добавляем индикатор в тело документа
    document.body.appendChild(progressBar);
    
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', () => {
        // Получаем текущую позицию прокрутки
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        // Вычисляем общую высоту прокручиваемой области
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // Вычисляем процент прокрутки
        const scrolled = (winScroll / height) * 100;
        // Устанавливаем ширину индикатора
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress - Инициализация индикатора прогресса
// initScrollProgress(); // Раскомментировать для включения

// Add keyboard navigation support - Поддержка навигации с клавиатуры
document.addEventListener('keydown', function(e) {
    // ESC для закрытия мобильного меню
    if (e.key === 'Escape') {
        // Получаем мобильное меню
        const mobileMenu = document.getElementById('mobile-menu');
        // Проверяем существование меню и его видимость
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            // Скрываем меню
            mobileMenu.classList.add('hidden');
        }
    }
});

// Add focus management for accessibility - Управление фокусом для доступности
function initFocusManagement() {
    // Селектор для всех элементов, которые могут получать фокус
    // Можно изменить на более конкретный или добавить другие элементы
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    // Обработчик нажатия клавиши Tab
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Добавляем класс для индикации навигации с клавиатуры
            // Можно изменить название класса
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Обработчик клика мышью
    document.addEventListener('mousedown', function() {
        // Удаляем класс навигации с клавиатуры
        document.body.classList.remove('keyboard-navigation');
    });
}

// Initialize focus management - Инициализация управления фокусом
initFocusManagement();

// Console welcome message - Приветственное сообщение в консоли
// Можно изменить текст и стили сообщения
console.log('%cДобро пожаловать на сайт психолога Дианы Шутовой', 'color: #E8B4B8; font-size: 16px; font-weight: bold;');
console.log('%cЕсли вам нужна помощь - не стесняйтесь обращаться', 'color: #2C3E50; font-size: 14px;');
