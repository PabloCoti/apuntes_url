# Configuración de red en estrella
![](../../../00%20Attachments/Untitled%201.jpg)

## Primer router
50 hosts
193.0.0.0
Tipo "C"
$$
2^6 = 64
$$
**Cubre**.

Máscara
11111111.11111111.11111111.11000000

| Máscara         | Red       | Broadcast  | Última ip utilizable | Primer ip utilizable |
| --------------- | --------- | ---------- | -------------------- | -------------------- |
| 255.255.255.192 | 193.0.0.0 | 193.0.0.63 | 193.0.0.62           | 193.0.0.1            |

## Segundo router
140.0.0.0
6 hosts utilizables
Tipo "B"
$$
2^3 = 8
$$
11111111.11111111.11111111.11111000

| Máscara         | Red       | Broadcast | Última ip | Primera ip |
| --------------- | --------- | --------- | --------- | ---------- |
| 255.255.255.248 | 140.0.0.0 | 140.0.0.7 | 140.0.0.6 | 140.0.0.1  |


## Tercer router
## Cuarto router