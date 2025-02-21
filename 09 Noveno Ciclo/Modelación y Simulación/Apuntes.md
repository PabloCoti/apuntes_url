## Introducción
La modelación y simulación se aplica en todos lados y se tiene que tener presente. 

## Modelación y Simulación
![](../../00%20Attachments/Sistema,%20Modelación%20y%20Simulación.pdf)

La modelación y simulación van de la mano, **no se puede simular si no se modela**.

Un ejemplo de la aplicación de la simulación es la forma en la que se obtuvo el conocimiento de cuanto tiempo le toma a una botella de plástico en degradarse. Se llegó a la conclusión de que son 1000 años, pero para esto se tuvo que hacer una simulación y para antes de hacer la simulación se tuvo que haber hecho la modelación de esta.

### Modelo
Es una representación de un sistema real (del cual se tiene que tener el conocimiento completo de este).

Los modelos tienen como propósito también la transmisión de información. En el caso de la ingeniería en informática y sistemas se tienen los diagramas, como lo podría ser en el caso de bases de datos el entidad relación y el relacional.

### Simulación
Es hacer un experimento artificial a partir del modelo.

Tiene la ventaja de que no corremos el riesgo de que arruinemos un sistema o un resultado no deseado al momento de aplicarlo en la vida real. Estos experimentos nos permiten ver cómo funcionaría en su aplicación real.

La simulación tiene **ventajas** y **desventajas**.
#### Ventajas
La simulación no afecta con el mundo real y es flexible, es decir, se puede modificar y es más barato hacer cambios en el sistema dentro del modelo que directamente en la vida real.

#### Desventajas
Los modelos no dan soluciones óptimas y esto puede dar a veces falsos sentidos de seguridad.

### Conclusión
La modelación y simulación es una forma muy importante de hacer pruebas y predicciones que nos van a dar datos para poder tomar decisiones importantes. La simulación tiene aplicaciones reales como lo podría ser en el tránsito para poder hacer que fluya mejor el tránsito.

### Ideas para proyecto de curso
- Casita con IoT
- Rendimiento de base de datos
- Tráfico de redes sociales

[Planteamiento](https://correo2urledu-my.sharepoint.com/:w:/g/personal/mdsajvin_correo_url_edu_gt/EVcmdSFySCtFk2JDtTgzJG8B6qEe01uh5DgnYVthZMVqGQ?e=naxfty)

Dentro del planteamiento del problema básicamente lo que hicimos fue:
- Planteamiento del problema
- Justificación

## Sistema
![](../../00%20Attachments/Sistemas,%20Propiedades,%20Estados,%20Tipos%20de%20Sistemas.pdf)
Recordamos que un sistema es un conjunto de subsistemas que interactúan con un objetivo claro.

Un sistema generalmente tiene tres pasos:
- Entrada
- Proceso
- Salida

### Tipos de sistema
Existen dos tipos de sistemas:
- **Estructural**: identifica y define cada una de sus partes. Es como decir quiero una casa con x, y, z ambientes.
- **Funcional**: considera sus partes y sus interrelaciones. Es como decir, el baño va a estar cerca de la entrada de las visitas, pero lejos del comedor por motivos de ruido y limpieza.

Siempre que estamos diseñando un sistema primero tenemos que estructurarlo y posteriormente establecer el funcionamiento.

### Propiedades del sistema
- **Sinergia**: Coordinación de dos o más causas o partes cuyo efecto es superior a la suma de efectos individuales.
- **Entropía**: Desorden natural en un sistema
- **Equilibrio** homeostático: Tendencia de un sistema a permanecer en equilibrio.

### Estado
Conjunto de variables necesarias para describir al sistema en un instante concreto.

### Clasificación de sistemas
- **Discretos**: cuando las variables de estado cambian en instantes separados. Por ejemplo, una fila de banco, las variables son las personas y estas terminan sus turnos de atención en momentos separados.
- **Continuos**: Son aquellos que operan sin interrupciones.
#### Ejercicio: Dos sistemas continuos y dos discretos
[01 Ejercicio dos sistemas continuos y dos sistemas discretos](Actividades/01%20Ejercicio%20dos%20sistemas%20continuos%20y%20dos%20sistemas%20discretos.md)

## Proceso de modelado
Retomando como base que un modelo tiene que tener la similitud con la vida real o el cómo debería ser en la vida real. 

Para poder construir un modelo tenemos que entender qué es lo que queremos modelar, para esto es más fácil ver el sistema y hacer una abstracción.

### Entidades de proyectos planteados
![](../../00%20Attachments/Untitled%2018.jpg)
## Pasos en un estudio de simulación
Según el autor varía la cantidad de pasos, para algunos son 9 pasos y para otros son 7.
### 1. Definición del problema
Tenemos que establecer la problemática que queremos solucionar con la modelación y simulación. Se quiere **transformar** una situación que tenemos como **problema en una solución**, para esto es necesario entender cómo funciona el sistema a modelar.
#### Cómo definirlo
- **Planteamiento**: identificar una situación que se nos presenta que identificamos como problema y explicarlo.
- **Justificación**: explicar por qué es un problema.
- **Causas y efectos**: por qué se está dando el problema y cuál es la consecuencia del por qué.
- **Objetivo**: a dónde queremos llegar con la solución del problema.
- **Hipótesis**: plantear una posible solución para el problema ¿haciendo esto se soluciona el problema?
- **Razón del por qué la simulación es la simulación necesaria**
### 2. Planificación del proyecto
Son las estimaciones de los recursos necesarios para poder llevar a cabo la simulación, es decir, es toda la teoría que va a llevar la simulación, son todos los documentos que van a respaldar nuestra simulación. 

Aquí también se evalúan los recursos que se tienen que tener disponibles para poder desarrollar la solución del problema.

**Esta es la parte más importante del proyecto ya que se define si es factible o no.** En caso de que no sea factible se puede cancelar el proyecto con toda libertad ya que no se ha puesto a andar el proyecto, por eso es que esta parte es tan importante.

Como parte de la planificación se tienen que considerar los aspectos críticos para el estudio.
- ¿Están claramente definidos los objetivos del estudio?
- ¿Por qué se realiza el estudio?
- ¿Qué pretende obtener del estudio?
- ¿Se dispone de los recursos adecuados y suficientes para poder realizar el estudio: tiempo, personal, software, ordenadores, etc.?
- ¿Se han identificado los usuarios potenciales o clientes de los resultados del estudio?
### 3. Definición del sistema
Definir qué aspectos de la realidad tienen que modelarse para poder desarrollar el proyecto. Cuando vamos a modelar el sistema tenemos que tomar en cuenta los aspectos de la realidad que vamos a construir el sistema.

Va de la mano con la [4. Formulación conceptual](#4.%20Formulación%20conceptual)

Dentro de esta parte es muy importante poder conocer las interioridades del sistema para poder crear un modelo lo más fiel a la realidad. Dentro de este proceso entra como paso fundamental la **abstracción** y la **simplificación**. Este proceso se podría resumir en identificar las características o propiedades necesarias que puedan servir a los objetivos del estudio.

Aquí entran los siguientes conceptos
- **Escoger las variables de salida** 
- Construcción del modelo identificando los componentes del sistema que afectan a estas variables de salida y decidiendo por cada de uno.
- Una vez tenemos los componentes procedemos a hacer todo diagramado para poder escribirlo como un diagrama de flujo lógico.
### 4. Formulación conceptual
En esta parte se procede a desarrollar un modelo preliminar donde se van a definir los componentes y la forma en la que se relaciona con el exterior. (va de la mano con el paso 3)
### 5. diseño preliminar del experimento
Consiste en definir cómo es que va a funcionar el modelo, qué entradas y qué salidas va a tener y cómo va a modificarse el valor de las entradas y cómo van a presentarse los valores de salida.

No se tiene que confundir el aspecto de experimento con simulación debido a que el **experimento** es en la vida **real**.

Define cómo va a estar funcionando el modelo y cómo se va a medir su comportamiento. Trata de definir entradas y  salidas y cómo se modifican.

Este paso tiene varias etapas:
1. **Definición de objetivos del experimento:** En este paso se tiene que definir qué es lo que esperamos sacar de esta simulación. Esto tiene diferentes tareas:
	1. Identificar las preguntas que el experimento debe resolver.
	2. Establecer objetivos específicos y metas medibles para la simulación.
2. **Selección de variables de entrada y salida**: definir los valores que vamos a controlar y qué mediremos
	1. **Variables de entrada**: los factores que se pueden ajustar en la simulación como configuraciones, condiciones y otros.
	2. **Variables de salida**: Son los resultados que mediremos para evaluar el desempeño del sistema y el impacto de las variables de entrada.
3. **Cómo se configuran las pruebas**: SE tienen que diseñar los diferentes escenarios en los cuales se probará la simulación. Un escenario es una combinación de valores de variables de entrada.
4. **Configuración de parámetros del experimento**: cuánto va a durar y cuántas veces se va a repetir.
	1. **Duración de la simulación**. cuánto tiempo va a durar la simulación
	2. **Número de repeticiones**: cuántas veces se ejecutará cada escenario para tener resultados consistentes y estadísticamente significativos.
5. **Recolección de datos**
	1. Cómo se recopilaránlos datos y cómo se almacenarán.
6. **Evaluación de recursos necesarios**
	1. Qué necesitamos para hacer el experimento.
7. **Pruebas de validación preliminares**
	1. ¿Está todo funcionando como debería?
8. **Documentación del diseño del experimento**
	1. ¿Cómo registrará el diseño los procedimientos?
### 6. Preparación de los datos de entrada
Tiene que establecerse la forma en la que se van a recibir los valores que el sistema va a procesar.
### 7. Traducción del modelo
Describir las partes del modelo ya en funcionamiento por medio de una simulación.
### 8. Verificación y validación
Estudiar si el modelo opera como debe y la salida del modelo sí representa el sistema real.
### 9. Diseño experimental final
Esta es la parte de prueba y error donde se tienen que hacer varias pruebas con el modelo para poder llegar a un modelo final con el cuál se harán todas las experimentaciones.
### 10. Experimentación
Un una vez tenemos todos los resultados bien establecidos y el modelo está completo ya podemos llegar a la conclusión final con base a todos los resultados de los experimentos.
### 11. Análisis e interpretación
Una vez tenemos los resultados los analizamos y establecemos la conclusión a la que se llegará con los datos y desarrollar la explicación del por qué y todo el análisis que surge a base de toda la info recaudada.
### 12. Implementación y documentación
Documentar todo con base al análisis y la interpretación que hemos tenido. 

## Simulación de eventos discretos
### Modelos
Tenemos que tener nuevamente la representación de la realidad en un modelo.

Supuestos simples son usados para capturar el comportamiento importante.

#### Tipos de modelo
- Físico
- Cascada
- Analógico
- Simulación por computadora
- De mantenimiento

### Simulación de eventos discretos
Es un tipo de simulación donde se generan y administran eventos en el tiempo por medio de una cola de eventos ordenada según el tipo de simulación en que deben ocurrir para que el simulador lea la cola y dispare los eventos.

Es una herramienta para simular el comportamiento y desempeño de procesos del mundo real. La mayoría de los procesos de una organización se pueden describir con una serie de eventos separados y discretos que ocurren a lo largo de cierto tiempo y que alterna el estado de un sistema.

Un evento puede ser la llegada de un cliente, camión, inicio de un proceso, etc.

