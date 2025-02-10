# Configuraciones de red de Virtual Box
- Josué Lepe
- Pablo Cotí
---

## Network Address Translation 
---

Es una configuración de red donde la VM tiene acceso a internet, pero no se puede acceder de forma LAN. Es una subred privada dentro del anfitrión.

---
## NAT Network
---

Al igual que en NAT VirtualBox le asigna una IP con la que puede acceder a internet y los dispositivos con NAT se pueden comunicar entre ellos.

---

## Bridge Adapter

---

La VM tiene una IP de red física como si fuera un dispositivo aparte dentro de la misma LAN que el anfitrión.

---

## Internal Network
---

Es una subred dentro del anfitrión, pero **sin** acceso a internet. Puede comunicarse con otras VMs dentro de la red en la que está.

---
## Host Only
---
Permite la comunicación entre las VMs y el sistema anfitrión, pero sin acceso a internet.

---
## Generic Driver
---
Opción avanzada que permite definir cómo conectar la máquina virtual a la red mediante un controlador externo en lugar de otros métodos (las otras configuraciones de red que vimos arriba). Proporciona mayor flexibilidad y permite conexiones personalizadas entre VMs y otros dispositivos de red.
