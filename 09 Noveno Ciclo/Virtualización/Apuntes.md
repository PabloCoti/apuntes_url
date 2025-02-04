# Virtualización
- [[#Introducción|Introducción]]
- [[#Virtualización|Virtualización]]
	- [[#Virtualización#Ventajas|Ventajas]]
	- [[#Virtualización#Tipos de virtualización|Tipos de virtualización]]
	- [[#Virtualización#Ejercicio: ejemplo de cómo usaría la virtualización en una empresa|Ejercicio: ejemplo de cómo usaría la virtualización en una empresa]]
- [[#Ejercicio repaso de redes|Ejercicio repaso de redes]]
- [[#Primer red virtualizada|Primer red virtualizada]]
- [[#Ejercicio: dos casas con IoT|Ejercicio: dos casas con IoT]]
- [[#Hipervisor|Hipervisor]]
	- [[#Hipervisor#Tipos de hipervisor|Tipos de hipervisor]]
		- [[#Tipos de hipervisor#Bare metal|Bare metal]]
		- [[#Tipos de hipervisor#Hosteado|Hosteado]]
## Introducción
En la primera clase tuvimos unos repasos respecto a redes y el ingeniero nos dio una pauta de lo que tenemos que preparar en caso de privados y nos incentivó a participar en clase para que al momento de llegar al privado estar más preparados.

## Virtualización
La virtualización es la tecnología que permite crear versiones virtuales de recursos físicos.

### Ventajas
La virtualización presenta varios beneficios como lo podría ser la reducción de costos operativos, uso eficiente de recursos, flexibilidad y escalabilidad, mayor disponibilidad, integridad, confidencialidad y recuperación ante desastres y simplificación de gestión de TI.

Respecto al aspecto de recuperación es parte del aspecto de continuidad del negocio. Se refiere a la capacidad de recuperarse. Un ejemplo de esto sería lo que paso en claro, ellos no tenían un plan de contingencia para cuando pasó de que regalaron los servicios de claro.

Hay que entender que la virtualización tiene sus ventajas, especialmente en lo mencionado anteriormente, esto es conveniente para todos. Pero lo importante a tomar en cuenta es que también si virtualizamos o no *depende* de las necesidades y capacidades de la empresa.

### Tipos de virtualización
- Servidores
- Escritorio
- Almacenamiento
- Redes

Hay que tener presente que la virtualización no es solo usar virtual box, sino que es hacer uso de recursos virtualizados.

### Ejercicio: ejemplo de cómo usaría la virtualización en una empresa
[01 Ejercicio aplicación de virtualización en una empresa](Actividades/01%20Ejercicio%20aplicación%20de%20virtualización%20en%20una%20empresa.md)

## Ejercicio repaso de redes
[02 Ejercicio repaso de redes](Actividades/02%20Ejercicio%20repaso%20de%20redes.md)

## Primer red virtualizada
**Revisar carpeta:** `09 Noveno ciclo\Virtualización\Actividades\01 Primeras conexiones casa con IoT.pkt`

## Ejercicio: dos casas con IoT
[03 Ejercicio de casas con IoT](Actividades/03%20Ejercicio%20de%20casas%20con%20IoT.md)

## Hipervisor
Es un software or firmware que permite la creación y la gestión de máquinas virtuales en un servidor físico. Se podría decir que es la capa de abstracción que permite que tengamos múltiples sistemas ejecutándose en el mismo hardware compartiendo los recursos de este de forma eficiente. Por ejemplo: **Virtual box**

En la vida real cada servidor podría tener un hipervisor para poder hacer optimización de recursos.
### Tipos de hipervisor
#### Bare metal
Se ejecuta directamente en el hardware del servidor, sin necesidad de un sistema operativo. Por ejemplo:
- VMware ESXi
- Microsoft Hyper-V
- Promox VE
- Xen Server

#### Hosteado
Se ejecuta sobre un sistema operativo anfitrión. Por ejemplo:
- Oracle VirtualBox
- VMware workstation
- Parallels Desktop

## Centros de datos
Es toda la infraestructura de red compuesta por servidores, almacenamiento, redes y sistemas para alojar, administrar y procesar grandes volúmenes de datos y aplicaciones de manera eficiente.

### Clasificación en los centros de datos y su rol en la virtualización
#### Tipos de centros de datos
- **Centros de datos tradicionales**: Instalaciones físicas con servidores y almacenamiento en sitio. Tienden a ser más seguros porque tenemos ingerencia directa con nuestros elementos, sin embargo, también tienen un costo elevado al corto plazo por aspectos como mantenimiento, energía, contingencia.
- **Centros de datos en la nube**: Servicios proporcionados por proveedores como AWS, google Cloud, Azure. Tiende a ser más barato en el corto plazo.
- **Centros de datos híbridos**: Combinan insfraestructura física con servicios en la nube.
- **Edge data centers:** pequeños centros de datos ubicados cerca de los usuarios finales para reducir la latencia.

### Cómo influye la virtualización a los centros de datos
La virtualización permite un mejor manejo de recursos para la empresa y podría ayudar a una empresa en sus primeros estados. Esta también ayuda a que se tenga una buena separación.11

