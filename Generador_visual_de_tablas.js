$(document).ready(function () {
    let rowCount = 1;
    let colCount = 2;

    $('#addRow').click(function () {
        let newRow = '<tr>';
        for (let i = 0; i < colCount; i++) {
            newRow += '<td>Fila ' + (rowCount + 1) + ', Col ' + (i + 1) + '</td>';
        }
        newRow += '</tr>';
        $('#myTable tbody').append(newRow);
        rowCount++;
    });

    $('#removeRow').click(function () {
        if (rowCount > 1) {
            $('#myTable tbody tr:last').remove();
            rowCount--;
        }
    });

    $('#addColumn').click(function () {
        colCount++;
        $('#myTable thead tr').append('<th>Columna ' + colCount + '</th>');
        $('#myTable tbody tr').each(function () {
            $(this).append('<td>Fila ' + ($(this).index() + 1) + ', Col ' + colCount + '</td>');
        });
    });

    $('#removeColumn').click(function () {
        if (colCount > 1) {
            $('#myTable thead tr th:last').remove();
            $('#myTable tbody tr').each(function () {
                $(this).find('td:last').remove();
            });
            colCount--;
        }
    });
});
