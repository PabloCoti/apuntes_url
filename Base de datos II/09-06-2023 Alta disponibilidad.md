Cuando se discuten los requerimientos de disponibilidad con un usuario o jefe de proyectos, invariablemente solicitan el 100% de disponibilidad. Pero este requerimiento cabmia cuando el jefe de proyectos descubre el costo de ese 100% de disponibilidad.

Entre más disponibilidad más dinero es el que se tiene que invertir.

### Cómo calcular la disponibilidad de de la base de datos

tiempo medio entre fallas = TMEF
tiempo medio de recuperación entre fallas = TMRF

D = TMEF/(TMEF+TMRF)

* Cando TMRF se aproxime a cero, D se incrementa y tiende a 100%.
* Mientras TMEF sea más largo, TMRF tiene menos impacto sobre D.

Cuando hablamos de disponibilidad se tiene que tomar en cuenta el tiempo de caída. El tiempo de caída es el tiempo que una persona tiene que esperar hasta que el sistema funcione nuevamente.

Del 100% de las veces que se cae el sistema el 40% es por fallas de software.