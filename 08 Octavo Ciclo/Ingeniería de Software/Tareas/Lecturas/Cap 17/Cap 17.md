# Estrategias de prueba de software
- [[#¿Qué son?|¿Qué son?]]
- [[#Conceptos clave|Conceptos clave]]
	- [[#Conceptos clave#V&V (Verificación y Validación)|V&V (Verificación y Validación)]]
	- [[#Conceptos clave#Grupo de prueba independiente|Grupo de prueba independiente]]
	- [[#Conceptos clave#Tipos de pruebas|Tipos de pruebas]]
		- [[#Tipos de pruebas#Pruebas de unidad|Pruebas de unidad]]
		- [[#Tipos de pruebas#Pruebas de integración|Pruebas de integración]]
		- [[#Tipos de pruebas#Pruebas de regresión|Pruebas de regresión]]
		- [[#Tipos de pruebas#Pruebas de clase|Pruebas de clase]]
		- [[#Tipos de pruebas#Pruebas alfa|Pruebas alfa]]
		- [[#Tipos de pruebas#Pruebas beta|Pruebas beta]]
		- [[#Tipos de pruebas#Pruebas del sistema|Pruebas del sistema]]
		- [[#Tipos de pruebas#Prueba de despliegue|Prueba de despliegue]]
	- [[#Conceptos clave#Depuración|Depuración]]
	- [[#Conceptos clave#Revisión de la configuración|Revisión de la configuración]]

> <div style="page-break-after:  always;"></div>
## ¿Qué son?
Una estrategia de prueba es una receta que da el paso a paso de lo que se debe de hacer al momento de realizar una prueba. Sirven para que cualquier persona pueda hacer una prueba al software y sea capaz de encontrar errores en este si es que existen. Estas se hacen antes de realizar las pruebas de software como plantillas y se utilizan una vez se desean desarrollar las pruebas de software.

## Conceptos clave
### V&V (Verificación y Validación)
Es un conjunto de actividades que son **verificación** y **validación**. **Verificación** asegura que el software se construye con base a las especificaciones. **Validación** asegura que el software satisface las necesidades del cliente. Este se hace para ir corrigiendo el software conforme se va desarrollando y asegurarse de entregar un producto bueno. Este es utilizado a lo largo del proceso conforme se desea. La **verificación** se hace a lo largo de todas las etapas del desarrollo y la **validación** se hace justo antes de entregar el producto, en las pruebas finales.
### Grupo de prueba independiente
Es un **grupo de usuarios** que no son desarrolladores en el proyecto que se encargan de hacer **pruebas objetivas**. Esto porque los desarrolladores ya son usuarios capacitados y de forma consciente o inconsciente evitan los errores dentro del proyecto entonces las personas tienen un punto de vista neutral. En este caso el grupo de prueba recibe el software y le realiza un conjunto de pruebas y a consecuencia de estas pruebas entregan un **reporte con los errores**. Se usa en fases avanzadas del desarrollo **cuando el sistema ya tiene suficientes características como para ser probado**.
### Tipos de pruebas
#### Pruebas de unidad
Verifican el **funcionamiento de las características** que se están desarrollando **por sí solas**. Se hacen para detectar errores antes de que estos lleguen al producto final y se conviertan en un error más grande. Para hacer estas pruebas se hacen pruebas que se encargan de probar la característica en diferentes escenarios. Se usa durante la antes de la implementación de estas características en el producto final.
#### Pruebas de integración
Verifican el **funcionamiento de las características** que se están desarrollando **interactuando con otros módulos**. Se hacen para detectar errores antes de que estos lleguen al producto final y se conviertan en un error más grande. Para estas pruebas se hacen pruebas que se encargan de probar las interacciones de esta característica con otros módulos del sistema en diferentes escenarios. Se usan **después** de la **prueba de unidad**.
#### Pruebas de regresión
Se asegura de que las funcionalidades **existentes** del sistema **funcionen correctamente** luego de haber **agregado** una característica nueva. Sirven para asegurarse de que las nuevas características no estén agregando nuevos errores al sistema por medio de **otras** funcionalidades ya existentes. Se ejecutan las pruebas hechas anteriormente a las funcionalidades ya implementadas a la espera de tener los mismos resultados que daban **antes** de la nueva característica. Se hacen **cada** vez **que** se **modifica el código**.
#### Pruebas de clase
Evaluaciones a las clases en software orientado a objetos. Se asegura de que las clases y sus métodos funcionen según lo diseñado, **especialmente** para herencia y polimorfismo. Se crean pruebas para cada clase para asegurar el funcionamiento de cada método. Se usa después de implementar una **nueva** clase.
#### Pruebas alfa
Son pruebas realizadas por el equipo de desarrollo en las **etapas finales**. Se hace para detectar errores importantes y corregirlos antes de sacar la versión final. Los devs y testers **internos** hacen pruebas en un entorno controado. Se usa antes de que el software entre a la fase **beta**.
#### Pruebas beta
Pruebas realizadas por usuarios **externos** en un **entorno real** para. Se hace para obtener retroalimentación del funcionamiento real del producto y detectar errores que no se habían detectado antes. Se hace por medio de la distribución del software a un grupo seleccionado de usuarios finales. Se usa antes de **lanzamiento** oficial.
#### Pruebas del sistema
Verifica el funcionamiento del sistema **completo** en un entorno **controlado**. Se usa para asegurarse de que el sistema funcione en su **totalidad**. Se realizan pruebas de sistema **completo**. Se usa en las fases **finales** una vez el sistema ya tiene **todas** las **características** requeridas.
#### Prueba de despliegue
Es una prueba que se asegura de que el software funcionará correctamente en su entorno operativo final. Se hace para asegurarse de que no haya problemas durante la instalación o deployment de este su entorno de producción. Para esto se despliega el software en producción o en un entorno de prueba idéntico a producción. Se usa antes de despliegue final del software.
### Depuración
Es el proceso de **identificar y corregir errores en el código** del software. Se hace para eliminar errores identificados durante las pruebas. Se **utiliza un depurador o "debugger"** que permite la ejecución paso a paso del software para **examinar el flujo** de este y encontrar puntos de mejora. Se usa después de identificar errores durante las pruebas y **durante el desarrollo**.
### Revisión de la configuración
Revisión para asegurarse de que todos los **requisitos** para que funcione el software estén **mantenidos**. (Dependencias, paquetes, etc.). Se hace para que el software siempre tenga un funcionamiento **estable**. Se verifican las configuraciones y versiones por medio de **gestores** de versionamiento o paquetes. Se usa durante todo el ciclo de vida del desarrollo, especialmente durante el **desarrollo**.