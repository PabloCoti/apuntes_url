* Se accede al disco local y la carpeta instalada de Tasm, todos los archivos creados para que funcionen tienen que estar en **C:/Tasm 1.4/Tasm**.

* No se requiere un editor específico para codear en TASM, queda a elección del usuario.

* En este primer laboratorio se va a usar el bloc de notas, se creó el archivo **primer.asm**.

* Copiamos el código que está en el archivo **"Tema03.pdf" encontrado en el portal como "Estructura General de un Programa Ensamblador"**.

## Cómo compilar el programa 
1. Copiamos el archivo descargado del portal llamado **"assm.bat"** al directorio donde estamos trabajando (**C:/Tasm 1.4/Tasm**).
2. Abrimos **DOSBOX** y corremos el comando

 ```
 dir assm
 ```

3. Escribimos el comando en este caso el nombre del proyecto es **"primer"**.

```
assm <nombre_proyecto>
``` 


4. Se verifica que no hayan errores en el prompt dado por la terminal.
5. Podemos verificar que se haya compilado correctamente corriendo el comando en este caso el nombre del proyecto es **"primer"**.

```
dir <nombre_proyecto>
``` 

## Cómo depurar
```
td <nombre_proyecto>
```

Una vez se tiene el programa en la ventana para ir depurando nos fuimos a
* **V**iew y a **W**atches.
* Abrimos en **V**iew y **R**egisters.

## Cómo guardar la configuración
* **O**ptions
* **S**ave Options
* Activar **L**ayouts y **O**ptions
* **O**k

## Cómo asignar valores a las variables de mi programa para debugar

- En el apartado de watches podemos ir insertando las variables para ir viendo cómo es que van cambiando sus valores a lo largo del desarrollo de la aplicación.
- Insertamos en watches, por la estructura del programa el dato1 y el dato2.
- Dentro de watches con **`ctrl + c`** le podemos asignar un valor.

### Cómo avanzar paso por paso
Presionando **F8**. Cada vez que se presiona **F8** el programa va avanzando un paso (xd).

# Conclusión
En este laboratorio se vió cómo armar el entorno para que compile se depure y se pueda ir haciendo testeos paso por paso de los programas hechos con ensamblador usando DOSBOX y TASM. El programa primer se encarga de realizar la suma de dos valores enteros y devolver su resultado.

El depurar con DOSBOX nos permite ir depurando de forma visual y poder ver qué es lo que va sucediendo con la memoria y poder ir asignando valores a las variables para poder enfocarse en el funcionamiento del programa.