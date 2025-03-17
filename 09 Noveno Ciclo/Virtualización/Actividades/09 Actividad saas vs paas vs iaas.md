## 1. ¿Qué procesos se deben mejorar?

**1. El sistema contable da muchos problemas** Actualmente, solo funciona en una computadora dentro de la empresa y se cae con frecuencia. Esto significa que, cuando falla, nadie puede acceder a la información financiera, lo que retrasa pagos y reportes.

**2. El inventario se maneja en hoja de Execel enviadas por correo** Esto es poco práctico y propenso a errores. Si alguien olvida actualizar la hoja o manda un archivo desactualizado, pueden vender productos que ya no tienen o hacer pedidos innecesarios.

**3. Los vendedores no pueden ver la información en tiempo real** Cuando están atendiendo a clientes no pueden verificar rápidamente cuántos productos hay en stock o el estado de un perdido. Esto les hace perder oportunidades de venta.

**4. No hay un sistema de respaldo ni control de versiones** Si alguien borra un documento importante o hay varias versiones del mismo archivo, puede ser un caos recuperar la información correcta.

**5. La comunicación interna es un desorden** Los empleados usan correos personales, WhatsApp, documentos sin control, lo que hace difícil de encontrar información clave o coordinar tareas de manera eficiente.

**6. El sitio web está desactualizado y no está conectado con el inventario** No refleja crecimiento de la empresa ni permite automatizar pedidos. Esto hace que los clientes tengan que llamar o escribir para hacer compras, en lugar de poder hacerlo en línea fácilmente.

  

## 2. Diseñar una solución completa utilizando modelos de servicio en la nube (IaaS, PaaS y SaaS). / 3. Elegir servicios y proveedores reales para cubrir las necesidades detectadas (AWS, Azure, Google Cloud, etc.).

### Infraestructura como Servicio Iaas

- Servidor en la nube: Amazon EC2, esto porque permite ejecutar el sistema contable y manejar la base de datos del inventario con estabilidad y escalabilidad. Si la empresa logra crecer, se pueden aumentar los recursos sin problemas.

- Almacenamiento: Amazon S3, para guardar documentos importantes, respaldos y reportes. Es seguro, resistente a fallos y permite control de versiones, evitando la pérdida de información.

- Base de datos en la nube: Amazon RDS con MySQL, es lo ideal porque gestiona automáticamente la base de datos sin que el equipo de NovaTextil tenga que preocuparse por mantenimiento o seguridad. Se elige MySQL porque es eficiente y compatible con la mayoria de sistemas, además de que es relacional.

### Plataforma como Servicio PaaS

- Para la aplicación web usaremos AWS Elastic Beanstalk, porque permite alojar el sitio web de NovaTextil sin necesidad de administrar servidores manualmente. Esto facilita las actualizaciones y la escalabilidad del negocio en línea.

- Para el problema de los datos en tiempo real vamos a utilizar Firebase para que el equipo de ventas tenga acceso instantaneo a la información del inventario y los pedidos sin esperar actualizaciones manuales. Firebase sincroniza datos en tiempo real.

### Software como Servicio SaaS

- Para solucionar la comunicación entre colaboradores propondremos Google Workspace porque ofrece Gmail corporativo, google Drive, google docs y Google Meet para reuniones. Es fácil de utilizar y permite que el equipo colabore desde cualquier lugar.

- En el sistema contable se eligeg QuickBooks Online, porque es una plataforma contable en la nube, y es fácil de usar. Permite hacer reportes financieros, manejar pagos y facturación sin depender de un software instalado en una sola computadora.

- Para la gestión de clientes y ventas usaremos Salesforce CRM, es la mejor opción porque permite organizar clientes, hacer seguimientos de ventas y automatizar procesos de negocios. Además, se integra bien con otras herramientas.

- Con la comunicación interna y gestión de tareas se utilizaremos Slack, porque reemplaza el caos de correos y WhatsApp con un sistema de mensajería organizado por canales, además de integrarse con Google Workpace y Salesforce.

## 4. Elaborar un diagrama de arquitectura del sistema propuesto, donde se visualicen claramente los componentes IaaS, PaaS y SaaS.
## 5. Explicar detalladamente las razones de sus decisiones
### Infraestructura como Servicio (IaaS)  
#### Amazon EC2 como servidor en la nube  
**Razón:**  
- **Técnica**: EC2 proporciona **máquinas virtuales escalables** que permiten ejecutar el sistema contable y gestionar la base de datos del inventario sin depender de un único equipo físico.  
- **Económica**: Con **facturación por consumo**, la empresa solo paga por los recursos usados, evitando altos costos iniciales.  
- **Escalabilidad**: Permite ajustar capacidad en función del crecimiento de la empresa, evitando problemas de rendimiento en picos de demanda.  
- **Facilidad de acceso**: Se puede acceder al sistema desde cualquier lugar con conexión a internet, lo que mejora la disponibilidad de la información.  
#### Amazon S3 para almacenamiento  
**Razón:**  
- **Técnica**: S3 es un almacenamiento **altamente disponible y seguro**, con opciones de **versionado y copias de seguridad automáticas**, evitando la pérdida de archivos importantes.  
- **Económica**: Se paga solo por el almacenamiento usado, eliminando costos fijos de servidores físicos.  
- **Escalabilidad**: Puede almacenar desde pocos archivos hasta petabytes de datos sin afectar el rendimiento.  
- **Facilidad de acceso**: Permite acceso a documentos desde cualquier lugar, con integración a otros servicios de AWS.  
#### Amazon RDS con MySQL como base de datos  
**Razón:**  
- **Técnica**: RDS gestiona automáticamente **seguridad, mantenimiento y copias de seguridad** de la base de datos, reduciendo la carga operativa sobre el equipo de TI.  
- **Económica**: Ofrece un modelo de **pago por uso**, eliminando la necesidad de adquirir servidores propios para bases de datos.  
- **Escalabilidad**: Se puede ajustar la capacidad de procesamiento y almacenamiento de la base de datos según la demanda.  
- **Facilidad de acceso**: MySQL es un estándar ampliamente compatible con la mayoría de sistemas existentes.  
### 2. Plataforma como Servicio (PaaS)  
#### AWS Elastic Beanstalk para la aplicación web  
**Razón:**  
- **Técnica**: Elastic Beanstalk **automatiza la administración de servidores**, lo que permite a la empresa enfocarse en el desarrollo de su sitio web sin preocuparse por infraestructura.  
- **Económica**: Se paga solo por los recursos utilizados sin necesidad de contratar administradores de servidores.  
- **Escalabilidad**: La aplicación puede crecer sin problemas, ya que Beanstalk ajusta los servidores según el tráfico web.  
- **Facilidad de acceso**: Permite implementar actualizaciones fácilmente sin interrumpir el servicio.  
#### Firebase para datos en tiempo real  
**Razón:**  
- **Técnica**: Firebase ofrece **sincronización en tiempo real**, lo que permite a los vendedores consultar el inventario y estado de pedidos sin esperar actualizaciones manuales.  
- **Económica**: Modelo de pago por consumo, ideal para empresas pequeñas que buscan minimizar costos iniciales.  
- **Escalabilidad**: Puede manejar un gran número de usuarios sin afectar el rendimiento.  
- **Facilidad de acceso**: Compatible con dispositivos móviles y navegadores, lo que permite acceso desde cualquier parte.  
### 3. Software como Servicio (SaaS)  
#### Google Workspace para comunicación y colaboración  
**Razón:**  
- **Técnica**: Ofrece una solución integrada con **Gmail corporativo, Google Drive, Google Docs y Google Meet**, asegurando que todos los empleados trabajen en un mismo entorno.  
- **Económica**: Modelo de suscripción mensual, evitando la compra de servidores de correo o software de ofimática.  
- **Escalabilidad**: Permite agregar o eliminar usuarios según sea necesario, sin necesidad de grandes ajustes técnicos.  
- **Facilidad de acceso**: Disponible desde cualquier dispositivo con conexión a internet.  
#### QuickBooks Online como sistema contable  
**Razón:**  
- **Técnica**: QuickBooks automatiza procesos financieros, como generación de reportes y facturación.  
- **Económica**: Elimina la necesidad de servidores y mantenimiento de software contable, ya que funciona 100% en la nube.  
- **Escalabilidad**: Adecuado para pequeñas y medianas empresas, con opciones avanzadas según crezca el negocio.  
- **Facilidad de acceso**: Se puede usar desde cualquier dispositivo con internet.  
#### Salesforce CRM para gestión de clientes y ventas  
**Razón:**  
- **Técnica**: Permite **organizar contactos, dar seguimiento a clientes y automatizar ventas**, facilitando la gestión comercial.  
- **Económica**: Evita el desarrollo de un CRM propio, reduciendo costos de implementación y mantenimiento.  
- **Escalabilidad**: Se adapta a empresas en crecimiento y ofrece integraciones con múltiples herramientas.  
- **Facilidad de acceso**: Basado en la nube, accesible desde cualquier dispositivo.  
#### Slack para comunicación interna y gestión de tareas  
**Razón:**  
- **Técnica**: Slack estructura la comunicación en **canales temáticos**, reemplazando correos y WhatsApp desorganizados.  
- **Económica**: Modelo de suscripción con un plan gratuito funcional para equipos pequeños.  
- **Escalabilidad**: Funciona bien para pequeñas empresas y se adapta a grandes equipos con más funciones si es necesario.  
- **Facilidad de acceso**: Se puede usar desde computadoras y móviles, con integración a Google Workspace y Salesforce.  
## 6. Realizar una estimación aproximada de costos mensuales si aplicaran esa solución
### 1. Infraestructura como Servicio (IaaS)
#### Amazon EC2 (Servidor en la nube para sistema contable e inventario)
- Servidor EC2 tipo **t3.medium** (2 vCPUs, 4GB RAM) para un sistema de gestión pequeño.
- Uso estimado: **730 horas/mes** (24/7 encendido).
- **Costo:** ~$38/mes.
- Si se requiere más capacidad, se podría escalar a instancias más potentes (por ejemplo, **t3.large**, ~$76/mes).
#### Amazon S3 (Almacenamiento para documentos y respaldos)
- Estimación de **100GB de almacenamiento** (documentos, reportes y respaldos).
- **Costo:** ~$2.50/mes (a $0.023/GB en Standard Storage).
- Incluye control de versiones y alta disponibilidad.
#### Amazon RDS con MySQL (Base de datos en la nube)
- Instancia **db.t3.medium** con 20GB de almacenamiento.
- **Costo:** ~$60/mes.
- Se encarga del mantenimiento, seguridad y backups automáticos.
### 2. Plataforma como Servicio (PaaS)
#### AWS Elastic Beanstalk (Hospedaje del sitio web)
- Se ejecuta sobre una instancia similar a EC2 (**t3.micro** en estimación básica).
- **Costo:** ~$9/mes.
- Puede escalar si el tráfico del sitio aumenta.
#### Firebase (Datos en tiempo real para vendedores)
- Plan **Blaze** de pago por consumo.
- Estimación de **50K lecturas, 10K escrituras y 5GB de almacenamiento**.
- **Costo:** ~$25/mes.
### 3. Software como Servicio (SaaS)
#### Google Workspace (Correo, almacenamiento y colaboración)
- Plan **Business Standard** ($12/usuario).
- **Para 10 empleados:** **$120/mes**.
#### QuickBooks Online (Sistema contable en la nube)
- Plan **Essentials** con facturación, reportes y pagos.
- **Costo:** ~$55/mes.
#### Salesforce CRM (Gestión de clientes y ventas)
- Plan **Essentials** ($25/usuario).
- **Para 5 usuarios:** **$125/mes**.
#### Slack (Comunicación interna organizada)
- Plan **Pro** ($7.25/usuario).
- **Para 10 empleados:** **$72.50/mes**.
### Costo total estimado

|Servicio|Costo Mensual Aprox.|
|---|---|
|**Amazon EC2** (Servidor contable)|$38|
|**Amazon S3** (Almacenamiento)|$2.50|
|**Amazon RDS** (Base de datos)|$60|
|**AWS Elastic Beanstalk** (Sitio web)|$9|
|**Firebase** (Datos en tiempo real)|$25|
|**Google Workspace** (Correo, Drive, Docs)|$120|
|**QuickBooks Online** (Sistema contable)|$55|
|**Salesforce CRM** (Gestión de clientes)|$125|
|**Slack** (Mensajería interna)|$72.50|
|**Total Aproximado**|**$506/mes**|
