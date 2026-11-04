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
    if (isMobileDevice) {
        if (typeof Html5QrcodeScanner === 'undefined') {
            scannerSection.innerHTML = '<div class="pc-warning">⚠️ Не удалось загрузить библиотеку сканера. Проверьте интернет-соединение.</div>';
        } else {
            scannerSection.innerHTML = '<div id="reader" style="width:100%"></div>';
            const html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 15, qrbox: 250 }, false);
            html5QrcodeScanner.render((text) => {
                // TODO: здесь будет поиск по штрихкоду
                showDrinkInfo('dobry_cola');
            }, () => {});
        }
    } else {
        scannerSection.innerHTML = `
            <div class="pc-warning">
                <strong>⚡ Сканер не работает в ПК-версии сайта, он работает только в мобильной версии.</strong><br>
                Вы можете протестировать работу карточек, выбрав реальную газировку в каталоге ниже.
            </div>
        `;
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