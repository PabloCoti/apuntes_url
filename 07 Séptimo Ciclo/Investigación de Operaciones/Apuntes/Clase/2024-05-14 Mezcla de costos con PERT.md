# Mezcla de costos con PERT

## PASOS PARA RESOLVER CON PROGRAMACIÓN LINEAL

**Función objetivo**
$$
\text{Min z} = 100Y_a + 150Y_b + 200Y_c + 150Y_d + 250Y_e
$$

100 es el costo que vale un día en la columna de **costo de compresión**
![[Pasted image 20240514183141.png]]

**Sujeto A:**
Se coloca el valor de la reducción
![[Pasted image 20240514183329.png]]
$$Y_a <= 3$$
$$Y_b <= 1$$
$$Y_c <= 2$$
$$Y_d <= 2$$
$$Y_e <= 1$$
Se hacen las limitaciones con base al diagrama
![[Pasted image 20240514183800.png]]

Se toma en cuenta el tiempo normal para las limitaciones
![[Pasted image 20240514183607.png]]
$X_a$
$$
X_a >= 0 + (7-Y_a)
$$
$$
X_a >= 7-Y_a
$$
$$
X_a + Y_a >= 7
$$

$X_c$
$$
X_c >= (6-Y_c)
$$
$$
X_c >= 6-Y_c
$$
$$
X_c + Y_c >= 6
$$

Se toma en cuenta el tiempo de la tarea que precede a la tarea a la que se le está sacando la limitante como $X_\text{tarea}$

$X_b$
$$
X_b >= X_a + (3-Y_b)
$$
$$
X_b >= X_a + 3 - Y_b
$$
$$
X_b - X_a + Y_b >= 3
$$
$X_d$
$$
X_d >= X_c + (3 - Y_d)
$$
$$
X_d >= X_c + 3 - Y_d
$$
$$
X_d - X_c + Y_d >= 3
$$
$X_e$
$$
X_e >= X_b + (2-Y_e)
$$
$$
X_e >= X_b + 2 - Y_e
$$
$$ X_e - X_d + Y_e >= 2 $$
$$
X_e >= X_d + (2-Y_e)
$$
$$
X_e >= X_b + 2 - Y_e
$$
$$ X_e - X_d + Y_e >= 2 $$

Al ser $X_e$ la última tarea se le pone que la tarea no puede tardar más de la cantidad de días que queremos sacar.

$$X_e <= 10$$

Limitante de la no negatividad
$$X_i >= 0$$

$$i = a, b, c, d, e$$
$$ Y_i >= 0 $$
$$
i = a, b, c, d, e
$$
## USO EN WINQSB
CPM PERT
CRASH TIME
CARSH COST

![[Pasted image 20240516181251.png]]
![[Pasted image 20240516181831.png]]![[Pasted image 20240516181839.png]]

### Averiguar dentro costo de hacerlo en n días
![[Pasted image 20240516181929.png]]

![[Pasted image 20240516181938.png]]
![[Pasted image 20240516181948.png]]

