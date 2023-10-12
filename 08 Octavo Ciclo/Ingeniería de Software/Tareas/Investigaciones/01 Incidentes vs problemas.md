# Incidentes vs problemas
**Integrantes:**
- Pablo Cotí
- Ángel Cotoc
- Daniel Sajvin

En ingeniería de software, los términos "incidente" y "problema" suelen referirse a distintos aspectos de la gestión de errores o fallos en sistemas informáticos, cada uno con su propio contexto, causas y métodos de resolución.
## Incidente

Un **incidente** en ingeniería de software se refiere a cualquier evento inesperado que afecta la funcionalidad de un sistema, especialmente cuando interrumpe o degrada el servicio de manera significativa. Los incidentes suelen ser problemas visibles para los usuarios, ya que pueden causar tiempos de inactividad o fallas en aplicaciones y servicios. Ejemplos comunes de incidentes incluyen errores de conexión, fallas en el servidor o cuellos de botella de red. La resolución de incidentes tiene como objetivo restablecer el servicio lo más rápido posible, y normalmente se basa en la identificación y corrección inmediata de la causa o en la aplicación de una solución temporal.

La gestión de incidentes sigue un proceso estructurado, generalmente según marcos de trabajo como ITIL (Information Technology Infrastructure Library). Los pasos para la gestión de un incidente incluyen:

1. **Identificación y clasificación** del incidente.
2. **Escalamiento**, en caso de que el equipo de soporte inicial no pueda resolverlo.
3. **Análisis y solución** rápida, enfocada en restaurar el servicio.
4. **Cierre y documentación** del incidente para referencia futura y mejora continua.
## Problema

Un **problema** es la causa raíz subyacente que da lugar a uno o más incidentes. No siempre es evidente ni visible, pues está en el fondo de los fallos recurrentes. Un problema puede referirse a defectos en el diseño, inconsistencias en el código o errores en la infraestructura que, aunque no siempre visibles, producen incidentes de manera constante. Por ejemplo, un defecto en el código que ocasionalmente causa errores de conexión puede no disparar un incidente crítico de inmediato, pero representa un problema que requiere investigación.

La gestión de problemas se centra en descubrir y eliminar las causas raíz para evitar que ocurran incidentes en el futuro. En este sentido, la gestión de problemas es más preventiva y sigue pasos como:

1. **Identificación del problema** a partir de incidentes recurrentes o análisis de registros.
2. **Análisis de causa raíz**, con técnicas como el análisis de “los cinco porqués” o diagramas de causa-efecto.
3. **Implementación de soluciones** permanentes o ajustes en el sistema para eliminar el problema.
4. **Evaluación y documentación**, registrando el problema y las soluciones aplicadas para prevenir futuros incidentes similares.
## Relación entre Incidentes y Problemas

La diferencia entre ambos radica en su objetivo y enfoque: los incidentes son abordados con urgencia para restaurar el servicio, mientras que los problemas buscan soluciones a largo plazo para eliminar la causa raíz de los incidentes. Los equipos de ingeniería de software deben gestionar ambos de forma simultánea: resolver incidentes a corto plazo para mantener la continuidad del servicio y realizar una investigación más profunda para corregir problemas, logrando así una mejora continua y una experiencia de usuario más estable y confiable.

En la investigación de incidentes y problemas en ingeniería de software, es crucial entender que **no todos los incidentes se convierten en problemas**, pero algunos pueden revelar problemas más profundos en el sistema. Identificar cuáles incidentes merecen una investigación más exhaustiva es clave para la mejora continua y la estabilidad de un sistema.
## Incidentes que se convierten en problemas

1. **Incidentes recurrentes**: Cuando un mismo incidente ocurre repetidamente, sugiere que hay una causa subyacente que aún no se ha resuelto. Por ejemplo, si los usuarios experimentan una caída de servicio cada vez que la carga del sistema aumenta, podría indicar un problema de capacidad o diseño inadecuado en la infraestructura que requiere atención y ajustes permanentes.
    
2. **Incidentes críticos**: Los incidentes que interrumpen el servicio de manera significativa o que afectan a un gran número de usuarios pueden ser un síntoma de problemas más profundos. Un ejemplo es cuando un sistema experimenta un fallo total por una sobrecarga en los servidores, lo que podría estar indicando problemas en la configuración de escalabilidad o en el diseño de arquitectura. Este tipo de incidentes deben ser investigados para evitar una recurrencia, ya que pueden tener efectos negativos en la reputación de la empresa y en la satisfacción del cliente.
    
3. **Incidentes con impacto en la seguridad**: Los incidentes relacionados con vulnerabilidades de seguridad, como brechas de datos o accesos no autorizados, suelen requerir una investigación exhaustiva, ya que podrían indicar fallos serios en los controles de seguridad del sistema. La gestión adecuada de estos problemas es fundamental para proteger la información de los usuarios y evitar consecuencias legales y financieras.
    
4. **Incidentes que afectan componentes críticos**: Los sistemas suelen tener componentes esenciales cuya falla puede comprometer el funcionamiento de todo el sistema. Si un componente clave, como una base de datos principal o un servicio de autenticación, falla frecuentemente, este incidente puede convertirse en un problema mayor, ya que afecta la confiabilidad y la estabilidad general del sistema.
    
5. **Incidentes derivados de cambios recientes**: Cuando un incidente aparece después de una actualización o cambio en el sistema, puede ser un indicador de un problema subyacente en el proceso de implementación o en la integración de componentes nuevos. Este tipo de incidentes puede transformarse en problemas si no se revisan los procesos de control de calidad y pruebas previas a la implementación.
### ¿Por qué algunos incidentes se convierten en problemas?

Algunos incidentes se convierten en problemas porque son síntomas de una **causa raíz compleja** que afecta el sistema en múltiples niveles, desde la infraestructura hasta el código. La incapacidad para detectar o resolver la causa raíz de un incidente suele llevar a su recurrencia, lo que compromete la confiabilidad del sistema. Además, cuando un incidente señala una **vulnerabilidad crítica** o un error sistémico, requiere un análisis profundo para prevenir futuros incidentes, ya que la mera restauración del servicio no elimina el riesgo de fallo.

A nivel organizacional, la falta de **procesos de mantenimiento preventivo** y **documentación de incidentes** también puede provocar que ciertos incidentes se conviertan en problemas. La documentación y el análisis detallado permiten que el equipo de soporte y desarrollo tenga una visión completa de los patrones y causas de los fallos, abordando los problemas de manera proactiva.

En conclusión, no todos los incidentes son problemas, pero los incidentes recurrentes, críticos o relacionados con la seguridad suelen ser los que revelan problemas más profundos. La gestión efectiva de estos incidentes y problemas permite minimizar riesgos y optimizar la estabilidad y rendimiento de un sistema a largo plazo.

## Ejemplos de problemas recurrentes en proyectos de software
### 1. **Problemas de rendimiento debido a mala optimización de la base de datos**

- **Descripción**: En un sistema que maneja grandes volúmenes de datos, una base de datos mal optimizada puede volverse un cuello de botella, causando que las consultas sean lentas y generen tiempos de espera prolongados. Esto se convierte en un problema especialmente grave en aplicaciones que dependen de respuestas rápidas, como las aplicaciones bancarias o de comercio electrónico.
- **Incidentes asociados**: Tiempos de carga lentos, bloqueos del sistema, aumento en los tiempos de espera de las consultas.
- **Causa raíz**: Diseño deficiente de la base de datos, falta de índices en tablas críticas, consultas no optimizadas o sobrecarga en el servidor de base de datos.
- **Solución**: Optimizar el diseño de la base de datos, crear índices en columnas de búsqueda frecuente, y ajustar las consultas SQL para mejorar el rendimiento.

### 2. **Problemas de integridad en el flujo de datos debido a errores de sincronización**

- **Descripción**: En sistemas donde diferentes módulos o microservicios deben comunicarse constantemente, como en sistemas de gestión empresarial (ERP), pueden surgir problemas de sincronización. Cuando un módulo no actualiza los datos de otro, se pueden generar errores y datos inconsistentes en el sistema.
- **Incidentes asociados**: Módulos que muestran datos desactualizados, errores en la aplicación debido a información inconsistente entre módulos, problemas de duplicidad de datos.
- **Causa raíz**: Deficiencias en los procesos de sincronización, como configuración incorrecta de los puntos de integración o falta de mecanismos de control de consistencia en tiempo real.
- **Solución**: Implementar procesos de sincronización robustos, usar colas de mensajes (message queues) y realizar pruebas de integración para asegurar que los módulos compartan y actualicen datos correctamente.

### 3. **Problemas de escalabilidad por una arquitectura monolítica**

- **Descripción**: Muchos proyectos comienzan con una arquitectura monolítica para simplificar el desarrollo inicial. Sin embargo, al crecer el número de usuarios y transacciones, esta arquitectura puede limitar la escalabilidad y la capacidad de respuesta del sistema. Esto se observa comúnmente en aplicaciones web y móviles que experimentan una rápida expansión.
- **Incidentes asociados**: Caídas del sistema durante picos de tráfico, lentitud general del sistema, y dificultades para implementar nuevas funcionalidades sin afectar el rendimiento general.
- **Causa raíz**: La arquitectura monolítica no permite que los componentes se escalen individualmente ni que se distribuyan cargas de trabajo a través de varios servidores.
- **Solución**: Migrar hacia una arquitectura de microservicios, lo que permite escalar componentes específicos según demanda y distribuir la carga de trabajo.

| **Aspecto**                   | **Incidente**                                                                                          | **Problema**                                                                                                     |
|-------------------------------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Definición**                | Evento inesperado que interrumpe o degrada el funcionamiento de un sistema y afecta a los usuarios.    | Causa raíz subyacente que genera uno o varios incidentes en el sistema.                                          |
| **Objetivo de gestión**       | Restaurar el servicio lo más rápido posible para minimizar el impacto en los usuarios.                 | Identificar y eliminar la causa raíz para prevenir incidentes futuros.                                           |
| **Ejemplos**                  | Caídas del sistema, errores de conexión, lentitud en la respuesta de una aplicación.                    | Base de datos mal optimizada, problemas de sincronización de datos, limitaciones de una arquitectura monolítica. |
| **Frecuencia de ocurrencia**  | Generalmente ocurre de forma repentina; puede ser único o repetitivo.                                  | Usualmente persiste hasta ser identificado y solucionado, generando incidentes repetitivos.                      |
| **Método de resolución**      | Solución rápida y temporal (reinicio, parche, restauración del servicio).                              | Investigación y aplicación de soluciones permanentes (cambios de diseño, ajustes en la infraestructura).         |
| **Ejemplo de un caso común**  | Interrupción en la conexión de un servicio debido a un fallo de red.                                   | Configuración de red inadecuada que ocasiona fallos de conexión repetitivos.                                     |
| **Enfoque de tiempo**         | Corto plazo: se busca restablecer el servicio rápidamente.                                            | Largo plazo: se enfoca en la prevención y eliminación de las causas subyacentes.                                 |
| **Impacto en el sistema**     | Afecta el funcionamiento inmediato del sistema y la experiencia del usuario.                          | Puede afectar la estabilidad y confiabilidad general del sistema a largo plazo si no se resuelve.                |
