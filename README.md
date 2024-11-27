<img src="assets/utn_logo.svg" width="150">
<br/>
<br/>

# Trabajo Práctico Parte 2 — Node.js Express

**AL FINAL ESTA NUESTROS COMENTARIOS**
Trabajo hecho por Tomás Curto Eivers y Fausto Forcherio

## Objetivo

El objetivo de este trabajo práctico es que los estudiantes desarrollen una API utilizando Node.js, Express, MySQL y Sequelize, demostrando sus conocimientos en el manejo del backend, estructura de proyectos y operaciones CRUD.

Se valorará la organización del código, el uso de buenas prácticas y la implementación de funcionalidades adicionales especificadas.
<br/>
<br/>

## Requisitos

### **Stack Tecnológico Obligatorio**

- Node.js
- Express.js
- MySQL
- Sequelize ORM

**Opcional:** Puede incluir otras herramientas y librerías (como Dotenv, Postman para probar la API, etc.).
<br/>
<br/>

## Desarrollo del trabajo práctico

- Se deberá clonar o "forkear" este repositorio para poder modificarlo y completarlo con la resolución del proyecto.
- Una vez que su código esté listo, suba el código a un repositorio público propio y envíenos el enlace a dicho repositorio para que lo revisemos.
  <br/>
  <br/>

## Trabajo Práctico

**Crear una API temática libre**

Elija un tema para su API.
Ejemplo: una biblioteca digital, gestión de películas, catálogo de productos, etc.

<br/>

**Estructura de Carpetas**

Organice el proyecto respetando esta estructura básica:

src/<br/>
├── controllers/<br/>
├── models/<br/>
├── routes/<br/>
├── data/<br/>
└── app.js<br/>

## Detalles

**Base de Datos**

Se debe realizar la conexión con una base de datos **MySQL**.

<br/>

**Modelos**

Necesitará construir los siguientes Modelos:

<br/>

- Un modelo que represente una entidad principal de su temática **Minimo 6 propiedades**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - `id` (autoincremental)
  > - `createdAt` (fecha de creación, automática)
  > - `updatedAt` (fecha de actualización, automática)
  > - `type/categorie` (campo tipo o categoría, personalizado)
  > - `status` (mínimo 2 opciones: `active`, `inactive`)
  > - 1 propiedad adicional (de acuerdo al tema elegido).

<br/>
<br/>

- Un modelo para manejar autores **Minimo 5 propiedades**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - `id` (autoincremental)
  > - `createdAt` (fecha de creación, automática)
  > - `updatedAt` (fecha de actualización, automática)
  > - `name` (nombre del autor)
  > - `surname` (apellido del autor)

<br/>
<br/>

**Rutas y Controladores**

Necesitará construir las siguientes Rutas y Controladores:

- Rutas para el Modelo Personalizado **Minimo 5 rutas**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - Crear un registro
  > - Actualizar por ID
  > - Leer todos los registros
  > - Leer un registro por ID
  > - Eliminar un registro por ID

<br/>
<br/>

- Rutas para el Modelo Autor **Minimo 4 rutas**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - Crear un autor
  > - Leer todos los autores
  > - Leer un autor por ID
  > - Eliminar un autor por ID

<br/>
<br/>

## Opcionales

**Query Params**

Incluya las siguientes funcionalidades adicionales en las rutas de **"Leer todos los registros"** para el modelo personalizado:

1. **Paginado**

   - Permita la paginación con parámetros `page` y `limit`.

2. **Ordenado por Fecha de Creación**

   - Soporte para ordenar por `createdAt` de forma ascendente (`ASC`) o descendente (`DESC`) mediante un parámetro `sort`.

3. **Filtrado por `type/categorie`**

   - Permita filtrar los registros según el valor del campo `type/categorie` utilizando un parámetro `type`.

4. **Filtrado por `status`**
   - Permita filtrar los registros según el estado (`active`, `inactive`) utilizando un parámetro `status`.

El resultado final deberia verse como: <br/>
`GET /modeloPersonalizado?page=2&limit=5&sort=DESC&type=category1&status=active`
<br/>
<br/>

**Relación Autor-Modelo Personalizado (1:N)**

1. Al crear un registro en el modelo personalizado, asócielo a un autor existente mediante su `idAutor`.

<br/>
<br/>

## **Entrega**

- Suba su código a un repositorio público en GitHub.
- Incluya un archivo `README.md` con:
  - Descripción breve de la API.
  - Instrucciones para correr el proyecto localmente.
  - Ejemplos de endpoints y cómo probarlos.
- Archivos de ejemplos(seed) en formato json de cada modelo, para cargar la DDBB

<br/>
<br/>

## **Comentarios Finales**

Un dicho común en el desarrollo es:

> "An API is just as good as its documentation"
>
> — Common saying in backend development

Por este motivo, vamos a valorar mucho este aspecto. Siéntase libre de utilizar librerías como **Swagger** para generar su documentación.

<br/>
<br/>

## **Fecha de Entrega:**

27/11


**QUE HACE**
Es una API que funciona como una colección de albumes de cantantes.
Permite agregar, modificar o eliminar albumes, ademas de leer todos los albumes o leer uno por id,
ordenar por creacion en la base de datos, filtrar por genero o filtrar por activo o inactivo.
Ademas la vista de albumes puede ser pedida con paginación.
Tambien permite agregar, modificar, eliminar, leer a todos o por id a los cantantes.
Cada cantante puede tener varios albumes pero un album debe tener un solo cantante.

**Requisitos:**
- Tener mysqlWorkbench
- Tener Xampp
- Entorno de ejecución node.js
- Tener instalado los paquetes sequelize, express y mysql2 en el proyecto
- Opcionalmente tener extension ThunderClient (para probar con mayor comodidad).

1) Iniciar MySQL en xampp
2) Crear base de datos en MySQL con el codigo de "mysql.md"
3) Reemplazar por su usuario, contraseña y puerto en /data/db.js
4) Ejecutar en una nueva terminal el archivo index.js con node.js
5) Ejecutar los endpoints a gusto

**Endpoints (Reemplazar lo que está entre astericos con lo que pide):**

Titulo del proyecto:
http://localhost:3030/

Álbumes:
Para traer todos los albumes filtrados o no (con get):
http://localhost:3030/albumes
http://localhost:3030/albumes?page=1&limit=1&sort=asc&genero=pop&status=active (manejar filtros a su antojo)

Para crear un album con post:
http://localhost:3030/albumes


Para ver 1 solo album, borrar un album o actualizar un album poner (get, put, delete):
http://localhost:3030/albumes/*ID*


Cantantes:
Para traer todos los cantantes con get:
http://localhost:3030/cantantes

Para crear un cantante con post:
http://localhost:3030/cantantes

Para ver 1 solo cantante, borrar un cantante o actualizar un cantante poner (get, update, delete):
http://localhost:3030/cantantes/*ID*

**Ejemplos en formato JSON**
Para crear o actualizar un cantante se tienen que insertar este JSON ya que el id del cantante, el createdAt y updateAt son automáticos:
  {
    "nombre": "Kendrick",
    "apellido": "Lamar"
  }

Para crear o actualizar un album se tienen que insertar este JSON ya que el id del album, el createdAt y updateAt son automáticos junto con los datos del cantante asociado:
   {
      "id_cantante": 1,
      "nombre_album": "Ventanita del amor",
      "año_lanzamiento": 2002,
      "genero": "Cumbia",
      "status": "inactive"
    }
ACLARACION: en caso de no poner status, por defecto se inicia como activo


