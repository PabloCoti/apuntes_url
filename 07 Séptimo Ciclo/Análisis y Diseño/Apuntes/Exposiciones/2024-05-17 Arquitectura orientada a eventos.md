# Arquitectura orientada a eventos
## ¿Qué es?
Es un estilo arquitectónico en el que los sistemas se construyen alrededor de la producción, detección, consumo y reacción a eventos.

## ¿Qué son los eventos?
Los eventos son mensajes que representan cambios de estado o actualizaciones en los sistemas.

## Componentes
1. Generación de eventos
2. Publicación de eventos
3. Distribución de evento
4. Procesamiento de evento

### Componentes clave
1. #### Event producer
Genera eventos cuando ocurre una acción específica
2. #### Event broker
Es el intermediario que recibe eventos de los productores y los distribuye a los consumidores
3. #### Event consumer
Es el intermediario que recibe eventos de los productores y los distribuye a los consumidores

## Ventajas
### Desacoplamiento
Los productores y consumidores no necesitan conocer la existencia del otro, lo que permite una mayor flexibilidad y facilidad para añadir nuevos componentes.
### Escalabilidad
El código puede escalar independientemente de la carga de trabajo que se tenga.

## Desafíos
1. ### Complejidad
3. ### Depuración
4. ### Consistencia
5. ### Monitorización

## Problemas
- Mayor flexibilidad en el mantenimiento
- Capacidad de adaptación en cuanto a cambios
- Gestión de comunicación entre componente desconocimiento de las ubicaciones exactas de otros componentes para la interacción.
- 
## Patrón
Es un patrón que se utiliza para estructurar sistemas distribuidos.

Este se divide en cliente -> broker -> servidor

### Estructura del broker
 El patrón del broker se compone en varios elementos clave.
 - Servidor
 - Cliente
 - Proxies
 - Puentes
 - Broker
#### Variantes del broker
- Sistema de comunicación directa
- Sistemas de paso de mensajes
- Sistemas de callback
## Preguntas
**1. Diferencia entre Eventos y Controladores en MVC:**

En el contexto de la arquitectura orientada a eventos (EDA), un **evento** representa un cambio significativo en el estado del sistema. Es una señal que notifica a los componentes interesados sobre la ocurrencia de un cambio. Por otro lado, un **controlador** en MVC (Modelo-Vista-Controlador) se encarga de manejar las solicitudes del usuario, recuperar datos del modelo y actualizar la vista en consecuencia.

Las diferencias clave radican en:

- **Propósito:** Los eventos se centran en la notificación de cambios, mientras que los controladores se enfocan en la gestión de interacciones y flujos de trabajo.
- **Acoplamiento:** Los eventos promueven un acoplamiento débil entre componentes, mientras que los controladores en MVC pueden generar un acoplamiento más estrecho.
- **Flujo de datos:** Los eventos fluyen de forma asincrónica a través de canales de comunicación, mientras que los controladores manejan solicitudes y respuestas de forma síncrona.

**2. Componentes de la Arquitectura Orientada a Eventos:**

Los componentes principales de una EDA incluyen:

- **Productor:** Genera eventos como resultado de actividades o cambios en el sistema.
- **Consumidor:** Procesa y reacciona a eventos relevantes para su función.
- **Canal de comunicación:** Transporta eventos entre productores y consumidores. Puede ser un bus de mensajes, cola de mensajes o un tema de publicación/suscripción.
- **Broker de eventos:** Administra el flujo de eventos, la entrega a los consumidores y puede ofrecer funcionalidades adicionales como enrutamiento, transformación y almacenamiento de eventos.
- **Registro de eventos:** Almacena eventos para su posterior análisis, auditoría o recuperación.

**3. Ventajas de la Arquitectura Orientada a Eventos:**

- **Acoplamiento débil:** Los componentes se comunican a través de eventos, reduciendo la dependencia directa entre ellos y facilitando la escalabilidad y el mantenimiento.
- **Escalabilidad:** La arquitectura puede escalarse horizontalmente agregando más productores y consumidores para manejar un mayor volumen de eventos.
- **Flexibilidad:** Es adaptable a cambios en los requisitos del negocio sin necesidad de modificaciones significativas en la arquitectura central.
- **Resiliencia:** Los fallos de un componente no afectan necesariamente a todo el sistema, ya que los eventos se pueden reenrutar o almacenar para su posterior procesamiento.
- **Procesamiento en tiempo real:** Permite una respuesta rápida a eventos y cambios en el sistema.

**4. Papel de los Proxies:**

Los proxies actúan como intermediarios entre el cliente y el servidor en una EDA. Pueden realizar diversas funciones, como:

- **Enrutamiento de eventos:** Dirigir eventos a los consumidores adecuados en función de su tipo o contenido.
- **Transformación de eventos:** Modificar el formato o la estructura de los eventos antes de entregarlos a los consumidores.
- **Autenticación y autorización:** Controlar el acceso a los eventos y garantizar que solo los consumidores autorizados puedan procesarlos.
- **Registro y auditoría:** Registrar eventos para su posterior análisis y auditoría.

**5. Broker de Eventos y sus Funciones:**

Un broker de eventos es un componente central en una EDA que se encarga de:

- **Recepción de eventos:** Recibe eventos de productores a través de diversos canales de comunicación.
- **Almacenamiento en búfer de eventos:** Almacena temporalmente los eventos en un búfer para garantizar la entrega confiable incluso en caso de picos de carga.
- **Enrutamiento de eventos:** Dirige los eventos a los consumidores adecuados en función de criterios predefinidos, como el tipo de evento, el tema o el destinatario.
- **Entrega de eventos:** Entrega los eventos a los consumidores de forma asincrónica utilizando mecanismos como la publicación/suscripción o la mensajería de colas.
- **Gestión de errores:** Maneja errores de entrega y reintenta la entrega si es necesario.
- **Monitoreo y registro:** Registra información sobre eventos, flujos de trabajo y rendimiento del sistema.

Los brokers de eventos modernos ofrecen funcionalidades adicionales como:

- **Escalabilidad horizontal:** Permite distribuir la carga de trabajo entre múltiples instancias del broker para manejar grandes volúmenes de eventos.
- **Alta disponibilidad:** Garantiza la entrega de eventos incluso en caso de fallos en el broker.
- **Seguridad:** Protege los eventos contra accesos no autorizados y manipulación de datos.
- **Análisis de eventos:** Proporciona herramientas para analizar patrones y tendencias en los eventos.