
const getIcon = (domain) => `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;

const logos = {
    netflix: getIcon("www.netflix.com"),
    disney: getIcon("www.disneyplus.com"),
    max: "https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg",
    prime: getIcon("www.primevideo.com"),
    crunchy: getIcon("www.crunchyroll.com"),
    paramount: getIcon("www.paramountplus.com"),
    plex: getIcon("www.plex.tv"),
    vix: getIcon("vix.com"),
    apple: getIcon("tv.apple.com"),
    mubi: getIcon("mubi.com"),
    univ: getIcon("www.universalplus.com"),
    dtv: getIcon("www.directvgo.com"),
    youtube: getIcon("www.youtube.com"),
    spotify: getIcon("www.spotify.com"),
    deezer: getIcon("www.deezer.com"),
    canva: getIcon("www.canva.com"),
    capcut: getIcon("www.capcut.com"),
    gpt: getIcon("chat.openai.com"),
    duolingo: getIcon("www.duolingo.com"),
    office: getIcon("www.office.com"),
    tiktok: getIcon("www.tiktok.com"),
    facebook: getIcon("www.facebook.com"),
    instagram: getIcon("www.instagram.com"),
    emby: getIcon("emby.media"),
    claro: getIcon("www.clarovideo.com"),
    win: getIcon("www.winsports.co"),
    metegol: getIcon("www.winsports.co")
};

function getL(arr) {
    return `<div class="flex flex-wrap gap-1.5 items-center">` +
        arr.map(key => {
            if (key === 'netflix_intl') {
                return `<div class="h-7 w-7 rounded-lg shadow-sm border border-white/10 bg-[#E50914] flex items-center justify-center text-white font-extrabold text-sm" title="Netflix Internacional" loading="lazy" decoding="async">N</div>`;
            }
            if (key === 'magis') {
                return `<div class="h-7 w-7 rounded-lg shadow-sm border border-white/10 bg-[#ED8403] flex items-center justify-center text-white font-extrabold text-xs" title="Magis TV" loading="lazy" decoding="async">M</div>`;
            }
            if (key === 'iptv') {
                return `<div class="h-7 w-7 rounded-lg shadow-sm border border-white/10 bg-[#4E37E5] flex items-center justify-center text-white text-sm" title="IPTV PRO" loading="lazy" decoding="async">📺</div>`;
            }
            if (key === 'telelatino') {
                return `<div class="h-7 w-7 rounded-lg shadow-sm border border-white/10 bg-[#CF222E] flex items-center justify-center text-white text-sm" title="Telelatino" loading="lazy" decoding="async">📻</div>`;
            }

            let isPremium = key === 'disney_prem';
            let isMaxPlatino = key === 'max_platino';
            let srcKey = key;
            if (isPremium) srcKey = 'disney';
            if (isMaxPlatino) srcKey = 'max';

            let customFilter = isPremium ? 'style=\"filter: hue-rotate(160deg) saturate(2);\"' : '';
            let bgClass = isMaxPlatino ? 'bg-gradient-to-br from-gray-200 to-gray-400 border-gray-400' : 'bg-white border-white/10';

            return `<img src="${logos[srcKey]}" ${customFilter} loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${srcKey}&background=111&color=fff&bold=true'" class="h-7 w-7 object-contain rounded-lg shadow-sm border ${bgClass} p-0.5" alt="${key}">`;
        }).join('') +
        `</div>`;
}

// --- PANTALLAS Y COMBOS ---
const catalogData = {
    "recomendaciones": {
        title: "🍿 Recomendaciones",
        desc: "Los más solicitados por nuestros clientes",
        items: [
            { id: "mega1", name: "Mega Combo X4 Estándar", icon: getL(['netflix', 'disney', 'max', 'prime']), price: 34000, detail: "Net + Disney Est + HBO + Prime", oldPrice: 41000, isMega: true, agotado: true },
            { id: "net1", name: "Netflix", icon: getL(['netflix']), price: 15000, detail: "Pantalla 30 días" },
            { id: "c2_1", name: "Netflix + Prime", icon: getL(['netflix', 'prime']), price: 22000, detail: "Combo Doble" },
            { id: "spot1", name: "Spotify Premium", icon: getL(['spotify']), price: 13000, detail: "1 mes" }
        ]
    },
    "pantallas": {
        title: "Pantallas",
        desc: "30 días de servicio garantizado",
        items: [
            { id: "net1", name: "Netflix", icon: getL(['netflix']), price: 15000, detail: "Pantalla 30 días" },
            { id: "net2", name: "Netflix Internacional", icon: getL(['netflix_intl']), price: 16000, detail: "Pantalla 30 días" },
            { id: "disP", name: "Disney+ Premium", icon: getL(['disney_prem']), price: 13000, detail: "Pantalla 30 días" },
            { id: "disS", name: "Disney+ Estándar", icon: getL(['disney']), price: 9000, detail: "Pantalla 30 días" },
            { id: "hboS", name: "HBO Max Estándar", icon: getL(['max']), price: 9000, detail: "Pantalla 30 días" },
            { id: "hboP", name: "HBO Max Platino", icon: getL(['max_platino']), price: 12000, detail: "Pantalla 30 días" },
            { id: "amz", name: "Amazon Prime", icon: getL(['prime']), price: 9000, detail: "Pantalla 30 días" },
            { id: "cru", name: "Crunchyroll", icon: getL(['crunchy']), price: 9000, detail: "Pantalla 30 días" },
            { id: "par", name: "Paramount+", icon: getL(['paramount']), price: 9000, detail: "Pantalla 30 días" },
            { id: "plex", name: "Plex", icon: getL(['plex']), price: 9000, detail: "Pantalla 30 días" },
            { id: "vix", name: "Vix+", icon: getL(['vix']), price: 9000, detail: "Pantalla 30 días" },
            { id: "apple", name: "Apple TV", icon: getL(['apple']), price: 13000, detail: "Pantalla 30 días" },
            { id: "univ", name: "Universal+", icon: getL(['univ']), price: 13000, detail: "Pantalla 30 días" },
            { id: "mubi", name: "Mubi", icon: getL(['mubi']), price: 13000, detail: "30 días" }
        ]
    },
    "dobles": {
        title: "Combos Dobles",
        desc: "1 Pantalla de cada servicio",
        items: [
            { id: "c2_6", name: "Disney Est + HBO", icon: getL(['disney', 'max']), price: 14000, detail: "Combo Doble" },
            { id: "c2_5", name: "Disney Prem + HBO", icon: getL(['disney_prem', 'max']), price: 18000, detail: "Combo Doble" },
            { id: "c2_7", name: "Disney Prem + Prime", icon: getL(['disney_prem', 'prime']), price: 18000, detail: "Combo Doble" },
            { id: "c2_1", name: "Netflix + Prime", icon: getL(['netflix', 'prime']), price: 22000, detail: "Combo Doble" },
            { id: "c2_2", name: "Netflix + HBO Max", icon: getL(['netflix', 'max']), price: 22000, detail: "Combo Doble" },
            { id: "c2_3", name: "Netflix + Disney Est", icon: getL(['netflix', 'disney']), price: 22000, detail: "Combo Doble" },
            { id: "c2_8", name: "Netflix + Crunchy", icon: getL(['netflix', 'crunchy']), price: 22000, detail: "Combo Doble" },
            { id: "c2_4", name: "Netflix + Disney Prem", icon: getL(['netflix', 'disney_prem']), price: 26000, detail: "Combo Doble" }
        ]
    },
    "triples": {
        title: "Combos Triples",
        desc: "3 plataformas en 1",
        items: [
            { id: "c3_3", name: "Prime + Disney Est + HBO", icon: getL(['prime', 'disney', 'max']), price: 20000, detail: "Combo Triple" },
            { id: "c3_1", name: "Net + Disney Est + HBO", icon: getL(['netflix', 'disney', 'max']), price: 28000, detail: "Combo Triple" },
            { id: "c3_4", name: "Net + Prime + Disney Est", icon: getL(['netflix', 'prime', 'disney']), price: 28000, detail: "Combo Triple" },
            { id: "c3_2", name: "Net + Disney Prem + HBO", icon: getL(['netflix', 'disney_prem', 'max']), price: 32000, detail: "Combo Triple" }
        ]
    },
    "mega": {
        title: "Mega Combo X4",
        desc: "El favorito de todos",
        items: [
            { id: "mega1", name: "Mega Combo X4 Estándar", icon: getL(['netflix', 'disney', 'max', 'prime']), price: 34000, detail: "Net + Disney Est + HBO + Prime", oldPrice: 41000, isMega: true },
            { id: "mega2", name: "Mega Combo X4 Premium", icon: getL(['netflix', 'disney_prem', 'max', 'prime']), price: 38000, detail: "Con Disney+ Premium", oldPrice: 46000 }
        ]
    },
    "tv_deportes": {
        title: "TV & Deportes",
        desc: "Fútbol y canales VIP",
        items: [
            { id: "magis", name: "Magis TV", icon: getL(['magis']), price: 13000, detail: "TV, Películas y Series" },
            { id: "iptv", name: "IPTV PRO", icon: getL(['iptv']), price: 13000, detail: "Para ver Win Sports+" },
            { id: "dtv", name: "DirecTV Go", icon: getL(['dtv']), price: 20000, detail: "Deportes en Vivo" },
            { id: "claro", name: "Claro Video con Win", icon: getL(['claro']), price: 30000, detail: "Liga BetPlay" },
            { id: "metegol", name: "Metegol con Win", icon: getL(['metegol']), price: 18000, detail: "1 mes" },
            { id: "telelatino", name: "Telelatino Premium", icon: getL(['telelatino']), price: 12000, detail: "Pantalla" },
            { id: "emby", name: "Emby TV", icon: getL(['emby']), price: 13000, detail: "Pantalla TV" }
        ]
    },
    "musica": {
        title: "Música Premium",
        desc: "Sin interrupciones",
        items: [
            { id: "spot1", name: "Spotify Premium", icon: getL(['spotify']), price: 13000, detail: "1 mes" },
            { id: "spot2", name: "Spotify Premium", icon: getL(['spotify']), price: 22000, detail: "2 meses" },
            { id: "spot3", name: "Spotify Premium", icon: getL(['spotify']), price: 32000, detail: "3 meses" },
            { id: "yt1", name: "YouTube Premium", icon: getL(['youtube']), price: 13000, detail: "1 mes" },
            { id: "yt3", name: "YouTube Premium", icon: getL(['youtube']), price: 30000, detail: "3 meses" },
            { id: "deezer", name: "Deezer", icon: getL(['deezer']), price: 6000, detail: "1 mes" }
        ]
    },
    "herramientas": {
        title: "IA & Diseño",
        desc: "Productividad nivel Pro",
        items: [
            { id: "capcut1", name: "CapCut Pro", icon: getL(['capcut']), price: 20000, detail: "1 mes" },
            { id: "canva1", name: "Canva Pro", icon: getL(['canva']), price: 12000, detail: "45 días" },
            { id: "canva2", name: "Canva Pro", icon: getL(['canva']), price: 30000, detail: "1 año" },
            { id: "gpt1", name: "ChatGPT 4.0", icon: getL(['gpt']), price: 26000, detail: "30 días" },
            { id: "gpt2", name: "ChatGPT 4.0", icon: getL(['gpt']), price: 30000, detail: "Cuenta Propia" },
            { id: "duo", name: "Duolingo Pro", icon: getL(['duolingo']), price: 10000, detail: "1 mes" },
            { id: "off1", name: "Office 365", icon: getL(['office']), price: 50000, detail: "1 año (cuenta completa)" },
            { id: "off2", name: "Office 365", icon: getL(['office']), price: 20000, detail: "1 año (dispositivo)" },
            { id: "comboIA", name: "Canva + CapCut", icon: getL(['canva', 'capcut']), price: 30000, detail: "Combo Creador" }
        ]
    },
    "redes": {
        title: "Redes Sociales",
        desc: "Servicios de Marketing",
        items: [
            { id: "tk1k", name: "TikTok Seguidores", icon: getL(['tiktok']), price: 0, detail: "1.000 seguidores", directContact: "Hola, me interesan 1.000 seguidores en TikTok" },
            { id: "fb1k", name: "Facebook Seguidores", icon: getL(['facebook']), price: 0, detail: "1.000 seguidores", directContact: "Hola, me interesan 1.000 seguidores en página de Facebook" },
            { id: "ads", name: "Gestión de Anuncios", icon: getL(['facebook', 'instagram']), price: 0, detail: "Mensual", directContact: "Hola, me interesa el servicio de gestión de anuncios" }
        ]
    }
};

let cart = [];
let myChart = null;


async function fetchTop1Colombia() {
    const container = document.getElementById('hero-dynamic-card');
    if (!container) return;

    try {

        const fecha = new Date();
        fecha.setDate(fecha.getDate() - 30);
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const dia = String(fecha.getDate()).padStart(2, '0');
        const fechaDinamica = `${fecha.getFullYear()}-${mes}-${dia}`;


        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=bd6f74204d78f2216e3fb939fc4c4d3f&language=es-MX&sort_by=popularity.desc&watch_region=CO&with_watch_monetization_types=flatrate&with_watch_providers=8&first_air_date.gte=${fechaDinamica}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const show = data.results[0];
            const title = show.name || show.title;
            const posterUrl = show.backdrop_path ? `https://image.tmdb.org/t/p/w780${show.backdrop_path}` : (show.poster_path ? `https://image.tmdb.org/t/p/w500${show.poster_path}` : 'https://via.placeholder.com/500x750/111/fff?text=No+Image');

            container.innerHTML = `
                        <div class="relative group h-full w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(109,40,217,0.3)] border border-brand-light/20 transition-all hover:border-brand-light/50 duration-700 hover:-translate-y-2">
                            <!-- Background Image Full Cover -->
                            <div class="absolute inset-0 bg-black">
                                <img src="${posterUrl}" alt="${title}" loading="eager" class="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out">
                                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                                <div class="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/30 to-transparent"></div>
                            </div>
                            
                            <!-- Floating Tag -->
                            <div class="absolute top-6 left-6 md:top-8 md:left-10 z-20 flex items-center gap-2">
                                <div class="bg-black/40 backdrop-blur-xl border border-white/10 text-white font-extrabold text-[10px] md:text-xs px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
                                    Número #1 en Colombia
                                </div>
                            </div>

                            <!-- Content Overlay for Ultra Wide -->
                            <div class="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-700">
                                
                                <div class="max-w-2xl text-left">
                                    <h3 class="font-black text-5xl md:text-7xl text-white mb-2 tracking-tighter leading-none" style="text-shadow: 0 4px 30px rgba(0,0,0,0.9);" title="${title}">${title}</h3>
                                    <div class="flex flex-wrap items-center gap-3">
                                        <span class="bg-brand-mid/80 text-white text-[10px] md:text-xs font-black px-2.5 py-1 rounded">ESTRENO</span>
                                        <span class="text-xs md:text-sm text-gray-300 font-semibold tracking-widest">🍿 TMDB HIT MOVIE</span>
                                    </div>
                                </div>
                                
                                <!-- Interaction Area -->
                                <button onclick="addNetflixAndOpenCart()" class="relative w-full md:w-auto bg-black/60 hover:bg-black text-white hover:text-white backdrop-blur-2xl border border-brand-light/30 hover:border-brand-light font-bold py-4 rounded-2xl transition-all duration-500 flex items-center px-6 md:px-8 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group/btn overflow-hidden">
                                    <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                                    <div class="flex items-center gap-4 relative z-10 w-full sm:w-auto">
                                        <div class="bg-[#E50914] text-white font-black text-base md:text-lg w-10 h-10 flex items-center justify-center rounded-[10px] shadow-lg">N</div>
                                        <div class="flex flex-col items-start leading-none gap-1 mr-4">
                                            <span class="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest font-semibold">Comprar AHORA</span>
                                            <span class="text-sm md:text-lg font-black tracking-wide">Netflix Combo</span>
                                        </div>
                                        <div class="flex items-center gap-3 border-l border-white/20 pl-4 h-full">
                                            <span class="font-black text-lg md:text-2xl text-white">$15.000</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    `;
        }
    } catch (error) {
        console.error("Error obteniendo datos de TMDB:", error);

        container.innerHTML = `
                        <div class="relative group h-full w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(109,40,217,0.3)] border border-brand-light/20 transition-all hover:border-brand-light/50 duration-700 hover:-translate-y-2">
                            <!-- Background Image Full Cover -->
                            <div class="absolute inset-0 bg-black">
                                <img src="${posterUrl}" alt="${title}" loading="eager" class="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out">
                                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                                <div class="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/30 to-transparent"></div>
                            </div>
                            
                            <!-- Floating Tag -->
                            <div class="absolute top-6 left-6 md:top-8 md:left-10 z-20 flex items-center gap-2">
                                <div class="bg-black/40 backdrop-blur-xl border border-white/10 text-white font-extrabold text-[10px] md:text-xs px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
                                    Número #1 en Colombia
                                </div>
                            </div>

                            <!-- Content Overlay for Ultra Wide -->
                            <div class="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-700">
                                
                                <div class="max-w-2xl text-left">
                                    <h3 class="font-black text-5xl md:text-7xl text-white mb-2 tracking-tighter leading-none" style="text-shadow: 0 4px 30px rgba(0,0,0,0.9);" title="${title}">${title}</h3>
                                    <div class="flex flex-wrap items-center gap-3">
                                        <span class="bg-brand-mid/80 text-white text-[10px] md:text-xs font-black px-2.5 py-1 rounded">ESTRENO</span>
                                        <span class="text-xs md:text-sm text-gray-300 font-semibold tracking-widest">🍿 TMDB HIT MOVIE</span>
                                    </div>
                                </div>
                                
                                <!-- Interaction Area -->
                                <button onclick="addNetflixAndOpenCart()" class="relative w-full md:w-auto bg-black/60 hover:bg-black text-white hover:text-white backdrop-blur-2xl border border-brand-light/30 hover:border-brand-light font-bold py-4 rounded-2xl transition-all duration-500 flex items-center px-6 md:px-8 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group/btn overflow-hidden">
                                    <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                                    <div class="flex items-center gap-4 relative z-10 w-full sm:w-auto">
                                        <div class="bg-[#E50914] text-white font-black text-base md:text-lg w-10 h-10 flex items-center justify-center rounded-[10px] shadow-lg">N</div>
                                        <div class="flex flex-col items-start leading-none gap-1 mr-4">
                                            <span class="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest font-semibold">Comprar AHORA</span>
                                            <span class="text-sm md:text-lg font-black tracking-wide">Netflix Combo</span>
                                        </div>
                                        <div class="flex items-center gap-3 border-l border-white/20 pl-4 h-full">
                                            <span class="font-black text-lg md:text-2xl text-white">$15.000</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    `;
    }
}

function initScrollAnimations() {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.05 };
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });
}


function scrollTestimonials(amount) {
    const slider = document.getElementById('testimonials-slider');
    if (slider) {
        slider.scrollBy({ left: amount, behavior: 'smooth' });
    }
}


document.addEventListener('DOMContentLoaded', () => {

    const overlay = document.getElementById('cinema-overlay');
    if (overlay) {
        setTimeout(() => { overlay.classList.add('text-visible'); }, 100);
        setTimeout(() => { overlay.classList.add('cinema-overlay-open'); }, 900);
        setTimeout(() => { overlay.remove(); }, 2200);
    }

    renderNav();
    renderAllCategories();
    fetchTop1Colombia();

    initScrollAnimations();

    document.getElementById('cart-icon-container').addEventListener('click', toggleCart);
    document.getElementById('floating-cart-btn').addEventListener('click', toggleCart);
    document.getElementById('close-cart-btn').addEventListener('click', toggleCart);
    document.getElementById('send-order-btn').addEventListener('click', sendOrder);
    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

    document.getElementById('all-products-container').addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-add-id]');
        if (btn) {
            addToCart(
                btn.dataset.addId,
                btn.dataset.addName,
                btn.dataset.addDetail,
                parseInt(btn.dataset.addPrice)
            );
        }
    });

    document.getElementById('cart-items').addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-remove-index]');
        if (btn) {
            removeFromCart(parseInt(btn.dataset.removeIndex));
        }
    });
});


function renderNav() {
    const navContainer = document.getElementById('category-nav');
    const categories = [
        { id: 'recomendaciones', label: '🍿 Recomendaciones' },
        { id: 'pantallas', label: 'Pantallas' },
        { id: 'dobles', label: 'Combos 2x' },
        { id: 'triples', label: 'Combos 3x' },
        { id: 'mega', label: 'Mega X4' },
        { id: 'tv_deportes', label: 'TV & VIP' },
        { id: 'musica', label: 'Música' },
        { id: 'herramientas', label: 'IA & Edición' },
        { id: 'redes', label: 'Redes' }
    ];

    const buttonsHtml = categories.map(cat => {
        const action = cat.external ? `window.location.href='recomendaciones.html'` : `document.getElementById('sec-${cat.id}').scrollIntoView({behavior: 'smooth', block: 'start'})`;
        return `
                <button 
                    onclick="${action}"
                    class="flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-[1.25rem] ring-1 ring-white/5 text-xs font-extrabold tracking-wide text-gray-300 hover:text-white hover:bg-brand-mid hover:border-brand-light hover:shadow-[0_0_25px_rgba(109,40,217,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300"
                >
                    ${cat.label}
                </button>
            `;
    }).join('');


    navContainer.innerHTML = buttonsHtml + buttonsHtml;


    initCategoryScroll();
}


function scrollCategories(amount) {
    const nav = document.getElementById('category-nav');
    if (nav) {
        nav.scrollBy({ left: amount, behavior: 'smooth' });
    }
}


let isUserInteracting = false;
function initCategoryScroll() {
    const nav = document.getElementById('category-nav');
    if (!nav) return;


    nav.addEventListener('mouseenter', () => isUserInteracting = true);
    nav.addEventListener('mouseleave', () => isUserInteracting = false);
    nav.addEventListener('touchstart', () => isUserInteracting = true, { passive: true });

    nav.addEventListener('touchend', () => setTimeout(() => isUserInteracting = false, 1500), { passive: true });

    setInterval(() => {
        if (!isUserInteracting) {
            if (nav.scrollLeft >= nav.scrollWidth / 2) {

                nav.scrollLeft = 0;
            } else {

                nav.scrollLeft += 1.5;
            }
        }
    }, 20);
}


function addNetflixAndOpenCart() {
    addToCart('net1', 'Netflix', 'Pantalla 30 días', 15000);
    const modal = document.getElementById('cart-modal');
    if (modal.classList.contains('hidden')) {
        toggleCart();
    }
}


function renderAllCategories() {
    const container = document.getElementById('all-products-container');
    const order = ['recomendaciones', 'pantallas', 'dobles', 'triples', 'mega', 'tv_deportes', 'musica', 'herramientas', 'redes'];
    let fullHtml = '';

    order.forEach((catId) => {
        const data = catalogData[catId];

        let sectionHtml = `
                <section id="sec-${catId}" class="reveal-on-scroll" style="scroll-margin-top: 130px;">
                    <div class="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
                        <div>
                            <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight">${data.title}</h3>
                            <p class="text-xs md:text-sm text-gray-500 mt-1">${data.desc}</p>
                        </div>
                    </div>
                `;

        if (catId === 'mega') {
            sectionHtml += `
                    <div class="mb-10 bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 md:max-w-2xl md:mx-auto shadow-xl">
                        <h4 class="text-sm font-bold text-white mb-4 uppercase tracking-widest text-center font-inter">📈 Análisis de Ahorro</h4>
                        <div class="chart-container">
                            <canvas id="savingsChart"></canvas>
                        </div>
                        <p class="text-center text-xs text-gray-500 mt-4 font-inter">Comprar 4 servicios vs. Mega Combo.</p>
                    </div>
                    `;
        }

        sectionHtml += `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">`;

        sectionHtml += data.items.map((item, index) => {
            const delay = (index % 4) * 50;
            const isDirect = item.directContact ? true : false;
            const isSoldOut = item.agotado ? true : false;


            return `
                    <div class="group flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 hover:border-brand-light hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(109,40,217,0.2)] hover:bg-white/10 transition-all duration-500 reveal-on-scroll relative overflow-hidden" style="transition-delay: ${delay}ms">
                        <div class="absolute -right-6 -top-6 w-24 h-24 bg-brand-light/20 rounded-full blur-2xl group-hover:bg-brand-light/40 group-hover:scale-150 transition-all duration-500 pointer-events-none"></div>
                        <div class="flex items-start justify-between mb-3 relative z-10">
                            <div class="p-1 bg-white/5 rounded-xl border border-white/10">${item.icon}</div>
                            ${item.oldPrice ? `<span class="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full font-inter">-15%</span>` : ''}
                        </div>
                        
                        <div class="mb-4 flex-1 relative z-10">
                            <h4 class="text-white font-bold text-sm md:text-base leading-tight mb-1 group-hover:text-gray-200 transition-colors">${item.name}</h4>
                            <p class="text-gray-500 text-[10px] md:text-xs font-medium">${item.detail}</p>
                        </div>

                        <div class="flex flex-col gap-3 mt-auto pt-4 border-t border-white/5 relative z-10">
                            ${isDirect ? '' : `
                            <div class="flex items-end gap-2">
                                <span class="text-white font-black text-lg md:text-xl tracking-tight leading-none font-inter">$${item.price.toLocaleString('es-CO')}</span>
                                ${item.oldPrice ? `<span class="text-gray-600 text-[10px] line-through leading-none mb-1 font-inter">$${item.oldPrice.toLocaleString('es-CO')}</span>` : ''}
                            </div>
                            `}
                            
                            ${isSoldOut ? `
                                <button disabled class="w-full bg-gray-500/10 backdrop-blur-md border border-gray-500/30 text-gray-400 font-bold py-3 rounded-2xl cursor-not-allowed text-xs md:text-sm flex justify-center items-center gap-2">
                                    Agotado 🚫
                                </button>
                            ` : isDirect ? `
                                <button onclick="window.open('https://wa.me/573170573237?text=${encodeURIComponent(item.directContact)}', '_blank')" class="w-full bg-[#25D366]/10 backdrop-blur border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-black font-bold py-3 rounded-2xl transition-all active:scale-95 text-xs md:text-sm shadow-sm flex justify-center items-center gap-1">
                                    Cotizar 📲
                                </button>
                            ` : `
                                <button data-add-id="${item.id}" data-add-name="${item.name}" data-add-detail="${item.detail}" data-add-price="${item.price}" class="w-full bg-brand-mid/10 backdrop-blur-md border border-brand-mid/50 text-white hover:bg-brand-mid hover:shadow-[0_0_20px_rgba(109,40,217,0.5)] font-bold py-3 rounded-2xl transition-all duration-300 active:scale-95 text-xs md:text-sm flex justify-center items-center gap-2 group/add">
                                    Agregar <svg class="w-4 h-4 transform group-hover/add:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                                </button>
                            `}
                        </div>
                    </div>
                    `;
        }).join('');

        sectionHtml += `</div></section>`;
        fullHtml += sectionHtml;
    });

    container.innerHTML = fullHtml;
    setTimeout(renderChart, 100);
}


function renderChart() {
    const canvasEl = document.getElementById('savingsChart');
    if (!canvasEl) return;

    if (typeof Chart === 'undefined') {
        setTimeout(renderChart, 100);
        return;
    }

    const ctx = canvasEl.getContext('2d');

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Separado', 'Mega Combo'],
            datasets: [{
                label: 'Precio',
                data: [41000, 34000],
                backgroundColor: [
                    'rgba(255, 68, 68, 0.4)', // Rojo sutil
                    'rgba(151, 50, 221, 0.8)' // Morado de marca
                ],
                borderColor: [
                    'rgba(255, 68, 68, 0.8)',
                    'rgba(151, 50, 221, 1)'
                ],
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    bodyFont: { family: 'Inter' },
                    callbacks: {
                        label: function (context) {
                            return '$ ' + context.raw.toLocaleString('es-CO');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#888', font: { family: 'Inter' } }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#888', font: { weight: '600', family: 'Inter' } }
                }
            }
        }
    });
}

// --- CART LOGIC ---
function addToCart(id, name, detail, price) {
    cart.push({ id, name, detail, price });
    updateCartUI();

    const btn = document.getElementById('cart-icon-container');
    btn.classList.add('scale-110');
    setTimeout(() => btn.classList.remove('scale-110'), 200);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
    toggleCart();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const floatTotal = document.getElementById('float-total');
    const cartTotal = document.getElementById('cart-total');
    const cartItemsContainer = document.getElementById('cart-items');
    const floatingBtn = document.getElementById('floating-cart-btn');

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    badge.innerText = cart.length;
    badge.style.opacity = cart.length > 0 ? '1' : '0';

    const formattedTotal = '$' + total.toLocaleString('es-CO');
    floatTotal.innerText = formattedTotal;
    cartTotal.innerText = formattedTotal;

    if (cart.length > 0) {
        floatingBtn.classList.remove('translate-y-24');
    } else {
        floatingBtn.classList.add('translate-y-24');
    }

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 py-10 font-light">Tu carrito está vacío.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
                    <div class="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-xl border border-white/5">
                        <div class="text-sm">
                            <p class="text-white font-semibold">${item.name} <span class="text-[10px] text-gray-400 font-normal ml-1 font-inter">(${item.detail})</span></p>
                            <p class="text-white font-bold mt-1 font-inter">$${item.price.toLocaleString('es-CO')}</p>
                        </div>
                        <button data-remove-index="${index}" class="text-gray-500 hover:text-white bg-black hover:bg-red-500/20 w-7 h-7 rounded-full flex items-center justify-center text-lg font-medium transition-all active:scale-90">
                            &times;
                        </button>
                    </div>
                `).join('');
    }
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const content = document.getElementById('cart-content');

    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            content.classList.remove('translate-y-full');
        }, 10);
    } else {
        content.classList.add('translate-y-full');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}


function sendOrder() {
    if (cart.length === 0) return;

    const phoneNumber = "573170573237";
    let message = "Hola Koko streaming, quiero hacer el siguiente pedido:%0A%0A";

    cart.forEach(item => {
        message += `• ${item.name} ${item.detail} - $${item.price.toLocaleString('es-CO')}%0A`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `%0A*TOTAL: $${total.toLocaleString('es-CO')}*`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}