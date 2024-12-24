// Array con mensajes aleatorios
const messages = [
    "Eres la persona más especial que conozco. 💖",
    "Tu sonrisa ilumina todo mi mundo y lo sabes bonita 🌟",
    "Nunca olvides eres increible. 💪",
    "Eres única y valiosa, ¡gracias por ser tú! ✨",
    "El mundo es mejor porque tú estás en él abuebo q sí. 🌍",
    "Siempre recuerda: ¡Muerte a los Prietos, muejeej! ",
    "Me siento afortunado de contar siempre contigo. 🍀",
    "Tu bondad y alegría hacen de mis dias los mejores y en los streams tmb. 🌠",
    "Nunca dejes de soñar, porque te apoyare en cada uno de tus sueños 💭",
    "Cada momento contigo es un regalo que agradecere cada día. 🎁",
    "Tu sonrisa es mi motivación diaria. 😁",
    "Nunca dejes de brillar, el mundo necesita tu luz obios q zi, sino me chingo al sol. 💡",
    "Eres la razón por la que todo es más especial. 🌸",
    "Tu corazón es tan grande como mi billetera jmsjsjsj. 🌌",
    "Mi día mejora solo con pensar en ti. 🌞",
    "Hasta el infinito y más allia como dijo el wudis o no era el? XD. 🚀",
    "Tu felicidad es mi felicidad (Arriba el comunismo >:D).",
    "Eres un tesoro que nunca dejaré de cuidar. 💎 y sí ;>",
    "Val, tu presencia es todo lo que necesito para ser feliz. 🌟",
    "Val, eres mi fuente de inspiración diaria. 🌻",
    "Tu risa ilumina incluso mis días más grises yo me rio bien culero xd. ☀️",
    "Val, tu bondad me hace sentir agradecido por tu compañia todos los días. ❤️",
    "Val, cada vez que te escucho, mi corazón late más rápido. 💓",
    "El mundo es un lugar mejor gracias a ti (y por mi tmb obis jsjsj). 🌍",
    "Gracias, Val, por transformar cada uno de mis dias en una aventura especial. 🎉",
    "Siempre me haces sentir tan agusto y comodo, Val. 😊",
    "Val, nunca dejes de ser tú misma, porque eres pefecta y peshosha. ✨",
    "Mi vida es mucho más colorida desde que te conocí, Val. 🌈",
    "Val, me siento tan afortunado de tenerte a mi lado. 💕",
    "Val, tu sonrisa tiene el poder de hacer que todo sea mejor. 😄",
    "Eres un regalo maravilloso(Hadita te hizo SantaClaus jsjsj)7w7 🎁",
    "Val, no sé qué haría sin ti. Eres mi todo. 💖",
    "Gracias por ser la increíble persona conmigo Val. 🌸",
    "Val, tú eres la razón por la que mi vida tiene sentido. 💫",
    "Siempre que pienso en ti, Val, mi día mejora y más aun cuando jugamos. ",
    "Val, no puedo dejar de sonreír cuando estoy contigo. ;>",
    "Tú eres la magia en mi vida, Val. ✨",
    "No hay nada en el mundo que me haga más feliz que ver tu sonrisa Val y siempre te lo dire. ",
    "Val, me haces sentir culpable jsjsjsjs XD banditareferens. 💪",
    "Eres el mejor momento en mi dia Val. 🌈",
    "Val, contigo me siento seguro. 🙌",
    "Val, eres el sol que ilumina mi mundo. ☀️",
    "La vida es más bella desde que te conocí, Val. 🌸",
    "Val, tu cariño y tu apoyo son todo lo que necesito aunque si me pongo nervioso ;//>. ",
];

// Función para generar un mensaje aleatorio sin repetir
let usedMessages = [];

function generateMessage() {
    if (usedMessages.length === messages.length) {
        // Si todos los mensajes se han mostrado, se reinicia el uso de mensajes
        usedMessages = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (usedMessages.includes(randomIndex));

    // Guardar el índice del mensaje que ya se ha mostrado
    usedMessages.push(randomIndex);

    const messageElement = document.getElementById('message');
    messageElement.textContent = messages[randomIndex];
}



// Referencias a elementos
const letter = document.getElementById('letter');
const openButton = document.getElementById('openButton');
const card = document.getElementById('card');
const youtubePlayer = document.getElementById('youtubePlayer');  // Referencia al contenedor del iframe

// Función para abrir la carta
openButton.addEventListener('click', () => {
    openButton.classList.add('hidden'); // Oculta el botón de abrir carta
    letter.classList.add('opened');    // Agrega animación de apertura

    // Reproducir música
    youtubePlayer.style.display = 'block'; // Muestra el reproductor de música (oculto)
    
    // Asegurarse de que el video comienza a reproducirse
    const iframe = document.getElementById('video');
    iframe.src = "https://www.youtube.com/embed/qqZGQPukZ-0?autoplay=1&loop=1&playlist=qqZGQPukZ-0";  // Inicia el video solo cuando se presiona el botón

    setTimeout(() => {
        letter.style.display = 'none';
        card.classList.remove('hidden'); // Muestra la tarjeta
    }, 1000); // Espera a que termine la animación
});

