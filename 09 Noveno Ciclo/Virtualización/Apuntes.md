# Virtualización
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

## Análisis de migración de arquitectura tradicional a híbrida
[05 Análisis de migración a centro de datos híbrido](Actividades/05%20Análisis%20de%20migración%20a%20centro%20de%20datos%20híbrido.md)

Tomar en cuenta que los datos **siempre** se tienen que cifrar. Existen **dos** tipos de encriptado.
- En tránsito
- Inmóvil
## Máquinas virtuales
### Qué son
Las máquinas virtuales son entornos computacionales emulados dentro de un sistema físico. Se utilizan para ejecutar sistemas operativos y aplicaciones de manera independiente para aprovechar mejor los recursos de hardware y mejorar la seguridad y portabilidad del software.

### Características
- **Aislamiento**: Cada VM funciona de manera independiente del sistema anfitrión y de otras VMs
- **Compatibilidad**: pueden ejecutar diferentes sistemas operativos en una misma máquina física.
- **Snapshots y clonación**: Permiten crear copias de seguridad de su estado actual
- **Gestión de recursos**: Usan CPU, RAM y almacenamiento del hardware físico, pero de manera compartida y configurable.
- **Facilidad de implementación**: Se pueden replicar y desplegar rápidamente en diferentes entornos.
### Tipos
- **Máquina virtual de sistema**: Simulan un sistema operativo completo.
- **Máquina virtual de proceso**: Ejecutan una sola aplicación dentro de un entorno controlado.
## Contenedores
Docker es una herramienta donde yo creo contenedores. Los contendores son una tecnología de virtualización **ligera**, sirven para ejecutar aplicaciones de forma aislada en un sistema operativo. Cada contenedor tiene todo lo necesario para que nuestra aplicación funcione.

Los contenedores se saltan toda la parte del hipervisor y sistemas operativos húespedes. Todo trabaja encima del sistema operativo existente. Esto conlleva un mejor manejo de recursos y más rápido.

Docker **no** es un contenedor, es un programa que permite ejecutar aplicaciones en contenedores. 

Tecnologías de contenedores
- Docker
- Kubernetes
- Podman
- LXC (linux containers)

Estamos viendo un ejemplo de docker donde se nos explica los conceptos clave de docker
Dentro de estos está:
- **Imagenes**
	- *Sistema base*: es lo que tenemos principalmente en nuestro proyecto, por ejemplo, en un proyecto python deberíamos tener la imagen de python.
	- *Aplicación*: es donde va a estar nuestro proyecto como tal.
	- *Dependencias*: son las librerías y agregados que le estamos poniendo a nuestro proyecto
	- *Configuraciones*
	- *Instrucciones de Ejecución*
- **Contenedor**
	- *Entorno de ejecución*: es la instancia de la imagen de nuestro proyecto
	- *Procesos en ejecución*
	- *Almacenamiento*
- **Volumenes**
	- *Sistema de almacenamiento persistente*: es para no perder la información luego de que se borre el contenedor y se vuelva a levantar.
	- *Se almacenan fuera del contenedor*: es almacenado en el sistema operativo, no en el contenedor.
	- *Compartibles entre contenedores*: pueden ser utilizados por varios contenedores dentro de lo que es el proyecto.
- **Redes**
	- *Redes aisladas*
	- *Puertos expuestos* podemos hacer que el contenedor se comunique con el host por medio de un puerto
	- *Redes internas*: esto nos sirve para poder hacer que diferentes contenedores se comuniquen entre sí.

Estamos viendo los comandos básicos de docker, nos estamos guiando de los comandos que están en la presentación, pero es casi lo mismo que esta [Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf) 

Primero estámos creando la primera imagen, en este caso estámos haciendo uso de apache
- **Crear imagen**: `docker create --name apache httpd`
- **Listar imágenes**: `docker image`: debería salir el httpd en la lista de imágenes que tenemos
- **Ejecutar contenedor**: `docker run -d -p 8081:80 --name miapache httpd`, esto nos va a devolver un código que significa que sí se está ejecutando.
- **Ver contenedores ejecutándose**: `docker ps` 
- **Ver contenedores existentes**: `docker ps -a` 
- **Detener contenedor** `docker stop miapache`
- **Eliminar contenedor** `docker rm miapache`
- **Eliminar imágen**: `docker rmi httpd`

Estamos viendo que docker también nos ayuda dentro de lo que es el CI/CD automation.

## Computación en la nube
Es una computación que se basa en ofrecer recursos de tecnología de la información a través de internet.

### IaaS - Infrastructure as a Service
Es un modelo que proporciona infraestructura de TI virtualizada a través de Internet. Incluye servidores, redes, almacenamiento y máquinas virtuales.

Lo usan los administradores de sistemas y empresas que necesitan recursos técnicos flexibles y personalizables.

Ejemplos:
- Amazon EC2
- Microsoft Azure
- Google Compute Engine

#### Ventajas
- Control total sobre la infraestructura
- Alta escalabilidad y flexibilidad
- Pago por uso

### PaaS - Platform as a Service
Es un modelo que ofrece un entorno completo para desarrollar, ejecutar y gestionar aplicaciones sin preocuparse por la infraestructura subyacente

Lo usan los desarrolladores que quieren enfocarse solo en el desarrollo del software

Ejemplos:
- Google App Engine
- Microsoft Azure App Services
- Heroku

#### Ventajas
- No se necesita gestionar servicores o sistemas operativos
- Mayor rapidez en el desarrollo
- Facilidad de integración.

### SaaS - Software as a Service
Es un modelo que permite acceder a aplicaciones listas para usar a través de la infraestructura del internet.

Lo usan los usuarios finales que solo necesitan utilizar el software para tareas específicas.

Ejemplo:
- Gmail
- Microsoft 365
- Dropbox
- Salesforce

#### Ventajas
- Acceso desde cualquier lugar con conexión 
- No requiere instalación ni mantenimiento
- Actualizaciones automáticas

## Alta disponibilidad y escalabilidad en la nube
![](../../00%20Attachments/Alta%20Disponibilidad%20y%20Escalabilidad%20en%20la%20Nube.pdf)
Dentro de todos los sistemas tienen que tener tres cosas:
1. Disponible
2. Íntegro
3. Confidencial

Con alta disponibilidad nos referimos a la capacidad de un sistema o aplicación de seguir funcionando de manera continua, con un tiempo mínimo de inactividad, incluso en caso de fallos del hardware, software o red.

### ¿Para qué sirve la alta disponibilidad en la nube?
- Evitar interrupciones del servicio
- Garantizar el acceso continuo a las aplicaciones y datos.
- Reducir el impacto de fallos o desastres
- Mejorar la experiencia del usuario y la confianza del cliente
- Cumplir con acuerdos de nivel de servicio (SLA)

### ¿Para qué sirve la escalabilidad en la nube?
- Adaptarse a la demanda del negocio (picos y bajas de tráfico).
- Optimizar el uso de recursos y costos
- Mantener el rendimiento del sistema sin importar el número de usuarios.
- Enviar cuellos de botella
- Permitir el crecimiento del sistema sin necesidad de rediseñar desde cero.

### Estrategias para alta disponibilidad en la nube
#### Balanceo de carga (Load Balancing)
- Distribuye el tráfico entre múltiples instancias o servidores.
- Evita puntos únicos de falla.

#### Instancias redundantes y distribuidas
- Despliegue de instancias en varias zonas de disponibilidad (Availability Zones o AZs).
- Si una zona falla, otras pueden seguir operando.

#### Backups y recuperación ante desastres (Disaster Recovery - DR)
- Políticas de respaldo automatizado.
- Replicación entre regiones.
- Planes de recuperación documentados y aprobados.

#### Infraestructura como Código (IaC)
- Automatiza el aprovisionamiento de entornos.
- permite reconstruir entornos rápidamente ante fallas.

### Escalabilidad (Salability)
Es la capacidad de un sistema para crecer o descrecer en recursos según la demanda.
#### Tipos de escalabilidad
##### Vertical
- Aumento de recursos de una instancia (más CPU, RAM, etc.).
- Más fácil, pero tiene un limite físico.
##### Horizontal
- Agregar más instancias o nodos
- Mayor resiliencia y mejor rendimiento a gran escala.

## Virtualización como herramienta en la ciberseguridad
Tenemos que tener siempre claro que lo que es la ciberseguridad nos referimos a hacer un cuidado de los bienes de la empresa, especialmente en términos de información. Tenemos que evitar lo que son las vulnerabilidades dentro de nuestra emrpesa.

El chiste de tener virtualización dentro de lo que es ciberseguridad es:
- **Ambiente seguro para pruebas**: Puede simular ataques (como malware, inyección SQL, ingeniería social, etc.)
- **simulación de escenarios reales**: 
- **Versatilidad y ahorro de recursos:**
- **Práctica con distintos sistemas operativos:**