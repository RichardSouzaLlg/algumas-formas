
const phrases = [
  "Eu te amo ❤️ (Português)",
  "I love you ❤️ (Inglês)",
  "Te amo ❤️ (Espanhol)",
  "Je t'aime ❤️ (Francês)",
  "Ti amo ❤️ (Italiano)",
  "Ich liebe dich ❤️ (Alemão)",
  "愛してる ❤️ (Japonês)",
  "사랑해 ❤️ (Coreano)",
  "我爱你 ❤️ (Chinês)",
  "Я тебя люблю ❤️ (Russo)",
  "أحبك ❤️ (Árabe)",
  "मैं तुमसे प्यार करता हूँ ❤️ (Hindi)",
  "Σ' αγαπώ ❤️ (Grego)",
  "Jag älskar dig ❤️ (Sueco)",
  "Ik hou van je ❤️ (Flamengo)",
  "Miluji tě ❤️ (Tcheco)",
  "Lubię cię ❤️ (Polonês)",
  "Te iubesc ❤️ (Romeno)",
  "Aşkım ❤️ (Turco)",
  "Amo-te ❤️ (Galego)",
  "Ja te volim ❤️ (Croata)",
  "Te estimo ❤️ (Catalão)",
  "Sou apaixonado por você Emilly ❤️",
  // +80 idiomas adicionais
  "Eu te amo ❤️ (Africâner)", "Eu te amo ❤️ (Albanês)", "Eu te amo ❤️ (Amárico)", "Eu te amo ❤️ (Armênio)",
  "Eu te amo ❤️ (Assamês)", "Eu te amo ❤️ (Azerbaijano)", "Eu te amo ❤️ (Basco)", "Eu te amo ❤️ (Bengali)",
  "Eu te amo ❤️ (Birmanês)", "Eu te amo ❤️ (Bósnio)", "Eu te amo ❤️ (Bretão)", "Eu te amo ❤️ (Búlgaro)",
  "Eu te amo ❤️ (Canarês)", "Eu te amo ❤️ (Cazaque)", "Eu te amo ❤️ (Cebuano)", "Eu te amo ❤️ (Chichewa)",
  "Eu te amo ❤️ (Cingalês)", "Eu te amo ❤️ (Córsico)", "Eu te amo ❤️ (Dinamarquês)", "Eu te amo ❤️ (Dzongkha)",
  "Eu te amo ❤️ (Esperanto)", "Eu te amo ❤️ (Estoniano)", "Eu te amo ❤️ (Feroês)", "Eu te amo ❤️ (Fijiano)",
  "Eu te amo ❤️ (Finlandês)", "Eu te amo ❤️ (Frísio)", "Eu te amo ❤️ (Gaélico)", "Eu te amo ❤️ (Galês)",
  "Eu te amo ❤️ (Georgiano)", "Eu te amo ❤️ (Guarani)", "Eu te amo ❤️ (Guzerate)", "Eu te amo ❤️ (Haitiano)",
  "Eu te amo ❤️ (Hauçá)", "Eu te amo ❤️ (Hebraico)", "Eu te amo ❤️ (Hmong)", "Eu te amo ❤️ (Húngaro)",
  "Eu te amo ❤️ (Igbo)", "Eu te amo ❤️ (Ilocano)", "Eu te amo ❤️ (Indonésio)", "Eu te amo ❤️ (Islandês)",
  "Eu te amo ❤️ (Javanês)", "Eu te amo ❤️ (Khmer)", "Eu te amo ❤️ (Kinyarwanda)", "Eu te amo ❤️ (Kirguiz)",
  "Eu te amo ❤️ (Lao)", "Eu te amo ❤️ (Letão)", "Eu te amo ❤️ (Lituano)", "Eu te amo ❤️ (Luxemburguês)",
  "Eu te amo ❤️ (Macedônio)", "Eu te amo ❤️ (Malaiala)", "Eu te amo ❤️ (Malgaxe)", "Eu te amo ❤️ (Maltês)",
  "Eu te amo ❤️ (Maori)", "Eu te amo ❤️ (Marata)", "Eu te amo ❤️ (Mongol)", "Eu te amo ❤️ (Nepalês)",
  "Eu te amo ❤️ (Norueguês)", "Eu te amo ❤️ (Oriá)", "Eu te amo ❤️ (Pali)", "Eu te amo ❤️ (Panjabi)",
  "Eu te amo ❤️ (Pashto)", "Eu te amo ❤️ (Quechua)", "Eu te amo ❤️ (Romanche)", "Eu te amo ❤️ (Sami)",
  "Eu te amo ❤️ (Sérvio)", "Eu te amo ❤️ (Sesoto)", "Eu te amo ❤️ (Shona)", "Eu te amo ❤️ (Sindhi)",
  "Eu te amo ❤️ (Somali)", "Eu te amo ❤️ (Sundanês)", "Eu te amo ❤️ (Suaíli)", "Eu te amo ❤️ (Tadjique)",
  "Eu te amo ❤️ (Tâmil)", "Eu te amo ❤️ (Tártaro)", "Eu te amo ❤️ (Telugo)", "Eu te amo ❤️ (Tibetano)"
];
let currentIndex = 0;
const phrasesPerClick = 4;

function verifyPassword() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();
  if (input === "tudo") {
    document.getElementById("passwordBox").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
    showNextPhrases();
  } else {
    alert("Quer apanhar emilly? acerta isso logo...");
  }
}

function showNextPhrases() {
  const container = document.getElementById("lovePhrasesContainer");
  container.innerHTML = "";

  const nextPhrases = phrases.slice(currentIndex, currentIndex + phrasesPerClick);
  nextPhrases.forEach(phrase => {
    const p = document.createElement("p");
    p.textContent = phrase;
    container.appendChild(p);
  });

  currentIndex += phrasesPerClick;

  // Verifique se todas as frases foram exibidas
  if (currentIndex >= phrases.length) {
    document.querySelector("button").disabled = true;
    document.querySelector("button").textContent = "✨ Todas mostradas!";

    // Exibe a mensagem final
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Só algumas formas de te dizer o quanto te amo ❤️";
    messageDiv.style.fontSize = "24px";
    messageDiv.style.fontWeight = "bold";
    messageDiv.style.color = "#5596fe";
    messageDiv.style.marginTop = "20px";
    document.getElementById("lovePhrasesContainer").appendChild(messageDiv);
  }
}