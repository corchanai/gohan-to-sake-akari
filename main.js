// ===== 設定 =====
// スプレッドシート「ウェブに公開」のCSV URL（Menu / News シート）
const MENU_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS0Wl2thcao8KKJDQ18MHOr9lPbLIddH9u6KGwSmn8DVg63cF9nPllOVJODWvCDXAcq7U4zODa82408/pub?gid=0&single=true&output=csv';
const NEWS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS0Wl2thcao8KKJDQ18MHOr9lPbLIddH9u6KGwSmn8DVg63cF9nPllOVJODWvCDXAcq7U4zODa82408/pub?gid=309498182&single=true&output=csv';
const NEWS_EXCERPT_LENGTH = 50;

const MENU_CATEGORY_ORDER = [
  'まずは一品', '魚と刺身', '焼き・揚げ', '煮込み・温菜',
  'ごはん・〆', '甘味', 'お酒', 'ノンアルコール',
];

// ===== フォールバックデータ（API取得失敗時 / 未設定時） =====
const FALLBACK_MENU = [
  { id: 's1', category: '本日のおすすめ', name: '炙り〆さば', desc: '旬のさばをじっくり〆て炙った一品', price: '¥ 680', image_url: '', active: true, sort_order: 1 },
  { id: 's2', category: '本日のおすすめ', name: 'とうもろこしの天ぷら', desc: '旬のとうもろこしをさっくり揚げて', price: '¥ 480', image_url: '', active: true, sort_order: 2 },
  { id: 's3', category: '本日のおすすめ', name: 'だし巻き玉子', desc: 'ふんわり仕上げた定番の出汁巻き', price: '¥ 520', image_url: '', active: true, sort_order: 3 },
  { id: 's4', category: '本日のおすすめ', name: '鶏もも炭火焼き', desc: '炭火でじっくり焼いた鶏もも肉', price: '¥ 680', image_url: '', active: true, sort_order: 4 },
  { id: 's5', category: '本日のおすすめ', name: '宮城の地酒 飲み比べ', desc: '季節の地酒3種をお得に飲み比べ', price: '¥ 880', image_url: '', active: true, sort_order: 5 },

  { id: 'm1', category: 'まずは一品', name: '枝豆', desc: '', price: '¥ 350', image_url: '', active: true, sort_order: 1 },
  { id: 'm2', category: 'まずは一品', name: '冷やしトマト', desc: '', price: '¥ 380', image_url: '', active: true, sort_order: 2 },
  { id: 'm3', category: 'まずは一品', name: 'たたききゅうり', desc: '', price: '¥ 300', image_url: '', active: true, sort_order: 3 },
  { id: 'm4', category: 'まずは一品', name: '自家製ポテトサラダ', desc: '', price: '¥ 450', image_url: '', active: true, sort_order: 4 },

  { id: 'm5', category: '魚と刺身', name: '本日の刺身盛り', desc: '', price: '¥ 950', image_url: '', active: true, sort_order: 1 },
  { id: 'm6', category: '魚と刺身', name: '炙り〆さば', desc: '', price: '¥ 680', image_url: '', active: true, sort_order: 2 },
  { id: 'm7', category: '魚と刺身', name: 'ほっけ焼き', desc: '', price: '¥ 750', image_url: '', active: true, sort_order: 3 },
  { id: 'm8', category: '魚と刺身', name: '鮭ハラス焼き', desc: '', price: '¥ 720', image_url: '', active: true, sort_order: 4 },

  { id: 'm9', category: '焼き・揚げ', name: '鶏の唐揚げ', desc: '', price: '¥ 580', image_url: '', active: true, sort_order: 1 },
  { id: 'm10', category: '焼き・揚げ', name: '里芋の唐揚げ', desc: '', price: '¥ 480', image_url: '', active: true, sort_order: 2 },
  { id: 'm11', category: '焼き・揚げ', name: 'つくね', desc: '', price: '¥ 320', image_url: '', active: true, sort_order: 3 },
  { id: 'm12', category: '焼き・揚げ', name: '長ねぎ焼き', desc: '', price: '¥ 350', image_url: '', active: true, sort_order: 4 },

  { id: 'm13', category: '煮込み・温菜', name: '牛すじ煮込み', desc: '', price: '¥ 580', image_url: '', active: true, sort_order: 1 },
  { id: 'm14', category: '煮込み・温菜', name: '肉豆腐', desc: '', price: '¥ 520', image_url: '', active: true, sort_order: 2 },
  { id: 'm15', category: '煮込み・温菜', name: '揚げ出し豆腐', desc: '', price: '¥ 450', image_url: '', active: true, sort_order: 3 },
  { id: 'm16', category: '煮込み・温菜', name: '出汁しみ大根', desc: '', price: '¥ 380', image_url: '', active: true, sort_order: 4 },

  { id: 'm17', category: 'ごはん・〆', name: '焼きおにぎり', desc: '', price: '¥ 280', image_url: '', active: true, sort_order: 1 },
  { id: 'm18', category: 'ごはん・〆', name: '出汁茶漬け', desc: '', price: '¥ 480', image_url: '', active: true, sort_order: 2 },
  { id: 'm19', category: 'ごはん・〆', name: '小さな親子丼', desc: '', price: '¥ 680', image_url: '', active: true, sort_order: 3 },
  { id: 'm20', category: 'ごはん・〆', name: '本日のまかない飯', desc: '', price: '¥ 550', image_url: '', active: true, sort_order: 4 },

  { id: 'm21', category: '甘味', name: 'ほうじ茶アイス', desc: '', price: '¥ 380', image_url: '', active: true, sort_order: 1 },
  { id: 'm22', category: '甘味', name: '自家製プリン', desc: '', price: '¥ 420', image_url: '', active: true, sort_order: 2 },
  { id: 'm23', category: '甘味', name: '抹茶わらび餅', desc: '', price: '¥ 400', image_url: '', active: true, sort_order: 3 },

  { id: 'm24', category: 'お酒', name: '生ビール', desc: '', price: '¥ 550', image_url: '', active: true, sort_order: 1 },
  { id: 'm25', category: 'お酒', name: 'ハイボール', desc: '', price: '¥ 480', image_url: '', active: true, sort_order: 2 },
  { id: 'm26', category: 'お酒', name: 'レモンサワー', desc: '', price: '¥ 480', image_url: '', active: true, sort_order: 3 },
  { id: 'm27', category: 'お酒', name: '宮城の地酒', desc: '', price: '¥ 580〜', image_url: '', active: true, sort_order: 4 },

  { id: 'm28', category: 'ノンアルコール', name: '烏龍茶', desc: '', price: '¥ 300', image_url: '', active: true, sort_order: 1 },
  { id: 'm29', category: 'ノンアルコール', name: '緑茶', desc: '', price: '¥ 300', image_url: '', active: true, sort_order: 2 },
  { id: 'm30', category: 'ノンアルコール', name: 'ジンジャーエール', desc: '', price: '¥ 350', image_url: '', active: true, sort_order: 3 },
  { id: 'm31', category: 'ノンアルコール', name: 'ノンアル梅ソーダ', desc: '', price: '¥ 380', image_url: '', active: true, sort_order: 4 },
];

const FALLBACK_NEWS = [
  { id: 'n1', date: '2025.06.14', title: '今週の営業日について', body: '今週は通常通り火〜土曜営業となります。お気軽にお越しください。', excerpt: '今週は通常通り火〜土曜営業となります。お気軽にお越しください。', image_url: '', published: true },
  { id: 'n2', date: '2025.06.10', title: '新しい日本酒が入りました', body: '宮城の蔵元より新しい純米吟醸が届きました。数量限定となります。', excerpt: '宮城の蔵元より新しい純米吟醸が届きました。数量限定となります。', image_url: '', published: true },
  { id: 'n3', date: '2025.06.08', title: '本日のおすすめ更新しました', body: 'とうもろこしの天ぷらなど旬の食材を使ったおすすめをご用意しています。', excerpt: 'とうもろこしの天ぷらなど旬の食材を使ったおすすめをご用意しています。', image_url: '', published: true },
];

// ===== ユーティリティ =====
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function cardImage(imageUrl, alt, heightStyle) {
  if (imageUrl) {
    return `<div class="card-img" style="${heightStyle}"><img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(alt)}" loading="lazy"></div>`;
  }
  return `<div class="card-img" style="${heightStyle}"><span class="photo-label">photo</span></div>`;
}

// ===== CSV取得・パース（スプレッドシート「ウェブに公開」のCSV） =====
function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n') {
      row.push(field); rows.push(row); row = []; field = '';
    } else if (c === '\r') {
      // skip
    } else {
      field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function csvToObjects(text) {
  const rows = parseCsvRows(text.trim());
  if (rows.length < 2) return [];
  const headers = rows[0].map(h => h.trim());
  return rows.slice(1)
    .filter(r => r.some(cell => cell !== ''))
    .map(r => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = (r[i] ?? '').trim(); });
      return obj;
    });
}

function isVisible(status) {
  return String(status || '').trim().toLowerCase() !== 'hidden';
}

function makeExcerpt(body) {
  const text = String(body || '').trim();
  if (text.length <= NEWS_EXCERPT_LENGTH) return text;
  return text.slice(0, NEWS_EXCERPT_LENGTH) + '…';
}

function formatDisplayDate(date) {
  return String(date || '').trim().replaceAll('-', '.');
}

function adaptMenuRow(row) {
  return {
    id: row.id,
    category: row.category,
    name: row.name,
    desc: row.desc,
    price: row.price,
    image_url: row.image || '',
    active: isVisible(row.status),
    sort_order: Number(row.sort_order) || 0,
  };
}

function adaptNewsRow(row) {
  return {
    id: row.id,
    date: formatDisplayDate(row.date),
    title: row.title,
    body: row.body,
    excerpt: makeExcerpt(row.body),
    image_url: row.image || '',
    published: isVisible(row.status),
  };
}

async function fetchCsv(url, adapt, fallback) {
  if (!url) return fallback;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const rows = csvToObjects(text);
    if (rows.length === 0) return fallback;
    return rows.map(adapt);
  } catch (err) {
    console.warn('[akari] CSVの取得に失敗、フォールバックデータを使用します', err);
    return fallback;
  }
}

// ===== レンダリング =====
function renderSkeletons() {
  const specialsTrack = document.getElementById('specials-track');
  specialsTrack.innerHTML = Array.from({ length: 5 }).map(() => `
    <div style="width:190px; background:#1c1510; border:1px solid #2a2016; border-radius:4px; overflow:hidden;">
      <div class="skeleton" style="height:140px;"></div>
      <div style="padding:12px 13px 14px;">
        <div class="skeleton" style="height:13px; width:70%; margin-bottom:8px; border-radius:2px;"></div>
        <div class="skeleton" style="height:11px; width:90%; border-radius:2px;"></div>
      </div>
    </div>
  `).join('');
}

function renderSpecials(menu) {
  const specials = menu
    .filter(m => m.category === '本日のおすすめ' && m.active !== false)
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));

  const track = document.getElementById('specials-track');
  track.innerHTML = specials.map((item, i) => `
    <div class="menu-card" data-modal-type="menu" data-modal-index="${i}" style="width:190px; background:#1c1510; border:1px solid #2a2016; border-radius:4px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.3); cursor:pointer;">
      ${cardImage(item.image_url, item.name, 'height:140px;')}
      <div style="padding:12px 13px 14px;">
        <div class="serif" style="font-size:13px; font-weight:500; color:#ede5d8; margin-bottom:4px; line-height:1.5;">${escapeHtml(item.name)}</div>
        <div style="font-size:11px; color:#8a7a6a; margin-bottom:9px; line-height:1.6; font-weight:300;">${escapeHtml(item.desc)}</div>
        <div style="font-size:13px; color:#ede5d8; font-weight:500; letter-spacing:0.02em;">${escapeHtml(item.price)}</div>
        <div style="font-size:10px; color:#5a4e40; margin-top:8px; border-top:1px solid #2a2016; padding-top:7px; letter-spacing:0.04em; display:flex; align-items:center; gap:3px;">
          <span style="font-size:9px;">▷</span> タップで詳細表示
        </div>
      </div>
    </div>
  `).join('');

  track.querySelectorAll('[data-modal-type="menu"]').forEach((el, i) => {
    el.addEventListener('click', () => openModal('menu', specials[i]));
  });

  renderDots('specials-dots', track, specials.length);
  return specials;
}

function renderMenuCategories(menu) {
  const container = document.getElementById('menu-categories');
  container.innerHTML = '';

  MENU_CATEGORY_ORDER.forEach(catName => {
    const items = menu
      .filter(m => m.category === catName && m.active !== false)
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
    if (items.length === 0) return;

    const section = document.createElement('div');
    section.style.marginBottom = '28px';
    section.innerHTML = `
      <div style="padding:0 20px; display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
        <h3 style="font-size:14px; font-weight:500; color:#ede5d8; letter-spacing:0.05em; display:flex; align-items:center; gap:9px;">
          <span style="width:3px; height:15px; background:#3f5835; display:inline-block; border-radius:1px; flex-shrink:0;"></span>
          ${escapeHtml(catName)}
        </h3>
        <span style="font-size:10px; color:#5a4e40; font-style:italic; font-weight:300;">← スクロール</span>
      </div>
      <div class="carousel-wrap">
        <div class="carousel-track">
          ${items.map((item, i) => `
            <div class="menu-card" data-cat="${escapeHtml(catName)}" data-idx="${i}" style="width:134px; background:#1c1510; border:1px solid #2a2016; border-radius:3px; overflow:hidden; cursor:pointer; box-shadow:0 1px 5px rgba(0,0,0,0.25);">
              ${cardImage(item.image_url, item.name, 'height:80px;')}
              <div style="padding:8px 10px 10px;">
                <div style="font-size:12px; font-weight:500; color:#ede5d8; margin-bottom:3px; line-height:1.4;">${escapeHtml(item.name)}</div>
                <div style="font-size:11px; color:#7a6a5a; font-weight:400;">${escapeHtml(item.price)}</div>
                <div style="font-size:9px; color:#5a4e40; margin-top:5px; letter-spacing:0.04em;">▷ タップ</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.appendChild(section);

    section.querySelectorAll('.menu-card').forEach((el, i) => {
      el.addEventListener('click', () => openModal('menu', items[i]));
    });

    setupScrollFade(section.querySelector('.carousel-wrap'));
  });
}

// スクロール可能なことを示す右端フェード（自動スクロールしないカルーセル用）
function setupScrollFade(wrap) {
  if (!wrap) return;
  const track = wrap.querySelector('.carousel-track');
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    wrap.classList.toggle('no-overflow', max <= 1);
    wrap.classList.toggle('at-end', track.scrollLeft >= max - 1);
  };
  update();
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function renderNews(newsItems) {
  const sorted = newsItems
    .filter(n => n.published !== false)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 3);

  const grid = document.getElementById('news-grid');
  grid.innerHTML = sorted.map((news, i) => `
    <div class="news-card" data-idx="${i}" style="background:#1c1510; border:1px solid #2a2016; border-radius:4px; overflow:hidden; cursor:pointer; box-shadow:0 3px 12px rgba(0,0,0,0.3);">
      ${cardImage(news.image_url, news.title, 'height:150px;').replace('class="card-img"', 'class="card-img news-img"')}
      <div style="padding:14px 16px 16px;">
        <div style="font-size:11px; color:#7a6a5a; margin-bottom:5px; letter-spacing:0.05em; font-weight:300;">${escapeHtml(news.date)}</div>
        <div class="serif" style="font-size:14px; font-weight:500; color:#ede5d8; margin-bottom:7px; line-height:1.5;">${escapeHtml(news.title)}</div>
        <div style="font-size:12px; color:#7a6a5a; line-height:1.9; margin-bottom:10px; font-weight:300;">${escapeHtml(news.excerpt)}</div>
        <div style="display:flex; align-items:center; gap:4px; font-size:11px; color:#6a9462; border-top:1px solid #2a2016; padding-top:9px; letter-spacing:0.04em; font-weight:500;">
          詳細を見る <span style="font-size:12px;">›</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.news-card').forEach((el, i) => {
    el.addEventListener('click', () => openModal('news', sorted[i]));
  });
}

function renderDots(containerId, track, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = Array.from({ length: Math.min(count, 5) }).map((_, i) =>
    `<div class="dot${i === 0 ? ' active' : ''}"></div>`
  ).join('');
}

// ===== モーダル =====
function openModal(type, item) {
  const content = document.getElementById('modal-content');
  if (type === 'menu') {
    content.innerHTML = `
      <div class="modal-img">${item.image_url ? `<img src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.name)}">` : '<span class="photo-label" style="color:rgba(255,255,255,0.5);">photo</span>'}</div>
      <div class="modal-body">
        <div class="serif" style="font-size:18px; font-weight:500; color:#ede5d8; margin-bottom:10px;">${escapeHtml(item.name)}</div>
        ${item.desc ? `<div style="font-size:13px; color:#b8a898; line-height:1.9; margin-bottom:16px; font-weight:300;">${escapeHtml(item.desc)}</div>` : ''}
        <div style="font-size:16px; color:#ede5d8; font-weight:500;">${escapeHtml(item.price)}</div>
      </div>
    `;
  } else if (type === 'news') {
    content.innerHTML = `
      <div class="modal-img">${item.image_url ? `<img src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.title)}">` : '<span class="photo-label" style="color:rgba(255,255,255,0.5);">photo</span>'}</div>
      <div class="modal-body">
        <div style="font-size:12px; color:#7a6a5a; margin-bottom:8px; letter-spacing:0.05em;">${escapeHtml(item.date)}</div>
        <div class="serif" style="font-size:17px; font-weight:500; color:#ede5d8; margin-bottom:14px;">${escapeHtml(item.title)}</div>
        <div style="font-size:13px; color:#b8a898; line-height:2; font-weight:300; white-space:pre-wrap;">${escapeHtml(item.body || item.excerpt)}</div>
      </div>
    `;
  }
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target.id === 'modal-overlay') closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== カルーセル：自動スクロール =====
let scrollRunning = true;
const scrollData = new Map();

function animateCarousels() {
  if (!scrollRunning) return;
  const tracks = document.querySelectorAll('[data-auto-scroll]');
  let i = 0;
  tracks.forEach(track => {
    if (!track.isConnected || track._userPaused) { i++; return; }
    if (!scrollData.has(track)) {
      scrollData.set(track, { pos: i * 48, dir: 1 });
    }
    const data = scrollData.get(track);
    const max = track.scrollWidth - track.clientWidth;
    if (max <= 0) { i++; return; }
    data.pos += 0.4 * data.dir;
    if (data.pos >= max) { data.pos = max; data.dir = -1; }
    else if (data.pos <= 0) { data.pos = 0; data.dir = 1; }
    track.scrollLeft = data.pos;
    i++;
  });
  requestAnimationFrame(animateCarousels);
}

// 自動スクロール中はscroll-snapを切り、ユーザーが触れている間だけ
// スナップを有効化する（JSのscrollLeft操作とmandatory snapが競合し、
// 実機モバイルで自動スクロールが止まって見える問題への対策）。
function setCarouselUserActive(track, active) {
  track._userPaused = active;
  track.classList.toggle('user-active', active);
  if (!active && scrollData.has(track)) {
    // 再開時、ユーザーが動かした位置から続きを再生する
    scrollData.get(track).pos = track.scrollLeft;
  }
}

function setupCarouselPauseHandlers() {
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('.carousel-track');
    if (t) setCarouselUserActive(t, true);
  });
  document.addEventListener('mouseout', e => {
    const t = e.target.closest('.carousel-track');
    if (t) setCarouselUserActive(t, false);
  });
  document.addEventListener('touchstart', e => {
    const t = e.target.closest('.carousel-track');
    if (t) {
      clearTimeout(t._resumeTimer);
      setCarouselUserActive(t, true);
    }
  }, { passive: true });
  document.addEventListener('touchend', e => {
    const t = e.target.closest('.carousel-track');
    if (t) {
      clearTimeout(t._resumeTimer);
      t._resumeTimer = setTimeout(() => setCarouselUserActive(t, false), 2000);
    }
  }, { passive: true });
}

function setupCarouselArrows() {
  document.querySelectorAll('.carousel-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const track = targetId ? document.getElementById(targetId) : btn.closest('section').querySelector('.carousel-track');
      if (!track) return;
      setCarouselUserActive(track, true);
      const dir = btn.dataset.arrow === 'prev' ? -1 : 1;
      track.scrollBy({ left: dir * 200, behavior: 'smooth' });
      clearTimeout(track._resumeTimer);
      track._resumeTimer = setTimeout(() => setCarouselUserActive(track, false), 2500);
    });
  });
}

// デモ用: 「電話する」「Instagramを見る」ボタンは実際の発信/外部リンクを持たせず、
// TOPへ戻るだけにする。ヘッダーがposition:stickyのため href="#top" だけでは
// ブラウザが「既に表示範囲内」と判定してスクロールしないことがあるため、JSで明示的に処理する。
document.querySelectorAll('.scroll-top-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ===== 初期化 =====
async function init() {
  renderSkeletons();

  const [menu, news] = await Promise.all([
    fetchCsv(MENU_CSV_URL, adaptMenuRow, FALLBACK_MENU),
    fetchCsv(NEWS_CSV_URL, adaptNewsRow, FALLBACK_NEWS),
  ]);

  renderSpecials(menu);
  renderMenuCategories(menu);
  renderNews(news);

  setupCarouselArrows();
  setupCarouselPauseHandlers();
  requestAnimationFrame(animateCarousels);
}

init();
