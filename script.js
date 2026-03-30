// ===== CSE STUDENTS DATA (Branch Code = 5) =====
const students = [
  { id: 1,  name: "ADAPA VENKATA SAI KRISHNA",        hallTicket: "22B91A0501", phone: "9876543201", email: "saikrishna.adapa@college.edu" },
  { id: 2,  name: "AKULA BHAVANI",                    hallTicket: "22B91A0502", phone: "9876543202", email: "bhavani.akula@college.edu" },
  { id: 3,  name: "ALLU NAGA VENKATA SAI TEJA",       hallTicket: "22B91A0503", phone: "9876543203", email: "saiteja.allu@college.edu" },
  { id: 4,  name: "AMBATI LAKSHMI PRASANNA",          hallTicket: "22B91A0504", phone: "9876543204", email: "prasanna.ambati@college.edu" },
  { id: 5,  name: "ANNAM SIVA NAGA DURGA PRASAD",     hallTicket: "22B91A0505", phone: "9876543205", email: "sivaprasad.annam@college.edu" },
  { id: 6,  name: "BANDARU MOUNIKA",                  hallTicket: "22B91A0506", phone: "9876543206", email: "mounika.bandaru@college.edu" },
  { id: 7,  name: "BODDEPALLI VENKATA NAGA RAJU",     hallTicket: "22B91A0507", phone: "9876543207", email: "nagaraju.boddepalli@college.edu" },
  { id: 8,  name: "CHALLA DIVYA SRI",                 hallTicket: "22B91A0508", phone: "9876543208", email: "divyasri.challa@college.edu" },
  { id: 9,  name: "DASARI VENKATA RAMANA",            hallTicket: "22B91A0509", phone: "9876543209", email: "ramana.dasari@college.edu" },
  { id: 10, name: "DEVI SREE HARSHA VARDHAN",         hallTicket: "22B91A0510", phone: "9876543210", email: "harsha.devi@college.edu" },
  { id: 11, name: "GANTA NAGA LAKSHMI",               hallTicket: "22B91A0511", phone: "9876543211", email: "nagalakshmi.ganta@college.edu" },
  { id: 12, name: "GEDELA SAI KIRAN",                 hallTicket: "22B91A0512", phone: "9876543212", email: "saikiran.gedela@college.edu" },
  { id: 13, name: "GORANTLA BHARGAVI",                hallTicket: "22B91A0513", phone: "9876543213", email: "bhargavi.gorantla@college.edu" },
  { id: 14, name: "GUDIVADA VENKATA KRISHNA TEJA",    hallTicket: "22B91A0514", phone: "9876543214", email: "krishnateja.gudivada@college.edu" },
  { id: 15, name: "JAMI NAGA VENKATA SAI PRIYA",      hallTicket: "22B91A0515", phone: "9876543215", email: "saipriya.jami@college.edu" },
  { id: 16, name: "KANDULA VENKATA NAGA PRASAD",      hallTicket: "22B91A0516", phone: "9876543216", email: "nagaprasad.kandula@college.edu" },
  { id: 17, name: "KATTA MOUNIKA DEVI",               hallTicket: "22B91A0517", phone: "9876543217", email: "mounikadevi.katta@college.edu" },
  { id: 18, name: "KOMMINENI VENKATA SAI TEJA",       hallTicket: "22B91A0518", phone: "9876543218", email: "saiteja.kommineni@college.edu" },
  { id: 19, name: "KONDRU NAGA LAKSHMI PRASANNA",     hallTicket: "22B91A0519", phone: "9876543219", email: "prasanna.kondru@college.edu" },
  { id: 20, name: "KOTA VENKATA RAMANA MURTHY",       hallTicket: "22B91A0520", phone: "9876543220", email: "ramana.kota@college.edu" },
  { id: 21, name: "LELLA VENKATA NAGA DURGA",         hallTicket: "22B91A0521", phone: "9876543221", email: "nagadurga.lella@college.edu" },
  { id: 22, name: "MADDALI SAI KIRAN KUMAR",          hallTicket: "22B91A0522", phone: "9876543222", email: "saikiranku.maddali@college.edu" },
  { id: 23, name: "MANDAVA BHAVANI SHANKAR",          hallTicket: "22B91A0523", phone: "9876543223", email: "bhavanishankar.mandava@college.edu" },
  { id: 24, name: "NAIDU VENKATA LAKSHMI PRIYA",      hallTicket: "22B91A0524", phone: "9876543224", email: "lakshmipri.naidu@college.edu" },
  { id: 25, name: "NIMMALA VENKATA SAI KRISHNA",      hallTicket: "22B91A0525", phone: "9876543225", email: "saikrishna.nimmala@college.edu" },
  { id: 26, name: "PALLA NAGA VENKATA DURGA PRASAD",  hallTicket: "22B91A0526", phone: "9876543226", email: "durgaprasad.palla@college.edu" },
  { id: 27, name: "PARASA MOUNIKA",                   hallTicket: "22B91A0527", phone: "9876543227", email: "mounika.parasa@college.edu" },
  { id: 28, name: "PEDDIREDDY VENKATA NAGA RAJU",     hallTicket: "22B91A0528", phone: "9876543228", email: "nagaraju.peddireddy@college.edu" },
  { id: 29, name: "POTHULA NAGA LAKSHMI DEVI",        hallTicket: "22B91A0529", phone: "9876543229", email: "nagalakshmi.pothula@college.edu" },
  { id: 30, name: "RAJULAPATI VENKATA SAI TEJA",      hallTicket: "22B91A0530", phone: "9876543230", email: "saiteja.rajulapati@college.edu" },
  { id: 31, name: "RAMISETTY BHARGAVI",               hallTicket: "22B91A0531", phone: "9876543231", email: "bhargavi.ramisetty@college.edu" },
  { id: 32, name: "RAVULAKOLLU VENKATA RAMANA",       hallTicket: "22B91A0532", phone: "9876543232", email: "ramana.ravulakollu@college.edu" },
  { id: 33, name: "SAGI NAGA VENKATA SAI PRIYA",      hallTicket: "22B91A0533", phone: "9876543233", email: "saipriya.sagi@college.edu" },
  { id: 34, name: "SANAPALA VENKATA KRISHNA TEJA",    hallTicket: "22B91A0534", phone: "9876543234", email: "krishnateja.sanapala@college.edu" },
  { id: 35, name: "SENAPATI MOUNIKA DEVI",            hallTicket: "22B91A0535", phone: "9876543235", email: "mounikadevi.senapati@college.edu" },
  { id: 36, name: "SIRIPURAPU VENKATA NAGA PRASAD",   hallTicket: "22B91A0536", phone: "9876543236", email: "nagaprasad.siripurapu@college.edu" },
  { id: 37, name: "SRIRAM VENKATA LAKSHMI PRASANNA",  hallTicket: "22B91A0537", phone: "9876543237", email: "prasanna.sriram@college.edu" },
  { id: 38, name: "TADEPALLI SAI KIRAN",              hallTicket: "22B91A0538", phone: "9876543238", email: "saikiran.tadepalli@college.edu" },
  { id: 39, name: "THOTA NAGA DURGA BHAVANI",         hallTicket: "22B91A0539", phone: "9876543239", email: "bhavani.thota@college.edu" },
  { id: 40, name: "UPPALA VENKATA SAI KRISHNA TEJA",  hallTicket: "22B91A0540", phone: "9876543240", email: "krishnateja.uppala@college.edu" },
  { id: 41, name: "VANGALA MOUNIKA",                  hallTicket: "22B91A0541", phone: "9876543241", email: "mounika.vangala@college.edu" },
  { id: 42, name: "VEERABOINA VENKATA RAMANA MURTHY", hallTicket: "22B91A0542", phone: "9876543242", email: "ramana.veeraboina@college.edu" },
  { id: 43, name: "VEMULA NAGA VENKATA SAI PRIYA",    hallTicket: "22B91A0543", phone: "9876543243", email: "saipriya.vemula@college.edu" },
  { id: 44, name: "YEDLA VENKATA NAGA RAJU",          hallTicket: "22B91A0544", phone: "9876543244", email: "nagaraju.yedla@college.edu" },
  { id: 45, name: "ZINKA BHARGAVI DEVI",              hallTicket: "22B91A0545", phone: "9876543245", email: "bhargavi.zinka@college.edu" }
];

const avatars = ['👨‍💻','👩‍💻','🧑‍💻','👨‍🎓','👩‍🎓','🧑‍🎓'];
const getAvatar = id => avatars[id % avatars.length];

// ===== TABS =====
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ===== MUSIC =====
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let playing = false;
musicBtn.addEventListener('click', () => {
  playing ? (music.pause(), musicBtn.textContent = '♪', musicBtn.classList.remove('playing'))
           : (music.play().catch(() => {}), musicBtn.textContent = '■', musicBtn.classList.add('playing'));
  playing = !playing;
});

// ===== STUDENTS =====
const grid = document.getElementById('studentsGrid');
const countBadge = document.getElementById('countBadge');
const noResults = document.getElementById('noResults');
let currentSearch = '';

function renderCards(list) {
  grid.innerHTML = '';
  noResults.style.display = list.length === 0 ? 'flex' : 'none';
  countBadge.textContent = `${list.length} student${list.length !== 1 ? 's' : ''}`;
  list.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.style.animationDelay = `${i * 0.03}s`;
    card.innerHTML = `
      <div class="card-avatar">${getAvatar(s.id)}</div>
      <div class="card-body">
        <div class="card-name">${s.name}</div>
        <div class="card-ht">${s.hallTicket}</div>
        <div class="card-row">📞 ${s.phone}</div>
      </div>
      <span class="card-arrow">›</span>
    `;
    card.addEventListener('click', () => openModal(s));
    grid.appendChild(card);
  });
}

function filterStudents() {
  let list = students;
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    list = list.filter(s => s.name.toLowerCase().includes(q));
  }
  renderCards(list);
}
filterStudents();

document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value;
  filterStudents();
});

// ===== STUDENT MODAL =====
const modal = document.getElementById('studentModal');
const modalBox = document.getElementById('modalBox');
document.getElementById('modalOverlay').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeMediaLightbox(); } });

function openModal(s) {
  modalBox.innerHTML = `
    <button class="modal-close-btn" id="modalClose">✕</button>
    <div class="modal-avatar-lg">${getAvatar(s.id)}</div>
    <div class="modal-name">${s.name}</div>
    <div class="modal-ht">${s.hallTicket}</div>
    <div class="modal-divider"></div>
    <div class="modal-field">
      <div class="modal-field-label">Phone Number</div>
      <div class="modal-field-value">${s.phone}</div>
    </div>
    <div class="modal-field">
      <div class="modal-field-label">Email Address</div>
      <div class="modal-field-value">${s.email}</div>
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').addEventListener('click', closeModal);
}
function closeModal() { modal.classList.remove('active'); document.body.style.overflow = ''; }

// ===== GALLERY (localStorage) =====
const STORAGE_KEY = 'asra_gallery_v1';
let galleryItems = [];
try { galleryItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { galleryItems = []; }
function saveGallery() { localStorage.setItem(STORAGE_KEY, JSON.stringify(galleryItems)); }

function ytEmbed(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}
function isVideo(src) {
  return src.startsWith('https://www.youtube.com/embed') || /\.(mp4|mov|webm|ogg)(\?|$)/i.test(src) || src.startsWith('data:video');
}

function renderGallery() {
  const gg = document.getElementById('galleryGrid');
  const ge = document.getElementById('galleryEmpty');
  gg.innerHTML = '';
  ge.style.display = galleryItems.length === 0 ? 'flex' : 'none';
  galleryItems.forEach((item, idx) => {
    const tile = document.createElement('div');
    tile.className = 'gallery-tile';
    const isYT = item.src.startsWith('https://www.youtube.com/embed');
    const isVid = isVideo(item.src);
    if (isYT) {
      tile.innerHTML = `<div class="gallery-tile-yt"><iframe src="${item.src}" allowfullscreen loading="lazy"></iframe></div>
        <div class="gallery-tile-bar"><span class="gallery-tile-caption">${item.caption||''}</span><button class="gallery-tile-del" data-idx="${idx}">🗑</button></div>`;
    } else if (isVid) {
      tile.innerHTML = `<video src="${item.src}" muted loop playsinline preload="metadata" style="width:100%;aspect-ratio:4/3;object-fit:cover;cursor:pointer"></video>
        <div class="gallery-tile-bar"><span class="gallery-tile-caption">${item.caption||''}</span><button class="gallery-tile-del" data-idx="${idx}">🗑</button></div>`;
      tile.querySelector('video').addEventListener('click', () => openUserLightbox(idx));
    } else {
      tile.innerHTML = `<img src="${item.src}" alt="${item.caption||''}" loading="lazy" style="cursor:pointer" />
        <div class="gallery-tile-bar"><span class="gallery-tile-caption">${item.caption||''}</span><button class="gallery-tile-del" data-idx="${idx}">🗑</button></div>`;
      tile.querySelector('img').addEventListener('click', () => openUserLightbox(idx));
    }
    tile.querySelector('.gallery-tile-del').addEventListener('click', e => {
      e.stopPropagation();
      galleryItems.splice(idx, 1);
      saveGallery(); renderGallery();
    });
    gg.appendChild(tile);
  });
}
renderGallery();

const fileInput = document.getElementById('fileInput');
document.getElementById('uploadPhotoBtn').addEventListener('click', () => { fileInput.accept = 'image/*'; fileInput.click(); });
document.getElementById('uploadVideoBtn').addEventListener('click', () => { fileInput.accept = 'video/*'; fileInput.click(); });
fileInput.addEventListener('change', () => {
  Array.from(fileInput.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      galleryItems.push({ src: e.target.result, caption: file.name.replace(/\.[^.]+$/, '') });
      saveGallery(); renderGallery();
    };
    reader.readAsDataURL(file);
  });
  fileInput.value = '';
});

const urlInputWrap = document.getElementById('urlInputWrap');
document.getElementById('uploadUrlBtn').addEventListener('click', () => {
  urlInputWrap.style.display = urlInputWrap.style.display === 'none' ? 'flex' : 'none';
});
document.getElementById('urlCancel').addEventListener('click', () => { urlInputWrap.style.display = 'none'; });
document.getElementById('urlSubmit').addEventListener('click', () => {
  const raw = document.getElementById('urlInput').value.trim();
  const caption = document.getElementById('urlCaption').value.trim();
  if (!raw) return;
  const src = ytEmbed(raw) || raw;
  galleryItems.push({ src, caption });
  saveGallery(); renderGallery();
  document.getElementById('urlInput').value = '';
  document.getElementById('urlCaption').value = '';
  urlInputWrap.style.display = 'none';
});

// ===== MEDIA LIGHTBOX =====
const mediaLightbox = document.getElementById('mediaLightbox');
document.getElementById('mediaLbClose').addEventListener('click', closeMediaLightbox);
document.getElementById('mediaLbOverlay').addEventListener('click', closeMediaLightbox);

// Pre-loaded batch photos
const memoryPhotos = [
  { src: 'images/WhatsApp Image 2026-03-30 at 8.46.07 PM.jpeg',      caption: "Avanthi's College — Our Batch ❤️" },
  { src: 'images/WhatsApp Image 2026-03-30 at 8.46.07 PM (1).jpeg',  caption: 'Trip Vibes 🔥' },
  { src: 'images/WhatsApp Image 2026-03-30 at 8.46.08 PM.jpeg',      caption: 'Night Out 🌙' },
  { src: 'images/WhatsApp Image 2026-03-30 at 8.46.08 PM (1).jpeg',  caption: 'Campus Days ☀️' },
];

function openMemoryPhoto(idx) {
  let cur = idx;
  const show = () => {
    const p = memoryPhotos[cur];
    document.getElementById('mediaLbContent').innerHTML =
      `<img src="${p.src}" alt="${p.caption}" style="max-width:90vw;max-height:75vh;border-radius:10px;object-fit:contain;" />`;
    document.getElementById('mediaLbCaption').textContent = p.caption;
  };
  show();
  document.getElementById('mediaLbPrev').onclick = () => { cur = (cur - 1 + memoryPhotos.length) % memoryPhotos.length; show(); };
  document.getElementById('mediaLbNext').onclick = () => { cur = (cur + 1) % memoryPhotos.length; show(); };
  mediaLightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openUserLightbox(idx) {
  const nonYT = galleryItems.filter(i => !i.src.startsWith('https://www.youtube.com/embed'));
  let cur = nonYT.findIndex((_, i) => galleryItems.indexOf(nonYT[i]) === idx);
  if (cur < 0) cur = 0;
  const show = () => {
    const item = nonYT[cur];
    const isVid = isVideo(item.src);
    document.getElementById('mediaLbContent').innerHTML = isVid
      ? `<video src="${item.src}" controls autoplay style="max-width:90vw;max-height:75vh;border-radius:10px;"></video>`
      : `<img src="${item.src}" alt="${item.caption||''}" style="max-width:90vw;max-height:75vh;border-radius:10px;object-fit:contain;" />`;
    document.getElementById('mediaLbCaption').textContent = item.caption || '';
  };
  show();
  document.getElementById('mediaLbPrev').onclick = () => { cur = (cur - 1 + nonYT.length) % nonYT.length; show(); };
  document.getElementById('mediaLbNext').onclick = () => { cur = (cur + 1) % nonYT.length; show(); };
  mediaLightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMediaLightbox() {
  mediaLightbox.classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('mediaLbContent').innerHTML = '';
}
