function SPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio > 70) {
      return "aprobado";
    } else {
      return "reprobado";
    }
  }
  
  
  let RPromedio = SPromedio(80, 35, 90);
  alert("El estudiante está "+ RPromedio);