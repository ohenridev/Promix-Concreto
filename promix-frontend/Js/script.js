const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navbar');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('active', open);
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('.header')) setMenu(false); });
window.matchMedia('(min-width: 801px)').addEventListener('change', () => setMenu(false));

// Compose a message locally. The visitor reviews and sends it in WhatsApp.
const quoteForm = document.querySelector('.quote-form');
quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(quoteForm);
  const message = ['Olá! Gostaria de um orçamento de concreto.'];
  const location = fields.get('local').trim();
  const volume = fields.get('volume');
  const date = fields.get('data');
  if (location) message.push(`Local da obra: ${location}`);
  if (volume) message.push(`Volume estimado: ${volume} m³`);
  if (date) message.push(`Data desejada: ${date.split('-').reverse().join('/')}`);
  message.push(`Bombeamento: ${fields.get('bombeamento')}`);
  const url = new URL('https://api.whatsapp.com/send/');
  url.searchParams.set('phone', fields.get('phone'));
  url.searchParams.set('text', message.join('\n'));
  window.location.assign(url.href);
});
