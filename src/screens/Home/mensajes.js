// ● Mensajes para fechas concretas (MM‑DD)
export const mensajesEspeciales = {
    '07-14': [
        'WOW un año más juntos',
        '¡Feliz 14 de julio! Un día especial para nosotros.',
    ],
    '12-02': [
        '¡Feliz cumpleaños! Hoy celebramos tu vida.',
        'Hoy es un día especial porque celebramos tu cumpleaños.',
    ],
    '12-25': [
        '¡Feliz Navidad! Que la alegría y el amor te rodeen.',
        'Hoy celebramos la Navidad, un día lleno de amor y alegría.',
    ],
};

// ● Mensajes secretos por interacción
export const mensajesSecretos = {
    lottie: [
        'Hola mi amor, Has descubierto mis mensajes secretos.',
        'Sabes que te amo mucho, ¿verdad?',
        '¡Sorpresa! Esto es solo para ti mi amor.',
        'Gracias por ser parte de mi vida.',
        'Si estás leyendo esto, significa que me amas mucho.',
        'Intenta presionar la ranita para otra sorpresa.',
    ],
    clics: [
        '¡Felicidades! Has presionado {n} veces... ¡Eres increíble!',
        'Waaaaaa ¡{n} toques! Eso sí que es amor.',
        'Entonces me amas {n} veces :3',
        'Acabas de pensar en mí {n} veces, ¡qué lindo!',
        '¡Wow! Has hecho {n} clics, ¡me haces muy feliz!',
    ],
    presionaRanita: [
        'Hiciste clic en la ranita, ¡qué lindo!',
        'No es la unica sorpresa que tengo para ti.',
        'Manten presionada la ranita para más sorpresas.',
    ],
};

// ● Mensajes “normales” (uso diario)
export const mensajesNormales = [
    'Gracias por ser parte de mi vida',
    'Me gusta verte feliz',
    'Eres una persona increíble',
    'Hoy es un excelente día para estar juntos',
    'Siempre me haces sonreír',
    'Eres la unica persona que quiero en mi vida',
    'Yo también te extraño',
    'Tengo hambre, ¿te puedo comer?',
    'Eres la mejor persona del mundo',
    'Nunca te rindas de mí',
    'Eres hermosa',
    '¿Ya te dije que te amo mucho?',
    'Te amo mucho',
    'Siempre estaré aquí para ti, nunca te rindas de mí.',
];

//------------------------------------------------------------
// Funciones utilitarias
//------------------------------------------------------------

/**
 * Devuelve un mensaje según la fecha.
 *   – Si hay mensajesEspeciales para la fecha actual ⇒ selecciona uno al azar.
 *   – En caso contrario ⇒ devuelve uno de mensajesNormales.
 */
export function obtenerMensaje(fecha = new Date()) {
    const mm = String(fecha.getMonth() + 1).padStart(2, '0');
    const dd = String(fecha.getDate()).padStart(2, '0');
    const clave = `${mm}-${dd}`;

    const lista = mensajesEspeciales[clave] ?? mensajesNormales;
    const idx = Math.floor(Math.random() * lista.length);
    return lista[idx];
}

/**
 * Devuelve un mensaje secreto según la `clave` definida.
 * Si la clave no existe o la lista está vacía ⇒ devuelve un placeholder.
 */
export function obtenerMensajeSecreto(clave) {
    const lista = mensajesSecretos[clave] || [];
    if (!lista.length) return '✨ Secreto sin definir ✨';

    const idx = Math.floor(Math.random() * lista.length);
    return lista[idx];
}