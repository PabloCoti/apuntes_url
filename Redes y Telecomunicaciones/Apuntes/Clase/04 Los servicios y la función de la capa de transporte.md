# Servicios y la función de la capa de transporte
Protocolo para mantener la conexión es TCP, garantiza que la conexión este establecida.
Garantiza que la información llegue de una forma muy buena. Sirve para correos electrónicos por ejemplo.

UDP No es orientado a la comunicación, no garantiza que todo llegue completamente. Es con prioridad "llega la información pero no sabemos como". Se usa para voz, para video.

**Identifique las características básicas de los protocolos UDP y TCP**

Ver diapositivas.

**PUERTOS**
Se clasifican en 3 áreas, puertos bien conocidos, puertos registrados, puertos privados o
dinámicos.

**Prioridades**
Voz
Datos transaccionales (manipulación de dos o más registros)
Paginas estáticas (representan información para una sola guía)

# PROTOCOLO TCP
## APLICACIÓN Y FUNCIONAMIENTO DE LOS MECANISMOS DEL PROTOCOLO TCP
**Enlace de tres vías**
05 - LOS SERVICIOS Y LA FUNCIÓN DE LA CAPA
DE TRANSPORTE
1. Enviar llamado
2. Contesta llamado
REENSABLAJE DE SEGMENTOS
Numero de secuencia inicial ISN
PROTOCOLO UDP
El reensamblaje solo lo hace el ser humano, si hay alguna duda entonces el ser humano
vuelve a corroborar.
3. Establece comunicación
Todo esto de la mano del transporte.
Valor de inicio para los bytes de esta sesión se transmiten.
Incrementa el valor de numero de bytes
es lento porque siempre va verificando cada información que llega.
Baja sobrecarga y baja fiabilidad
Transmite datos con baja sobrecarga
Solo transmite información sin asegurarse que la información llegue completamente.
UDP no establece ninguna conexión antes de enviar datos.
LA CAPA DE TRANSPORTE UDP NO LE IMPORTA COMO LLEGUE EL CONTENIDO,
SOLO QUE LLEGUE. SE VE EN TELEVICION Y AUDIOS, ETC