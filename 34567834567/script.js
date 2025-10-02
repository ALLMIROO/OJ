document.addEventListener('DOMContentLoaded', () => {
  // --- zakładki ---
  const buttons = document.querySelectorAll('.tabs button');
  const bloki = document.querySelectorAll('.zakladka');

  function pokaz(index) {
    bloki.forEach((b, i) => b.hidden = i !== index);
    // (opcjonalnie) wizualna aktywność przycisków
    buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
  }

  buttons.forEach((btn, i) => btn.addEventListener('click', () => pokaz(i)));
  pokaz(0); // start: Klient

  // --- pasek postępu ---
  const pasek = document.getElementById('pasek');
  let procent = 4;               // start jak w CSS
  const KROK = 12;

  const ustaw = p => {
    procent = Math.min(100, Math.max(0, p)); // clamp 0..100
    pasek.style.width = procent + '%';
  };
  ustaw(procent);

  // --- funkcja wywoływana z onblur w HTML ---
  // Każda utrata focusa = +12% (upraszczamy zgodnie z założeniem)
  window.zwiekszPostep = function () {
    ustaw(procent + KROK);
  };

  // --- funkcja „Zatwierdź dane” wywoływana z onclick w HTML ---
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
