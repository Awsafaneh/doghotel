/* ===============================================
   script.js - Loving Homes Dog Hotel
   Features: Theme, Language (AR/EN), Mobile Nav,
             Scroll effects, Form validation,
             Animations, Back-to-top
   =============================================== */
'use strict';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ─────────────────────────────────────────────
   THEME MANAGER
───────────────────────────────────────────── */
const ThemeManager = (() => {
    const KEY = 'lh-theme';
    const HTML = document.documentElement;

    const apply = theme => {
        HTML.setAttribute('data-theme', theme);
        localStorage.setItem(KEY, theme);
        const btn = $('#theme-toggle');
        if (btn) btn.setAttribute('aria-label',
            theme === 'dark'
                ? (LanguageManager.current() === 'ar' ? 'التبديل إلى الوضع الفاتح' : 'Switch to light mode')
                : (LanguageManager.current() === 'ar' ? 'التبديل إلى الوضع الداكن' : 'Switch to dark mode')
        );
    };

    const get = () =>
        localStorage.getItem(KEY) ||
        (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');

    const init = () => {
        apply(get());
        const btn = $('#theme-toggle');
        if (!btn) return;
        btn.addEventListener('click', () =>
            apply(HTML.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
        );
    };
    return { init, apply, get };
})();

/* ─────────────────────────────────────────────
   LANGUAGE MANAGER
───────────────────────────────────────────── */
const LanguageManager = (() => {
    const KEY = 'lh-lang';
    const HTML = document.documentElement;

    const current = () => localStorage.getItem(KEY) || 'ar';

    const apply = lang => {
        const T = TRANSLATIONS[lang];
        if (!T) return;

        localStorage.setItem(KEY, lang);

        // Set dir, lang attribute
        HTML.setAttribute('lang', lang);
        HTML.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update lang toggle button labels
        const btn = $('#lang-toggle');
        if (btn) {
            btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
            btn.setAttribute('data-current-lang', lang);
        }

        // Apply all data-i18n text
        $$('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (T[key] !== undefined) el.textContent = T[key];
        });

        // Apply placeholders
        $$('[data-i18n-ph]').forEach(el => {
            const key = el.dataset.i18nPh;
            if (T[key] !== undefined) el.setAttribute('placeholder', T[key]);
        });

        // Apply aria-labels
        $$('[data-i18n-aria]').forEach(el => {
            const key = el.dataset.i18nAria;
            if (T[key] !== undefined) el.setAttribute('aria-label', T[key]);
        });

        // Update <title>
        const pageTitles = {
            'index': { ar: 'لوفينغ هومز | الرئيسية', en: 'Loving Homes | Home' },
            'services': { ar: 'لوفينغ هومز | خدماتنا', en: 'Loving Homes | Services' },
            'packages': { ar: 'لوفينغ هومز | الحزم', en: 'Loving Homes | Packages' },
            'facilities': { ar: 'لوفينغ هومز | المرافق', en: 'Loving Homes | Facilities' },
            'about': { ar: 'لوفينغ هومز | من نحن', en: 'Loving Homes | About Us' },
            'contact': { ar: 'لوفينغ هومز | تواصل معنا', en: 'Loving Homes | Contact' },
        };
        const page = (window.location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
        if (pageTitles[page]) document.title = pageTitles[page][lang] || document.title;

        // Update select options if present
        const sel = $('#package-select');
        if (sel) {
            const opts = sel.querySelectorAll('option[data-i18n]');
            opts.forEach(opt => {
                const key = opt.dataset.i18n;
                if (T[key]) opt.textContent = T[key];
            });
        }

        // Re-validate active nav
        PageNav.init();
    };

    const toggle = () => apply(current() === 'ar' ? 'en' : 'ar');

    const init = () => {
        apply(current());
        const btn = $('#lang-toggle');
        if (!btn) return;
        btn.addEventListener('click', toggle);
    };

    return { init, apply, current, toggle };
})();

/* ─────────────────────────────────────────────
   ACTIVE NAV LINK (page-based)
───────────────────────────────────────────── */
const PageNav = (() => {
    const init = () => {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        const page = path.replace('.html', '') || 'index';
        $$('.nav-link[data-page]').forEach(link => {
            const active = link.dataset.page === page;
            link.classList.toggle('active', active);
            active ? link.setAttribute('aria-current', 'page')
                : link.removeAttribute('aria-current');
        });
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────── */
const MobileNav = (() => {
    const init = () => {
        const ham = $('#hamburger');
        const menu = $('#nav-menu');
        if (!ham || !menu) return;
        const open = () => { menu.classList.add('open'); ham.classList.add('open'); ham.setAttribute('aria-expanded', 'true'); };
        const close = () => { menu.classList.remove('open'); ham.classList.remove('open'); ham.setAttribute('aria-expanded', 'false'); };
        ham.addEventListener('click', () => menu.classList.contains('open') ? close() : open());
        $$('.nav-link', menu).forEach(l => l.addEventListener('click', () => { if (window.innerWidth <= 768) close(); }));
        document.addEventListener('click', e => { if (!menu.contains(e.target) && !ham.contains(e.target)) close(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   NAVBAR SCROLL SHADOW
───────────────────────────────────────────── */
const NavScroll = (() => {
    const init = () => {
        const nav = $('#navbar');
        if (!nav) return;
        const update = () => nav.classList.toggle('scrolled', window.scrollY > 10);
        window.addEventListener('scroll', update, { passive: true });
        update();
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   BACK TO TOP
───────────────────────────────────────────── */
const BackToTop = (() => {
    const init = () => {
        const btn = $('#back-to-top');
        if (!btn) return;
        window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   FOOTER YEAR
───────────────────────────────────────────── */
const FooterYear = (() => {
    const init = () => $$('.current-year').forEach(el => el.textContent = new Date().getFullYear());
    return { init };
})();

/* ─────────────────────────────────────────────
   SCROLL ANIMATIONS
───────────────────────────────────────────── */
const ScrollAnim = (() => {
    const SEL = [
        '.stat-card', '.preview-card', '.service-card-full', '.package-card',
        '.fac-card', '.value-card', '.achievement-card', '.info-card', '.faq-item',
        '.section-header', '.custom-banner', '.contact-form', '.contact-info-panel',
        '.about-text-col', '.about-blob-wrap', '.hero-badge', '.page-hero-title',
        '.page-hero-desc', '.comparison-wrap', '.quick-packages'
    ].join(',');

    const init = () => {
        if (!('IntersectionObserver' in window)) return;
        const els = $$(SEL);
        els.forEach(el => {
            el.classList.add('will-anim');
            const idx = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
            if (idx >= 0 && idx < 6) el.setAttribute('data-d', idx + 1);
        });
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('anim-in'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        els.forEach(el => obs.observe(el));
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   CONTACT FORM VALIDATION (i18n-aware)
───────────────────────────────────────────── */
const ContactForm = (() => {
    const t = key => (TRANSLATIONS[LanguageManager.current()] || TRANSLATIONS.ar)[key] || '';

    const validate = {
        'full-name': v => !v.trim() ? t('errName') : v.trim().length < 2 ? t('errNameMin') : '',
        'phone': v => !v.trim() ? t('errPhone') : !/^[\d\s\-\+\(\)]{7,}$/.test(v.trim()) ? t('errPhoneInvalid') : '',
        'email': v => v.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? t('errEmailInvalid') : '',
        'message': v => !v.trim() ? t('errMsg') : v.trim().length < 5 ? t('errMsgMin') : '',
    };

    const ERR_IDS = { 'full-name': 'name-err', 'phone': 'phone-err', 'email': 'email-err', 'message': 'msg-err' };

    const showErr = (id, msg) => {
        const field = document.getElementById(id);
        const errEl = document.getElementById(ERR_IDS[id]);
        if (field) { field.classList.toggle('error', !!msg); field.setAttribute('aria-invalid', msg ? 'true' : 'false'); }
        if (errEl) errEl.textContent = msg;
    };

    const validateField = id => {
        const field = document.getElementById(id);
        if (!field || !validate[id]) return true;
        const msg = validate[id](field.value);
        showErr(id, msg);
        return !msg;
    };

    const init = () => {
        const form = $('#contact-form');
        if (!form) return;

        const submitBtn = $('#submit-btn');
        const successEl = $('#form-success');
        const fields = ['full-name', 'phone', 'email', 'message'];

        // Detect package from URL
        const urlPkg = new URLSearchParams(window.location.search).get('package');
        if (urlPkg) { const sel = $('#package-select'); if (sel) sel.value = urlPkg; }

        // Live validation
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('blur', () => validateField(id));
            el.addEventListener('input', () => { if (el.classList.contains('error')) validateField(id); });
        });

        form.addEventListener('submit', async e => {
            e.preventDefault();
            const valid = fields.map(id => validateField(id)).every(Boolean);
            if (!valid) { const bad = fields.find(id => !validateField(id)); document.getElementById(bad)?.focus(); return; }

            if (submitBtn) {
                submitBtn.disabled = true;
                const txt = submitBtn.querySelector('.btn-txt');
                const spin = submitBtn.querySelector('.btn-spin');
                if (txt) txt.style.display = 'none';
                if (spin) spin.style.display = '';
            }
            if (successEl) successEl.style.display = 'none';

            await new Promise(r => setTimeout(r, 1400));

            if (submitBtn) {
                submitBtn.disabled = false;
                const txt = submitBtn.querySelector('.btn-txt');
                const spin = submitBtn.querySelector('.btn-spin');
                if (txt) txt.style.display = '';
                if (spin) spin.style.display = 'none';
            }
            form.reset();
            $$('.form-err').forEach(e => e.textContent = '');
            $$('.form-inp,.form-textarea,.form-select').forEach(e => {
                e.classList.remove('error'); e.setAttribute('aria-invalid', 'false');
            });

            if (successEl) {
                const successMsgEl = successEl.querySelector('[data-i18n="successMsg"]');
                if (successMsgEl) successMsgEl.textContent = (TRANSLATIONS[LanguageManager.current()] || TRANSLATIONS.ar).successMsg;
                successEl.style.display = 'flex';
                successEl.focus();
                setTimeout(() => successEl.style.display = 'none', 7000);
            }
        });
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   FAQ KEYBOARD
───────────────────────────────────────────── */
const FaqKb = (() => {
    const init = () => {
        $$('.faq-item').forEach(item => {
            item.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.open = !item.open; }
            });
        });
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   CARD KEYBOARD
───────────────────────────────────────────── */
const CardKb = (() => {
    const init = () => {
        $$('[tabindex="0"]:not(details)').forEach(card => {
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter') { e.preventDefault(); card.querySelector('a.btn,a')?.click(); }
            });
        });
    };
    return { init };
})();

/* ─────────────────────────────────────────────
   INIT ALL
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    LanguageManager.init();   // applies translations on load
    PageNav.init();
    MobileNav.init();
    NavScroll.init();
    BackToTop.init();
    FooterYear.init();
    ScrollAnim.init();
    ContactForm.init();
    FaqKb.init();
    CardKb.init();
});
