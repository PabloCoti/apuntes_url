# Investigación corta
Pablo Cotí 1653221

## Planficación para las pruebas
### 1. **Identificación de la Unidad de Código a Probar**
   - **Definir la unidad:** Normalmente, una unidad se refiere a la función, método o clase más pequeña que realiza una tarea específica.
   - **Entender el propósito:** Comprender el propósito de la unidad es esencial para definir correctamente los casos de prueba.

### 2. **Definición de los Casos de Prueba**
   - **Casos de prueba normales:** Incluir casos que utilicen entradas típicas que la unidad debe manejar.
   - **Casos de prueba límite:** Identificar y probar los límites de la unidad, como valores extremos o situaciones atípicas.
   - **Casos de prueba negativos:** Probar con entradas incorrectas o inválidas para asegurar que la unidad responde adecuadamente a los errores.

### 3. **Preparación del Entorno de Prueba**
   - **Configuración del entorno:** Establecer un entorno controlado donde se ejecutará la prueba, asegurando que los datos y dependencias sean predecibles.
   - **Mocking/Stubbing:** En caso de que la unidad dependa de otras unidades, se pueden usar mocks o stubs para aislar la unidad que se está probando.

### 4. **Implementación de la Prueba**
   - **Escribir el código de prueba:** Utilizar un marco de pruebas unitarias como JUnit, NUnit, o PyTest para implementar los casos de prueba.
   - **Automatización:** Asegurar que la prueba pueda ejecutarse automáticamente, sin intervención manual.

### 5. **Ejecución de la Prueba**
   - **Ejecutar las pruebas:** Correr los casos de prueba en el entorno de pruebas preparado.
   - **Registrar los resultados:** Capturar los resultados, detallando qué pruebas pasaron y cuáles fallaron.

### 6. **Análisis de Resultados**
   - **Identificación de fallas:** Si alguna prueba falla, analizar el código y la prueba para identificar el origen del problema.
   - **Corrección y re-ejecución:** Corregir los errores en el código y volver a ejecutar las pruebas hasta que todas pasen.

### 7. **Revisión y Documentación**
   - **Revisar la cobertura:** Asegurar que las pruebas cubren todos los casos relevantes para la unidad.
   - **Documentar:** Registrar la prueba unitaria, incluyendo casos de prueba, resultados y cualquier decisión importante tomada durante el proceso.

### 8. **Mantenimiento**
   - **Actualizar pruebas:** Si el código de la unidad cambia en el futuro, las pruebas unitarias deben actualizarse para reflejar estos cambios.
   - **Re-ejecutar pruebas:** Cada vez que se realiza un cambio en el código, las pruebas unitarias deben ejecutarse para garantizar que el nuevo código no rompe la funcionalidad existente.

## De qué forma se diseña la prueba
### 1. **Comprender la Unidad de Código**
   - **Revisión del código:** Antes de diseñar la prueba, revisa el código de la unidad para entender qué hace, cuáles son sus entradas y salidas, y cómo maneja los errores.
   - **Identificación de funcionalidades clave:** Determina las funcionalidades principales que deben ser probadas.

### 2. **Definir los Objetivos de la Prueba**
   - **Verificación de resultados:** Asegurar que la unidad devuelve los resultados esperados.
   - **Validación de condiciones de error:** Comprobar que la unidad maneja adecuadamente entradas incorrectas o casos de error.
   - **Pruebas de límite:** Verificar cómo se comporta la unidad en condiciones de entrada límite o extremos.

### 3. **Selección de los Casos de Prueba**
   - **Casos de prueba básicos:** Definir los casos que prueben la funcionalidad normal del código, con entradas comunes o esperadas.
   - **Casos de prueba límite:** Diseñar pruebas que incluyan valores en los extremos del rango de entrada (por ejemplo, valores mínimos y máximos).
   - **Casos de prueba de error:** Crear casos que introduzcan entradas inválidas o inesperadas para verificar la robustez del código.
   - **Casos de prueba de rendimiento (si es necesario):** Probar el rendimiento de la unidad si es crítico.

### 4. **Especificación de Entradas y Resultados Esperados**
   - **Entradas:** Define las entradas que serán usadas en cada caso de prueba.
   - **Resultados esperados:** Determina lo que se espera que la unidad retorne o haga con cada conjunto de entradas.
   - **Condiciones iniciales:** Especifica cualquier precondición necesaria antes de ejecutar la prueba (por ejemplo, un estado particular del objeto).

### 5. **Implementación del Código de la Prueba**
   - **Configuración de la prueba:** Usa un marco de pruebas unitarias (como JUnit, NUnit, o PyTest) para escribir la prueba. Incluye la configuración necesaria antes de ejecutar la prueba.
   - **Invocación de la unidad:** Ejecuta la unidad de código con las entradas definidas.
   - **Verificación de resultados:** Usa aserciones para comparar el resultado de la ejecución con el resultado esperado.
   - **Manejo de excepciones:** Si se espera que la unidad lance una excepción, asegúrate de que la prueba verifica que la excepción correcta se produce.

### 6. **Ejecución y Revisión**
   - **Correr las pruebas:** Ejecuta las pruebas para verificar que la unidad funcione como se espera.
   - **Revisar los resultados:** Si alguna prueba falla, revisa el código de la unidad y la prueba misma para identificar la causa.

### 7. **Iteración y Mejora**
   - **Refactorización:** Si el código de la unidad cambia, actualiza las pruebas en consecuencia.
   - **Cobertura:** Asegúrate de que las pruebas cubran todos los casos relevantes.
