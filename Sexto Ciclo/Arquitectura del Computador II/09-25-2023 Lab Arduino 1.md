## Primeros pasos al tener un arduino
- Buscar el pinout
```
Arduino <version> pinout
```
Es necesario saber la estructura de los pines del Arduino para sacarle provecho.

Los arduino tienen dos tipos de pines
- Análogos
- Digitales

Antes había una diferencia entre un arduino y un pic. Hoy día la empresa **atmega** hace ambos chipsets.

Vamos a estar usando AVR de 8 bits.

Se tiene acceso a una cantidad superior de comandos y usos que el que se tiene en otro tipo de chipsetst.

Nosotros ya no vamos a interactuar con las instrucciones directas desde el software de Arduino, pero sí se puede y se recomienda en caso de que se desee más control sobre las funiciones que se están trabajando.

Dentro de `PORT<letra>` se tiene el chance de leer toda la información que se tiene dentro del puerto para no ir leyendolo por partes.

No tengo idea de lo que está hablando el inge en este punto de la clase, nos está tirando datos muy técnicos que no sé cómo es que vamos a usar más adelante en el curso y en la clase. Espero que haga un buen ejemplo para entender lo que tenemos que hacer (se complica).

La placa ya incluye su propio método de grabado pero necesita un coso que no sé qué dijo el inge que es porque habla muy rápido.

A estas alturas se pasó a comparar el arduino nano y el arduino mega. ACABA DE DECIR QUE SON LO MISMO :). Está diciendo que tienen una diferencia de canales pwn porque el mega tiene 14 y en interrupciones arduino tiene 6 interrupciones de máximoa prioridad o configurables. SE PASÓ A COMPARAR CON EL PIC DE LA NADA. El pic solo tiene 4 (supuestamente). Cada pin dice que está asociado a un rgb en su coso que tiene (no sé que coso).

Nos acaba de decir que el coso de información de arduino es en el link de **arduino.cc**. 

El Arduino IDE usa terminología similar a la de C y C++. Utiliza métodos como 
```
pinMode(pin, input)
```

## Descargamos el Arduino IDE
Para descargarlo dentro del linux se descarga por medio del comando `sudo dnf`.
En **linux** la programación es similar, pero la forma en la que se escriben los puertos es diferente (supuestamente, saber cuál será la diferencia).

## Estructura de proyecto de arduino
Se tiene el apartado de
```
void setup()
{
// setup code
}
```
Donde se va a programar y configurar los puertos que se van a estar usando dentro del programa.

También el apartado de 
```
void loop()
{
// code
}
```
Es como el "main" de los proyectos de c, es todo lo que se va a estar ejecutando de forma cíclica.

## Configurar el arduino
Todas las placas tienen un COM o un tipo de driver, si el dispositivo no lo detecta y no muestra el tipo de com se tiene que instalar manualmente.

Se va a tools y se selecciona el tipo de arduino que se tiene conectado, en el caso nuestro debería ser un arduino one.


## Primero código en arduino
``` Arduino
void loop()
{
	pinMode(13, OUTPUT);
}

void loop()
{
	digitalWrite(13, HIGH);
	delay(500);
	digitalWrite(13, LOW);
	delay(500);
}
```

La función `delay(500);` se encarga de hacer un tiempo de no operación dentro del código. El tiempo es ingresado en **milisegundos**.

El código se puede compilar sin correrlo dentro del arduino.

A ESTAS ALTURAS ESTÁ INSTALADO OTRA MAMADA LLAMADA **Fritzing** PERO SABER NI PARA QUÉ PUTAS ES.