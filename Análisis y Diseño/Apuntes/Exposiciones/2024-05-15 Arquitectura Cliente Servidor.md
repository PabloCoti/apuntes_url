# Arquitectura Cliente Servidor
- Los **modelos** soin los datos o capas de datos y la lógica
- La **vista** es con lo que va a interactuar el usuario.

Es una arquitectura que de software que reparte las tareas entre los proveedores de recursos o servicios, que son los **servidores** y los clientes son los que **inician las solicitudes** al servidor. Pueden ser cualquier dispositivo o programa que necesite acceder a los recursos o servicios del servidor.

## Maestro esclavo
La replicación no debe confundirse con las operaciones de respaldo. El objetivo de las copias de seguridad es proteger los datos y la estructura de datos, la función es generalmente extensible para extender y escribir cargas de trabajo en varios servidores para fines de escalabilidad.

La estructura de maestro esclavo es donde se tiene un maestro el cual será el encargado de guardar y manejar toda la información y el esclavo solo va copiar la información del maestro para su manejo.

## Preguntas al final
- ¿Qué es una arquitectura de software?
	- La arquitectura de software es el diseño de alto nivel de un sistema de software. Define la estructura general del sistema, sus componentes y cómo interactúan entre sí. La arquitectura de software es un aspecto fundamental del desarrollo de software, ya que tiene un impacto significativo en la funcionalidad, el rendimiento, la escalabilidad y la mantenibilidad del sistema.
- ¿Qué hace el servidor?
	- Un servidor es un programa que proporciona servicios a otros programas, llamados clientes. Los servidores suelen ejecutarse en ordenadores dedicados, pero también pueden ejecutarse en ordenadores personales o en dispositivos móviles.
- ¿Qué hace el cliente? 
	- Un cliente es un programa que solicita servicios a un servidor. Los clientes pueden ejecutarse en cualquier tipo de dispositivo, incluidos ordenadores personales, dispositivos móviles y navegadores web.
- ¿Qué es la estructura de maestro y esclavo?
	- La estructura maestro-esclavo es un patrón de diseño de software en el que hay un dispositivo maestro y uno o más dispositivos esclavos. El dispositivo maestro controla a los dispositivos esclavos, que realizan tareas según las instrucciones del maestro. La estructura maestro-esclavo se utiliza a menudo en sistemas en los que se necesita una centralización del control, como en sistemas de automatización industrial y sistemas de almacenamiento de datos.
- ¿Por qué maestro esclavo no es una operación de respaldo?
	- La estructura maestro-esclavo no es una operación de respaldo porque no se ha diseñado para proporcionar redundancia. Si el dispositivo maestro falla, todo el sistema fallará. En una operación de respaldo, hay un dispositivo de respaldo que puede tomar el control si el dispositivo principal falla. Esto garantiza que el sistema siga funcionando incluso si falla un componente.