# Oracle Alura API Challenge

Este proyecto es parte del desafío de Oracle y Alura para desarrollar una aplicación web que consuma una API REST. El repositorio está dividido en dos partes principales: el backend y el frontend.

## Descripción General

- **Backend**: Implementado con `json-server` para simular una API RESTful.
- **Frontend**: Desarrollado con React.js para interactuar con la API y mostrar los datos al usuario.

## Endpoints del Backend

El backend proporciona los siguientes endpoints para interactuar con los datos:

- **GET** `/products`: Obtiene la lista de todos los productos.
- **GET** `/products/:id`: Obtiene los detalles de un producto específico por su ID.
- **POST** `/products`: Agrega un nuevo producto.
- **PUT** `/products/:id`: Actualiza la información de un producto existente.
- **DELETE** `/products/:id`: Elimina un producto por su ID.

## Funcionalidades del Frontend

El frontend ofrece las siguientes funcionalidades:

- **Visualización de Productos**: Muestra una lista de productos obtenidos de la API.
- **Detalle de Producto**: Permite ver información detallada de un producto seleccionado.
- **Agregar Producto**: Formulario para añadir un nuevo producto a la lista.
- **Editar Producto**: Posibilidad de modificar la información de un producto existente.
- **Eliminar Producto**: Opción para eliminar un producto de la lista.
