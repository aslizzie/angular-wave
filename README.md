### Hub de entretenimiento - WAVE (con Angular)

#### Diana Lizeth Alcala Sandoval

En mi proyecto, creé un hub de entretenimiento al cual llamé "WAVE" que cuenta con un catálogo de películas y series, a las cuales los usuarios pueden acceder para ser su información particular. Para este sprint se agrego una base de datos junto con una API, por lo tanto la información ya es dinámica.

---

##### Requerimientos técnicos

El proyecto está realizado con Angular 12, también hice uso de Bootstrap y CSS puro, además para este nuevo sprint utilice MySQL para mi base de datos y Node JS junto con Express para mi API.

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

Una vez que el proyecto este instalado, es necesario instalar y configurar la API para el correcto funcionamiento del proyecto. Para hacer esto, primero hay que clonar el proyecto que contiene la API con el siguiente comando:
`git clone https://github.com/aslizzie/api-wave.git`

(Como recomendación, recomiendo clonar el proyecto que contiene la API en una carpeta diferente a donde se encuentra el proyecto de Angular)

Luego de clonarlo, nos colocamos en la carpeta del proyecto que acabamos de clonar y ejecutamos el siguiente comando, que de igual manera nos descargará las dependencias o librerías que son necesarias para que la API funcione:
`npm install`

Ahora lo que necesitamos es crear la base de datos de donde nuestra API obtendrá los datos, para esto cree una archivo contenido en donde se encuentra un script cargado con información, este archivo se encuentra dentro de la carpeta dump de nuestra API:

![Markdown logo](/documentation/dump_sql.png)

O bien, también se puede obtener en el siguiente enlace:
[https://drive.google.com/file/d/1weVa6KEhJP296Y8cm4GDoI2ly3lYdygF/view?usp=sharing](https://drive.google.com/file/d/1weVa6KEhJP296Y8cm4GDoI2ly3lYdygF/view?usp=sharing).

Despues de crear nuestra base de datos con sus datos correspondientes, es necesario configurar la API, así que en el archivo db.js que se encuentra en la carpeta config dentro de src vamos a configurarla con los datos que corresponden a nuestro servidor local, en este caso se pide el host, user, password y el nombre de la base de datos.

![Markdown logo](/documentation/db_config.png)

Como ultimos pasos y para que nuestro proyecto funcione correctamente necesitamos correr nuestra API con el comando:
`npm run dev`

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

---

##### Proceso para realizar el proyecto

Para llevar a cabo la migración del proyecto estuve leyendo documentación y viendo videos sobre Angular porque ya que no tenía ningún conocimiento sobre como usarlo, mientras que a la par realizaba la migración.

---

##### Sprint review

| ¿Qué salió bien?                                                                                                                                                                     | ¿Qué puedo hacer diferente?                                                                                           | ¿Qué no salió bien?                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lo que considero que salió bien fue que pude hacer que la información sobre las películas o las series se manejara en un JSON y no estuviera hardcodeada como en el sprint anterior. | Lo que considero que podría hacer diferente es seguir leyendo documentación para continuar aprendiendo sobre Angular. | En general, creo que en este sprint no todo salió bien ya que al nunca haber manejado un framework de este tipo se me dificultó muchísimo el hacer la migración lo que llevo a que no pude desarrollar las funcionalidades esperadas para este sprint. |
