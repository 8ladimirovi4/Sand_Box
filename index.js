

  // Получаем таблицу HTML
  const table = $('#excel_table')

  // Модальное окно
  const modal = $('#modal').get(0)
  const span = $('.close');

  // Обработчик клика по таблице
  table.on('click', function() {
      // Извлекаем данные из HTML таблицы

      const rows = Array.from(table.get(0).rows);
      const data = rows.map(row => {
          return Array.from(row.cells).map(cell => cell.textContent);
      });

      // Открываем модальное окно
      modal.style.display = "block";

    $('#spreadsheet').jexcel({ data: data, colWidths: [ 50, 100, 100, 100 ] })
  });

  // Закрываем модальное окно при клике на крестик
  span.on('click', function() {
    modal.style.display = "none";
    // Удаляем содержимое jExcel чтобы избежать повторного инициализирования при следующем открытии
    $('#spreadsheet').html('')
})

  // Закрываем модальное окно при клике вне его
  $(window).on('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('#spreadsheet').html('')
    }
})

// Обработчик клика по кнопке "Сохранить данные"
$('#saveButton').on('click', function() {
    // Получаем данные из jExcel
    const data = $('#spreadsheet').jexcel('getData');
    // Очистка существующей таблицы HTML
    table.find('tr').remove();

    // Перезаписываем данные в HTML таблицу
    data.forEach(row => {
        const rowHtml = `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
        console.log('===>rowHtml',rowHtml)
        table.append(rowHtml);
    });

    // Закрываем модальное окно
    modal.style.display = "none";
    $('#spreadsheet').html('');
});


