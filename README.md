## SolarNova — Sitio Web Estático

## Estructura de archivos

```
solarnova/
├── index.html          (Inicio)
├── servicios.html      (Servicios)
├── blog.html           (Blog educativo)
├── contacto.html       (Formulario de contacto)
├── css/
│   ├── styles.css      (Estilos personalizados)
│   └── extra.css       (Estilos adicionales)
├── js/
│   └── nav.js         (Interacciones: menú, cookies, etc.)
└── images/
    ├── logo.png
    ├── logo.webp
    ├── hero-solar.jpg
    ├── paneles-residencial.jpg
    ├── paneles-empresarial.jpg
    ├── blog-energia.jpg
    ├── ...
    └── blog-sostenibilidad.jpg 
```

## Cómo usar

1. Descargue o clone el repositorio del proyecto.
2. Abra el archivo `index.html` en cualquier navegador web.
3. Navegue entre las diferentes secciones del sitio utilizando el menú principal.

No requiere instalación de dependencias ni configuración adicional. Es un sitio web estático listo para ejecutarse en cualquier navegador moderno.

## Despliegue en la nube

El sitio se encuentra desplegado utilizando **Azure Static Web Apps**, con integración continua mediante GitHub.

Cada cambio realizado en el repositorio se publica automáticamente gracias a un pipeline de CI/CD.

🔗 URL del sitio:  
https://thankful-glacier-0d6695510.7.azurestaticapps.net/

## Tecnologías utilizadas

- HTML5 semántico  
- CSS puro (variables CSS, grid)  
- JavaScript   
- Bootstrap 5 (vía CDN, diseño responsivo)  
- Git y GitHub (control de versiones y CI/CD)  
- Azure Static Web Apps (hosting en la nube)  

## Accesibilidad

El sitio fue desarrollado siguiendo buenas prácticas de accesibilidad (WCAG 2.1 nivel AA), incluyendo:

- Uso de texto alternativo en imágenes  
- Estructura semántica con encabezados  
- Contraste adecuado de colores  
- Navegación accesible  

## Sostenibilidad digital

Se aplicaron técnicas para reducir el impacto ambiental del sitio:

- Optimización de imágenes (Compressor.io, Squoosh)  
- Uso de formato WebP  
- Código ligero sin frameworks pesados  
- Evaluación mediante Website Carbon Calculator  

## Privacidad

El sitio incluye un aviso de cookies simulado y una explicación clara sobre el uso de datos, respetando el principio de consentimiento informado y evitando el uso de rastreadores externos.
