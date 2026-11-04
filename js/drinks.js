const drinksData = {
    // 1. Линейка «Добрый»
    'dobry_cola':   { name: 'Добрый Cola',        category: 'Добрый',              badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['dobry_cola'] },
    'dobry_orange': { name: 'Добрый Апельсин',    category: 'Добрый',              badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['dobry_orange'] },
    'dobry_lemon':  { name: 'Добрый Лимон-Лайм',  category: 'Добрый',              badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['dobry_lemon'] },
    'dobry_cola_zero': { name: 'Добрый Cola Zero', category: 'Добрый',             badgeText: 'Без сахара ✅',      badgeClass: 'status-safe',    image: drinkImages['dobry_cola_zero'] },

    // 2. Черноголовка
    'ch_cola':      { name: 'Черноголовка Кола',      category: 'Черноголовка', badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['ch_cola'] },
    'ch_baikal':    { name: 'Черноголовка Байкал',    category: 'Черноголовка', badgeText: 'Умеренно сахара ⚠️', badgeClass: 'status-warning', image: drinkImages['ch_baikal'] },
    'ch_tarhun':    { name: 'Черноголовка Тархун',    category: 'Черноголовка', badgeText: 'Красители ⚠️',      badgeClass: 'status-warning', image: drinkImages['ch_tarhun'] },
    'ch_duches':    { name: 'Черноголовка Дюшес',     category: 'Черноголовка', badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['ch_duches'] },
    'ch_buratino':  { name: 'Черноголовка Буратино',  category: 'Черноголовка', badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['ch_buratino'] },
    'ch_mandarin':  { name: 'Черноголовка Мандарин',  category: 'Черноголовка', badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['ch_mandarin'] },
    'ch_cola_zero': { name: 'Черноголовка Кола Zero', category: 'Черноголовка', badgeText: 'Без сахара ✅',      badgeClass: 'status-safe',    image: drinkImages['ch_cola_zero'] },

    // 3. Линейка Evervess и Frustyle
    'evervess_cola':  { name: 'Evervess Кола',   category: 'Evervess / Frustyle', badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['evervess_cola'] },
    'evervess_tonic': { name: 'Evervess Тоник',  category: 'Evervess / Frustyle', badgeText: 'Содержит хинин ⚠️',  badgeClass: 'status-warning', image: drinkImages['evervess_tonic'] },
    'frustyle':       { name: 'Frustyle',        category: 'Evervess / Frustyle', badgeText: 'Много сахара ❌',    badgeClass: 'status-danger',  image: drinkImages['frustyle'] },
    'evervess_cola_zero': { name: 'Evervess Cola Zero', category: 'Evervess / Frustyle', badgeText: 'Без сахара ✅', badgeClass: 'status-safe', image: drinkImages['evervess_cola_zero'] },

    // 4. МПБК «Очаково»
    'coolcola': { name: 'CoolCola', category: 'Очаково', badgeText: 'Много сахара ❌', badgeClass: 'status-danger', image: drinkImages['coolcola'] },
    'fancy':    { name: 'Fancy',    category: 'Очаково', badgeText: 'Много сахара ❌', badgeClass: 'status-danger', image: drinkImages['fancy'] },
    'street':   { name: 'Street',   category: 'Очаково', badgeText: 'Много сахара ❌', badgeClass: 'status-danger', image: drinkImages['street'] },
    'coolcola_zero': { name: 'CoolCola Zero', category: 'Очаково', badgeText: 'Без сахара ✅', badgeClass: 'status-safe', image: drinkImages['coolcola_zero'] },

    // 5. Fresh Bar и Фантола (Fantola)
    'fresh_bar': { name: 'Fresh Bar', category: 'Fresh Bar / Fantola', badgeText: 'Химия + Сахар ❌', badgeClass: 'status-danger', image: drinkImages['fresh_bar'] },
    'fantola':   { name: 'Fantola',   category: 'Fresh Bar / Fantola', badgeText: 'Химия + Сахар ❌', badgeClass: 'status-danger', image: drinkImages['fantola'] },

    // 6. Бюджетные СТМ
    'moya_tsena':     { name: 'Лимонад Моя Цена',     category: 'Бюджетные СТМ', badgeText: 'Подсластители ❌', badgeClass: 'status-danger', image: drinkImages['moya_tsena'] },
    'krasnaya_tsena': { name: 'Лимонад Красная Цена', category: 'Бюджетные СТМ', badgeText: 'Подсластители ❌', badgeClass: 'status-danger', image: drinkImages['krasnaya_tsena'] },
    'kb_limonad':     { name: 'Лимонад КБ',           category: 'Бюджетные СТМ', badgeText: 'Подсластители ❌', badgeClass: 'status-danger', image: drinkImages['kb_limonad'] },

    // 7. Премиальные лимонады в стекле
    'borjomi_limonati': { name: 'Limonati by Borjomi', category: 'Премиум Стекло', badgeText: 'Меньше химии ⚠️', badgeClass: 'status-warning', image: drinkImages['borjomi_limonati'] },
    'zandukeli':        { name: 'Лимонад Zandukeli',    category: 'Премиум Стекло', badgeText: 'Меньше химии ⚠️', badgeClass: 'status-warning', image: drinkImages['zandukeli'] }
};