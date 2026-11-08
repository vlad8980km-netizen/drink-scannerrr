// Заглушка для картинок, которых нет
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">' +
    '<rect width="100%" height="100%" fill="#f0f0f0"/>' +
    '<text x="50%" y="50%" font-family="Arial" font-size="14" fill="#999" text-anchor="middle" dy=".3em">Нет фото</text>' +
    '</svg>'
);

function showDrinkInfo(key) {
    const drink = drinksData[key];
    if (!drink) return;

    const info = (typeof drinksInfo !== 'undefined' && drinksInfo[key]) ? drinksInfo[key] : {};

    document.getElementById('modalTitle').innerText = drink.name;
    document.getElementById('modalImg').src = drink.image || PLACEHOLDER;

    const badge = document.getElementById('modalBadge');
    badge.innerText = drink.badgeText;
    badge.className = 'product-status ' + drink.badgeClass;

    document.getElementById('modalType').innerText = info.type || '—';
    document.getElementById('modalVolume').innerText = info.volume || '—';
    document.getElementById('modalSugar').innerText = info.sugarPerBottle
        ? `${info.sugarPerBottle} (${info.sugarPer100ml} на 100 мл)`
        : '—';
    document.getElementById('modalCalories').innerText = info.calories || '—';
    document.getElementById('modalCaffeine').innerText = info.caffeine || '—';
    document.getElementById('modalIngredients').innerText = info.ingredients || '—';

    const risksList = document.getElementById('modalRisks');
    risksList.innerHTML = '';
    if (info.risks && info.risks.length) {
        info.risks.forEach(r => {
            const li = document.createElement('li');
            li.innerText = r;
            risksList.appendChild(li);
        });
    } else {
        risksList.innerHTML = '<li>Данные уточняются.</li>';
    }

    document.getElementById('modalLimit').innerText = info.limit || '—';
    document.getElementById('modalAudience').innerText = info.audience || '—';
    document.getElementById('modalVerdict').innerText = info.verdict || '—';

    document.getElementById('drinkModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('drinkModal').style.display = 'none';
}

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

document.addEventListener("DOMContentLoaded", () => {
    // 1. СКАНЕР
const scannerSection = document.getElementById('scanner-zone');
let html5QrcodeScanner = null; // чтобы можно было остановить снаружи

if (isMobileDevice) {
    if (typeof Html5QrcodeScanner === 'undefined') {
        scannerSection.innerHTML = '<div class="pc-warning">⚠️ Не удалось загрузить библиотеку сканера. Проверьте интернет-соединение.</div>';
    } else {
        scannerSection.innerHTML = '<div id="reader" style="width:100%"></div>';

        html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            { fps: 15, qrbox: 250 },
            false
        );

        html5QrcodeScanner.render(
            (decodedText) => {
                handleScannedCode(decodedText);
            },
            (error) => { /* ошибки чтения — игнорируем, это нормальный поток */ }
        );
    }
} else {
    scannerSection.innerHTML = `<div class="pc-warning">
        <strong>⚡ Сканер не работает в ПК-версии сайта, он работает только в мобильной версии.</strong><br>
        Вы можете протестировать работу карточек, выбрав реальную газировку в каталоге ниже.
    </div>`;
}

// === Обработчик считанного кода ===
function handleScannedCode(rawCode) {
    // 1. Чистим код от пробелов и переносов
    const code = String(rawCode).trim();

    // 2. Ищем в маппинге
    const drinkKey = barcodesMap[code];

    if (drinkKey && drinksData[drinkKey]) {
        // Нашли — останавливаем сканер (чтобы не жужжал и не жрал батарею)
        stopScanner();
        // Показываем карточку
        showDrinkInfo(drinkKey);
    } else {
        // Не нашли — показываем понятное сообщение
        showUnknownDrink(code);
    }
}

// Остановка сканера
function stopScanner() {
    if (html5QrcodeScanner) {
        html5QrcodeScanner.clear().catch(err => console.warn('Ошибка остановки сканера:', err));
        html5QrcodeScanner = null;
    }
}

// Модалка "напиток не найден"
function showUnknownDrink(code) {
    document.getElementById('modalTitle').innerText = 'Напиток не найден';
    document.getElementById('modalImg').src = PLACEHOLDER;

    const badge = document.getElementById('modalBadge');
    badge.innerText = 'Нет в базе';
    badge.className = 'product-status status-warning';

    document.getElementById('modalType').innerText = '—';
    document.getElementById('modalVolume').innerText = '—';
    document.getElementById('modalSugar').innerText = '—';
    document.getElementById('modalCalories').innerText = '—';
    document.getElementById('modalCaffeine').innerText = '—';
    document.getElementById('modalIngredients').innerText = '—';

    const risksList = document.getElementById('modalRisks');
    risksList.innerHTML = `<li>Этот штрихкод (<b>${code}</b>) пока отсутствует в нашей базе.</li>
                           <li>Если у вас есть бутылка — напишите нам, мы добавим напиток.</li>`;

    document.getElementById('modalLimit').innerText = '—';
    document.getElementById('modalAudience').innerText = '—';
    document.getElementById('modalVerdict').innerText = 'Данные по этому напитку ещё не загружены.';

    document.getElementById('drinkModal').style.display = 'flex';
}
    // 2. КАТАЛОГ
    const catalogContainer = document.getElementById('catalog-container');
    catalogContainer.innerHTML = '';

    const categories = [...new Set(Object.values(drinksData).map(d => d.category))];

    categories.forEach(catName => {
        const catSection = document.createElement('div');
        catSection.className = 'category-group';
        catSection.innerHTML = `<div class="catalog-title">${catName}</div>`;

        const grid = document.createElement('div');
        grid.className = 'grid-catalog';

        for (const key in drinksData) {
            const item = drinksData[key];
            if (item.category === catName) {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.setAttribute('onclick', `showDrinkInfo('${key}')`);

                card.innerHTML = `
                    <div class="product-img-wrapper">
                        <img src="${item.image || PLACEHOLDER}" alt="${item.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${item.name}</div>
                        <div class="product-status ${item.badgeClass}">${item.badgeText}</div>
                    </div>
                `;
                grid.appendChild(card);
            }
        }

        catSection.appendChild(grid);
        catalogContainer.appendChild(catSection);
    });
});
