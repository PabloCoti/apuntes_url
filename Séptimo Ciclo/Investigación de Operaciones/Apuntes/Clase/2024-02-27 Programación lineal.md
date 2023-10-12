# Programación lineal
---
**NO** todos los problemas se pueden pasar a programación lineal.

## Ejemplo
![[Pasted image 20240227180517.png]]
![[Pasted image 20240227180527.png]]

En resumen se tienen
- Madera -> x1
- Aluminio -> x2


|          |     | Ganancia |
| -------- | --- | -------- |
| Madera   | x1  | 180      |
| Aluminio | x2  | 90       |

| Doug  | Madera       | 6 marcos/día |
| ----- | ------------ | ------------ |
| Linda | Aluminio     | 4 marcos/día |
| Bob   | Corta vidrio | 28 pies/día  |

|          |     | Ganancia | Vidrio |
| -------- | --- | -------- | ------ |
| Madera   | x1  | 180      | 6 pies |
| Aluminio | x2  | 90       | 8 pies |
$$\text{max z} = 180x1 + 90x2$$

S.A.
x1 <= 6
x2 <= 4

6x1 + 8x2 <= 48

x1, x2 >= 0

x1 = 6 ventanas
x2 = 1.5 ventanas
z = ??
![[Pasted image 20240227182403.png]]
![[20240227_181651.jpg]]

### Ejemplo 2
![[Pasted image 20240227182506.png]]
Se está hablando de tiempo, departamentos y contabilidad dijo cuanto se va ganando en cada uno.

x1 = estandar
x2 = lujo

$$\text{max z = 10x1 + 9x2}$$
s.a
c.t              0.7x1 + x2       <= 630
cos             0.5x1 + .83x2  <= 600
terminado      x1 + 0.66x2 <= 708
s.e              0.1x1 + .25x2   <= 135

x1, x2 >= 0

![[Pasted image 20240227183732.png]]
![[Pasted image 20240227183758.png]]

a)
x1 = 543.12 bolsas
x2 = 249.81 bolsas

b)
z = 7679.55

c) 

|     | Tiempo | Holgura |
| --- | ------ | ------- |
| ct  | 630    | 0       |
| cos | 478.91 | 121.09  |
| ter | 708    | 0       |
| ie  | 116.77 | 18.23   |
|     |        | 139.32  |

139.32/8 = 7.42 días

7.42 * 120 = Q2090.4 perdidos


**En la programación lineal se tiene que saber de dónde sacar la información**

En el caso de que se quiera bajar el tiempo se de las 478.91 se tiene que hacer números para saber cuántas personas están trabajando.

### Ejercicio
![[Pasted image 20240227184902.png]]


|            |     | utilidad |
| ---------- | --- | -------- |
| EZ-Rider   | x1  | 2400     |
| Lady-Sport | x2  | 1800     |
$$ max z = 2400x1 + 1800x2 $$
sa
                        x2 <= 280
motor                           6x1 + 3x2 <= 2100
ensamblado y pruebas 2x1 + 2.5x2 <=1000

![[Pasted image 20240227190600.png]]
![[Pasted image 20240227190616.png]]
b) el marco de x2 <= 280 es limitante
c) las otras dos son confinantes

