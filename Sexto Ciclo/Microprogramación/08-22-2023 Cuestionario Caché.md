Un procesador necesita instrucciones y datos.

DATOS: operandos, con qué trabajar INSTRUCCIÓN: lo que debe hacer

La diferencia en las frecuencias es enorme, la diferencia entre un HDD y procesador es tan grande que por eso se usa la RAM, e incluso la RAM sigue siendo mas lenta que la _caché_. SI no usamos la caché, el procesador estaría usando menos de su potencial. Hay 3 caché - L1 - L2 - L3 Cada una más cara de fabricar que la anterior, la L1 funciona a la misma frecuencia del procesador, la L2 funciona a la mitad del procesador y la L3 a la mitad de la L2.

Los procesadores vienen con las memorias L1, L2 y L3. Dentro de los núcleos está incrustado el caché. Si un procesador tiene N núcleos, cada uno de los procesadores tendrá sus segmentos de caché.

Puede haber arquitectura compartida o no compartida, cada núcleo tiene su propia memoria L1 y L2 o el núcleo 1 y dos lo comparten y el 3 y 4 lo comparten. Además, existirá un caché L3 compartido entre los núcleos.

El procesador busca datos en la L1, si no encuentra ahi, busca en la L2, y sino en la L3, y en caso de no encontrar, se aboca a la RAM. Los HDD son lentos por su infraestructura, así que se guardan los datos e instrucciones en otro disco para enviarlos rápidamente por el bus de datos.