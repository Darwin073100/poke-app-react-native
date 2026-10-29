# PokeApp

Aplicación móvil de ejemplo creada con React Native y Expo. Muestra un catálogo inicial de Pokémon y permite abrir una vista de detalle a partir de cada elemento. La interfaz está en español y utiliza Expo Router para la navegación.

## Funcionalidades

- Lista los primeros 10 Pokémon obtenidos desde [PokeAPI](https://pokeapi.co/).
- Muestra el sprite y el nombre de cada Pokémon, con una animación de entrada.
- Abre una pantalla de detalle con el sprite, el nombre y un efecto de habilidad cuando la respuesta de la API lo incluye.
- Incluye navegación por pestañas para Inicio y Acerca de.

> La pantalla de detalle consulta actualmente `/ability/{id}` en PokeAPI. Por eso presenta información de habilidad asociada al identificador de la ruta, no una ficha completa obtenida desde el endpoint `/pokemon/{id}`.

## Tecnologías

- React Native 0.88 y React 19
- Expo SDK 58
- Expo Router
- NativeWind y Tailwind CSS
- PokeAPI para los datos y sprites

## Requisitos

- Node.js
- pnpm
- Expo Go para probar en un dispositivo compatible, o un emulador para Android/iOS

## Instalación y ejecución

Instala las dependencias desde la raíz del proyecto:

```bash
pnpm install
```

Inicia Expo:

```bash
pnpm start
```

También puedes iniciar directamente en una plataforma:

```bash
pnpm android
pnpm ios
pnpm web
```

Para revisar el código con ESLint:

```bash
pnpm lint
```

La aplicación necesita conexión a internet para cargar datos e imágenes desde PokeAPI.

## Estructura principal

```text
app/
  _layout.jsx        Layout raíz y cabecera
  [id].jsx           Vista de detalle
  (tabs)/
    _layout.jsx      Navegación por pestañas
    index.jsx        Pantalla de inicio
    about.jsx        Pantalla Acerca de
components/
  Main.jsx           Carga y presenta la lista
  PokemonCard.jsx   Tarjeta y animación de entrada
  Screen.jsx        Contenedor común de pantalla
  Icons.jsx         Iconos de navegación
```