window.onload = function()
{	
	 var validarPalindromo = function validarPalindromo(frase)
	{
		var palinInicial= frase; 
		var partePalin =palinInicial.split("");// separa las letras del string
		var tmp; //variable temporal donde se va a guardar "paliInicial" para que no sea modificada		
		palinInicial = palinInicial.toLowerCase(); // convertin enminusculas el string 
		tmp = JSON.parse(JSON.stringify(partePalin));// clorar la variable palinInicial
		var validar=partePalin.reverse(); // se invierte el string palinInicial  y se guarda en una nueva variable
		var c =0; // crear contador para que me recorra todo el string
		for (var i = 0; i < validar.length; i++) 
		{
			validar[i]==tmp[i]? c++ : console.log("esta funcionando");
		}
			if (c==validar.length) 
			{
				swal("\""+frase+"\"", " Es un palindromo", "success");
				event.preventDefault();
			}
			else
			{
				swal("\""+frase+"\"", " NO es un palindromo", "error");
				event.preventDefault();
			}
	}

	nom_div("validar").addEventListener('click', function(event) 
	{
		var frase = nom_div("frase").value;		
		if(nom_div("frase").value!= "") //se valida que no esté vacio el el input text
			{
				validarPalindromo(frase);// se llama la funcion validarPalindromo	
			}
			else
			{
				swal("ESPERE ", "Por favor ingrese una palabra o frase", "warning");//mensaje de error si el input está vacio
				event.preventDefault();
			}			
	});

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}