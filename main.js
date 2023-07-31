const filas = 80  // Años
const columnas = 52  // Semanas

// Crear matriz
const matrix = []
for(let i = 0; i < filas; i++){
  matrix[i] = []
  for(let j = 0; j < columnas; j++){
    matrix[i].push(0)
  }
}

// Obtener la fecha de nacimiento
const fechaNacimiento = localStorage.getItem("nac");
if(fechaNacimiento == null){
  alert('Ingresa tu fecha de nacimiento')
}

// Obtener la fecha actual
const fecha = new Date();

// Calcular las semanas vividas
const diasVividos = parseInt((fecha - fechaNacimiento) / (1000 * 60 * 60 * 24));
var semanasVividas = parseInt(diasVividos / 7)
console.log("🚀 ~ file: main.js:15 ~ semanasVividas:", semanasVividas)
// Insertar en la matriz
for(let i = 0; i < filas && semanasVividas > 0; i++){
  for(let j = 0; j < columnas && semanasVividas > 0; j++){
    if(semanasVividas > 0){
      matrix[i][j] = 1;
      semanasVividas--;
    }
  }
}

// Modificar la tabla en el dom
const table = document.getElementById("table")
const tbody = document.createElement("tbody")
table.appendChild(tbody)
for(let i = 0; i < filas; i++){
  const tr = document.createElement("tr")
  for(let j = 0; j < columnas; j++){
    const td = document.createElement("td")
    td.textContent = '0'
    console.log(td)
    if(matrix[i][j] == 1){
      td.classList.add("alive")
    }else{
      td.classList.add("dead")
    }
    tr.appendChild(td)
  }
  tbody.appendChild(tr)
}
console.log(matrix)