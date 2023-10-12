# Spanning Tree (SPT)
El protocolo Spanning Tree Protocol (STP) es un estándar de red (IEEE 802.1D) diseñado para prevenir bucles de red en redes de capa 2 que involucran múltiples conmutadores (switches). Los bucles pueden ocurrir cuando existen múltiples rutas redundantes entre los dispositivos, lo que puede resultar en problemas como la duplicación de paquetes y la congestión. STP asegura que solo exista un camino activo en la red, desactivando automáticamente los enlaces redundantes para evitar estos bucles.

### Función y Aplicaciones

STP selecciona un **Root Bridge** (puente raíz), que es el switch central de la red, a través de un proceso de elección basado en la ID de puente (Bridge ID). Cada switch determina su **puerto raíz** (el puerto con la ruta de menor costo al puente raíz), mientras que otros puertos no esenciales se colocan en un estado de bloqueo para evitar bucles.

Este protocolo es crucial en redes con alta redundancia, como en grandes infraestructuras empresariales, donde se necesitan múltiples rutas entre dispositivos para asegurar la disponibilidad. Si una conexión principal falla, STP permite que una ruta bloqueada se active automáticamente, lo que garantiza la continuidad de la red.

La **prioridad por defecto** en la mayoría de los switches es **32768**. Este valor puede ajustarse en múltiplos de 4096, ya que el campo de prioridad en el mensaje BPDU tiene un tamaño limitado (12 bits), lo que significa que solo puede tomar ciertos valores, de 0 a 61440 en incrementos de 4096.

### Gestión de Sesiones de Red

STP utiliza mensajes Bridge Protocol Data Units (BPDUs) para intercambiar información sobre la topología de la red. Los switches envían y reciben BPDUs continuamente para monitorizar el estado de las conexiones y actualizar la topología cuando detectan cambios, lo que evita la creación de bucles y asegura una red optimizada.

### Integración con Otros Protocolos

STP se puede integrar con protocolos más avanzados como el **Rapid Spanning Tree Protocol (RSTP)**, que reduce el tiempo de convergencia de la red de aproximadamente 50 segundos a pocos segundos. Esto es especialmente útil en redes que requieren tiempos de recuperación más rápidos tras una falla. STP también se utiliza junto con otros protocolos de nivel 2 y de capa de red, como **EtherChannel** y **VLANs**, para garantizar la eficiencia y estabilidad de la red.
## Ejemplo del uso de SPT
Imaginamos que se tiene una red con tres switches conectados entre sí en un triángulo. Esta configuración es vulnerable a la creación bucles
![](../../../00%20Attachments/Pasted%20image%2020240908230949.png)
En la configuración básica de los switches se tiene que tener la siguiente configuración
**Root bridge**
![](../../../00%20Attachments/Pasted%20image%2020240908231437.png)

**Otros switch**
![](../../../00%20Attachments/Pasted%20image%2020240908231541.png)

Podemos verificar nuestro spanning tree
![](../../../00%20Attachments/Pasted%20image%2020240908231834.png)
# Session Initiation Protocol (SIP)
**SIP** (Protocolo de Inicio de Sesión o _Session Initiation Protocol_) es un protocolo de señalización de red ampliamente utilizado para el establecimiento, modificación y finalización de sesiones de comunicación multimedia, como llamadas de voz y video, mensajería instantánea y conferencias. Fue desarrollado inicialmente por la IETF (Internet Engineering Task Force) y está definido en la especificación RFC 3261.

### Función del Protocolo SIP

El objetivo principal de SIP es gestionar la creación, mantenimiento y finalización de sesiones multimedia entre usuarios a través de redes IP, que pueden ser punto a punto o de múltiples participantes (conferencias). **SIP no maneja directamente los medios** (audio, video, etc.), sino que se encarga de la señalización y el control de las sesiones.

- **Establecimiento de sesiones:** SIP inicia la sesión enviando una solicitud (INVITE) al receptor, incluyendo información como las capacidades de los medios y la identificación del usuario. El receptor responde aceptando o rechazando la sesión.
    
- **Modificación de sesiones:** SIP permite cambios durante una sesión activa, como agregar o quitar participantes, cambiar las propiedades del medio (por ejemplo, cambiar de solo audio a video) o transferir la llamada.
    
- **Finalización de sesiones:** Cuando una sesión ha terminado, SIP envía una solicitud de finalización (BYE) para cerrar la conexión.
    

### Arquitectura y Componentes de SIP

SIP es un protocolo **peer-to-peer** basado en texto similar a HTTP, que permite la comunicación entre dos o más entidades SIP. Los principales componentes y funciones de SIP son:

1. **User Agents (UA)**:
    
    - **User Agent Client (UAC)**: Envía solicitudes SIP a otros usuarios.
    - **User Agent Server (UAS)**: Recibe solicitudes SIP y responde a ellas.
2. **Servidores SIP**:
    
    - **Proxy Server**: Intermediario que reenvía solicitudes a otros servidores SIP o a los destinatarios finales.
    - **Registrar Server**: Almacena las direcciones IP actuales de los usuarios SIP (mapeo entre el identificador de usuario y la ubicación actual).
    - **Redirect Server**: Informa a los User Agents la dirección correcta a donde enviar las solicitudes, sin reenviarlas directamente.
3. **Mensajes SIP**: SIP define varios tipos de mensajes para gestionar sesiones:
    
    - **Métodos**: Solicitudes que inician alguna acción. Ejemplos: INVITE, ACK, BYE, CANCEL, OPTIONS, REGISTER.
    - **Respuestas**: Devueltas por el receptor con códigos que siguen la convención de HTTP (1xx: provisional, 2xx: éxito, 3xx: redirección, 4xx: error de cliente, 5xx: error de servidor).

### Aplicaciones de SIP

SIP es clave en varias aplicaciones que requieren la gestión de sesiones multimedia, tales como:

- **Telefonía VoIP (Voz sobre IP)**: SIP es ampliamente utilizado en redes VoIP para establecer llamadas de voz a través de Internet, sustituyendo la telefonía tradicional.
    
- **Videoconferencia**: Permite la configuración de sesiones de video en tiempo real entre dos o más usuarios.
    
- **Mensajería instantánea y presencia**: SIP puede manejar la señalización para la mensajería instantánea y el intercambio de estado de presencia entre usuarios (quién está disponible o no).
    
- **Conferencias de múltiples participantes**: SIP facilita la creación de sesiones de conferencia de audio o video con múltiples usuarios.
    

### Uso de SIP en la Gestión de Sesiones de Red

SIP gestiona las sesiones de red de manera independiente del contenido multimedia. Esto lo hace utilizando los siguientes pasos:

1. **Inicio de Sesión**: Un agente (usuario) envía un mensaje INVITE para iniciar la sesión. Este mensaje contiene detalles del origen y destino, así como la descripción de los medios (generalmente a través de otro protocolo llamado SDP, o _Session Description Protocol_).
    
2. **Negociación de Capacidades**: El protocolo SDP, que a menudo acompaña los mensajes SIP, se utiliza para negociar los detalles de los medios (por ejemplo, códecs de audio y video, direcciones IP y puertos). Esto asegura que ambos extremos de la comunicación sean compatibles.
    
3. **Transporte de Datos**: SIP se usa únicamente para la señalización, por lo que una vez que la sesión está establecida, el intercambio real de datos (audio, video) se realiza a través de otros protocolos, como **RTP** (Real-time Transport Protocol).
    
4. **Modificación y Finalización de la Sesión**: SIP permite modificar los parámetros de la sesión (por ejemplo, cambiar a video o agregar usuarios) y la finalización cuando la sesión ya no es necesaria.
    

### Integración de SIP con Otros Protocolos

SIP no trabaja en solitario. Se integra con otros protocolos y servicios para proporcionar una solución completa en la gestión de sesiones multimedia:

- **RTP (Real-time Transport Protocol)**: Una vez que la sesión se establece con SIP, los flujos de medios (audio, video) se transportan a través de RTP. RTP se encarga del transporte de los datos en tiempo real, garantizando la sincronización y el orden de los paquetes de medios.
    
- **SDP (Session Description Protocol)**: SIP utiliza SDP para describir las capacidades de los medios de los participantes y negociar los detalles de la sesión, como el tipo de códec y los puertos de red.
    
- **DNS y ENUM**: SIP puede interactuar con DNS para resolver los nombres de dominio en direcciones IP. **ENUM** (Telephone Number Mapping) traduce números de teléfono a direcciones SIP, facilitando la integración de la telefonía tradicional con VoIP.
    
- **Protocolo de Seguridad (TLS, SRTP)**: SIP puede utilizar **TLS (Transport Layer Security)** para cifrar las señales y proteger la privacidad de las sesiones. **SRTP (Secure Real-time Transport Protocol)** se utiliza para cifrar los datos de medios transmitidos por RTP, garantizando la seguridad de las llamadas de voz y video.
    

### Rol de SIP en la Configuración y Administración de Redes

En las redes VoIP o multimedia modernas, SIP juega un papel crucial al facilitar la interoperabilidad entre diferentes dispositivos y redes, simplificar la configuración de llamadas y permitir la gestión de sesiones sin necesidad de hardware dedicado, como los sistemas PBX tradicionales.

- **Facilidad de Implementación**: SIP puede funcionar sobre cualquier red IP, por lo que su implementación es sencilla en comparación con los sistemas de telefonía tradicional.
    
- **Escalabilidad**: Al ser un protocolo ligero, SIP puede gestionar desde pequeñas redes VoIP hasta grandes infraestructuras de telecomunicaciones.
    
- **Compatibilidad con diferentes servicios**: SIP se integra con sistemas de mensajería, videollamadas, conferencias, y más, todo sobre una misma infraestructura de red IP.
# Determinación de Puertos de Apagado Lógico
Cuando un puerto se apaga lógicamente en el contexto de redes y comunicación, se refiere a una situación en la que el puerto, aunque físicamente está presente en el dispositivo de red (como un switch o un router), no está operativo o no está en uso en el nivel lógico. Esto puede deberse a que está configurado para no aceptar tráfico, está deshabilitado en la configuración del dispositivo, o no está conectado a ningún dispositivo de red.

## ¿Cómo determinar qué puertos están apagados lógicamente
### 1. Comandos de Diagnóstico de Red
**`show interface status` (Cisco)** Este comando te muestra el estado de todas las interfaces en un switch o router Cisco, incluyendo si están habilitadas o deshabilitadas. En una interfaz deshabilitada, el estado generalmente será "administratively down".

El resultado es algo por el estilo
```
Port    Name               Status       Vlan       Duplex  Speed Type
Gi0/1   -                  connected    10         a-full  a-1000 10/100/1000BaseT
Gi0/2   -                  notconnect   20         auto   auto   10/100/1000BaseT
Gi0/3   -                  administratively down    30       auto   auto   10/100/1000BaseT
```

**`ifconfig` / `ip a` (Linux)** En sistemas Linux, puedes usar estos comandos para ver el estado de las interfaces de red. La salida indicará si la interfaz está UP o DOWN.

### 2. Escáneres de Puertos
**Nmap** Nmap es una herramienta popular para el escaneo de puertos. Puedes usar Nmap para verificar si los puertos en una máquina o dispositivo están abiertos o cerrados. La opción `-p` permite especificar los puertos a escanear.
``` shell
nmap -p 1-65535 <IP_DEL_DISPOSITIVO>
```

### 3. Herramientas de Análisis de Tráfico
**Wireshark** Wireshark es una herramienta para el análisis de paquetes que puede ser útil para ver el tráfico que pasa a través de un puerto específico. Si no ves tráfico en un puerto que debería estar activo, es posible que esté apagado lógicamente.

Para usar Wireshark:
1. Captura el tráfico en la interfaz de red.
2. Filtra los paquetes por puerto usando el filtro `tcp.port == <PUERTO>` o `udp.port == <PUERTO>`.
3. Revisa si hay paquetes que llegan a ese puerto.