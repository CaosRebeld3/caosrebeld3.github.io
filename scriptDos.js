document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById('board');
    const gameOverLink = document.getElementById('gameOverLink');
    
    // Definimos los textos que aparecerán en cada casilla
    const texts = [
      'La',
      'Chica',
      'Del',
      'Ca',
      'le',
      'fac',
      'tor',
      'aca',
      'ba',
      'ra',
      'con',
      'los',
      'rui',
      'nes',
      'siem',
      'pre'
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

            // Crear el div para el texto
            const text = document.createElement('div');
            text.classList.add('text');
            text.textContent = texts[row * 4 + col]; // Asignamos un texto diferente para cada casilla

            // Aquí puedes agregar el tamaño del texto
            text.style.fontSize = '20px';  // Ajusta el tamaño de la fuente (puedes cambiar el valor)

            cell.appendChild(text);

            // Evento de clic
            cell.addEventListener('click', () => handleCellClick(cell));

            board.appendChild(cell);
        }
    }

    // Función que maneja el clic en las casillas
    function handleCellClick(cell) {
        const text = cell.querySelector('.text');

        text.style.display = 'block';  // Mostramos el texto
        
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
        }, 300); // 1000ms = 1 segundo
    }
});
