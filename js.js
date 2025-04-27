const generateKeyBtn = document.getElementById('generateKeyBtn');
const generatedKey = document.getElementById('generatedKey');
const loginBtn = document.getElementById('loginBtn');
const keyInput = document.getElementById('keyInput');
const loginMessage = document.getElementById('loginMessage');
const privateGames = document.getElementById('private-games');

const validKeys = [
  '12345-ABCDE', '67890-FGHIJ', '11111-KLMNO',
  '22222-PQRST', '33333-UVWXY', '44444-ZABCD',
  '55555-EFGHI', '66666-JKLMN', '77777-OPQRS', '88888-TUVWX'
];

// Générer une clé aléatoire
generateKeyBtn.addEventListener('click', function () {
  const randomKey = validKeys[Math.floor(Math.random() * validKeys.length)];
  generatedKey.classList.remove('hidden');
  generatedKey.textContent = 'Voici votre clé : ' + randomKey;
});

// Vérifier la clé à la connexion
loginBtn.addEventListener('click', function () {
  const enteredKey = keyInput.value.trim();
  if (validKeys.includes(enteredKey)) {
    loginMessage.textContent = 'Connexion réussie ! 🎮 Bienvenue dans la zone privée.';
    loginMessage.style.color = 'lime';
    privateGames.classList.remove('hidden');
  } else {
    loginMessage.textContent = 'Clé incorrecte. Veuillez réessayer.';
    loginMessage.style.color = 'red';
  }
});