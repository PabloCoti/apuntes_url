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

## Resumen métricas de producto
[05 Métricas de producto](Actividades/05%20Métricas%20de%20producto.md)

## Métricas
Las métricas caen dentro de la parte de medición de las actividades sombrilla de las actividades estructurales del software. Recordemos que se llaman actividades sombrilla porque cubre el software durante todo su ciclo de vida.

El chiste de hacer métricas es para poder tener datos predeterminados de un proyecto como lo será:
- Tiempo
- Cantidad de personas
- Calidad del software
- Costos

Toda esta información es recaudada con base al proyecto con el objetivo de ir mejorando nuestras métricas en proyectos similares a futuro.

Existen varias métricas para nuestro software como lo es
- **El producto**: (nuestro software terminado)
- **El proceso**: Cómo vamos a ir haciendo nuestro proyecto y las metodologías que apliquemos.
- **El proyecto**: el plan de trabajo que tuvimos desde el inicio hasta la entrega de nuestro software.

Un indicador es una métrica o combinación de métricas que proporcionan comprensión sobre el proceso de software.

### Métricas para el modelo de requerimientos
Se usan datos históricos para poder hacer estimados de costos, errores y componentes que irán en el sistema.
### Como medir 
![](../../00%20Attachments/Pasted%20image%2020250210130457.png)

Factor de ajuste 0-5 es las respuestas
![](../../00%20Attachments/Pasted%20image%2020250210130509.png)

![](../../00%20Attachments/Pasted%20image%2020250210130516.png)
46 es el la suma de las 14 preguntas y 50 la suma de los factores ponderados


|                   |     | promedio |     |
| ----------------- | --- | -------- | --- |
| entradas ext      | 15  | 4        | 60  |
| salidas ext       | 10  | 5        | 50  |
| consultas         | 12  | 4        | 48  |
| archivos internos | 8   | 10       | 80  |
| archivos externos | 1   | 7        | 7   |
|                   |     |          |     |

$$
PF = 245 *(0.65+0.01*30) = 232.75
$$
### Resumen del Video sobre Métricas en el Desarrollo de Software DORA
[Vídeo](https://youtu.be/OtYW-9sPwsM)

El video se centra en cómo medir el impacto de cambios en tecnología, organización o cultura. Se basa en el modelo **DORA (DevOps Research and Assessment)**, el cual define cuatro métricas clave para evaluar el rendimiento del desarrollo de software: **frecuencia de despliegue, tiempo de entrega de cambios, tasa de fallas en producción y tiempo de recuperación ante fallos**.
#### 1. Principios Claves en el Desarrollo de Software
Para evaluar el éxito del desarrollo de software, se consideran tres factores esenciales:
- **Utilidad:** El software debe generar valor y resolver problemas para los usuarios.
- **Calidad:** Se requiere código estable, con menos errores y fácil de mantener.
- **Entrega rápida y eficaz:** Un flujo de trabajo ágil permite probar ideas rápidamente y mejorar el software de manera continua.
#### 2. Métricas Clave del Modelo DORA
El modelo **DORA**, presentado en el libro _Accelerate: The Science of Lean Software and DevOps_, define las siguientes métricas:
1. **Frecuencia de despliegue:** ¿Con qué frecuencia se liberan cambios en producción?
2. **Tiempo de entrega de cambios (Lead Time for Changes):** Tiempo desde la confirmación de un cambio hasta que se libera en producción.
3. **Tasa de fallas en producción (Change Failure Rate):** Porcentaje de cambios que introducen fallos.
4. **Tiempo de recuperación ante fallos (Time to Restore Service):** Tiempo promedio en recuperar el sistema tras un fallo.
#### 3. Relación entre Estabilidad y Velocidad
El rendimiento de un equipo de desarrollo se puede medir equilibrando **estabilidad** (tasa de defectos y tiempo de recuperación) con **velocidad** (tiempo de entrega y frecuencia de despliegue). Un equipo de alto desempeño logra:
- Desplegar software **rápido y con menos errores**.
- Reducir el tiempo de resolución de problemas.
- Minimizar los efectos negativos de cambios en producción.
#### 4. Cómo Utilizar estas Métricas
Se pueden aplicar estas métricas para evaluar cambios en distintos ámbitos:
- **Tecnología:** ¿Mejora la calidad del código cambiar una herramienta o biblioteca?
- **Organización:** ¿Afecta la eficiencia cambiar la forma en que se hacen las reuniones de equipo?
- **Cultura:** ¿Mejoran los resultados si se reorganizan los equipos?
#### 5. Implementación en la Práctica
Para capturar estas métricas, se recomienda:
- **Automatizar pruebas** para reducir defectos y mejorar estabilidad.
- **Optimizar el pipeline de CI/CD** para reducir el tiempo de entrega de cambios.
- **Monitorear las métricas en herramientas de DevOps**, como GitHub Actions, GitLab CI/CD, Jenkins, Azure DevOps o CircleCI.
#### Conclusión
Las métricas de DORA permiten pasar de la intuición a la toma de decisiones basada en datos, mejorando la eficiencia del desarrollo de software. Aplicarlas correctamente ayuda a optimizar procesos, minimizar errores y acelerar la entrega de software de calidad.


### Ejercicio: cómo mejorar la productividad del equipo (métricas)
Las métricas que se me ocurren son los tiempos de entrega, si el desarrollador está cumpliendo con los tiempos estimados, para facilitar los estimados yo lo separaría la tarea en tres partes:
- Desarrollo
- Pruebas
- Resolución de bugs

Esto debido a que todo desarrollo no está exento de errores el desarrollador deberá considerar en su tarea el tiempo de desarrollo, tomando en cuenta de que lo óptimo será manejar una metodología TDD para que estemos seguros de que lo que está desarrollando cumpla con los requisitos establecidos, una vez termine la face de desarrollo se proceden a hacer las pruebas automatizadas y QA donde el desarrollador va a tener que terminar de completar esto.

Lo que me interesaría ver es el tiempo que toma desde el desarrollo de una tarea hasta su mergeo en máster.

Entonces la calidad que se quiere medir será:
- **Calidad de las pruebas**: esta va a ser corroborada por el QA, se va a tener que asegurar de que la prueba sí sea los suficientemente eficiente y capaz de detectar los errores que se presenten y que sí se prueben los casos de uso.
- **Calidad calidad de código**: cuando la característica esté en PR los demás desarrolladores tienen que asegurarse de que el código hecho cumpla con los estándares establecidos de código por parte de la empresa.

## Mantenimiento del sistema de software
En los data warehouses se pueden hacer ETL.

Todos los datos de datos que se pueden llegar a tener se pasan por ETL para poder interpretarlos.

### El lapso de vida de un sistema
Aunque:
- Se usen componentes muy cohesivos con mínimo acoplamiento
- La documentación esté actualizada
- El sistema completo tiene cruce de referencias.

### Cuánto cambio debe esperarse
Depende de la naturaleza del sistema.

Algunos llaman **fase evolutiva** a la etapa del desarrollo dedicada al **mantenimiento**.

Sistemas **heredados** son los sistemas que se hicieron con anterioridad cuando las necesidaddes y el ambiente eran totalmente diferentes

**Esta parte es crítica para la decisón de cambiar o mantener el sistema**

Un sistema **heredado** es un sistema que se hizo con anterioridad, cuando las necesidades y ambiente eran totalmente diferente.

d