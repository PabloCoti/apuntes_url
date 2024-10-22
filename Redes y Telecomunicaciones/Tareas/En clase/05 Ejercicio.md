# Ejercicio
## Red 1
### Router
```
enable
conf t

line console 0
password 1234
login

line yty 0 15
password 1234
login

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 131.0.0.11 255.255.255.0
no shut

interface se0/0/0
ip address 40.0.0.2 255.255.255.252
no shut

interface se0/0/1
ip address 40.0.0.5 255.255.255.252
no shut

router rip
version 2

network 131.0.0.0
network 130.130.130.0 0.0.0.63
network 40.0.0.0
network 10.0.0.0

exit
```

## Red 2
### Router
```
enable
conf t

line console 0
password 1234
login

line yty 0 15
password 1234
login

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 130.130.130.50 255.255.255.192
no shut

interface se0/0/0
ip address 40.0.0.6 255.255.255.252
no shut

interface se0/0/1
ip address 40.0.0.9 255.255.255.252
no shut

router rip
version 2

network 131.0.0.0
network 130.130.130.0
network 40.0.0.0
network 10.0.0.0

exit
```
## Red 3
### Router
```
enable
conf t

line console 0
password 1234
login

line yty 0 15
password 1234
login

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 131.0.0.11 255.255.255.0
no shut

interface se0/0/0
ip address 40.0.0.6 255.255.255.252
no shut

interface se0/0/1
ip address 40.0.0.9 255.255.255.252
no shut

router rip
version 2

network 131.0.0.0
network 130.130.130.0
network 40.0.0.0
network 10.0.0.0

exit
```