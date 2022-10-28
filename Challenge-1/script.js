'use strict';

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ];

const contarOvejas = function (ovejas) {
	const ovejasCopy = [...ovejas];

	for(const [index, value] of ovejasCopy.entries()){
		if (value['color']!= 'rojo'){ 
			ovejas.splice(ovejas.indexOf(value), 1);
		}
		else{
			(!value['name'].toLowerCase().includes('n') || !value['name'].toLowerCase().includes('a')) && ovejas.splice(ovejas.indexOf(value), 1);
		};
	}
	return ovejas;
};

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);