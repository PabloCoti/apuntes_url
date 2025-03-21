## Sede A
### Router
```
conf t

hostname SedeA

int f0/0
ip address 10.10.10.1 255.255.255.252
no shutdown

int f1/0
ip address 192.168.10.1 255.255.255.0
no shutdown

ip dhcp excluded-address 192.168.10.1 192.168.10.9
ip dhcp pool SEDEA_DHCP
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
 dns-server 8.8.8.8
 lease 7

ip route 192.168.20.0 255.255.255.0 10.10.10.2
ip route 192.168.30.0 255.255.255.0 10.10.10.2
```

## Sede B
### Router
```
conf t

hostname SedeB

int f0/0
ip address 10.10.10.2 255.255.255.252
no shutdown

int f1/0
ip address 10.10.10.5 255.255.255.252
no shutdown

int f1/1
ip address 192.168.20.1 255.255.255.0
no shutdown

ip route 192.168.10.0 255.255.255.0 10.10.10.1

router eigrp 100
 network 192.168.20.0
 network 10.10.10.0
 no auto-summary

```

## Sede C
### Router
```
conf t

hostname SedeC

int f0/0
ip address 10.10.10.6 255.255.255.252
no shutdown

int f1/0
ip address 192.168.30.1 255.255.255.0
no shutdown

router eigrp 100
 network 192.168.30.0
 network 10.10.10.0
 no auto-summary

```