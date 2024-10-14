// Cargar Pyodide desde el CDN y ejecutar código Python
async function runPythonCode() {
    // Asegúrate de que Pyodide esté cargado
    let pyodide = await loadPyodide();

    // Define el código Python que quieres ejecutar
    var codigoPy = `
        def my_algorithm(x):
            return x * 2

        my_algorithm(2024)
    `;

    // Ejecuta el código Python
    let result = await pyodide.runPythonAsync(codigoPy);

    // Muestra el resultado en el div con id 'output'
    document.getElementById('output').innerText = 'Resultado: ' + result;
}
