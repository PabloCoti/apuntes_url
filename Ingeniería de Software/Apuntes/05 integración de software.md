# Integración de software
La integración se basa en la arquitectura establecida independientemente de cómo sea establecida.

La idea base para la integración es hacer las pruebas de los componentes y cómo interactúan.

## Integración continua de software
Es el ciclo de integración de manera periódica para el software.

## Pruebas de integración
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
