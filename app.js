const data = [
  {
    name: 'Ryan.S',
    desc: 'Reknown inspirational speaker',
    image: './assets/Ryan.png',
    alt: 'Image of speake 1',
    brief: 'Best seller - New York Times',
  },
  {
    name: 'Peniah.B',
    desc: 'Reknown inspirational speaker',
    image: './assets/Peniah.jpg',
    alt: 'Image of speake 2',
    brief: 'Best seller - New York Times',
  },
  {
    name: 'Lila.R',
    desc: 'Reknown inspirational speaker',
    image: './assets/Lila.png',
    alt: 'Image of speake 3',
    brief: 'Best seller - New York Times',
  },
  {
    name: 'Yochai.K',
    desc: 'Reknown inspirational speaker',
    image: './assets/Yochai.png',
    alt: 'Image of speake 4',
    brief: 'Best seller - New York Times',
  },
  {
    name: 'SohYeong Noh',
    desc: 'Reknown inspirational speaker',
    image: './assets/SohYeong Noh.png',
    alt: 'Image of speake 5',
    brief: 'Best seller - New York Times',
  },
  {
    name: 'Kilnam.S',
    desc: 'Reknown inspirational speaker',
    image: './assets/Kilnam.png',
    alt: 'Image of speake 6',
    brief: 'Best seller - New York Times',
  },
];

const openBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const speakerWrap = document.querySelector('.speaker-wrap');
const loadSpeakersBtn = document.querySelector('.speaker-btn');

//  LoadSpeakers
function loadSpeakers() {
  for (let i = 0; i < data.length; i += 1) {
    if (i < 2) {
      speakerWrap.innerHTML += `
      <div class="speakers">
        <img src="${data[i].image}" alt="${data[i].alt}"/>
        <div class="speaker">
          <h5>${data[i].name}</h5>
          <p class="first-p">
            ${data[i].desc}
          </p>
          <hr class="line2">
          <p class="second-p">
            ${data[i].brief}
          </p>
        </div>
      </div>
      `;
    } else if (i > 1 && i < data.length) {
      speakerWrap.innerHTML += `
      <div class="extra-speaker">
        <img src="${data[i].image}" alt="${data[i].alt}"/>
        <div class="speaker">
          <h5>${data[i].name}</h5>
          <p class="first-p">
            ${data[i].desc}
          </p>
          <hr class="line2">
          <p class="second-p">
            ${data[i].brief}
          </p>
        </div>
      </div>
      `;
    }
  }
}

window.addEventListener('load', () => {
  loadSpeakers();
  const extraSpeakers = document.querySelectorAll('.extra-speaker');
  loadSpeakersBtn.addEventListener('click', () => {
    if (loadSpeakersBtn.classList.contains('more')) {
      loadSpeakersBtn.textContent = 'MORE';
      extraSpeakers.forEach((item) => {
        item.style.display = 'none';
      });
      loadSpeakersBtn.classList.remove('more');
    } else {
      loadSpeakersBtn.classList.add('more');
      loadSpeakersBtn.textContent = 'LESS';
      extraSpeakers.forEach((item) => {
        item.style.display = 'flex';
      });
    }
  });
});

openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-menu');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-menu');
});
