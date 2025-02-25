function goHome() {
    window.location.href = '/'; // Adjust the URL as needed
}

function validateComment(cell) {
    const regex = /^[a-zA-Z.]*$/;
    if (!regex.test(cell.innerText)) {
        cell.innerText = cell.innerText.slice(0, -1);
    }
}

function exportToExcel() {
    const table = document.getElementById('requirementSheet');
    const rows = Array.from(table.rows);
    let csvContent = '';

    rows.forEach(row => {
        const cells = Array.from(row.cells);
        const rowContent = cells.map(cell => cell.innerText).join(',');
        csvContent += rowContent + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'requirement_sheet.csv';
    link.click();
}
