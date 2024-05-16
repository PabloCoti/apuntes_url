# Estructura P2P
A diferencia de cliente servidor todos tienen las mismas responsabilidades y las mismas oportunidades.

P2P se conectan **todos a todos** a diferencia de cliente servidor, donde solo es **un servidor**.

## Ventajas
- Escalabilidad
- Resiliencia

## Desventajas
- Privacidad porque no se sabe lo que se comparte entre la red

## Preguntas
1. ¿Cómo cambia la conexión de la base de datos en p2p en comparación a cliente servidor?
	- La principal diferencia en las conexiones a bases de datos entre las redes P2P (peer-to-peer) y cliente-servidor radica en la centralización:
	- **Cliente-Servidor:** Se caracteriza por una conexión centralizada. Los clientes solicitan datos a un servidor centralizado que almacena y administra la información. La comunicación fluye entre el cliente y el servidor, eliminando la interacción directa entre pares.
	- **P2P:** En contraste, las redes P2P distribuyen la base de datos entre múltiples nodos, sin un servidor central. Cada nodo funciona como cliente y servidor, almacenando una porción de la información y atendiendo solicitudes de otros nodos. La comunicación se establece directamente entre pares, reduciendo la carga en un único punto.
2. ¿Qué es la arquitectura p2p?
	- La arquitectura P2P se basa en la distribución de tareas y recursos entre nodos iguales, sin jerarquías ni dependencias de un servidor central. Las características principales incluyen:
	- **Descentralización:** La ausencia de un servidor central elimina un punto único de fallo y aumenta la resiliencia de la red.
	- **Escalabilidad:** Al distribuir la carga entre múltiples nodos, las redes P2P pueden adaptarse a un gran número de usuarios y datos.
	- **Compartir Recursos:** Los nodos comparten recursos computacionales y de almacenamiento, optimizando el uso de la infraestructura.
3. ¿Cómo se asegura la seguridad en p2p?
	- Asegurar las redes P2P presenta desafíos únicos debido a su naturaleza descentralizada:
	- **Cifrado:** La comunicación entre nodos debe estar cifrada para proteger la confidencialidad e integridad de los datos.
	- **Autenticación:** Es crucial verificar la identidad de los nodos para evitar intrusiones y ataques.
	- **Reputación:** Los sistemas de reputación permiten identificar nodos maliciosos y aislarlos para proteger la red.
	- **Firmas Digitales:** Las firmas digitales garantizan la autenticidad de los datos y protegen contra la falsificación o manipulación.
4. ¿Cómo se aplica la estructura p2p?
	- Las redes P2P encuentran aplicaciones en diversos escenarios:
	- **Compartición de Archivos:** Redes como BitTorrent facilitan la distribución descentralizada de archivos grandes.
	- **Videostreaming:** Plataformas como YouTube y Netflix utilizan P2P para distribuir contenido de video de manera eficiente.
	- **Redes Sociales:** Sistemas como Diaspora y Mastodon aprovechan la arquitectura P2P para crear redes sociales descentralizadas.
	- **Criptomonedas:** Blockchain, la tecnología base de Bitcoin y otras criptomonedas, se basa en una red P2P distribuida.
5. ¿Cómo funciona el p2p conectado?
	- En el P2P conectado, los nodos se conectan a una red subyacente, como Internet, para facilitar la comunicación y el intercambio de datos. Los nodos pueden descubrirse entre sí utilizando mecanismos como:
	- **Tablas de Hash Distribuidas (DHT):** Almacenan información sobre la ubicación de los datos y los nodos en la red.
	- **Búsqueda de Inundación:** Envía una consulta a todos los nodos de la red, propagándose hasta encontrar los nodos relevantes.
	- **Supernodos:** Actúan como nodos centrales que mantienen información sobre la red y facilitan la búsqueda de recursos.

