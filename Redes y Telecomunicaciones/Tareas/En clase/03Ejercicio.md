```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface fastethernet0/0/0
ip address 150.15.15.1 255.255.255.252
no shut

interface gi0/0
ip address 150.15.15.6 255.255.255.252
no shut

interface gi0/2
ip address 150.15.15.10 255.255.255.252
no shut

interface gi0/1
ip address 150.15.15.14 255.255.255.252
no shut
```