// ===== CSE STUDENTS DATA (Branch Code = 5) — Real Data =====
const students = [
  { id: 1,  name: "ABHISHEK AKASH SURAWAR",      hallTicket: "22PT1A0501", phone: "8406184061", email: "—" },
  { id: 2,  name: "AMBALLA VAMSHI",              hallTicket: "22PT1A0502", phone: "9573216722", email: "—" },
  { id: 3,  name: "ANGOTHU MANJULA",             hallTicket: "22PT1A0503", phone: "9391890913", email: "—" },
  { id: 4,  name: "NAMBURI AKHIL SAI",           hallTicket: "22PT1A0504", phone: "8106198713", email: "namburiakhilsai@gmail.com" },
  { id: 5,  name: "ATIKAM YOGESHWAR GOUD",       hallTicket: "22PT1A0505", phone: "7386671925", email: "weaponalone@gmail.com" },
  { id: 6,  name: "B ANJANEYULU",                hallTicket: "22PT1A0506", phone: "8688772983", email: "rowdyaj40@gmail.com" },
  { id: 7,  name: "BATTU SRIKANTH",              hallTicket: "22PT1A0507", phone: "7731862470", email: "Srikanthbattu664@gmail.com" },
  { id: 8,  name: "CHATHARABOINA SHRAVAN KUMAR", hallTicket: "22PT1A0508", phone: "6304762209", email: "sravankumarmudhi rajsk2347@gmail.com" },
  { id: 9,  name: "EETE KRISHNA",                hallTicket: "22PT1A0509", phone: "7995202434", email: "Kk2899369@gmail.com" },
  { id: 10, name: "EROLL AMBIKA",                hallTicket: "22PT1A0510", phone: "8978315671", email: "pavankalyanpowar6713@gmail.com" },
  { id: 11, name: "ESLAVATH SAIKUMAR",           hallTicket: "22PT1A0511", phone: "7569674146", email: "eslavathsaikumar191@gmail.com" },
  { id: 12, name: "GOVDA THANMAI SRI",           hallTicket: "22PT1A0512", phone: "9059795459", email: "gtsri09@gmail.com" },
  { id: 13, name: "GUDURU SRIRAM",               hallTicket: "22PT1A0513", phone: "9182890017", email: "sriramraju818@gmail.com" },
  { id: 14, name: "JULAKANTI LAXMI SATHVIK REDDY", hallTicket: "22PT1A0514", phone: "7995492103", email: "sathvikreddy175@gmail.com" },
  { id: 15, name: "KAILA POOJITHA RANI",         hallTicket: "22PT1A0515", phone: "6304256940", email: "poojithapooji940@gmail.com" },
  { id: 16, name: "KAMA ABHIGNYA",               hallTicket: "22PT1A0516", phone: "9381364351", email: "abhignyakama5@gmail.com" },
  { id: 17, name: "KANDULA SUMANTH KUMAR RAJA",  hallTicket: "22PT1A0517", phone: "8466925549", email: "k.sumanthkumarraja9@gmail.com" },
  { id: 18, name: "KATLA MANISH",                hallTicket: "22PT1A0518", phone: "9492037596", email: "Manishkatla413@gmail.com" },
  { id: 19, name: "KATTEKOLA LOKESH",            hallTicket: "22PT1A0519", phone: "9440837843", email: "lokesh.k0705@gmail.com" },
  { id: 20, name: "KOMATISHETTY PRATHYUSHA",     hallTicket: "22PT1A0520", phone: "8074779082", email: "Kkprathyusha2004@gmail.com" },
  { id: 21, name: "KOMMU MADHU",                 hallTicket: "22PT1A0521", phone: "9676401903", email: "Kommumadhu10@gmail.com" },
  { id: 22, name: "KOPPISETTY SRI SAI VENKAT",   hallTicket: "22PT1A0522", phone: "9705606344", email: "1016venkat@gmail.com" },
  { id: 23, name: "MANUBOLU AKHILA",             hallTicket: "22PT1A0523", phone: "7032343031", email: "manuboluakhila@gmail.com" },
  { id: 24, name: "NALLA SAI TEJASHWINI",        hallTicket: "22PT1A0524", phone: "9441151789", email: "abr2943@gmail.com" },
  { id: 25, name: "NARRA RAMANA REDDY",          hallTicket: "22PT1A0525", phone: "9398359035", email: "narraramana750@gmail.com" },
  { id: 26, name: "NIRUDI BHAVANI",              hallTicket: "22PT1A0527", phone: "9963593137", email: "bhavaninirudi2004@gmail.com" },
  { id: 27, name: "PASUPULETI TEJASWINI",        hallTicket: "22PT1A0528", phone: "8978660281", email: "paspuletitejaswini@gmail.com" },
  { id: 28, name: "PATNALA BHARATH KUMAR",       hallTicket: "22PT1A0529", phone: "9848837098", email: "bharathpatnala24@gmail.com" },
  { id: 29, name: "PILAGALA KRISHNA KISHORE",    hallTicket: "22PT1A0530", phone: "9346749646", email: "pilagalakrishnakishore@gmail.com" },
  { id: 30, name: "PONGURU BHANU PRAKASH REDDY", hallTicket: "22PT1A0531", phone: "6300501630", email: "pongurubhanuprakashreddy@gmail.com" },
  { id: 31, name: "RASALA VENU",                 hallTicket: "22PT1A0532", phone: "8008477726", email: "Venurasala@gmail.com" },
  { id: 32, name: "SINGAPURAM JAYASREE",         hallTicket: "22PT1A0533", phone: "9347961207", email: "jayasreereddy068@gmail.com" },
  { id: 33, name: "SOULE VEENA BAI",             hallTicket: "22PT1A0534", phone: "9989551117", email: "veenasoule@gmail.com" },
  { id: 34, name: "THUMU SOWMYA",                hallTicket: "22PT1A0535", phone: "8985256918", email: "thumusowmya2@gmail.com" },
  { id: 35, name: "VANGALA VISHWAK",             hallTicket: "22PT1A0536", phone: "7671868421", email: "vangalavishwak@gmail.com" },
  { id: 36, name: "YAKALA ANJALI",               hallTicket: "22PT1A0537", phone: "9966800907", email: "anjaliyakala6@gmail.com" },
  { id: 37, name: "BANTU KAVYA BHAVANI",         hallTicket: "22PT1A0538", phone: "9666744405", email: "Kavyabhavani071@gmail.com" },
  { id: 38, name: "BASANI GANESH",               hallTicket: "22PT1A0539", phone: "7386895943", email: "ganeshbasani43@gmail.com" },
  { id: 39, name: "DAYAPA PREETHI",              hallTicket: "22PT1A0540", phone: "7386817608", email: "dpreethi350@gmail.com" },
  { id: 40, name: "J SNEHA",                     hallTicket: "22PT1A0541", phone: "8639633832", email: "snehareddy8639@gmail.com" },
  { id: 41, name: "K HARSHAVARDHAN REDDY",       hallTicket: "22PT1A0542", phone: "8520092541", email: "Reddykotla467@gmail.com" },
  { id: 42, name: "MANKENA YAMINI",              hallTicket: "22PT1A0543", phone: "9347810072", email: "Myamini149@gmail.com" },
  { id: 43, name: "PODUMALA VAMSHI",             hallTicket: "22PT1A0544", phone: "8328461967", email: "podumalavamshi@gmail.com" },
  { id: 44, name: "SAYYED AFROZ PASHA",          hallTicket: "22PT1A0545", phone: "9392763199", email: "sdafrozpasha@gmail.com" },
  { id: 45, name: "SILIGI REDDY DEEKSHITHA",     hallTicket: "22PT1A0546", phone: "9391553846", email: "darveshreddy4699@gmail.com" },
  { id: 46, name: "BARI GANESH",                 hallTicket: "22PT1A0547", phone: "8374365950", email: "bariganeshyadav@gmail.com" },
  { id: 47, name: "BATTU WAR SURYAN",            hallTicket: "22PT1A0548", phone: "8919549387", email: "suryanbattuwar946@gmail.com" },
  { id: 48, name: "BETAMSETTY ESWAR",            hallTicket: "22PT1A0549", phone: "7288955798", email: "eswarnaidupspk82@gmail.com" },
  { id: 49, name: "BIRUDU SOUMYA",               hallTicket: "22PT1A0550", phone: "7670914669", email: "Soumyabirudu@gmail.com" },
  { id: 50, name: "CHINTHAKUNTLA AKHILA",        hallTicket: "22PT1A0551", phone: "9014121928", email: "akhilachinthakuntlaakhi@gmail.com" },
  { id: 51, name: "DALLI RAMYA",                 hallTicket: "22PT1A0552", phone: "8555843898", email: "dalliramya83@gmail.com" },
  { id: 52, name: "KADARI MANOJ",                hallTicket: "22PT1A0553", phone: "6300273067", email: "asraexambranch@gmail.com" },
  { id: 53, name: "KONDA BHARATH",               hallTicket: "22PT1A0554", phone: "9391094600", email: "kondabharath81@gmail.com" },
  { id: 54, name: "MUNUKURI VENKATA NARAYANA",   hallTicket: "22PT1A0555", phone: "9392416937", email: "venkatmunukuri110@gmail.com" },
  { id: 55, name: "PALLAPU AJAY",                hallTicket: "22PT1A0556", phone: "9951932005", email: "ajayk274412@gmail.com" },
  { id: 56, name: "PARSAGANI KAVYA",             hallTicket: "22PT1A0557", phone: "7075371157", email: "Parasaganikavya@email.com" },
  { id: 57, name: "PATHAN SAMEERKHAN IBRAHIM",   hallTicket: "22PT1A0558", phone: "9158243331", email: "asraexambranch@gmail.com" },
  { id: 58, name: "REDDYPALLI NIKHIL",           hallTicket: "22PT1A0560", phone: "9398215032", email: "reddypallinikhil@gmail.com" },
  { id: 59, name: "SALINA BEHRA",                hallTicket: "22PT1A0561", phone: "7671290251", email: "salinabehra580@gmail.com" },
  { id: 60, name: "SELVA AKSHITHA",              hallTicket: "22PT1A0562", phone: "9059988271", email: "akshithaselva226@gmail.com" },
  { id: 61, name: "SIKKAKOLLA SAIRAHUL",         hallTicket: "22PT1A0563", phone: "9346433895", email: "Rahulsikkakolla@gmail.com" }
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
