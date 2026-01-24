# 🎨 Figma Store - Frontend Challenge

Este proyecto es una recreación de la tienda de merchandising de Figma.

- **Enlace Original**: https://store.figma.com/

## Características Implementadas

### Características Principales

- **Slider Arrastrable**: Carrusel de productos con funcionalidad drag-and-drop tanto para mouse como touch
- **Efectos Hover**: Cambio de imagen al pasar el mouse sobre los productos
- **Filtrado de Contenido**: Sistema de filtros por categorías (All, Clothing, Accessories, Stickers, Pins)
- **Búsqueda Dinámica**: Barra de búsqueda desplegable

### 🎯 Desafíos Adicionales

- **Círculo Rotativo**: Elemento con texto rotativo y animación hover (scroll to top)
- **Carrito de Compras**: Sistema funcional con contador de productos
- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla
- **Animaciones**: Transiciones suaves y efectos visuales

## 🎨 Paleta de Colores

- **Amarillo**: `#ffc700` (Figma Yellow)
- **Verde**: `#10a958` (Figma Green)
- **Negro**: `#000000`
- **Blanco**: `#ffffff`

## Estructura del Proyecto

```
Taller #1/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Variables CSS
- **JavaScript (Vanilla)**: DOM Manipulation, Event Listeners
- **Boxicons**: Iconos
- **Pexels**: Imágenes de productos (gratis)

## Funcionalidades Implementadas

### 1. Slider Arrastrable

- Drag con mouse y touch
- Botones de navegación (anterior/siguiente)
- Scroll suave
- Cursor visual (grab/grabbing)

### 2. Efectos Hover

- Cambio de imagen al pasar el mouse
- Elevación de tarjetas
- Transiciones suaves
- Efectos en botones

### 3. Filtrado de Productos

- Filtros por categoría
- Actualización en tiempo real
- Afecta tanto al slider como a la grid
- Botones con estado activo

### 4. Búsqueda

- Barra desplegable con animación
- Filtra por nombre de producto
- Botón de cerrar

### 5. Carrito de Compras

- Contador de productos
- Feedback visual al agregar
- Animación del icono
- Persistencia durante la sesión

### 6. Círculo Rotativo

- Animación de rotación continua
- Texto en trayectoria circular
- Aceleración al hover
- Función scroll to top
