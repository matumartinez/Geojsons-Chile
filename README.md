# Chile-Geojsons

Archivos de polígonos y multipolígonos tipo geojson que describen a Chile y sus comunas agrupadas en distintas divisiones territoriales. La motivación de este repositorio es tener una compilación completa y acabada de las divisiones administrativas en Chile. Se utilizó material de otros repositorios públicos para crear este (ver sección de referencias más abajo).

## ¿Cómo ejecutarlo?

Si deseas visualizar estos archivos, clona el repositorio y ejecuta un servidor para levantar localmente el proyecto en tu navegador. Una forma de hacerlo es utilizando python:

```
python3 -m http.server 3002
```

En tu navegador dirígete a http://localhost:3002 . Puedes usar un puerto distinto a 3002 si deseas.

Alternativamente, puedes usar el sitio visitándolo vía [Github Pages](https://matumartinez.github.io/Geojsons-Chile/)

## Divisiones Territoriales Incluídas

### Consejos Regionales

Esta carpeta contiene los grupos electorales de comunas para los consejos regionales.

### Distritos Electorales

Grupos de comunas que componen las divisiones administrativas mediante las
cuales se eligen a los diputados de la República.

### País

Dos archivos que componen Chile completo, uno delimitado por regiones y otro delimitado por comunas.

### Provincias

Grupos de comunas asignadas a los delegados presidenciales.

### Regiones

Grupos de comunas que componen la gobernación regional, incluyendo gobernador y consejo.

## Referencias

- https://github.com/fcortes/Chile-GeoJSON
- https://nominatim.openstreetmap.org/ui/search.html
- https://polygons.openstreetmap.fr/index.py
