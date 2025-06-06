# 💖 Feliz 14 

Una aplicación romántica desarrollada especialmente para mi enamorada. Este proyecto está construido con **React Native** utilizando el framework **Expo**, combinando tecnología con cariño.

**Feliz 14** es una aplicación personalizada que busca cumplir con los requerimientos especiales de mi pareja, al mismo tiempo que sirve como práctica y crecimiento en el desarrollo móvil.

## 👤 Autor

- **ValXux / Valentin Fernandez**

## 🚀 Tecnologías

- React Native
- Expo
- JavaScript

## ✨ Funcionalidades

| Módulo | Descripción |
|--------|-------------|
| **Reproducción aleatoria de música** | Al iniciar la app suena una pista al azar. Desde **Music** puedes pausar, reproducir otra aleatoria o elegir manualmente de la playlist. |
| **Board (Pizarra)** | Lienzo táctil donde tu pareja puede dibujar o colorear. Incluye selector de color y grosor de pincel. |
| **Ajustes** | Botón fijo (⚙️) accesible desde todas las pantallas.<br>Permite: <br>• Cambiar el color de fondo (temas predefinidos o pick RGB/HEX).<br>• Personalizar los iconos de **Home** y **Board**. |
| **Persistencia** | La última canción reproducida, el tema elegido y los iconos personalizados se guardan con `AsyncStorage`, de modo que la experiencia se mantiene entre sesiones. |

## 🎮 Guía rápida de uso

1. **Inicia la app** → Se reproducirá automáticamente una canción aleatoria.  
2. **Cambiar música**  
   - Toca el icono ♪ en la barra inferior.  
   - Pulsa **Play** en la pista que quieras o deja que vuelva a sonar aleatoriamente.  
3. **Personalizar look & feel**  
   - Presiona siempre el botón ⚙️.  
   - Selecciona un tema de color o configura uno propio.  
   - Elige un nuevo icono para cambiar la rana en **Home**, se actualizarán al instante.  
4. **Dibujar o colorear**  
   - Ve a **Board** (icono de la pizarra).  
   - Usa los controles para seleccionar color y grosor, dibuja libremente.  
   - Guarda tu obra en la galería del dispositivo o compártela por WhatsApp con un toque.  

> **Tip:** todas las preferencias se guardan automáticamente; si cierras la app, la música, el tema y los iconos personalizados permanecerán igual la próxima vez que la abras.

## 📁 Estructura del proyecto

```text
my-romantic-app/
├── assets/                         # Recursos globales
│   ├── audio/                      # Canciones de la playlist
│   ├── icons/                      # Íconos personalizados
│   ├── images/                     # Ilustraciones, fondos, etc.
│   └── fonts/                      # Tipografías si las usas
│
├── src/                            # Código fuente principal
│   ├── navigation/                 # Navegación (React Navigation)
│   │   ├── AppNavigator.js         # Contenedor raíz
│   │   ├── BottomTabs.js           # Tabs: Music · Home · Board
│   │   └── index.js                # Barrel export
│   │
│   ├── screens/                    # Pantallas agrupadas por feature
│   │   ├── Home/
│   │   │   ├── HomeScreen.js
│   │   │   └── styles.js
│   │   ├── Music/
│   │   │   ├── MusicScreen.js
│   │   │   ├── PlaylistList.js
│   │   │   └── styles.js
│   │   ├── Board/
│   │   │   ├── BoardScreen.js
│   │   │   ├── ColorCanvas.js
│   │   │   ├── DrawingCanvas.js
│   │   │   └── styles.js
│   │   └── Settings/
│   │       ├── SettingsModal.js
│   │       └── styles.js
│   │
│   ├── components/                 # UI reutilizable
│   │   ├── common/                 # Botones, modales…
│   │   ├── music/                  # SongItem, ProgressBar
│   │   └── board/                  # ColorPicker, BrushSizeSlider
│   │
│   ├── hooks/                      # Lógica compartida
│   │   ├── useAudioPlayer.js
│   │   ├── usePersistentState.js
│   │   └── useTheme.js
│   │
│   ├── context/                    # Context API global
│   │   ├── ThemeContext.js
│   │   └── PlayerContext.js
│   │
│   ├── services/                   # Acceso a datos / almacenamiento
│   │   ├── storage.js              # Helpers AsyncStorage
│   │   └── musicService.js         # Cargar playlist, shuffle…
│   │
│   ├── utils/                      # Helpers puros y constantes
│   │   ├── constants.js
│   │   └── colors.js
│   │
│   └── index.js                    # Barrel global (opcional)
│
├── .expo/                          # Configuración interna de Expo
├── .gitignore
├── App.js                          # Enlaza a AppNavigator
├── app.json                        # Config de Expo (nombre, íconos, splash)
├── package.json
└── README.md