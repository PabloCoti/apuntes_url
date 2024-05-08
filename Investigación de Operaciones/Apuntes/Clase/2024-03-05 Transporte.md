# Transporte
---
![[WhatsApp Image 2024-03-05 at 18.04.53_4bb742ea.jpg]]

![[WhatsApp Image 2024-03-05 at 18.06.12_0b5288bf.jpg]]

Para no repetir rutas se le da numeramiento a los nodos, en este caso del 1 al 9.
El 1,2 yt3 van a ser el origen, oferta
 

| Nodo      | Oferta |
| --------- | ------ |
| 1         | 450    |
| 2         | 600    |
| 3         | 380    |
| **Total** | 1430   |
|           |        |
Los números en las íneas son los costos de llevar del nodo a al b

En el caseo de los nodos 6, 7, 8 y 9 se tienen como destino, demanda

| Nodo      | Oferta |
| --------- | ------ |
| 6         | 300    |
| 7         | 300    |
| 8         | 300    |
| 9         | 400    |
| **Total** | 1300   |
En el caso de este ejercicio se tiene que $oferta>demanda$
Si tiene costo **cero** sí tiene conexión, pero quiere decir que es **gratis**.

La demanda es **cuánto está pidiendo el cliente**, la oferta sí puede cubrir lo que pide el cliente.

**Haciendo un planteo de programación lineal**
Se busca minimizar costos de la siguiente manera
$$
	z = 4x1,4 + 7x1,5 + 8x2,4 + 5x2,5 + 5x3,4 + 6x3,5 + 6x4,6 + 3x5,6 + 6x5,7 + 7x5,8 + 7x5,9
$$

R.O
$$
x1,4 + x1,5 <= 450
$$
$$
x2,4 + x2,5 <= 600
$$
$$
x3,4 + x3,5 <= 380
$$
R.D
$$
x4,6 + x5,6 = 300
$$
$$
x4,7 + x5,7 = 300
$$
$$
x4,8 + x5,8 = 300
$$
$$
x4,9 + x 5,9 = 400
$$
Restricción de transbordo
$$
x1,4 + x2,4 + x3,4 = x4,6 + x4,7 + x4,8 + x4,9
$$
$$
x1,4 + x2,4 + x3,4 - x4,6 - x4,7 - x4,8 - x4,9 = 0
$$
xi,j >= 0
i = 1...5
j = 4...9

Solución
![[Pasted image 20240305185038.png]]



