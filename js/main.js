function numInput() {
	//Obtenemos el numero de nuestro input para generar espacios en donde colocaremos nuestros datos y asignamos a la variable quantity
	var quantity = document.getElementById("quantityData").value;
	//Variable de apoyo donde se crearan los nuevos inputs
	var processBox = document.getElementById("process")
	//For para generar los inputs
	for (var i = 0; i < quantity; i++) {
	    //Agregamos texto descriptivo para cada Input nuevo
        processBox.appendChild(document.createTextNode("Dato " + (i+1) + " "));
        //Damos detalles para cada input creado
        var input = document.createElement("input");
        input.class = "process-input"
        input.type = "text";
        input.name = "Dato " + i;
        input.id = "input"+i;
        input.placeholder = "Ingrese su dato N° " + (i+1)
        //Llamamos al input con todas su caracteristicas
        processBox.appendChild(input);
        //Un Salto de línea entre cada input creado 
        processBox.appendChild(document.createElement("br"));
	}
	//Activamos el boton que nos permitira ordenar nuestros numeros ingresados
	var btnOrder = document.getElementById("btnOrder").style.display = 'block'
}



function order() {
	var quantity = document.getElementById("quantityData").value;
	//Inicializamos el array vacio
	var numbers = [];
	/* Un for para tomar los valores de todos nuestros input y lo asignamos al array
	Number nos permite "parsear" el valor del input a un número, no hacer esto genera
	que el numero sea reconocido como un string y al hacer ordenamiento el algoritmo 
	no funciona. EJEMPLO: Sin este metodo reconocia que 32 era mayor a 310 ya que siendo
	string tomaba los dos valores delanteros y los ordenaba así */
	for (var i = 0; i < quantity; i++) {
		numbers[i] = Number(document.getElementById("input"+i).value);
  	}
  	console.log(numbers);
  	//Asigne mi array numbers a otra variable solo porque habia hecho por partes mi algoritmos y ya no queria cambiarlo XD
	var array = numbers;
	//Variable para mi límite en el "for"	
	var arrayLast = array.length - 1;
	//Variable temporal para intercambio de dato en el Array
	var temp;
	//Método some para verificar si se puede hacer el cambio de datos o no
	array.some(function() {
    	//For para recorrido de datos en el array
    	for (var index = 0; index < arrayLast; index++) {
      		//Variable nextIndex para comparación entre el dato presente y el siguiente
      		var nextIndex = index + 1;
      		//If para la comparativa de datos
      		if (array[index] > array[nextIndex]) {
      		//Swap o cambio de datos ayudándonos de nuestra variable previa temp
        		temp = array[nextIndex];
        		array[nextIndex] = array[index];
        		array[index] = temp;
		   }
    	}
  	});
  	console.log(array);

 	//Asigno mi div de salida a una variable
  	var resultBox = document.getElementById("out");

  	var ordenedList = array.toString();

  	resultBox.append(document.createElement("br"));
  	resultBox.appendChild(document.createTextNode("RESULTADO:"));
  	resultBox.append(document.createElement("br"));
  	resultBox.append(document.createTextNode("Datos Ordenados: "));
  	resultBox.append(ordenedList);
}
