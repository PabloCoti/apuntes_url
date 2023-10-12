¿Por qué un backup y reucperación de base de datos?
* Para conseguir un funcionamiento seguro de la base de datos y una pronta recuperación de fallas.
* No estamos a salvo de circunstancias que afecten la disponibilidad integridad y confidencialidad de la base de datos.
* Existen ciertos riesgos y circunstancias que pueden interrumpir o afectar la base de datos.

Los backups deben ser de forma periódica, pueden hacerse 1 vez al día (recomendable).
Los backups no garantizan la pérdida completa de datos, pero sí mitigan el daño que podría ser producido por una externalidad.

## Políticas de backup
* Que no haya movimiento en la base de datos.
* Tiene que ser de forma periódica.
* Nombre del fichero.
* Fecha de creación del backup.
* Roles (quién hizo el backup).

Al momento de crear un usuario se deben especificar sus roles para poder evitar errores de seguridad en la base de datos.

## Causas de errores en un sistema e base de datos
* **Físicas**: Son causadas por fallas de hardware, como por ejemplo de disco duro o de la CPU.
* **De diseño**: son agujeros en el software, ya sea en el SO o en el SGBD.
* **De funcionamiento**: son causadas por la ntervención huana debido a fallas en DBA, configuraciones inapropiadas o mal planteamiento de los procedimientos de bakcup.
* **Del entorno**: como por ejemplo, desastres naturales, fallas de corriente, temperatura excesiva.

## Estrategias de backup físicos
* **Backups de la BD en frío**: Los backups en frío implican parar la BD en modo normal y copiar todos los archivos sobrer los que asienta. Antes de parar la BD hay que parar también todas las aplicaciones que estén trabajando en la BD. Lueo de la copia de archivos, la BD se puede volver a arrancar.
* **Backups de la BD en caliente**: El backup en caliente se realiza mientras la BD está abierta y funcionando. Habrá que tener cuidado de realizarlo cuando no hayan movimientos en la BD.
