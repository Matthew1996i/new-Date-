var data = new Date();
var ano = data.getFullYear();
//var mes = converterMes + 1;
//var converterMes = data.getMonth();
var meses = ['Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'];
var mes = meses[data.getMonth()];
var dia = data.getDate();
var diaHoje = dia+"/"+mes+"/"+ano;
console.log(diaHoje);
