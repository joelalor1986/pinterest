
document.addEventListener('DOMContentLoaded', agregarImagen);
let isLoading = false; // Bandera para evitar cargar contenido mientras ya estamos cargando

function nearBottomOfPage() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
}

window.addEventListener('scroll', function() {
    if (nearBottomOfPage() && !isLoading) {
        isLoading = true;
        agregarImagen();  // Llamada a función que cargará más contenido
    }
});
function agregarImagen() {

  
    var columnas = document.getElementsByClassName('columna-principal');



    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < columnas.length; j++) {
            var aleatorio = obtenerAleatorio(1, 20);
            var divPrincipal = document.createElement('div');
            divPrincipal.classList.add('elemento');
            var imgPrincipal = document.createElement('img');
            imgPrincipal.classList.add('imgpos');
            imgPrincipal.setAttribute('src', './img/' + aleatorio + '.jpg')
            divPrincipal.appendChild(imgPrincipal);

            const padre = document.createElement('div');
            padre.classList.add('opciones');

            // Suponemos que ya tienes una referencia al padre. Por ejemplo:
            

            // Crear el contenedor principal .opciones__elementos
            const divElementos = document.createElement('div');
            divElementos.className = 'opciones__elementos';

            // Crear div.opciones-superior y sus hijos
            const divSuperior = document.createElement('div');
            divSuperior.className = 'opciones-superior';

            const divMispines = document.createElement('div');
            divMispines.className = 'mispines';
            const aMispines = document.createElement('a');
            aMispines.href = '';
            aMispines.className = 'pines';
            aMispines.textContent = 'Mis pines...';
            divMispines.appendChild(aMispines);
            divSuperior.appendChild(divMispines);

            const divGuardar = document.createElement('div');
            divGuardar.className = 'guardar';
            const aGuardar = document.createElement('a');
            aGuardar.href = '';
            aGuardar.className = 'boton-guardar';
            aGuardar.textContent = 'Guardar';
            divGuardar.appendChild(aGuardar);
            divSuperior.appendChild(divGuardar);

            divElementos.appendChild(divSuperior);

            // Crear div.opciones-inferior y sus hijos
            const divInferior = document.createElement('div');
            divInferior.className = 'opciones-inferior';

            const divBoton1 = document.createElement('div');
            divBoton1.className = 'boton-inferior';
            const aSvg1 = document.createElement('a');
            aSvg1.href = '#';
            const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg1.setAttribute('class', 'icon icon-tabler icon-tabler-dots');
            svg1.setAttribute('width', '16');
            svg1.setAttribute('height', '16');
            svg1.setAttribute('viewBox', '0 0 24 24');
            // ... Agregar los paths y otros atributos para svg1 ...
            divBoton1.appendChild(aSvg1);
            aSvg1.appendChild(svg1);
            divInferior.appendChild(divBoton1);

            const divBoton2 = document.createElement('div');
            divBoton2.className = 'boton-inferior';
            const aSvg2 = document.createElement('a');
            aSvg2.href = '#';
            const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg2.setAttribute('class', 'icon icon-tabler icon-tabler-upload');
            svg2.setAttribute('width', '16');
            svg2.setAttribute('height', '16');
            svg2.setAttribute('viewBox', '0 0 24 24');
            // ... Agregar los paths y otros atributos para svg2 ...
            divBoton2.appendChild(aSvg2);
            aSvg2.appendChild(svg2);
            divInferior.appendChild(divBoton2);

            divElementos.appendChild(divInferior);

            // Agregar el contenedor principal al padre
            padre.appendChild(divElementos);



            divPrincipal.appendChild(padre);

            columnas[j].appendChild(divPrincipal);
            
            console.log("La página ha sido cargada" + j);
        }
        isLoading = false;
    }

}
function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}