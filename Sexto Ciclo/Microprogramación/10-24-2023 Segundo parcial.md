# Segundo parcial de microprogramación
---
## Código fuente
``` ASSM
; SUMB.asm
; Programa para sumar los bytes de una variable word
; Tomando en cuenta de el valor es un word, entonces son dos bytes, tomando como ejemplo el valor
; 4567h entonces tenenmos que sumar 45 con 67, lo que hice fue tomar ax como 4567 y bx como ax
; Luego moví bh a bl para que pase de 4567 a 4545, luego bh como 0 para que sea 45
; luego hice ah 0 para que ax solo sea 67 y lo sumé con bx

;****** CÓDIGO DE INICIO **********************************

    ideal
    dosseg
    model small
    stack 256
;****** VARIABLES DEL PROGRAMA ****************************
          dataseg
    codsal db 0
    resul  dw ?
    dato   dw ?

;****** CÓDIGO DEL PROGRAMA *******************************
codeseg
inicio:
    mov ax, @data ; Inicializa el segmento de
    mov ds, ax    ; datos
  
    mov ax, [dato]
    mov bx, ax
    mov bl, bh
    mov bh, 0
    mov ah, 0

    add ax, bx  

    mov [resul], ax
salir:
    mov ah, 04Ch
    mov al, [codsal]

    int 21h
;****** CÓDIGO DE TERMINACIÓN *****************************
    end inicio
```

## Primer intento
![[Pasted image 20231024094234.png]]

## Segundo intento
![[Pasted image 20231024094343.png]]

## Intento con ejemplo de explication
![[Pasted image 20231024094433.png]]

