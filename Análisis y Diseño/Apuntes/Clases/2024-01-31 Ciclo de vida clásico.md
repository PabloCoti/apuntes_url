# Modelos o paradigmas o metodologías de desarrollo
- Tradicionales
	- CVC
	- V
	- Cascada espiral
- Ágiles
- Orientados a equipo

## Fases del ciclo de vida clásico
- ### Identificación de Problemas Oportunidades y Objetivos
	- Definición del problema (alcance del proyecto)
	- Objetivos
	- Factibilidad (técnica, operacional, legal, económica)
	- Planeación y control de actividades
- ### Determinación de los requerimientos de información
	1. Uso de herramientas y técnicas especiales para la determinación de requerimientos.
	2. (muestreos, entrevistas, cuestionarios, comportamiento del tomador de decisiones, prototipos, HISTORIAS USUARIOS)
- ### Análisis de las necesidades del sistema
	1. URL (diagramas de clases, de actividades, de comportamiento, de estado, etc)
	2. DIAGRAMAS DE FLUJO (a nivel de contexto, lógico y físico del sistema actual, lógico y físico del sistema nuevo)
	3. Diccionario de datos
	4. Decisiones estructuradas
- ### Diseño del sistema recomendado
	1. Diseño de salidas, entradas, interfaz de usuario
	2. Diseño de las bases de datos
	3. Procedimiento de control y respaldo
	4. Paquetes de especificaciones de programa para los programadores; especificaciones de archivos, detalles de procesamiento, árboles o tablas de decisión, diagramas UML y diagramas de flujo de datos, nombres de funciones o rutinas de código para reutilizar.
- ### Desarrollo y documentación del software
- ### Pruebas y mantenimiento del sistema
	1. Pruebas de programa
	2. Pruebas por módulos de sistema y otros
	3. Mantenimiento
	4. Puedo minimizar el mantenimiento?
	5. De qué forma?
- ### Implementación y evaluación del sistema
	1. Entrenamiento de los usuarios: desde el principio el usuario debe estar involucrado con el sistema para que él sepa cómo funciona.
	2. Plan de conversión de sistemas

LEER
https://www.powerdata.es/migracion-de-datos

## Migración de datos
### Definición
> **La migración de datos es el ==proceso== mediante el cual realizamos una transferencia de datos de unos sistemas de almacenamiento de datos a otros, de unos formatos de datos a otros o entre diferentes sistemas informáticos.**

Se lleva a cabo para reemplazar o actualizar servidores o equipos de almacenamiento.

Existen **tres ==formas diferentes== de abordara la migración de datos**
- #### Software basado en matriz
- #### Apoyándose en un software basado en el host
- #### Empleando los dispositivos de red

Los factores a tomar en cuenta en una migración de datos es
- #### Tiempo que llevará realizar la migración completa
- #### Cantidad de tiempo de inactividad que se requerirá
- #### Riesgo para el negocio derivado de problemas técnicos de compatibilidad, corrupción de datos, problemas de rendimiento de aplicaciones y pérdida u omisión de datos.

Para minimizar el riesgo es preciso
- Entender lo que se está migrando
- Aplicar procesos de Extracción, Transformación y Carga (**ETL**).
- Definir e implementar políticas de migración de datos
- Apostar por las pruebas y validación de datos migrados

### Desafíos
- **Migración de almacenamiento**
- **Migración de la base de datos** es la forma más sencilla de mover los datos, pero pueden surgir problemas como formatos de datos o diferentes codificaciones en la db.
- **Migración de aplicaciones**

### Mejores prácticas
- Adquirir una visión global
- Tomar medidas
- Reducir la presión sobre el proyecto
- Mantenerse alerta en cuestiones de seguridad de la información
- Prestar atención al software
- Minimizar la incertidumbre

