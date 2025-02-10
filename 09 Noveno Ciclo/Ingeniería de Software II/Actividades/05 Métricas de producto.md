# Métricas de producto
En sistemas no medimos nuestras métricas de la misma forma que lo hacemos en otros sistemas de producción, hasta existe gente que tiene la idea de que el proceso es inmesurable, sin embargo, existen varios métodos para llevar la métrica de un producto. Como principio nosotros para poder definir las métricas tenemos que saber diferenciarlas de *medida* (indicio cuantitativo que representa una cantidad de algo) y de *indicador* (metrica(s) que proporcionan comprensión sobre un proceso de software).

La métrica es uno de los retos con los que nos presentamos en cuando a la producción de software nos referimos desde tiempo inmemorables, muchas personas argumentan que la medición de producto que se realiza durante las primeras etapas del proceso de software brinda a los ingenieros de software un mecanismo para poder validar la calidad.

Que sea un reto no quiere decir que no se pueda y no se deba hacer, la **importancia** de las métricas recae en que *primero*, auxilien en la evaluación de los modelos de análisis y diseño, *segundo* proporcionan un indicio de la complejidad de los diseños procedimentales y el código fuente y *tercero* facilitan el diseño de pruebas más efectivas. Para poder realizar las métricas hay algunos pasos que podemos seguir para poder desarrollarlas.
- *Formulación*: Derivar medidas y métricas de software apropiadas para la representación del software que estamos haciendo.
- *Recolección*: Acumular los datos necesarios para poder derivar las métricas <u>formuladas</u>.
- *Análisis*: El cálculo de métricas y la aplicación de herramientas matemáticas.
- *Interpretación*: Evaluación de las métricas resultantes para comprender la calidad de la representación.
- *Retroalimentación*: Recomendaciones derivadas de la interpretación de las métricas del producto que se van a dirigir al equipo de software.

Aunque sigamos estos pasos ¿cómo sabemos que las métricas que creamos son útiles? Y la respuesta para esto es que las métricas de software solo son útiles si se caracterízan efectivamente y se validan de manera adecuada. Para ver si es útil podríamos tomar en cuenta las siguientes características:
- *Una métrica debe tyener propiedades matemáticas deseables*: La métrica tiene que estar en un rango significativo como lo sería del 0 al 1 y que tiene que tener una escala racional.
- *Cuando una métrica representa una característica de software que aumenta cuando ocurren rasgos positivos o que sidminuye cuando se encuentran rasgos indeseables, el valor de la métrica debe aumentar o disminuir en la misma forma*
- *Cada métrica debe validarse de manera empírica en una gran variedad de contextos antes de publicarse o utilizarse para tomar deciciones*: debe medir el factor de interés independientemente de otros factores y debe ser escalable para que pueda crecer junto al sistema y que funcione en varios lenguajes.

Nuestras métricas deben estar **siempre** orientadas a una meta para que estas nos sirvan correctamente también, entonces, nosotros para tener las métricas planteadas debemos tener la meta establecida y tener las preguntas a las que queremos que responda. Una vez tenemos esos datos ya podemos proceder a hacer la métrica.

Para poder establecer el objetivo podemos:
Analizar el atributo que se va a medir y el propósito que le queremos dar con base a una actividad o atributo, esto se hace desde el punto de vista de las personas a las que les interesa la medición con el contexto en el que se va a desarrollar el software.

Tener varias métricas o tener métricas muy complejas no siempre es lo más necesario, a veces esto puede obstaculizar el proceso de desarrollo de nuestro software por lo que una métrica tiene que ser:
- **Simple y calculable**, debe ser fácil de entender cómo sacar la métrica y cómo calcularla.
- **Empírica e intuitivamente convincente**: debe satisfacer las nociones intuitivas dle ingeniero sobre el producto que elabora.
- **Congruente y objetiva**: debe producir resultados directos.
- **Constante en su uso de unidades y dimensiones**: siempre se debe usar la mate para que no se generen combinaciones extrañas de unidades.
- **Independiente del lenguaje**: no deben ser directas para el lenguaje que se usa si no que para el sistema.
- **Mecanismo efectivo para la retroalimentación de alta calidad**: deben proporcionar información suficiente para poder mejorar el producto.

