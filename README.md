### Hub de entretenimiento - WAVE (con Angular)

#### Diana Lizeth Alcala Sandoval

En mi proyecto, creé un hub de entretenimiento al cual llamé "WAVE" que cuenta con un catálogo de películas y series, a las cuales los usuarios pueden acceder para ser su información particular, además de poder agregar o quitar un contenido a favoritos. Para este sprint migre la API inicial que realice con Node JS y Express a una API que utiliza .NET y C#.

---

##### Requerimientos técnicos

El proyecto está realizado con Angular 12, también hice uso de Bootstrap y CSS puro, además para este nuevo sprint utilice .NET y C# para mi API.

---

##### Uso del proyecto

Para poder hacer uso del proyecto, es necesario tener instalado NodeJs y Angular (en este caso, la versión 12).

Primero se debe de instalar NodeJs, para instalarlo se puede hacer desde la terminal o bien con un instalador. Como mencioné anteriormente, el proyecto lo desarrollé con Angular 12 por lo tanto debemos instalar NodeJs en su versión 14 o una versión menor a la 16, en mi caso instalé la versión 14.17.6, a continuación adjunto el enlace directo para descargarlo: [NodeJs 14.17.6](https://nodejs.org/en/blog/release/v14.17.6).

NodeJs también nos instalará NPM, como manejador de paquetes, en este caso la versión requerida es la 6.

Después de tener instalado lo anterior, podemos instalar Angular, para esto hay que abrir una terminal y ejecutamos el siguiente comando:
`npm install -g @angular/cli@12`

Luego de esto, es necesario clonar el proyecto en nuestro servidor local con el comando:
`git clone https://github.com/aslizzie/angular-wave.git`

De nuevo haciendo uso de la terminal, nos colocamos en la carpeta del proyecto que acabamos de clonar y ejecutamos el siguiente comando, el cual descargará las dependencias o librerias necesarias para el proyecto:
`npm install`

Una vez que el proyecto este instalado, es necesario instalar y configurar la API para el correcto funcionamiento del proyecto

Primero que nada es necesario tener instalado .NET en nuestro equipo, para descargarlo podemos acceder al sitio oficial de Microsoft: [.NET](https://dotnet.microsoft.com/es-es/).

Luego de esto, hay que clonar el proyecto que contiene la API con el siguiente comando:
`git clone https://github.com/aslizzie/WaveApi.git`

(Como recomendación, recomiendo clonar el proyecto que contiene la API en una carpeta diferente a donde se encuentra el proyecto de Angular)

Ahora lo que necesitamos es crear la base de datos de donde nuestra API obtendrá los datos, para esto cree un archivo en donde se encuentra un script cargado con información, este archivo se encuentra dentro de la carpeta dump de nuestra API:

![Markdown logo](/documentation/dump_sql.png)

O bien, también se puede obtener en el siguiente enlace:
[https://drive.google.com/file/d/1wxOCZl-6FIRMsYu3PySKKjFyS-wCstlV/view?usp=sharing](https://drive.google.com/file/d/1wxOCZl-6FIRMsYu3PySKKjFyS-wCstlV/view?usp=sharing).

Despues de crear nuestra base de datos con sus datos correspondientes, es necesario configurar la API, así que en el archivo appsettings.json que se encuentra en la raíz del proyecto vamos a configurarla con los datos que corresponden a nuestro servidor local, en este caso se pide el host, user, password y el nombre de la base de datos.

![Markdown logo](/documentation/db_config.png)

Como ultimos pasos y para que nuestro proyecto funcione correctamente necesitamos correr nuestra API con el comando:
`dotnet run dev`

Y en nuestro proyecto de Angular vamos a ejecutar el comando:
`ng serve`

Y listo! Nuestro proyecto estará funcional!

---

##### Proyecto

A continuación, se muestran capturas de pantalla del proyecto y una breve explicación de lo que se presenta en cada captura.

###### Vista - Movies

![Markdown logo](/documentation/movies.png)
En esta captura se muestra la vista con el listado de películas.

###### Vista - Movie

![Markdown logo](/documentation/movie.png)
En esta captura se muestra la vista con la información de un elemente en específico.

###### Vista - Series

![Markdown logo](/documentation/series.png)
En esta captura se muestra la vista con el listado de series.

###### Vista - Series

![Markdown logo](/documentation/serie.png)
En esta captura se muestra la vista con la información de un elemente en específico.

###### Vista - Favorites

![Markdown logo](/documentation/favorites.png)
En esta captura se muestra la vista con las opciones que el usuario a marcado como favoritas.

###### Vista - Favorites

![Markdown logo](/documentation/favorite.png)
En esta captura se muestra la vista del elemento que el usuario marco como favorito.

---

##### Proceso para realizar el proyecto

Para llevar a cabo este sprint lo primero que realice fue el diseño y la normalización de mi base de datos, el diagrama se muestra a continuación:
![Markdown logo](/documentation/bd-diagrama.drawio.png)

Luego de hacer el diagrama comencé con la creación de mi base de datos en SQL usando un sistema de gestión de base de datos. Despues estuve leyendo documentación para realizar mi API con .NET, una vez que entendí un poco esta parte comencé con el desarrollo de la API igualmente durante el desarrollo estuve consultando la documentación para entender mejor lo que estaba haciendo. Finalmente hice la integración de mi API con el front-end de mi proyecto en Angular.

---

##### Sprint review

| ¿Qué salió bien?                                                                                                                                                                                                                                                                                                                                                           | ¿Qué puedo hacer diferente?                                                                                                                                                                                                                                                                                                                                                       | ¿Qué no salió bien?                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lo que considero que salió bien fue que logré crear mi API y que mi proyecto en Angular pudiera obtener la información de esa API de manera eficiente lo que significa que mi proyecto ya maneja datos de manera dinámica, además de que logre implementar la funcionalidad del auth y también de que los usuarios pudieran agregar a favoritos los elementos que quieran. | Lo que considero que podría hacer diferente es agregar más funcionalidades a mi proyecto, por ejemplo, un buscador para las series o películas, también creo que podría implementar un modulo para que el usuario pueda personalizar su perfil. Otra cosa que considero puedo hacer diferente es integrar mi back-end y front-end en un solo proyecto para el tema de kubernetes. | Lo que considero que no salió bien en este sprint es que no pude desarrollar de manera eficiente el tema de kubernetes y docker, si bien realice los documentos de configuración de docker y kubernete, no logré del todo realizar la implementación. |
