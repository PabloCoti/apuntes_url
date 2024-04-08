## Tabla de contenidos

- [[#MODELOS PRESCRIPTIVOS]]
    - [[#Modelo en cascada]]
    - [[#Modelo en V]]
    - [[#Modelo de proceso incremental]]
- [[#Modelos de proceso evolutivo]]
  - [[#Prototipos]]
  - [[#Espiral]]
  - [[#Diferencia entre prototipos y espiral]]
      - [[#Modelo de prototipos:]]
      - [[#Modelo en espiral:]]
  - [[#Modelos concurrentes]]
- [[#Modelos de proceso especializado]]
    - [[#Desarrollo basado en componentes]]
    - [[#EI modelo de métodos formales]]
    - [[#Desarrollo de software orientado a aspectos]]
- [[#Proceso unificado]]
    - [[#Fases]]
- [[#MODELOS DEL PROCESO PERSONAL Y DEL EQUIPO]]
    - [[#Proceso personal del software (PPS)]]
    - [[#Proceso del equipo de software (PES)]]
- [[#Desarrollo Ágil]]
    - [[#Agilidad]]
    - [[#Programación extrema]]
    - [[#Desarrollo adaptativo de software (DAS)]]
    - [[#SCRUM]]
    - [[#Método de desarrollo de sistemas dinámicos (MDSD)]]
    - [[#Cristal]]
    - [[#Desarrollo impulsado por las características (DIC)]]
    - [[#Desarrollo esbelto de software (DES)]]
    - [[#Modelado (MA)]]
    - [[#EI proceso unificado ágil (PUA)]]
- [[#Diagramas UML]]
    - [[#Casos de uso]]
    - [[#Diagrama de actividades]]


> <div style="page-break-after: always;"></div>

## MODELOS PRESCRIPTIVOS
### Modelo en cascada
Hay veces en las que los requerimientos para cierto problema se comprenden bien: cuando el trabajo desde la comunicación hasta el despliegue fluye en forma razonablemente lineal. Esta situación se encuentra en ocasiones cuando deben hacerse adaptaciones o mejoras bien definidas a un sistema ya existente.
![[Pasted image 20240404103104.png]]

**Solo sirve cuando se tiene 100% claro lo que se quiere como resultado final**
### Modelo en V
Variante del modelo en cascada con testeos en paralelo y una vez el software ejecutable se ha generado
![[Pasted image 20240404210707.png]]

### Modelo de proceso incremental
El modelo incremental combina elementos de los flujos de proceso lineal y paralelo . El modelo incremental aplica secuencias lineales en forma escalonada a medida que avanza el calendario de actividades. Cada secuencia lineal produce "incrementos" de software susceptibles de entregarse de manera parecida a los incrementos producidos en un flujo de proceso evolutivo.
![[Pasted image 20240404211613.png]]

## Modelos de proceso evolutivo
El software, como todos los **sistemas complejos**, evoluciona en el tiempo. Es frecuente que los **requerimientos** del negocio y **del producto cambien conforme avanza el desarrollo**, lo que hace que no sea realista trazar una trayectoria rectilínea hacia el producto final; los plazos apretados del mercado hacen que sea imposible la terminación de un software perfecto, pero debe lanzarse una versión limitada a fin de aliviar la presión de la competencia o del negocio; se comprende bien el conjunto de requerimientos o el producto básico, pero los detalles del producto o extensiones del sistema aún están por definirse. En estas situaciones y otras parecidas se necesita un modelo de proceso diseñado explícitamente para adaptarse a un producto que evoluciona con el tiempo.

Los modelos evolutivos son iterativos. se caracterizan por la manera en la que permiten desarrollar versiones cada vez más completas del software.

### Prototipos
Hacer prototipos. Es frecuente que un cliente defina un conjunto de objetivos generales para el software, pero que no identifique los requerimientos detallados para las funciones y características.

Es más común usarlo como una técnica que puede implementarse en el contexto de cualquiera de los modelos de proceso descritos en este capítulo. Hacer prototipos le ayudará a mejorar la comprensión de lo que hay que elaborar cuando los requerimientos no están claros.

![[Pasted image 20240404214034.png]]

Algunos prototipos serán desechables, sin embargo, la mayoría será con un uso real dentro del proyecto con "unos cuantos arreglos".

### Espiral
El modelo espiral es un modelo evolutivo del proceso del software y se acopla con la naturaleza iterativa de hacer prototipos con los aspectos controlados y sistémicos del modelo de cascada. Tiene el potencial para hacer un **desarrollo rápido de versiones cada vez más completas**. Este va en **sentido horario**.

![[Pasted image 20240404214352.png]]

### Diferencia entre prototipos y espiral
#### Modelo de prototipos:
- Se centra en la creación de prototipos iterativos del sistema.
- El objetivo es obtener comentarios de los usuarios y mejorar el sistema de forma incremental.
- Se utiliza para sistemas donde los requisitos no están bien definidos.
- Se puede utilizar en conjunto con otros modelos de desarrollo de software.
#### Modelo en espiral:
- Combina el enfoque iterativo del modelo de prototipos con la estructura del Modelo en cascada.
- Divide el desarrollo del sistema en una serie de ciclos, cada uno de los cuales incluye las fases de planificación, análisis, diseño, implementación y pruebas.
- Se utiliza para sistemas donde los requisitos son complejos y el riesgo de errores es alto.
- Es un modelo más formal que el modelo de prototipos.

### Modelos concurrentes
El modelo de desarrollo concurrente, en ocasiones llamado ingeniería concurrente, permite que un equipo de software represente elementos iterativos y concurrentes de cualquiera de los modelos de proceso.
La figura muestra la representación esquemática de una actividad de ingeniería de software dentro de la actividad de modelado con el uso del enfoque de modelado concurrente. La actividad **modelado** puede estar en cualquiera de los estados mencionados en un momento dado. En forma similar, es posible representar de manera análoga otras actividades, acciones o tareas (por ejemplo, comunicación o construcción). Todas las actividades de ingeniería de software existen de manera concurrente, pero se hallan en diferentes estados.

![[Pasted image 20240404215444.png]]

## Modelos de proceso especializado
### Desarrollo basado en componentes
El modelo de desarrollo basado en componentes incorpora muchas de las características del modelo espiral, sin embargo, el modelo de desarrollo basado en componentes construye aplicaciones a partir de fragmentos de software prefabricados.

Las actividades de modelado y construcción comienzan con la identificación de candidatos de componentes:

1. Se investigan y evalúan, para el tipo de aplicación de que se trate, productos disponibles basados en componentes.
2. Se consideran los aspectos de integración de los componentes.
3. Se diseña una arquitectura del software para que reciba los componentes.
4. Se integran los componentes en la arquitectura.
5. Se efectúan pruebas exhaustivas para asegurar la funcionalidad apropiada.

### EI modelo de métodos formales
EI modelo de métodos formales agrupa actividades que llevan a la especificación matemática formal del software de cómputo. Los métodos formales permiten especificar, desarrollar y verificar un sistema basado en computadora por medio del empleo de una notación matemática.

- EI desarrollo de modelos formales consume mucho tiempo y es caro.
- Debido a que pocos desarrolladores de software tienen la formación necesaria para aplicar métodos formales, se requiere mucha capacitación.
- Es difícil utilizar los modelos como mecanismo de comunicación para clientes sin complejidad técnica.

### Desarrollo de software orientado a aspectos
El desarrollo orientado a aspectos (AOP) es un paradigma de programación que se centra en la modularización de las preocupaciones transversales de un sistema. Estas preocupaciones transversales son funcionalidades que no se pueden encapsular completamente en un solo módulo o clase, como el registro, la seguridad, la gestión de transacciones y el control de concurrencia.

## Proceso unificado
En cierto modo, el proceso unificado es un intento por obtener los mejores rasgos y características de los modelos tradicionales del proceso del software, pero en forma que implemente muchos de los mejores principios del desarrollo ágil de software. EI proceso unificado reconoce la importancia de la comunicación con el cliente y los métodos directos para describir su punto de vista respecto de un sistema (el caso de uso). Hace énfasis en la importancia de la arquitectura del software y "ayuda a que el arquitecto se centre en las metas correctas, tales como que sea comprensible, permita cambios futuros y la reutilización".

![[Pasted image 20240404221903.png]]

### Fases
- La fase de **concepción** agrupa actividades tanto de comunicación con el cliente como de planeación. Se identifican los requerimientos del negocio se propone una arquitectura aproximada para el sistema y se desarrolla un plan para la naturaleza iterativa e incremental del proyecto en cuestión.
- La fase de **elaboración** incluye las actividades de comunicación y modelado del modelo general del proceso.
- La fase de **construcción** es idéntica a la actividad de construcción definida para el proceso general del software.
- La fase de **transición** incluye las últimas etapas de la actividad general de construcción y la primera parte de la actividad de despliegue general (entrega y retroalimentación). Se da el software a los usuarios finales para las pruebas beta, quienes reportan tanto los defectos como los cambios necesarios.
- La fase de **producción** coincide con la actividad de despliegue del proceso general. Durante esta fase, se vigila el uso que se da al software, se brinda apoyo para el ambiente de operación (infraestructura) y se reportan defectos y solicitudes de cambio para su evaluación.

## MODELOS DEL PROCESO PERSONAL Y DEL EQUIPO
El mejor proceso del software es el que está cerca de las personas que harán el trabajo.

### Proceso personal del software (PPS)
Proceso que lleva cada desarrollador por su cuenta bajo estas cinco actividades estructurales.
- **Planeación**. Estimaciones tanto del tamaño como de los recursos. Además, realiza la estimación de los defectos. Todas las mediciones se registran en hojas de trabajo o plantillas. Se identifican las tareas de desarrollo y se crea un programa para el proyecto.
- **Diseño de alto nivel**. Se desarrollan las especificaciones externas para cada componente que se va a construir y se crea el diseño de componentes. Si hay incertidumbre, se elaboran prototipos. Se registran todos los aspectos relevantes y se les da seguimiento. Revisión del diseño de alto nivel. se aplican métodos de verificación formal para descubrir errores en el diseño. se mantienen las mediciones para todas las tareas y resultados del trabajo importantes.
- **Desarrollo**. Se mejora y revisa el diseño del componente. EI código se genera, revisa, compila y prueba. Las mediciones se mantienen para todas las tareas y resultados de trabajo de importancia.
- **Post mórtem**. se determina la eficacia del proceso por medio de medidas y mediciones obtenidas y se deben dar la guía para modificar el proceso a fin de mejorar su eficacia.

### Proceso del equipo de software (PES)
Es la aplicación del proceso personal de software en grupos de desarrolladores en proyectos con las siguientes características.
- Formar equipos autodirigidos que planeen y den seguimiento a su trabajo.
- Mostrar a los gerentes cómo dirigir y motivar a sus equipos y cómo ayudarlos a mantener un rendimiento máximo.
- Acelerar la mejora del proceso del software, haciendo del modelo de madurez de la capacidad, el comportamiento normal y esperado.
- Brindar a las organizaciones muy maduras una guía para la mejora
- Facilitar la enseñanza universitaria de aptitudes de equipo con grado industrial.

## Desarrollo Ágil
Cualquier proceso del software ágil se caracteriza por la forma en la que aborda cierto número
de suposiciones clave acerca de la mayoría de proyectos de software:
1. Es difícil predecir qué requerimientos de software persistirán y cuáles cambiarán. También es difícil pronosticar cómo cambiarán las prioridades del cliente a medida que avanza el proyecto.
2. Para muchos tipos de software, el diseño y la construcción están imbricados. Es decir, ambas actividades deben ejecutarse en forma simultánea, de modo que los modelos de diseño se prueben a medida que se crean. Es difícil predecir cuánto diseño se necesita antes de que se use la construcción para probar el diseño.
3. EI análisis, el diseño, la construcción y las pruebas no son tan predecibles como nos gustaría (desde un punto de vista de planeación).
### Agilidad
1. La prioridad más alta es satisfacer al cliente a través de la entrega pronta y continua de software valioso.
2. Son bienvenidos los requerimientos cambiantes, aun en una etapa avanzada del desarrollo. Los procesos ágiles dominan el cambio para provecho de la ventaja competitiva del cliente.
3. Entregar con frecuencia software que funcione, de dos semanas a un par de meses, de preferencia lo más pronto que se pueda.
4. Las personas de negocios y los desarrolladores deben trabajar juntos, a diario y durante todo el proyecto.
5. Hay que desarrollar los proyectos con individuos motivados. Debe darse a éstos el ambiente y el apoyo que necesiten, y confiar en que harán eI trabajo.
6. EI método más eficiente y eficaz para transmitir información a los integrantes de un equipo de desarrollo, y entre éstos, es la conversación cara a cara.
7. La medida principal de avance es el software que funciona. Los procesos ágiles promueven eI desarrollo sostenible. Los patrocinadores, desarrolladores y usuarios deben poder mantener un ritmo constante en forma indefinida.
8. La atención continua a la excelencia técnica y el buen diseño mejora la agilidad.
9. Es esencial la simplicidad: el arte de maximizar la cantidad de trabajo no realizado.
10. Las mejores arquitecturas, requerimientos y diseños surgen de los equipos con organi-
zación propia.
EI equipo reflexiona a intervalos regulares sobre cómo ser más eficaz, para después afi-
nar y ajustar su comportamiento en consecuencia.


### Programación extrema
A fin de ilustrar un proceso ágil con más detalle, daremos un panorama de la programación extrema (XP), el enfoque más utilizado del desarrollo de software ágil. Tiene como objetivo el proceso ágil para ser usado específicamente en organizaciones grandes.

![[Pasted image 20240404230227.png]]

### Desarrollo adaptativo de software (DAS)
EI desarrollo adaptativo de software (DAS) fue propuesto como una técnica para elaborar software y sistemas complejos. Los fundamentos filosóficos del DAS se centran en la colaboración humana y en la organización propia del equipo. Highsmith argumenta que un enfoque de desarrollo adaptativo basado en la colaboración es "tanto una fuente de orden en nuestras complejas interacciones, como de disciplina e ingeniería". Él define un "ciclo de vida" del DAS que incorpora tres fases: especulación, colaboración y aprendizaje.

### SCRUM
![[Pasted image 20240404230352.png]]

### Método de desarrollo de sistemas dinámicos (MDSD)
EI método de desarrollo de sistemas dinámicos (MDSD) ISta971 es un enfoque de desarrollo ágil de software que "proporciona una estructura para construir y dar mantenimiento a sistemas que cumplan restricciones apretadas de tiempo mediante la realización de prototipos incrementales en un ambiente controlado de proyectos". Es una versión modificada del principio de pareto.

### Cristal
Alistar Cockburn creó la familia Cristal de métodos ágileslS a fin de obtener un enfoque de desarrollo de software que premia la "maniobrabilidad" durante 10 que Cockburn caracteriza como "un juego cooperativo con recursos limitados, de invención y comunicación, con el objetivo primario de entregar software útil que funcione y con la meta secundaria de plantear el siguiente juego".

### Desarrollo impulsado por las características (DIC)
Modelo práctico de proceso para la ingeniería de software orientada a objetos, proceso adaptativo y ágil aplicable a proyectos de software de tamaño moderado y grande.

DIC adopta una filosofía que: 
1) pone el énfasis en la colaboración entre los integrantes de un equipo DIC; 
2) administra la complejidad de los problemas y del proyecto con el uso de la descomposición basada en las características, seguida de la integración de incrementos de software, y 
3) comunica los detalles técnicos en forma verbal, gráfica y con medios basados en texto.

![[Pasted image 20240404230750.png]]

### Desarrollo esbelto de software (DES)
 adapta los principios de la manufactura esbelta al mundo de la ingeniería de software. Los principios de esbeltez que inspiran al proceso DES se resumen como sigue: eliminar el desperdicio, generar calidad, crear conocimiento, aplazar el compromiso, entregar rápido, respetar a las personas y optimizar al todo.

### Modelado (MA)
Hay muchas situaciones en las que los ingenieros de software deben construir sistemas grandes
de importancia critica para el negocio. El alcance y complejidad de tales sistemas debe modelarse de modo que: 
1) todos los actores entiendan mejor cuáles son las necesidades que deben satisfacerse, 
2) el problema pueda dividirse con eficacia entre las personas que deben resolverlo,
3) se asegure la calidad a medida que se hace la ingeniería y se construye el sistema.

Aunque el MA sugiere una amplia variedad de principios de modelado “fundamentales” y
“suplementarios”, aquellos que son exclusivos del MA son los siguientes:
- **Modelo con un propósito**. Un desarrollador que use el MA debe tener en mente una meta específica antes de crear el modelo.
- **Uso de modelos múltiples**. El MA sugiere que para dar la perspectiva necesaria, cada modelo debe presentar un diferente aspecto del sistema y que sólo deben utilizarse aquellos modelos que den valor al público al que se dirigen.
- **Viajar ligero**. Conforme avanza el trabajo de ingeniería de software, conserve sólo aquellos modelos que agreguen valor a largo plazo y elimine los demás.
- **El contenido es más importante que la representación**. El modelado debe transmitir información al público al que se dirige. Un modelo con sintaxis perfecta que transmita poco contenido útil no es tan valioso como otro que tenga notación defectuosa, pero que, no obstante, provea contenido de valor para los usuarios.
- **Conocer los modelos y herramientas que se utilizan en su creación**. Entender las fortalezas y debilidades de cada modelo y las herramientas que se emplean para crearlos.
- **Adaptación local**. El enfoque de modelado debe adaptarse a las necesidades del equipo ágil.

### EI proceso unificado ágil (PUA)
EI proceso unificado ágil (PUA) adopta una filosofía "en serie para lo grande" e "iterativa para lo pequeño" a fin de construir sistemas basados en computadora. Al adoptar las activida-
des en fase clásicas del PU —concepción, elaboración, construcción y transición—, el PUA brinda
un revestimiento en serie  que permite que el equipo visualice el flujo general del proceso de un proyecto de software. Sin embargo, dentro de cada actividad, el equipo repite con objeto de alcanzar la agilidad
y entregar tan rápido como sea posible incrementos de software significativos a los usuarios
finales. Cada iteración del PUA aborda las actividades siguientes:
- **Modelado**. Se crean representaciones de UML de los dominios del negocio y el problema. No obstante, para conservar la agilidad, estos modelos deben ser "sólo suficientemente buenos" para permitir que el equipo avance.
- **Implementación**. Los modelos se traducen a código fuente.
- **Pruebas**. Igual que con la XP, el equipo diseña y ejecuta una serie de pruebas para detectar errores y garantizar que el código fuente cumple sus requerimientos.
- **Despliegue**. El despliegue en este contexto se centra en la entrega de un incremento de software y en la obtención de retroalimentación de los usuarios finales.
- **configuración y administración del proyecto**. En el contexto del PUA, la administración de la configuración incluye la administración del cambio y el riesgo, y el control de cualesquiera productos del trabajo persistentes que produzca el equipo.

## Diagramas UML
Un diagrama UML (Unified Modeling Language) es una representación gráfica de los elementos de un sistema de software. Los diagramas UML se utilizan para visualizar, especificar, construir y documentar los artefactos de un sistema.

**Usos de los diagramas UML**
- **Comunicación:** Los diagramas UML facilitan la comunicación entre los diferentes stakeholders del proyecto, como los desarrolladores, los analistas y los clientes.
- **Documentación:** Los diagramas UML sirven como documentación del sistema, lo que facilita su comprensión y mantenimiento.
- **Diseño:** Los diagramas UML se pueden utilizar para diseñar el sistema antes de comenzar a codificarlo.
- **Análisis:** Los diagramas UML se pueden utilizar para analizar el sistema y detectar posibles problemas.
- **Implementación:** Los diagramas UML se pueden utilizar como guía para la implementación del sistema.

### Casos de uso
Un diagrama UML de casos de uso es un tipo de diagrama UML que se utiliza para representar los casos de uso de un sistema. Un caso de uso es una secuencia de acciones que un usuario realiza para lograr un objetivo específico.

**Elementos:**
- **Actores:** Representan a los usuarios del sistema o a otros sistemas que interactúan con él.
- **Casos de uso:** Representan las funcionalidades del sistema desde la perspectiva del usuario.
- **Relaciones:** Representan las diferentes relaciones entre los actores y los casos de uso, como la asociación, la inclusión y la extensión.

### Diagrama de actividades
Un diagrama UML de actividades es un tipo de diagrama UML que se utiliza para representar el flujo de actividades de un sistema. Un diagrama de actividades describe las diferentes acciones que se llevan a cabo para completar una tarea o un proceso.

**Elementos:**
- **Actividades:** Representan los pasos que se deben seguir para completar una tarea.
- **Flujos de control:** Representan el orden en que se ejecutan las actividades.
- **Nodos:** Representan puntos de inicio, fin y decisión dentro del diagrama.
- **Arcos:** Representan las relaciones entre las actividades y los nodos.