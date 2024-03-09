# Ejercicio diagrama UML
---
## Enunciado principal
Se quiere un sistema de control de notas de un colegio

General
- Catedráticos ingresan notas; las notas las pueden consultar catedráticos, directores, secretarias, alumnos y padres de familia.
- La secretaria o directores ingresan datos de alumnos. Los datos de los alumnos los ven **todos** y los datos de los profesores los ven los profesores, secretaria y los directores.
- Los cursos y asignaciones de cursos lo realizan los directores.

## Enunciado modificado
Se quiere un sistema de control de notas de un colegio con varios tipos de usuarios, catedráticos, directores, secretarias y alumnos. Los catedráticos son los únicos que pueden ingresar notas y las notas pueden ser consultadas por catedráticos, directores, secretarias y alumnos. Dentro del sistema se pueden ingresar datos de alumnos y profesores, solo las secretarias y directores pueden ingresar datos de alumnos y profesores, los datos de los alumnos pueden ser visto por todos los tipos de usuarios, pero los de los profesores solo por la secretaria y los directores y estos también son los únicos que pueden editar la información. La creación de cursos y asignación de cursos solo lo pueden hacer los directores y consultar las asignaciones pueden todos. También el sistema tiene que tener un promedio ponderado de las notas y distribución de las mismas de cada curso.