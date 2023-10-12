# Arquitectura de microservicios
Es una estructura centrada en la nube donde cada servicio se desarrolla y escala independientemente

## Ventajas
1. Escalabilidad
2. Aislamiento de fallos
3. Productividad de equipos
4. Implementación rápida
5. Costes eficientes

## Desventajas
1. Complejidad
2. Implementación
3. Pruebas
4. Coherencia
5. Transacciones
## Preguntas
**1. ¿Qué diferencia a la arquitectura de microservicios con la arquitectura orientada a eventos?**

La principal diferencia radica en el enfoque granular:

- **Arquitectura de microservicios:** Se centra en **descomponer una aplicación en servicios pequeños e independientes**, cada uno con una funcionalidad específica. Los servicios se comunican entre sí a través de interfaces bien definidas, utilizando mecanismos ligeros como **APIs RESTful o mensajería asíncrona**.
- **Arquitectura orientada a eventos:** Se basa en la **comunicación entre componentes mediante eventos**, donde cada componente publica o suscribe eventos de interés. Los eventos encapsulan información y fluyen a través del sistema, desencadenando acciones en los componentes suscriptos.

En resumen, los microservicios se enfocan en la **descomposición funcional**, mientras que la arquitectura orientada a eventos se centra en la **comunicación asíncrona y la fluidez de información**.

**2. ¿Cómo es el despliegue con esta arquitectura?**

El despliegue en una arquitectura de microservicios se caracteriza por:

- **Independencia:** Cada microservicio se puede **desplegar, escalar y actualizar de forma independiente**, sin afectar a otros servicios. Esto permite mayor flexibilidad y agilidad en el desarrollo y mantenimiento.
- **Automatización:** Se suele utilizar **herramientas de automatización** como Kubernetes para gestionar el despliegue y la orquestación de los microservicios, lo que optimiza la eficiencia y reduce la intervención manual.
- **Contenedores:** Los microservicios se empaquetan comúnmente en **contenedores Docker**, facilitando su portabilidad y ejecución en diversos entornos.

**3. ¿Cómo se relacionan los microservicios?**

Los microservicios se comunican entre sí a través de mecanismos ligeros y bien definidos, principalmente:

- **APIs RESTful:** Proporcionan interfaces estándar para acceder a los recursos y funcionalidades de cada microservicio.
- **Mensajería asíncrona:** Utiliza mecanismos como **colas de mensajes** para intercambiar información de forma desacoplada y escalable.
- **Patrones de comunicación:** Se emplean patrones como **pub/sub** o **solicitudes-respuestas** para estructurar la interacción entre servicios.

**4. ¿Cómo diferencia el servicio esta arquitectura?**

En la arquitectura de microservicios, la diferenciación de servicios se basa en:

- **Responsabilidad única:** Cada microservicio tiene una **función específica y bien delimitada**, evitando la duplicación de código y mejorando la modularidad.
- **Independencia:** Los microservicios **no dependen de otros servicios para funcionar**, lo que aumenta la autonomía y la tolerancia a fallos.
- **Tecnología heterogénea:** Se permite utilizar **diferentes lenguajes de programación, bases de datos y tecnologías** para cada microservicio, optimizando su desarrollo y mantenimiento.

**5. ¿Cómo separa los microservicios esta arquitectura?**

La separación de microservicios se logra mediante:

- **Límites de servicio claros:** Se definen interfaces bien documentadas y contratos de servicio para cada microservicio, estableciendo límites claros de interacción.
- **Aislamiento de datos:** Cada microservicio suele gestionar sus propios datos, minimizando las dependencias y facilitando la escalabilidad.
- **Despliegue independiente:** Los microservicios se despliegan y gestionan de forma independiente, evitando la interdependencia en la infraestructura.