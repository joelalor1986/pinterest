
document.addEventListener('DOMContentLoaded', agregarImagen);
let isLoading = false; // Bandera para evitar cargar contenido mientras ya estamos cargando

function nearBottomOfPage() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
}

window.addEventListener('scroll', function () {
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
            const divElementos = document.createElement('div');
            divElementos.className = 'opciones__elementos';
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
            const divInferior = document.createElement('div');
            divInferior.className = 'opciones-inferior';
            const divBoton1 = document.createElement('div');
            divBoton1.className = 'boton-inferior';
            const aSvg1 = document.createElement('a');
            aSvg1.href = '#';
            aSvg1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="16" height="16"  viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none"  stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>';
            divBoton1.appendChild(aSvg1);
            divInferior.appendChild(divBoton1);
            const divBoton2 = document.createElement('div');
            divBoton2.className = 'boton-inferior';
            const aSvg2 = document.createElement('a');
            aSvg2.href = '#';
            aSvg2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-upload" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" /></svg>';
            divBoton2.appendChild(aSvg2);
            divInferior.appendChild(divBoton2);
            divElementos.appendChild(divInferior);
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