La arquitectura es un conjunto de instrucciones, entre ellas CISC y RISC son las más comunes. Cada arquitectura tiene ventajas y desventajas, ya sea un cuello de botella o latencias altas. - CISC - RICS

`NOTA: Arduino implementa la arquitectura harvard, y tiene todo lo necesario para considerarse una computadora.`

Implementar la tecnología a grandes escalas, es complicado. Permite llevar a cabo instrucciones paralelas en 64 bits es difícil porque _tener buses para 64 bits requiere que el CPU sea más grande_ y el aumento de tamaño trae más complicaciones, entre ellas las altas temperaturas

Las personas que observan las debilidades de Von Neumann plantean problemas con la tecnología RICS. Entonces surge **"CISC"**, plantean en no tener un conjunto de instrucciones que puedan hacer todo y mejor con un conjunto pequeña de instrucciones el programador _se las arregle_.

|CISC|RISC|
|---|---|
|CISC es más ligero|RISC es mas rápido que CISC|
|CISC no puede tener paralelismo debido a las instrucciones simples|Divide una tarea en multiples tareas, permitiendo paralelismo|
|EJ: 7*4 se dividiria en una instruccion 7 + 7 + 7 + 7|EJ: 7 * 4 en RICS tendria la instruccion MULT|
|CISC emula multitasking|RISC permite multitasking|

##### `NOTA: CISC se usa en paralelismo con con Harvard en los microcontroladores`[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-08-22-ARQUITECTURAS/#nota-cisc-se-usa-en-paralelismo-con-con-harvard-en-los-microcontroladores "Permanent link")

En algún punto del procesamiento de CISC las operaciones se convierten en mini aplicaciones RISC.

# Segmentación de instrucciones[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-08-22-ARQUITECTURAS/#segmentacion-de-instrucciones "Permanent link")

Para que el paralelismo sea posible, las instrucciones tienen que poder segmentarse (dividirse). CISC es dificil de segmentar por las instrucciones son complejas. Como en RISC la filosofía es _instrucciones simples_ la segmentación es más fácil.

EJ:

```
OPCION 1: Si quiero abrir un car wash. Se puede utilizar una máquina de las que hacen todo, colocan agua, jabón y espacio grande, pero para esto, necesitamos hacer una inversión monetaria alta, y para poder atender un nuevo carro primero debe terminar con el carro actual.

OPCION 2: combrar dos hidrolabadoras, un trapo, y contratar operarios, así 1 aplica el jabón, otro restriega el jabón y así sucesibamente. La ventaja de esta es que una vez se acumulan vehiculos, se pueden alternar tareas, uno lava el carro mientras otro lo enjabona.

CISC sería como comprar una maquina para hacerlo todo, al ser algo tan complejo, nos complica la segmentación de tareas.

RISC sería como la opción 2, al dividir en varias tareas, podemos ejecutar varias tareas de manera simultanea.
```

```

----- PROCESO | EJEMPLO PARA SUBDIVIDIR -----

-> MOJAR EL CARRO
-> APLICAR JABÓN
-> DESINFECTAR
-> SECAR

IF:   INSTRUCTION FETCHING  |  RECONOCER EL TIPO DE INSTRUCCION
ID:   INSTRUCTION DECODING  |  LA CU LE MANDA INFORMACIÓN A LA ALU PARA QUE CUMPLA SU TAREA 
EXE:  EXECUTION             |  SE GUARDAN LOS RESULTADOS
MEM:  MEMORY ACCESS         |  SE ACCEDE A LA MEMORIA
WB:   WRITE BACK            |  SE ESCRIBEN LOS RESULTADOS

Estas son las 5 operaciones para cualquier tarea que se ejecute.

---------------------------------------------

```

# Paralelismo[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-08-22-ARQUITECTURAS/#paralelismo "Permanent link")

Se plantan 3 posibilidades 
- **_Sub-escalar_**: Es aquel que le va llevar más de un ciclo de reloj ejecutar una instrucción. Ejecuta menos de una instrucción por ciclo de reloj. - OP 1 -> OP 2 -> OP 3. - Hasta que no termine con una instrucción, no continua con la otra.

|IF|ID|EXE|MEM|WB| | | | | | |-|-|-|-|-|-|-|-|-|-|-|-|-|-| | | | | | |IF | ID| EXE|MEM | WB| | | | | | | | || | | | | IF|ID |MEM | WB|

- **_Escalar_**: Es aquel que le va llevar exactamente un ciclo de reloj ejecutar una instrucción. Ejecuta una instrucción por ciclo de reloj.

|IF|ID|EXE|MEM|WB| |-|-|-|-|-|-| - | | |IF | ID| EXE| MEM|WB | | | |IF | ID| EXE| MEM| WB|

- **_Super-escalar_** : Son aquellos que tienen dos o más núcleos. Atiende dos o más instrucciones en un mismo ciclo de reloj.

| IF | ID | EXE | MEM | WB | |-|-|-|-|-|-|-|-| |IF|ID|EXE|MEM|WB| ||IF|ID|EXE|MEM|WB|| ||IF|ID|EXE|MEM|WB|| |||IF|ID|EXE|MEM|WB| |||IF|ID|EXE|MEM|WB| ||||IF|ID|EXE|MEM|WB| ||||IF|ID|EXE|MEM|WB|

Todas las instrucciones se ejecutan en un ciclo de reloj, todo procesador es vendido con una velocidad de procesador. `JE: 2Ghz serian 2,000,000,000,000 de ciclos por segundo` y en esa vuelta se ejecuta una porción de instrucción, a cada instrucción le toma 5 ciclos de reloj

No podemos comparar un procesador únicamente por su velocidad, también tendemos qué ver si soporta o no multi tasking, en su enfoque de ejecuciones de instrucción. Comparamos procesadores en que tengan como mínimo características similares. La caché también es importante.