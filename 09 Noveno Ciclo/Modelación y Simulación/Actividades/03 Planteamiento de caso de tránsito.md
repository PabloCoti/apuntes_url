# Flujo de tránsito en ciudad gótica
## Objetivos
### Generales
Al momento de desarrollar la simulación se tiene como objetivo poder llegar a tener un estimado y planteamiento de una solución lo más factible posible que nos logre solucionar el problema del flujo de tránsito que se presenta en la ciudad, la cuál está saturada de vehículos y la ciudad carece de la capacidad para dar aforo y flujo correcto a todos estos vehículos.
### Específicos
- Definir posibles rutas alternas existentes para poder cambiar el flujo del tránsito
- Considerar crear rutas alternas para poder desviar el tránsito
- Considerar el despliegue de agentes de tránsito para agilizar el flujo de vehículos
- Considerar la integración de semáforos en rutas específicas para ayudar con el flujo
- Considerar el bloqueo de rutas para redirigir el tránsito a otras rutas
## Definir variables
- **Tiempo**
	- Hora
	- Fecha
	- Día festivo
- **Clima**
	- Temperatura
	- Humedad
- **Vehículo**
	- Tamaño
	- Fuerza de arranque
	- Velocidad promedio en ciudad
	- Fiabilidad (qué tan propenso es a fallar mientras se conduce)
- **Peatones**
- **Agentes de tránsito**
	- Horarios
	- Tarea asignada en el horario
- **Semáforos**
	- Tiempos establecidos:
		- Avanzar
		- Parar
	- ¿Consideran a los peatones?
- **Transporte público**
	- Aforo de personas
	- Paradas continuas
	- Paradas establecidas
- **Cola vehículos**
	- Tiempo de espera antes de pasar
- **Calles**
	- Bloqueo
	- Material (tierra, piedra, plancha, adoquín, etc.)
	- Hoyos
	- Túmulos
## Diseño de escenarios
1. Hora pico con lluvia en calles mixtas con y sin transporte público
	1. Con semáforo sin agentes de tránsito
	2. Sin semáforo con agentes de tránsito
	3. Sin semáforo ni agente de tránsito
2. Hora pico sin lluvia con calles de asfalto con semáforos
3. Hora pico sin semáforos ni agentes de tránsito
4. Desvío de todo el trasnporte público en rutas exclusivas
5. Mezcla de transporte público con vehículos normales
## Métodos de recolección de datos
- Contratación de un equipo de personas para que cuenten la cantidad de transportes que pasan por una calle designada.
- Tomar la información sobre los tiempos de espera establecidos por los semáforos programados en la calle designada.
- Contratación de equipo que cuente el tiempo de espera real de los vehículos en las colas.
- Documentación en vídeo de tránsito desde una perspectiva superior para posterior análisis del tránsito
