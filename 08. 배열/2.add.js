const fruits = ['π', 'π', 'π', 'π']

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for(let i = 0; i < fruits.length; i++) { //for λ£¨νλ₯Ό μ΄μ©νλ©΄ μΌμΌμ΄ μΆλ ₯νμ§ μμλ λλ€
    console.log(fruits[i]);
}

// const fruits = ['π', 'π', 'π', 'π']
// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ
fruits[4] = 'π'; // μΈλ±μ€λ‘ λ°λ‘ μ κ·Όνλκ²μ μ’μ§ μλ€(μΈλ±μ€λ‘ λ°λ‘ μΆκ°νλκ²μ μ’μ§ μλ€)
console.log(fruits);

delete fruits[1]; // μ΄λ κ² μ­μ λ₯Ό νλ©΄ λΉμ΄μλ λ°°μ΄μ΄ μκΈ΄λ€ (1 μΈλ±μ€ μλ¦¬κ° λΉμ΄μλμ±λ‘ μΆλ ₯)
console.log(fruits);