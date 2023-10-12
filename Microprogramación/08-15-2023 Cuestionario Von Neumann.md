## Von Neumann[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-08-15-Cuestionario/#von-neumann "Permanent link")

URL Daniel Bautista 2121323 Pabo Coti 1653221

**1. ¿Cuáles son las cinco partes que forman la computadora Von Neumann?**

- ALU
- Unidad de control (Ordena, le dice a la ALU qué tipo de operaciones realizar, codifica y decodifica instrucciones. Coordina el resto de unidades)
- Memoria (Almacena datos e instrucciones)
- Dispositivo de entrada y salida (Son los puertos donde se intercambia información con el exterior, ya sea enviando o recibiendo datos)
- Bus de datos (vías en las que se transmiten los datos y trasladan la información)

**2. ¿Qué pasos emula una computadora con la arquitectura Von Neumann?**

- paso 1
    - Enciende la computadora
    - Obtiene la instrucción en la dirección de memoria indicada.
    - Lo guarda en el registro de instrucción.
    - Aumenta el contador del programa
- paso 2: aumenta el contador del programa
- paso 3:
    - Decodifica la instrucción.
    - Coordina los componentes para hacer la función.
- paso 4:
    - Ejecuta la instrucción.
    - La computadora toma “decisiones”.

**3. ¿En qué se basó Von Neumann para diseñar su arquitectura?**

El concepto de programas almacenados.

**4. ¿Qué es un programa almacenado?**

Un programa almacenado es un set de instrucciones almacenadas en la memoria que se comunican con el sistema a través de instrucciones que los programas pueden invocar. Anteriormente, las computadoras eran fabricadas a medidas, pensando únicamente en una tarea. Y NO se podía hacer una tarea para la que no fue pensada la máquina. Así que se buscó un enfoque en el que no se pensara en un programa almacenado, sino en una estructura con hardware genérico que permita que al cargarse un programa en memoria, se pueda llevar cualquier tarea. Así fue como llegamos al día de hoy, podemos usar un mismo chip para editar videos, escuchar música... Así que el programa almacenado era el conjunto de instrucciones que ya forman parte del software. Se carga el programa y se modifica según se necesite.

**5. ¿Cuál es la ventaja de tener un programa almacenado?**

Una unidad de memoria que evita tener que reestructurar la computadora para cada modificación en el software. También da la posibilidad de modificar los programas durante la ejecución.

**6. ¿Cuál fue el motivo principal para la creación de un programa almacenado?**

La necesidad de un programa que incrementa o modifica las direcciones de memoria de algunas instrucciones que debían ser hechas manualmente en los primeros diseños.

**7. ¿Cuál es el inconveniente con el diseño de Von Neumann?**

Un mal funcionamiento del programa puede dañar parcial o completamente el computador y se podían generar modificaciones accidentales o maliciosas de programas.

**8. ¿Qué es un cuello de botella?**  
Situación en la que un componente limita el rendimiento general del sistema o la conexión de un sistema.

**9. ¿Qué caracteriza el cuello de botella de Von Neumann?**

- Que los cambios en la memoria eran por medio de empujar la información en la memoria a un lado y trabajando un proceso a la vez en vez de trabajar varios procesos en simultáneo.
- Limitación entre del rendimiento del procesador debido a la limitación entre la comunicación de la memoria y el procesador.

**10. ¿Cómo se redujo el problema de las altas latencias?**  
- Introduciendo la memoria caché entre el CPU y la memoria principal.  
- Agregando una mejora de algoritmos de saltos (algoritmos predictivos). - Disponer de la operación y los datos en la misma instrucción.

**11. ¿Cuál fue la computadora teórica con memoria infinita?** _[no tan relevante]_

Máquina de Turing

`NOTA: La memoria caché es más rápida, pero también más cara de construir.`

# ALU[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-08-15-Cuestionario/#alu "Permanent link")

**1. ¿qué significa las letras A, B, F, D y R en un ALU?**

A y B son operandos | datos de entrada R es salida | resultado de operando A y B F es la entrada de la unidad de control | señal que la unidad de control le envía a la ALU para saber cómo operar A y B D es un estado de salida | indica si el resultado es negativo, positivo o cero

**2. ¿Cuál es la función de la ALU? y ¿Qué es la ALU?**

Es un circuito que calcula operaciones aritméticas y lógicas. Calcular operaciones aritméticas como suma, resta, multiplicación y división, asimismo como operaciones lógicas como "si, y, o, no"

**3. ¿De qué se compone un ALU?**

- Un circuito operacional
- Registro de entrada
- Registro acumulador
- Registro de estados

A y B se encuentran uno en el registro de entrada y otro en el registro acumulador. D es el registro de estados.

**3. ¿Cuáles son las operaciones que un ALU básico puede realizar?**

- Operaciones aritméticas de números enteros
- Operaciones lógicas de bits
- Operaciones de desplazamiento de bits (desplazar o rotar una palabra en un numero específico de bits a la izquierda o derecha.)

**4. ¿Qué es un ALU de cálculo en un solo ciclo de reloj?**

Un ALU que calcula la raíz cuadrada de cualquier número en un solo paso.

**5. ¿Qué sucede con la salida de un ALU?**

Es el resultado de cómputo de otra operación, así que será usada por otro ALU para tomar una decisión

**6. ¿Qué es un FPU?**

Una unidad de coma flotante, es básicamente lo mismo que un ALU pero que usa decimales para efectuar las operaciones

**7. ¿Qué es un cálculo interactivo en una ALU?**

Es un ALU complejo que realiza los cálculos de raíces cuadradas en cualquier número de un solo paso (ciclo de reloj).

**7.1. ¿Qué es un cálculo interactivo?**

El cálculo de la raíz cuadrada se puede realizar siguiendo varios enfoques: - Usando la descomposición matemática - Haciendo uso de librerías de software, pedirle al programador que resuelva el cálculo de raíces para calcular resultados a partir de librerías. - Cálculo interactivo - Emulación de software, se utiliza un software que imita la presencia de un procesador

Podemos tener un ALU que se encargue puramente de calcular raíces, pero este es más caro.

**8. ¿Qué son las entradas en un ALU?**

Son los operandos

**9. ¿Qué alternativas hay para el cálculo de raíces en los FPU?**

No implementarlo a nivel hardware y hacer que los programadores implementen _librerías_(bibliotecas de software) para cumplir con esta acción

**10. ¿Cuáles son las cuatro características que toda ALU debe tener?**

- Que la ALU sea capaz de calcular cualquier operación entre cualquier tipo de números enteros.
- Que calcule con varios pasos, cálculo interactivo.
- Que sea simple en el procesador y que tenga un coprocesador
- Emular la existencia del coprocesador, que siempre un programa intente hacer el cálculo por medio del sistema operativo
- Dar feedback del estado del coprocesador para el posible uso de bibliotecas de software

**11. ¿Cuál es la función de "OP" en la ALU?**

Seleccionan qué operación se llevará a cabo.

**12. ¿En qué parte de la computadora se encuentra la ALU?**

En el procesador, así que esto implica que puede estar en un CPU, GPU (aunque es discutible si las GPU usan ALU o FPU)

**13. ¿En qué sistema numérico opera la ALU?**

Binario, complemento A2, ya que permite hacer un uso más eficiente de la computadora al reutilizar el circuito de suma para realizar las restas.

**14. ¿Qué son las operaciones de desplazamiento de BIT?**

Desplazar o rotar una palabra en un numero específico de bits a la izquierda o derecha.

|1|1|0|1|0|
|---|---|---|---|---|
||||||

desplazamiento a la izquierda

|1|0|1|0|1|
|---|---|---|---|---|
||||||