# FixRD-Bootcamp-Final-Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Plataforma web para conectar usuarios con profesionales técnicos certificados en República Dominicana.

## Descripción

FixRD permite a los usuarios buscar y contratar técnicos (plomeros, electricistas, pintores, etc.) mientras que los profesionales pueden crear perfiles, gestionar solicitudes y recibir reseñas.

## Características Principales

### Para Clientes

- Buscar técnicos por categoría y ubicación
- Ver perfiles detallados con calificaciones
- Solicitar servicios y agendar citas
- Dejar reseñas y calificaciones
- Historial de servicios

### Para Técnicos

- Crear perfil profesional
- Gestionar solicitudes de servicio
- Aceptar/rechazar trabajos
- Ver reseñas y rating promedio

## Estructura de Endpoints

### Autenticación

```
POST /api/auth/register - Registro de usuario
POST /api/auth/login - Inicio de sesión
GET /api/users/me - Perfil del usuario autenticado
```

### Técnicos

```
GET /api/technicians - Listar técnicos (con filtros)
GET /api/technicians/:id - Ver perfil detallado
PUT /api/technicians/:id - Actualizar perfil
DELETE /api/technicians/:id - Eliminar cuenta
```

### Solicitudes

```
POST /api/requests - Crear solicitud
GET /api/requests - Listar solicitudes
PUT /api/requests/:id - Actualizar estado
DELETE /api/requests/:id - Cancelar solicitud
```

### Reseñas

```
POST /api/reviews - Crear reseña
GET /api/reviews/:technicianId - Obtener reseñas de un técnico
```

## Modelos de Datos

### User

```javascript
{
  name: String,
  email: String,
  password: String (hashed),
  role: "client" | "technician",
  createdAt: Date
}
```

### Technician

```javascript
{
  userId: ObjectId,
  categories: [String],
  pricePerHour: Number,
  description: String,
  location: String,
  photo: String,
  rating: Number
}
```

### Request

```javascript
{
  clientId: ObjectId,
  technicianId: ObjectId,
  description: String,
  date: Date,
  status: "pending" | "accepted" | "completed" | "cancelled"
}
```

### Review

```javascript
{
  requestId: ObjectId,
  technicianId: ObjectId,
  clientId: ObjectId,
  rating: Number,
  comment: String
}
```

## Instalación

```bash
# Clonar repositorio
git clone [url-del-repositorio]

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install
```

## Configuración

Crear archivo `.env` en el directorio backend:

```
MONGO_URL_DEV=mongodb://admin:123456@localhost:27017/fix-rd?authSource=admin&retryWrites=true&w=majority
MONGO_URL_PROD=mongodb://admin:<password>@localhost:27017/fix-rd?authSource=admin&retryWrites=true&w=majority
URL=http://localhost:3000
NODE_ENV=dev
PORT=3000
```

## Ejecución

```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
```

## Licencia

MIT
