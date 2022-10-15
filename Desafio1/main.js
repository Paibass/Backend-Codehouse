class Contenedor{
	#arreglo
	constructor(){
		this.#arreglo = [];
	}

	save(id, titulo, precio, imagen){
		this.#arreglo.push({
			id: (id),
			title: (titulo),
			precio: (precio),
			imagen: (imagen)
		})
	}

	getAll(){
		return this.#arreglo
	}

	getById(numId){
		const solicitarItem = this.#arreglo.find((i)=>i.id===numId)
      		if(solicitarItem===undefined){
          		return "No existe el item"
      		}else{
          		return solicitarItem
      		}
		}

	deleteById(numId){
		for (let i=0;i<this.#arreglo.length;i++){
            if (this.#arreglo[i].id===numId){
                this.#arreglo.splice(i, 1)
            }
		}
	}

	 deleteAll(){
        this.#arreglo.splice(0, this.#arreglo.length+1)
    }	
	
}		
console.log('\nInicializamos el Contenedor\n');
const container = new Contenedor();

console.log('Llamamos al metodo save() y le agregamos 5 items\n');
container.save(1, 'La orca', '430', 'foto1');
container.save(2, 'La Ballena', '630', 'foto2');
container.save(3, 'El pez', '130', 'foto3');
container.save(4, 'La sirena', '930', 'foto4');
container.save(5, 'El Tiburon', '430', 'foto5');

console.log('Con el metodo getAll() retornamos todos los items del array\n');
console.log(container.getAll());

console.log('\nCon el metodo getById() le pasamos un id por parametro y nos retorna el item que coincida. En Este caso le pasamos el id 2\n');
console.log(container.getById(2));

console.log('\nCon el metodo deleteById() le pasamos por parametro un ID para su perteneciente item. Le pasamos el ID 4\n');
container.deleteById(4);
console.log('Mostramos para comprabar')
console.log(container.getAll());

console.log('\nCon el metodo deleteAll() borramos todo el contenido del array');
container.deleteAll();
console.log('\nMostramos para comprabar')
console.log(container.getAll());