![[Untitled 13.jpg]]
![[Untitled-1 2.jpg]]
![[Untitled-1 3.jpg]]![[Untitled 14.jpg]]

Todos sembrarán la **mitad** de sus tierras irrigadas

$$
\text{Max z} = 1000x_{r1} + 1000x_{r2} + 1000x_{r3} + 750x_{a1} + 750x_{a2} + 750x_{a3} + 250x_{s1} + 250x_{s2} + 250x_{s3}
$$


**S.A.**
*Terreno disponible*
$$x_{r1} + x_{a1} + x_{s1} \leq 400$$
$$x_{r2} + x_{a2} + x_{s2} \leq 600$$
$$x_{r3} + x_{a3} + x_{s3} \leq 300$$

*Asignación de agua*
$$3x_{r1} + 2x_{a1} + x_{s1} \leq 600$$
$$3x_{r2} + 2x_{a2} + x_{s2} \leq 800$$
$$3x_{r3} + 2x_{a3} + x_{s3} \leq 375$$
*Cantidad máxima de acres*
$$x_{r1} + x_{a1} + x_{s1} \leq 600$$
$$x_{r2} + x_{a2} + x_{s2} \leq 500$$
$$x_{r3} + x_{a3} + x_{s3} \leq 325$$
*Igual proporción*
La cantidad de sembradillo tiene que ser de igual proporción dentro de cada uno de los terrenos, por eso es que se hace la suma de la siembra y se divide dentro del campo que se puede cubrir para sacar la proporción que se cubre de ese campo y este tiene que ser igual para los tres terrenos.

Terreno 1 con el terreno 2
$$
\frac {x_{r1} + x_{a1} + x_{s1}}{400} = \frac {x_{r2} + x_{a2} + x_{s2}}{600}
$$
$$
600(x_{r1} + x_{a1} + x_{s1}) = 400(x_{r2} + x_{a2} + x_{s2})
$$
$$
600x_{r1} + 600x_{a1} + 600x_{s1} = 400x_{r2} + 400x_{a2} + 400x_{s2}
$$
$$
600x_{r1} + 600x_{a1} + 600x_{s1} - 400x_{r2} - 400x_{a2} - 400x_{s2} = 0
$$

Terreno 1 con terreno 3
$$
\frac {x_{r1} + x_{a1} + x_{s1}}{400} = \frac {x_{r3} + x_{a3} + x_{s3}}{300}
$$
$$
300x_{r1} + 300x_{a1} + 300x_{s1} - 400x_{r3} - 400x_{a3} - 400x_{s3} = 0
$$

Terreno 2 con terreno 3
$$
\frac {x_{r2} + x_{a2} + x_{s2}}{600} = \frac {x_{r3} + x_{a3} + x_{s3}}{300}
$$
$$
300x_{r2} + 300x_{a2} + 300x_{s2} - 600x_{r3} - 600x_{a3} - 600x_{s3} = 0
$$
