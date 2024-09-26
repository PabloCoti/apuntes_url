# Pruebas
## Verificación
se refire al conjunto de tareas que garantizan que el software implementa correctamente una función específica.
## Validación
es un conjunto diferentes de tareas que aseguran que el software que se construye sigue los requerimientos del cliente.

Tanto la **verificación** como la **validación** inculyen un amplio arreglo de actividades de aseguramiento de calidad como revisiones técnicas, autitorías de calidad y configuración, monitoreo de rendimiento simulación, estudio de factibilidad y otros.

## Organización de las pruebas de software
El **desarrollador** siempre es responsable de probar los componentes y pruebas de integración.
Una vez el desarrollador hace las pruebas debe haber un grupo **independiente** que tiene que trabajar en encontrar errores y el **desarrollador** debe estar **disponible** para corregir lo encontrado.

## Estrategias de prueba
Usando las estrategias de desarrollo
1. Requisitos
2. Diseño
3. Código

Se tienen las estrategias de prueba como
1. Prueba del sistema
2. Prueba de validación
3. Prueba de integración
4. Prueba de unidad

**Nota** la prueba de *validación* se encarga de asegurarse de qué es lo que quiere el cliente.

## Antes de comenzar la prueba
- Establecer requerimientos **cuantificables** para saber cómo se va a medir el resultado de la prueba.
- Objetivos de la prueba
- Que el que lleva a cabo la prueba tenga un entendimiento del usuario para que sepan qué hacer y entender qué está bien para ellos.
- Enfatizar pruebas de ciclos rápidos, es decir, que debido a que se tiene que hacer las pruebas constantemente se quiere hacerlas lo más rápido posible (bien hechas).
- Que el software se pruebe a sí mismo, es decir, validaciones y try catch dentro del sistema para que pueda retener los errores y recuperarse.
- Revisiones técnicas **FILTRO ANTES DE LAS PRUEBAS**, esto quiere decir que antes de hacer una prueba se tienen que hacer las pruebas técnicas.

## Pruebas de unidad
Es cuando se prueba la característica por sí misma que se está desarrollando.

## Pruebas de integración
Es cuando se prueba cómo la característica que se está desarrollando interactúa con otras características del software.

### Integración
La integración se basa en la arquitectura establecida independientemente de cómo sea establecida.

La idea base para la integración es hacer las pruebas de los componentes y cómo interactúan.

### Integración continua de software
Es el ciclo de integración de manera periódica para el software.

Para hacer las pruebas se tiene que seleccionar los componentes que se quieren integrar para poder establecer una estrategia de integración dónde se tienen que preparar las herramientas y las personas para hacer la prueba.

### Pruebas base
#### Big bang
en este caso se toma en cuenta de que las pruebas unitarias dan la aprovación y la estrategia es probar **todo** el programa de manera completa. Bajo esta lógica **TODO DEBE FUNCIONAR**. 

El **problema** que se puede presentar con esto es que al momento de encontrar una falla no se puede definir exactamente de dónde proviene.
#### Incrementales
Se hace la prueba módulo por módulo. 
##### Ascendentes
Se trabaja tomando en cuenta la relación que tienen los módulos entre sí y la forma en la que se llaman, para esto se parte de los último módulos llamados, viéndolo como un árbol **serían las hojas**.

Para esta prueba se tiene que establecer un driver que instancia cada módulo para probar su funcionamiento. Una vez probado la idea es que se haga una secuencia de pruebas módulo por módulo.
##### Descendentes
En este caso también se toma en cuenta la relación que tienen los módulos entre sí y la forma en que se llaman, pero aquí se parte desde la **raíz del árbol** y posteriormente se va bajando enter los módulos.

Para estas pruebas se tienen staffs para que den los resultados de otros módulos de forma predefinida.

Se puede ir de forma vertical, es decir, seguir una rama y después pasarse a otra o se puede ir de forma horizontal y es que después de pasar al nivel 1 se prueban los módulos del nivel 2 y así consecutivamente.
## Pruebas Alfa
tipo de prueba de aceptación del usuario que suelen realizar los probadores de software internos. A veces pueden realizarla usuarios potenciales, pero en cualquier caso, su misión principal es comprobar si el producto cumple todos los requisitos y detectar todos los posibles problemas y errores antes de presentar el producto final a los usuarios finales.
## Pruebas Beta
una forma externa de pruebas de aceptación del usuario, y las realizan usuarios reales en su entorno real.

## Pruebas del sistema
Este sirve que al momento en el que suceda un error en el sistema los desarrolladores se culpen unos a otros. Para esto se deben anticipar los problemas y
1. Diseñar rutas de manejo de error que prueben toda la información proveniente de otros elementos del sistema.
2. Realizar una serie de pruebas que simulen los datos u otros errores potenciales en la interfaz del software.
3. Registrar los resultados de las pruebas para usar como "evidencia" si ocurre el "dedo a acusador".
4. Participar en la planificación y diseño de pruebas del sistema para garantizar que el software de prueba de manera adecuada.

Aunque cada prueba diferente para un propósito diferente **todas** sirven para **verificar** el funcionamiento correcto del sistema.

### Tipos de pruebas del sistema
#### Pruebas de recuperación
Fuerza al software a fallar en varias formas y verifica que la recuperación se realice de manera adecuada.
##### Si la recuperación es automática
Se evalúa el reinicio, los mecanismos de puntos de verificación, la recuperaciíon de datos y la reanudación para correcciones.
##### Si la recuperación requiere de intervención humana
Se evalúa el tiempo medio de la reparación para determinar si está dentro de los límites aceptables..

#### Pruebas de seguridad
Intenta verificar que los mecanismo de protección que se construyen el un sistema en realidad lo protegerán de cualquier penetración impropia

Durante la prueba puede hacer uso de todos los recursos que puede para hacer ingreso al sistema.

El objetivo de esto es que los costos de llegar a la información sean mucho mayores al valor de la información. Es decir, desmotivar a la persona que está intentando llegar a la información.

#### Pruebas de esfuerzo
Se ejecutan en un sistema en forma que demanda recursos en cantidad, frecuencia o volumen anormales.

Para lograr esto se hace un aumento en los requests que se le hacen al sistema ya sea por medio de muchos usuarios u otros métodos.

#### Pruebas de sensibilidad
El **análisis de sensibilidad** es una herramienta a través de la cual se **estudia los cambios que se producen en una variable cuando se introducen ciertas variaciones en el modelo financiero.** Así, el análisis de sensibilidad tiene por objeto permitir a una empresa o entidad a predecir cuáles serán los resultados que se obtengan con un proyecto determinado, además de que será fundamental para poder comprender las incertidumbres, las limitaciones y el alcance de cualquier decisión que se tome al respecto.

El análisis de sensibilidad también es conocido como análisis hipotético, ya que resulta fundamental para determinar cómo los diferentes valores que puede adoptar una variable independiente afectan a una variable dependiente.

#### Pruebas de rendimiento
Tienen como objetivo determinar le rendimiento del sistema bajo una carga de trabaja definida utilizando diferentes tipos de pruebas de rendimiento tales como pruebas decarga, de estrés y estabilidad.

##### Pruebas de carga
Estas se utilizan para evaluar cómo actúa el sistema con una carga variable de usuarios pero dentro de los niveles esperados de la aplicación.

##### Pruebas de estrés
Evalúa el sistema sometiéndolo a carga hasta que falle, Permitirá identificar cuellos de botella y conocer la carga máxima admitida.

#### Pruebas funcionales de software (requisitos funcionales)
Las pruebas funcionales son un tipo de pruebas que buscan establecer si cada característica de la aplicación funciona según los requisitos del software. Cada función se compara con el requisito correspondiente para determinar si su resultado se ajusta a las expectativas del usuario final. Las pruebas se realizan proporcionando entradas de muestra, capturando las salidas resultantes y verificando que las salidas reales son las mismas que las esperadas.  
  
Algunos ejemplos de pruebas funcionales son:  
  

- ¿Pueden los usuarios iniciar sesión con éxito en la aplicación una vez que proporcionan credenciales legítimas?
- ¿Rechaza la pasarela de pago la entrada y muestra un mensaje de error cuando un usuario introduce un número de tarjeta de crédito no válido?
- ¿Las entradas de la pantalla "Añadir nuevo registro" añaden y guardan correctamente un nuevo registro en la base de datos?

**NOTA** es importante hacer las pruebas con frecuencia para ver si nuestro sistema está evolucionando correctamente con cada actualización.

#### Pruebas de despliegue
A estas pruebas también se les conoce coom prueba de configuraicón.

Ejecuta el software en cada entorno en el que se debe operar. Además examina todos los procedimientos de instalación e instaladores en así como en toda la documentación seusará para introducir el software a los usuarios finales.

## Qué hace una buena prueba
- Tiene alta probabilidad de encontrar un error
- No es redundante
- Debe ser "la mejor de la camada". Usarse la prueba que tenga la mayor probabilidad de descubrir toda una clase de errores.
- No tiene que se muy simple o compleja.

# Pruebas que aplicaría a mi proyecto
- Pruebas de seguridad para asegurarme que no se puede vulnerar mi sistema
- Pruebas funcionales
- Pruebas unitarias
- Pruebas de integración de forma periódica
