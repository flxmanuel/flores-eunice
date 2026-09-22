# Flores para Eunice 💛

Un regalo para el 21 de septiembre. HTML, CSS, JavaScript y flores originales en SVG, sin frameworks, instalaciones ni servicios externos. Funciona aunque no agregues la canción.

## 1. Abrir en Visual Studio Code

Abre **Archivo → Abrir carpeta** y selecciona `flores-eunice`. Edita los archivos de esa carpeta; no hace falta compilar ni usar npm.

```text
flores-eunice/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── audio/
    │   └── die-for-you.mp3  ← canción proporcionada por ti
    └── images/
```

## 2. Ver con Live Server

En Extensiones de VS Code, instala **Live Server**, de Ritwick Dey. Haz clic derecho sobre `index.html` → **Open with Live Server**. Guarda los cambios para verlos actualizados. También puedes abrir `index.html` directamente con tu navegador, aunque se recomienda Live Server para probar todo.

## 3. Agregar la música

Coloca tu copia obtenida legalmente de “Die For You” de The Weeknd en `assets/audio/`. El nombre exacto debe ser **`die-for-you.mp3`**, en minúsculas. Esta versión incluye el archivo de audio que proporcionaste; no se descargó ninguna canción.

La música empieza exclusivamente al tocar **Comenzar**. Si el archivo falta o falla, el recorrido continúa en silencio y sus controles se ocultan. La consola de desarrollo puede registrar un 404 por el archivo ausente; no aparece ningún error en la página. Al cambiar de aplicación, la música se pausa; al volver intenta reanudarse. Si el navegador lo impide, toca el control de reproducción.

En Android y escritorio hay reproducción, pausa, silencio y volumen. En iPhone/iPad, el volumen se ajusta con los botones del teléfono; el control deslizante se oculta y permanecen pausa/reanudación y silencio.

## 4. Cambiar los textos

Edita los textos en `index.html`. Las secciones tienen identificadores: `welcome`, `garden`, `message`, `bouquet`, `letter-section` y `final`. Conserva los identificadores, los atributos de los botones y las referencias a CSS/JS para no romper las interacciones.

## 5. Cambiar las flores y colores

En `script.js`, la función `floralSVG()` dibuja las flores. `flower(x, y, size, type, angle, delay)` controla posición, tamaño, tipo (`gerbera` o `lily`), giro y demora. Los degradados al inicio de esa función definen los colores de pétalos y hojas. Los dibujos son propios del proyecto y no requieren imágenes externas. El bloque `arrangement === 'bouquet'` contiene la envoltura champán, las flores de relleno y el lazo del ramo inspirado en la referencia. `spawnParticle()` dibuja las flores y pétalos pequeños que caen.

En `style.css`, `:root` contiene la paleta principal. Los tamaños están en `.intro-flower`, `.garden-flowers` y `.bouquet`. Puedes guardar futuras imágenes en `assets/images/` y enlazarlas usando rutas relativas.

## 6. Probar desde el celular

Conecta el teléfono y la computadora a la misma red Wi-Fi. Con Live Server funcionando, busca la IP local de la computadora en sus ajustes de red y abre, por ejemplo, `http://192.168.1.20:5500` desde el teléfono (reemplaza IP y puerto por los tuyos). Si no conecta, comprueba que Live Server acepte conexiones de la red local y que el firewall permita esa conexión. No hace falta configurar el router ni abrir puertos a Internet.

Revisa Safari en iPhone y Chrome en el Android de Eunice: bienvenida, Comenzar, crecimiento de flores, texto, desplazamiento, carta, sorpresa y música. Prueba tanto vertical como horizontal. También puedes usar las herramientas de desarrollo del navegador para tamaños 390×844, 393×852, 430×932 y 360×800. La simulación no sustituye una comprobación en teléfonos reales.

La página respeta las áreas seguras, el tamaño de letra y **Reducir movimiento**. Los mensajes permanecen para leer sin prisa. El recorrido muestra una escena a la vez con fundido suave y botones para continuar. No hay avances automáticos. El botón Volver permite regresar sin perder la carta abierta ni interrumpir la canción. En pantallas pequeñas se puede desplazar el contenido de la escena para leerlo completo. Con movimiento reducido el cambio es inmediato. La carta se abre tocando su botón y el cierre aparece después.

## 7. Publicar más adelante en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `flores-eunice`.
2. Sube el contenido de esta carpeta: `index.html` debe quedar en la raíz del repositorio, junto a `style.css`, `script.js`, `README.md` y `assets/`.
3. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main`, carpeta `/(root)`, y guarda.
4. Cuando GitHub termine, abre el enlace que aparece en esa sección. La URL suele ser `https://TU-USUARIO.github.io/flores-eunice/`.
5. Comprueba el enlace en el Android de Eunice antes de enviárselo.

Todas las rutas del proyecto son relativas. La publicación es un paso posterior; este proyecto no se ha subido a Internet. Incluye música en un sitio público únicamente si tienes los derechos necesarios para compartir ese archivo.

## Rendimiento y mantenimiento

Sin fuentes externas ni librerías. El ramo principal utiliza una imagen WebP optimizada con carga diferida. Las animaciones usan principalmente transform y opacity. Los pétalos están limitados y se eliminan al terminar; su generación se detiene cuando sales de las secciones o cambias de pestaña. El efecto final también está limitado. La configuración de movimiento reducido desactiva las animaciones decorativas.

## Comprobaciones realizadas

Se revisó la sintaxis de JavaScript, las rutas locales y el recorrido en el navegador: inicio sin canción, apertura de carta y sorpresa final. Con un audio temporal de prueba se comprobó reproducción, pausa, reanudación, silencio y el control de volumen; ese audio se retiró del proyecto final.

Se comprobó que no hubiera desbordamiento horizontal en 390×844, 393×852, 430×932, 360×800, 412×915, 844×390 y 1440×900. No se observaron errores de ejecución en el recorrido probado. Estas pruebas de dimensiones no equivalen a ejecutar Safari en un iPhone ni Chrome en un Android real: esa comprobación en teléfonos reales queda pendiente.

## Ramo realista

La sección «Para mi niña» utiliza `assets/images/ramo-realista.webp`. Para cambiarla, reemplaza esa imagen y conserva la ruta en `index.html`. Las flores de bienvenida, crecimiento y partículas siguen siendo SVG para mantener sus animaciones ligeras.

Imagen creada con la herramienta integrada de generación de imágenes. Prompt: ramo botánico realista de gerberas y lirios amarillos, pequeñas flores blancas, follaje natural, envoltura champán satinada y lazo dorado; pétalos detallados, luz cálida suave, composición vertical completa sin texto.
