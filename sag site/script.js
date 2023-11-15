document.addEventListener('DOMContentLoaded', function() {
    fetch('dados.csv')
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('tabela');
            tableContainer.innerHTML = convertCSVToHTMLTable(data);

            applyResizing(); // Aplica o redimensionamento após criar a tabela
        });
});

function convertCSVToHTMLTable(csvData) {
    const rows = csvData.split('\n');
    let tableHTML = '<table>';
    rows.forEach(row => {
        tableHTML += '<tr>';
        const cells = row.split(',');
        cells.forEach(cell => {
            tableHTML += `<td class="resizable">${cell}</td>`;
        });
        tableHTML += '</tr>';
    });
    tableHTML += '</table>';
    return tableHTML;
}

function applyResizing() {
    let resizing = false;
    let colToResize = null;
    let startOffset = 0;

    document.addEventListener('mousemove', function(e) {
        if (resizing && colToResize) {
            const newWidth = e.clientX + startOffset;
            colToResize.style.width = `${newWidth}px`;
            colToResize.style.maxWidth = `${newWidth}px`;
        }
    });

    document.addEventListener('mouseup', function() {
        resizing = false;
        colToResize = null;
    });

    const cols = document.querySelectorAll('.resizable');

    cols.forEach(col => {
        col.addEventListener('mousedown', function(e) {
            resizing = true;
            colToResize = this;
            startOffset = colToResize.offsetWidth - e.clientX;
        });
    });
}
