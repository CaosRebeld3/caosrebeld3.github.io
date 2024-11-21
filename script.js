document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById('board');
    const gameOverLink = document.getElementById('gameOverLink');
    
    // Definimos las imágenes y los textos que aparecerán en cada casilla
    const images = [
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png',
        'img/yavatar.png'
    ];

    const texts = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ];

    let totalCells = 16; // Total de casillas en el tablero (4x4)
    let remainingCells = totalCells; // Casillas restantes visibles

    // Crear el tablero 4x4
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

            // Asignamos una imagen y un texto a cada casilla
            const img = document.createElement('img');
            img.src = images[row * 4 + col]; // Asignamos una imagen diferente para cada casilla
            img.alt = `Imagen ${row * 4 + col + 1}`;

            // Establecemos el tamaño de la imagen a 50x50px
            img.style.width = '70px';
            img.style.height = '70px';

            cell.appendChild(img);

            const text = document.createElement('div');
            text.classList.add('text');
            text.textContent = texts[row * 4 + col]; // Asignamos un texto diferente para cada casilla
            cell.appendChild(text);

            // Evento de clic
            cell.addEventListener('click', () => handleCellClick(cell));

            board.appendChild(cell);
        }
    }

    // Función que maneja el clic en las casillas
    function handleCellClick(cell) {
        const text = cell.querySelector('.text');
        const img = cell.querySelector('img');

        text.style.display = 'block';  // Mostramos el texto
        img.style.display = 'block';   // Mostramos la imagen
        
        // Después del tiempo establecido, eliminar la casilla
        setTimeout(() => {
            cell.style.display = 'none';
            remainingCells--;  // Disminuimos el número de casillas visibles

            // Si no quedan casillas visibles, mostramos el enlace
            if (remainingCells === 0) {
                // Esperamos un momento para asegurar que todas las celdas han desaparecido antes de mostrar el enlace
                setTimeout(() => {
                    gameOverLink.style.display = 'block'; // Mostrar el enlace
                    gameOverLink.setAttribute('target', '_self'); // Aseguramos que el enlace se abra en la misma página
                }, 300); // Retardo pequeño para que se vea el efecto de eliminación de celdas
            }
        }, 50); // 1000ms = 1 segundo
    }
});
