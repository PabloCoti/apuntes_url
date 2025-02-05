# Introducción a clase
Va a ser la continuación de lo que habíamos visto en la clase anterior
## Primer ejercicio
[01 Repaso](Actividades/01%20Repaso.md)
## Primera tarea: exposición sobre herramienta para testeos
[02 Exposición sobre herramienta de testeos](Actividades/02%20Exposición%20sobre%20herramienta%20de%20testeos.md)
## Ejercicio: Ventajas y desventajas de herramientas de prueba presentadas
[03 Ejercicio Ventajas y desventajas de herramientas presentadas](Actividades/03%20Ejercicio%20Ventajas%20y%20desventajas%20de%20herramientas%20presentadas.md)
## Presentación mutation testing
https://gamma.app/docs/Mutation-Testing-Una-Herramienta-Esencial-para-la-Calidad-del-Sof-xm6itjdpagv7otw
## Ejercicio cuándo usar cada herramienta para mutation testing
[04 Cuándo usar cada herramienta de mutation testing](Actividades/04%20Cuándo%20usar%20cada%20herramienta%20de%20mutation%20testing.md)

## Devops
Es una cultura organizacional donde se estandarizan los procesos que se llevan desde la creación de una caractarística en el sistema hasta la entrega. 

El Devops **no** es un puesto de trabajo. Para este existen puestos como lo podría ser un SRE que no es un devops como tal si no que es un una puesto si no que es una persona que conoce la cultura de devops.

Devops es representado por un infinito que representa un software con cambios constantes donde se representa todo el ciclo que no se detiene.

Este está formado por varias partes:
- **Plannning**: se definen las historias de usuario con base a los requisistos que tenemos del sistema.
- **Sprints/code**: una vez el usuario tiene  creadas las tareas que tiene las empieza a desarrollar su código.
- **Build**: merges a máster después de que el código del ingeniero pasa los test de integración
- **Test**: testear todo lo que teneos en el build.
- **Release**: una vez la aplicación pasa todos los testeos ya se hace la publicación a producción de la versión nueva del sistema.
- **Deploy**: lanzar a producción el release.
- **Operate**: *este ocurre todo el tiempo*, aquí es dónde se tiene todo lo que son las optimizaciones y busqueda del rendimiento +optimo de la aplicación.
- **Monitor**: Monitorear qué es lo que está pasando en la aplicación para poder detectar problemas y poder solucionar estos problemas.

Para poder desarrollar la parte de devops también se tiene lo que es CI y CD
- **CI**: constante integración, lo que es mergar el código que tenemos desarrollado con máster, para esto se tienen que hacer pruebas automatizadas para poder revisar si el código cumple con los estándares y el funcionamiento también.
- **CD**: constante entrega que es lo que representa tomar el código que ya pasó el CI y mandarlo a producción.

Dentro de las herramientas que tenemos para devops tenemos:
- Planeación
	- Jira
	- Trello
	- Notion
- Código
	- Manejo de versiones
		- Git
	- Paquetería
		- Apache maven
		- Gradle
	- Testing
		- Gremlin
	- Deploy
		- Jenkins
	- Micro servicios
		- Docker
		- Kubernetes

### Importancia
![](../../00%20Attachments/Importancia%20de%20Devops.pdf)

### Un nuevo desafío en el horizonte
Devops como tal va a ir haciendo que el proceso de desarrollo se haga cada vez más uniforme donde vamos tener un estándar como empresa donde vamos a reducir los problemas que podría tener el proceso.

Tener una agilidad en procesos de integración nos ayudará a que podamos hacer mantenimiento de mejor manera, esto se verá reflejado en una reducción de costos en el mantenimiento, esto significa que como empresa vamos a tener menos problemas y por ende menos necesidad de lanzar parches.

Se va a tener una mejora del rendimiento ya que al tener casi que todo centralizado podemos ver el estado de nuestro sistema para poder evaluar si hay riesgos y mitigarlos.

### Retos de la integración
El problema con implementar devops es que no todos lo conocen por lo que se tiene que invertir en capacitación de las personas.

#### Herramientas de devops
INVESTIGAR