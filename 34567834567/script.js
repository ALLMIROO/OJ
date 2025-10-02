document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.tabs button');
  const bloki = document.querySelectorAll('.zakladka');

  function pokaz(index) {
    bloki.forEach((b, i) => b.hidden = i !== index);
    buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
  }

  buttons.forEach((btn, i) => btn.addEventListener('click', () => pokaz(i)));
  pokaz(0); 

  const pasek = document.getElementById('pasek');
  let procent = 4;
  const KROK = 12;

  const ustaw = p => {
    procent = Math.min(100, Math.max(0, p));
    pasek.style.width = procent + '%';
  };
  ustaw(procent);

  const inputs = document.querySelectorAll('.main input');
  const uzupelnione = new WeakSet();

  window.zwiekszPostep = function (el) {
    if (!el) return;

    let wpisane = false;
    if (el.type === 'checkbox') {
      wpisane = el.checked;
    } else {
      wpisane = el.value.trim() !== '';
    }

    if (wpisane && !uzupelnione.has(el)) {
      uzupelnione.add(el);
      ustaw(procent + KROK);
    }
  };

  window.zatwierdz = function () {
    const imie      = document.querySelectorAll('#blok1 input[type="text"]')[0]?.value || '';
    const nazwisko  = document.querySelectorAll('#blok1 input[type="text"]')[1]?.value || '';
    const dataUr    = document.querySelector('#blok1 input[type="date"]')?.value || '';
    const ulica     = document.querySelectorAll('#blok2 input[type="text"]')[0]?.value || '';
    const numer     = document.querySelector('#blok2 input[type="number"]')?.value || '';
    const miasto    = document.querySelectorAll('#blok2 input[type="text"]')[1]?.value || '';
    const telefon   = document.querySelector('#blok3 input[type="tel"]')?.value || '';
    const rodo      = document.querySelector('#blok3 input[type="checkbox"]')?.checked || false;

    console.clear();
    console.log('--- Dane klienta ---');
    console.log('Imię:', imie);
    console.log('Nazwisko:', nazwisko);
    console.log('Data urodzenia:', dataUr);
    console.log('Ulica:', ulica);
    console.log('Numer:', numer);
    console.log('Miasto:', miasto);
    console.log('Numer komórkowy:', telefon);
    console.log('Akceptuję RODO:', rodo ? 'TAK' : 'NIE');
  };
});