<?php
//Ejercicios con Ciclos
//While
echo "Ejercicio con while". "\n";
$num = 1;

while ($num <= 10) {
    echo $num." ";
    $num = $num +1;
}

echo "\n";
echo "\n";

// do while

echo "Ejercicio con do while". "\n";
$numero = 12;
do {
    echo $numero." ";
    $numero++;
} while ($numero <= 20);
echo "\n";
echo "\n";
// Foreach
echo "Ejercicio con foreach". "\n";
$a = 4;
for ($a=0; $a <=100 ; $a++) { 
    echo $a." ";
}


?>