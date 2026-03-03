const bookingForm = document.getElementById('booking-form');
const whatsappNumber = '33630913932';

const dateField = bookingForm?.querySelector('input[name="date"]');
if (dateField) {
  dateField.min = new Date().toISOString().split('T')[0];
}

function buildMessage(formData) {
  const nom = formData.get('nom') || '';
  const prenom = formData.get('prenom') || '';
  const telephone = formData.get('telephone') || '';
  const type = formData.get('transportType') || '';
  const depart = formData.get('depart') || '';
  const arrivee = formData.get('arrivee') || '';
  const date = formData.get('date') || '';
  const heure = formData.get('heure') || '';
  const message = formData.get('message') || '';

  return [
    'Bonjour, je souhaite réserver un trajet.',
    `Nom : ${nom}`,
    `Prénom : ${prenom}`,
    `Téléphone : ${telephone}`,
    `Type de transport : ${type}`,
    `Adresse départ : ${depart}`,
    `Adresse arrivée : ${arrivee}`,
    `Date : ${date}`,
    `Heure : ${heure}`,
    message ? `Message complémentaire : ${message}` : 'Message complémentaire : (non précisé)'
  ].join('\n');
}

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const text = encodeURIComponent(buildMessage(formData));
  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
