# PROP-IA

Asistente Inmobiliario Inteligente - Una plataforma IA para profesionales inmobiliarios en Argentina.

## 🚀 Características

- **Tasación Inteligente**: Calcula valores estimados de propiedades usando algoritmos de IA
- **Autenticación Firebase**: Sistema seguro de login con Google y email
- **Dashboard Interactivo**: Panel de control con estadísticas y gestión de propiedades
- **Arquitectura Clean**: Código organizado con separación de capas (Domain, Use Cases, Infrastructure)
- **UI Moderna**: Interfaz construida con Next.js 16, React 19, Tailwind CSS y Lucide Icons

## 🛠️ Tecnologías

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Autenticación**: Firebase Auth
- **Charts**: Recharts
- **Icons**: Lucide React
- **Cookies**: js-cookie

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/facufedee/prop-ia.git
cd prop-ia
```

2. Instala dependencias:
```bash
npm install
```

3. Configura las variables de entorno de Firebase (si es necesario)

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Rutas protegidas del dashboard
│   ├── login/            # Página de login
│   └── registro/         # Página de registro
├── domain/               # Lógica de negocio (Clean Architecture)
│   ├── entities/        # Interfaces y tipos
│   └── repositories/    # Interfaces de repositorios
├── infrastructure/      # Capa de infraestructura
│   ├── auth/           # Servicios de autenticación
│   ├── firebase/       # Configuración Firebase
│   └── repositories/   # Implementaciones de repositorios
├── ui/                  # Capa de presentación
│   ├── components/     # Componentes reutilizables
│   ├── context/        # Contextos React
│   └── sections/       # Secciones de página
└── usecases/           # Casos de uso
```

## 🔐 Autenticación

El sistema utiliza Firebase Authentication con:
- Login con Google
- Registro e inicio de sesión con email/contraseña
- Middleware de Next.js para protección de rutas
- Gestión de estado con React Context

## 📊 Funcionalidades

### Dashboard
- Estadísticas generales (propiedades, tasaciones, etc.)
- Gráficos de evolución de tasaciones
- Accesos rápidos a funciones principales

### Tasación Inteligente
- Formulario para ingresar datos de propiedad
- Cálculo automático basado en:
  - Metros cuadrados
  - Antigüedad
  - Cantidad de ambientes
  - Ubicación

### Gestión de Propiedades
- Listado de propiedades
- Estadísticas y reportes

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
npm run start
```

### Otros
El proyecto puede desplegarse en cualquier plataforma que soporte Next.js.

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Proyecto desarrollado para la comunidad inmobiliaria argentina.
