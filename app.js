//alert('Mi archivo está bien linkeado');

//dividir(a, b)
//Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos

//dividir(12, 3) // 4
//dividir(8, 4) // 2
//sumar(30, 6) // 5

const a = prompt('Ingresa el primer número');
const b = prompt('Ingresa el segundo número');

const dividir = (a,b) => {
    return a / b;
};
console.log(dividir(a,b));

const resultadoDeLaDivision = dividir(a,b);

console.log(`El resultado de la división de ${a} / ${b}   es:  ${resultadoDeLaDivision}`);

alert(`El resultado de la división de ${a} / ${b}es: ${resultadoDeLaDivision}`);

