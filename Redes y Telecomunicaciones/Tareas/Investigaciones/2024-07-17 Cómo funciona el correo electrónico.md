# Cómo funciona el correo electrónico
El correo electrónico existe desde 1971, fue creado por Ray Tomlinson. El correo electrónico funciona por medio de una cuenta de correo dada por un proveedor de este servicio como Google, Microsoft, Yahoo, etc. Las direcciones de cuenta siguen el estándar "usuario@dominio.com" con la cuenta se tiene un correo de buzón.

El servicio se basa en **dos** elementos:
- **Servidor de correo** que aloja el buzón y recibe y envía mensajes.
- **Programa cliente** que es el terminal de usuario para gestión de correos.

![[Correo-electronico-protocolo-1000x264-1.jpg]]

## Protocolos de envío de correos
Antes de enviar los correos estos se convierten a un formato que el servidor pueda manejar con facilidad. Los protocolos definen el formato de los mensajes y las normas que regulan la comunicación entre el programa de clientes y los servidores.
### Protocolo SMTP
*Simple Mail Transfer Protocol*, se creó a principios de los ochenta, está centrado en enviar mensajes que son exclusivamente del ASCII original (caracteres de 7 bits). **No admite envío de archivos binarios** (imágenes, sonidos, etc.).
### Protocolo MIME
Debido a las limitaciones del SMTP se creó el protocolo MIME (*Multipurpose Internet Mail Extension*), este permite el envío de archivos binarios de forma simple y eficaz, también permite enviar mensajes con caracteres que ya no son del ASCII original, es decir, en otros idiomas.
## Protocolos de cliente de correos
Los mensajes de correo van hacia el servidor o buzón que es el encargado de recibir, guardar y posteriormente enviar estos correos a la interfaz de usuario.
### Protocolo POP
*Post Office Protocol*, hoy día tiene hasta la versión 3 (POP3). Está pensado para que el usuario acceda al servidor desde un **único** lugar donde los correos se bajarán a este computador y se borrarán en el servidor. Hoy día, como se puede revisar el correo desde diferentes lugares ahora POP ofrece la posibilidad de no borrar los correos del servidor una vez sean bajados.
### Protocolo IMAP
*Internet Message Access Protocol*, creado por Mark Crispin en 1986, tiene como objetivo la lectura del buzón desde **varios** lugares de forma más ordenada. A diferencia del POP el protocolo IMAP supone que toda la estructura de carpetas, correos y programas está en el servidor y el cliente solo se sincroniza con el servidor, es decir, solo muestra la información. Los mensajes existen en el servidor hasta que el usuario los borra.
## Cifrado
Los correos utilizan dos métodos de cifrado
### Cifrado TLS
*Transport Layer Security*, es utilizado en conexiones HTTPS aseguradas por medio de certificados SSL, los cuales encriptan.

Autentica que el receptor sea el que se desea y no un intermediario no deseado.
### Certificado SSL
*Secure Sockets Layer*, es un certificado digital que autentica la identidad de un sitio web y habilita una conexión cifrada. Posteriormente se convirtió en TLS.

Garantizan que los datos transferidos entre usuarios y sitios sean imposibles de leer.