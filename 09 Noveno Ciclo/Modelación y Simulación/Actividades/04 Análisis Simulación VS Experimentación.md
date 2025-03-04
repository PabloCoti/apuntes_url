# Análisis simulación vs experimentación
## Planteamiento
**Caso: Simulación o Experimentación en la red de transporte público de la Ciudad de Guatemala**
**Antecedentes del problema**
- La congestión vehicular ha aumentado un 35% en los últimos 5 años, especialmente en horas pico (de 6:00 a 9:00 y de 16:00 a 19:00).
- Se han identificado puntos críticos de embotellamiento en El Trébol, el Obelisco y la conexión del Periférico con la Ruta al Atlántico.
- La falta de carriles exclusivos para buses en ciertas áreas genera demoras de hasta 40 minutos en recorridos que deberían tomar 15.
- Un 70% de los usuarios del transporte público han expresado descontento con los tiempos de espera y la sobrecarga en ciertas estaciones.

**Propuestas para solucionar el problema**
**1. Experimentación en el sistema real**
- Implementar un cambio piloto en las rutas y semáforos en ciertos sectores durante un mes y medir el impacto.
- Modificar la frecuencia de los autobuses en horarios de alta demanda y evaluar si reduce los tiempos de espera.
- Habilitar carriles exclusivos en ciertos tramos y medir si mejora la velocidad de transporte.

**Desafíos:**
- Si el cambio genera problemas imprevistos, podría afectar a más de 300,000 pasajeros diarios.
- Requiere coordinar con la Policía Municipal de Tránsito (PMT) para hacer ajustes en tiempo real.
- Puede causar resistencia de conductores particulares al reducirse los carriles disponibles.
  
**2. Simulación mediante modelado computacional**
- Construir un modelo digital del tráfico en la ciudad utilizando datos históricos, sensores viales y estudios de movilidad.
- Simular los posibles efectos de los cambios sin afectar el tránsito real.
- Probar distintos escenarios antes de implementar cambios en la infraestructura.

**Desafíos:**
- Los modelos de simulación pueden no considerar factores impredecibles como fallas mecánicas de buses, bloqueos viales inesperados o accidentes.
- La simulación depende de la precisión de los datos recolectados, y errores en estos pueden llevar a conclusiones equivocadas.
- No permite evaluar la reacción real de los pasajeros y conductores a los cambios.

**Realizar:**
1. Analizar el caso y determinar si es mejor utilizar experimentación en el sistema real o simulación computacional. Justifique su elección con argumentos técnicos, económicos y sociales.
2. Identificar las limitaciones de cada método y proponer estrategias para mitigarlas.
3. Evaluar si una combinación de ambos enfoques podría ser más efectiva y cómo se podría implementar.
4. Considerar el impacto en pasajeros, conductores, la Municipalidad y el sector privado

## Análisis
A primera vista yo creo que la simulación será la mejor opción para lo que es el aspecto del análisis que podemos llegar a tomar en cuenta en lo que son estos cambios, es mejor porque no afectaría a las personas que transitan y es más fácil de hacer cambios en la estructura según querramos para poder encontrar mejores alternativas sin necesidad de afectar a los conductores reales ni tener que invertir dinero antes de tiempo. Tenemos que tener en claro que la simulación tiene ciertas limitantes, la primordial siendo que no es la vida real, ¿por qué decimos que es una desventaja? Nuestra simulación si bien tiene las ventajas mencionadas anteriormente y más, también tenemos que tomar en cuenta el factor humano (factor el cuál no podemos simular), este factor tomaría en cuenta aspectos como la educación víal, horarios, reacciones y otras cosas que los conductores podrían llegar a hacer en su día a día que no se pueda simular.

El enfoque que considero correcto sería hacer la simulación para tener un estimado de lo más certero posible respecto a la decisión correcta que se debería tomar en cuanto al tránsito de Guatemala, una vez tenemos un estimado certero de lo que tenemos que hacer yo procedería a hacer la experimentación con una versión piloto del experimento. Esto podría ser, como mencionaba en el enunciado, con apoyo de los agentes de la PMT y otros aspectos para poder medir la efectividad en la vida real de lo que planeamos hacer. Una vez hemos experimentado podemos medir con mayor certeza la efectividad de nuestras decisiones y posteriormente implementar de forma formal el diseño final al que hayamos llegado.

El impacto que tendría una vez completemos todas estas fases se esperaría que sea positivo para los conductores ya que estarán con una versión mejorada de lo que es la planfiicación y manejo de tránsito en Ciudad de Guatemala.