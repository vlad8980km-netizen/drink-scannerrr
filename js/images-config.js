// Конфигурационный файл ссылок на изображения газировок
const drinkImages = {
    // 1. Линейка «Добрый»
    'dobry_cola': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaN67ghy2oo_uw-Yo6gGujmXu4u9jdT23ZTI33gQ7XQ&s=10', 
    'dobry_orange': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIJrBVpxL6Xq7RJbNjGL_gO7SpnTuA2HcUenboD2l6g&s=10',
    'dobry_lemon': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRaLDlwZZaIbAVoHuHpXTsCkj-m_r_An4e7vaiTiCdg&s=10',

    // 2. Черноголовка
    'ch_cola': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeaZ4W0ggPQnp1XSmgKvbSQQDAzFO_csfdv_4ALapVw&s=10',
    'ch_baikal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMlnbo4enu92KqpRpEJAL32jACAcnTH8GY38PtLe1tw&s=10',
    'ch_tarhun': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfy4UznnawA2jdhc1VKP0IQCJSdtoywDVN9HQf3vWzw&s=10',
    'ch_duches': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1eLKinlOroHkTHFuDWyIfsxCnevMniC_eTkWYdXmIQ&s=10',
    'ch_buratino': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUYdixW59urO3ah19_2kwss0O7bAPOFZ4u10QgcK9Eg&s=10',
    'ch_mandarin': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsY162bUsx7pJU2GLYEVt2zracuJdq1T9MTdBAua1Lg&s',

    // 3. Линейка Evervess и Frustyle
    'evervess_cola': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWI6G6OqHduxVXwuRzqCT4FABvAUmlB5OvM18_5qGfmQ&s=10',
    'evervess_tonic': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xWGC2fWf_qmspSmJeVPyoADBJ_JqceTQC1C1Wv6OsQ&s=10',
    'frustyle': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeO-Yuj4eVaPx43VT6D-PhVHnr7WkXhaWvFmQ6mRvOtQ&s=10',

    // 4. МПБК «Очаково»
    'coolcola': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KL9yZwTDdrERITHfkqVECb9wjewi0wZG8RhnfZzR5Q&s=10',
    'fancy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjG0aXBYhfWy3Xq8tQY-oPixscJRu-Yg-YqyFIJ9V--w&s=10',
    'street': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIeN41JX27Q649s5Nuk779U2oFPaLJSugnza3gdFswg&s=10',

    // 5. Fresh Bar и Фантола (Fantola)
    'fresh_bar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcOyoYCmf-Twrz_UDESlXAu1Q86EdwBSvFaqDi0nnmQ&s=10',
    'fantola': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBNn6W6Jamah131ijhUmZc3WkuYReFbarcDOKVs8kh_f3Pfm26_ucshI&s=10',

    // 6. Бюджетные СТМ
    'moya_tsena': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqinxrVrFqFPwREPYx4wBQpAlGDKBgSlqHUCaylmIOQ&s=10',
    'krasnaya_tsena': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCNDCmWKJJHe6xajOo-jo8jY-kCinL4rnlq0l3IW_dg&s=10',
    'kb_limonad': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxxX3rGIuoEp0InmpDBM9dvyydiE4zBKSCTYfI4ypRg&s', // Не надо

    // 7. Премиальные лимонады в стекле
    'borjomi_limonati': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFN-mpuJvdS4F8JdrABpDj2ApTMrmIuEFSPp7f4V31A&s=10',
    'zandukeli': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq50BVxT4lzVOG6B33F-BsyhyWUtWtbL97Fc3nohb0BA&s=10',
    
    // 8. Zero
    'ch_cola_zero': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJ8hOx8evBAghMxqfu7ofwEoiERLlelswGmNt_o4NCA&s=10',
    'dobry_cola_zero': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCDuX_74a5DC_Af91rLLdbShF8PIoRm6hvEZYjAXDkA&s=10',
    'evervess_cola_zero': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHKol8IZrr_hOa1_o4EVKllcRM9N-rlQJwV3dGfvnPQ&s=10',
    'coolcola_zero': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWM4bpltpDFlv2CLn30r-hyt-Lageq06n1Icez_v9Tpg&s'
};