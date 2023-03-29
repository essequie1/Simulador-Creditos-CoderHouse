let username = prompt('Escriba su nombre:');

if (username.length > 0) {
  let amount = prompt(username + ', digite el monto a solicitar:\nDebe ser entre $10.000 Y $50.000');
  if (parseInt(amount) >= 10000 && parseInt(amount) <= 50000) {
    let option = prompt(
      'Puede retirar su credito de $' +
        amount +
        ' con las siguientes opciones, elija una:\n1) 3 Cuotas s/Interes\n2) 6 Cuotas c/Interes (44%)\n3) 12 Cuotas c/ Interes (87%)\nEscriba "X" para salir'
    );
    while (option != 'X' && option != 'x') {
      if (option == '1') {
        let fees = amount / 3;
        let confirmation = prompt(
          'Su credito de $' + amount + ' se realizará en 3 Cuotas de $' + fees + ' cada una\nSi esta de acuerdo escriba SI, si no es asi, escriba NO'
        );
        if (confirmation === 'SI') {
          alert('Gracias por confiar en nosotros');
          break;
        }
      }
      if (option == '2') {
        let fees = (amount * 1.44) / 6;
        let confirmation = prompt(
          'Su credito de $' + amount + ' se realizará en 6 Cuotas de $' + fees + ' cada una\nSi esta de acuerdo escriba SI, si no es asi, escriba NO'
        );
        if (confirmation === 'SI') {
          alert('Gracias por confiar en nosotros');
          break;
        }
      }
      if (option == '3') {
        let fees = (amount * 1.87) / 12;
        let confirmation = prompt(
          'Su credito de $' + amount + ' se realizará en 12 Cuotas de $' + fees + ' cada una\nSi esta de acuerdo escriba SI, si no es asi, escriba NO'
        );
        if (confirmation === 'SI') {
          alert('Gracias por confiar en nosotros');
          break;
        }
      }
      option = prompt(
        'Puede retirar su credito de $' +
          amount +
          ' con las siguientes opciones, elija una:\n1) 3 Cuotas s/Interes\n2) 6 Cuotas c/Interes (44%)\n3) 12 Cuotas c/ Interes (87%)\nEscriba "X" para salir'
      );
    }
  } else {
    alert('Monto no valido, reintente...');
  }
} else {
  alert('Nombre no valido, reintente...');
}
