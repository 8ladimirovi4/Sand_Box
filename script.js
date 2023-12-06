const data = []
const scale = []
let xScaleFuture = 5
let xScalePast = 5
let timeUnits = 'day'
let step = 1

// Получение ссылки на элемент canvas
const canvas = document.getElementById('myChart');

// Создание графика с конфигурацией
const ctx = canvas.getContext('2d');
const chart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Тренд 1',
          fill: false,
          showLine: true,
          lineTension: 0,
          backgroundColor: 'lightgrey',
          borderColor: 'lightgrey',
          data: [],
        },
        {
          label: 'Тренд 2',
          fill: false,
          showLine: true,
          lineTension: 0,
          backgroundColor: 'lightgrey',
          borderColor: 'lightgrey',
          data: [],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 300,
      },
      title: {
        display: true,
        text: 'График',
      },
      legend: {
        display: true,
        position: 'top',
        onClick: function () {},
        labels: {
          boxWidth: 15,
          fontFamily: 'Arial',
          fontSize: 8,
          padding: 5,
          usePointStyle: false,
        },
      },
      scales: {
        xAxes: 
          {
            display: true,
            type: 'time',
            autoSkip: false,
            position: 'bottom',
            distribution: 'linear',
            bounds: 'ticks',
            time: {
              isoWeekday: true,
              unit: 'day',
              displayFormats: {
                millisecond: 'ss.SSS',
                second: 'mm:ss.SSS',
                minute: 'HH:mm:ss',
                hour: 'DD.MM HH:mm',
                day: 'DD.MM',
                week: 'WW.YYYY',
                month: 'DD.MM.YYYY',
                quarter: 'Q YYYY',
                year: 'YYYY',
              },
            },
            scaleLabel: {
              display: true,
              labelString: 'Время',
              lineHeight: 1,
              fontFamily: 'Arial',
              fontSize: 10,
              padding: { bootom: 5 },
            },
          },
        
        yAxes: 
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Значение',
              lineHeight: 1,
              fontFamily: 'Arial',
              fontSize: 10,
              padding: { top: 5 },
            },
            ticks: {
              source: 'data',
              maxTicksLimit: 10,
              //stepSize: 1,
              precision: 3,
              lineHeight: 1,
              fontFamily: 'Arial',
              fontSize: 10,
            },
          },
        
      },
    }
});

function scaleX(xScaleRight, xScaleLeft, xUnit,  xStep){
// Получаем текущие данные
const currentData1 = chart.data.datasets[0].data;

// Получаем массив меток по оси X
const currentLabels1 = chart.data.labels;

// Находим индекс последней точки
const lastIndex = currentData1.length - 1;

// Получаем значение X для последней точки
const lastXValue = currentLabels1[lastIndex];



if (xScaleLeft > 0 && xStep > 0) {
  let minDate = moment()
  let maxDate = moment()

  switch (xUnit) {
      case 'millisecond':
          minDate.subtract(xScaleLeft, 'millisecond');
          maxDate.add(xScaleRight, 'millisecond');
          break;
      case 'second':
          minDate.subtract(xScaleLeft, 'seconds');
          maxDate.add(xScaleRight, 'seconds');
          break;
      case 'minute':
          minDate.subtract(xScaleLeft, 'minutes');
          maxDate.add(xScaleRight, 'minutes');
          break;
      case 'hour':
          minDate.subtract(xScaleLeft, 'hours');
          maxDate.add(xScaleRight, 'hours');
          break;
      case 'day':
          minDate.subtract(xScaleLeft, 'days');
          maxDate.add(xScaleRight, 'days');
          break;
      case 'week':
          minDate.subtract(xScaleLeft, 'weeks');
          maxDate.add(xScaleRight, 'weeks');
          break;
      case 'month':
          minDate.subtract(xScaleLeft, 'months');
          maxDate.add(xScaleRight, 'months');
          break;
      case 'year':
          minDate.subtract(xScaleLeft, 'years');
          maxDate.add(xScaleRight, 'years');
          break;
      default:
          break;
  }

  chart.options.scales.xAxes.time.stepSize = xStep
  chart.options.scales.xAxes.time.unit = xUnit
  console.log(minDate.format('YYYY-MM-DD HH:mm:ss'))
  console.log(maxDate.format('YYYY-MM-DD HH:mm:ss'))

  if (minDate != null) chart.options.scales.xAxes.min = minDate;
  if (maxDate != null) chart.options.scales.xAxes.max = maxDate;

  console.log(chart.options.scales.xAxes.min)
  console.log(chart.options.scales.xAxes.max)
}


chart.update();
}

scaleX(xScaleFuture, xScalePast, timeUnits, step)

// Функция для добавления данных в график
function addData() {
  const inputElement = document.getElementById('dataInput');
  const newData = parseFloat(inputElement.value);

  // Получаем текущие данные
  const currentData = chart.data.datasets[0].data;
  const currentLabels = chart.data.labels;

  // Добавляем новое значение в массив данных
  currentData.push(newData);

  // Добавляем метку (может быть номером точки)
  const newLabel = currentLabels.length + 1;
  currentLabels.push(newLabel);
  // Обновляем график
  chart.update();

  // Очищаем инпут
  inputElement.value = '';

  scaleX(xScaleFuture,xScalePast,timeUnits, step)
}



const rightInput = document.getElementById('rightAxis')
rightInput.addEventListener('change', (evt) => {
  if(evt.target.value < 0) 
  rightInput.value = 0

  xScaleFuture = evt.target.value
  scaleX(xScaleFuture, xScalePast, timeUnits, step)
 })

 const leftInput = document.getElementById('leftAxis')
 leftInput.addEventListener('change', (evt) => {
  if(evt.target.value < 0)
  leftInput.value = 0

  xScalePast= evt.target.value
  scaleX(xScaleFuture, xScalePast,timeUnits, step)
 })

 const datatInput = document.getElementById('dataInput')
 datatInput.addEventListener('change', (evt) => {
  const newData = parseFloat(evt.target.value);

  // Получаем текущие данные
  const currentData = chart.data.datasets[0].data;


  // if(currentData.length > 10) currentData.shift()
  const currentLabels = chart.data.labels;

  // Добавляем новое значение в массив данных
  currentData.push(newData);

  // Добавляем метку (может быть номером точки)
  const newLabel = currentLabels.length + 1;
  currentLabels.push(newLabel);

  // Обновляем график
  chart.update();



  scaleX(xScaleFuture,xScalePast,timeUnits, step)
 })

 const selectRange = document.querySelector('#time_range')
  selectRange.addEventListener('change', (e) => {
    timeUnits = selectRange.value
    scaleX(xScaleFuture,xScalePast,timeUnits, step)
})

const stepInput =  document.querySelector('#step_input')
stepInput.addEventListener('click', (e) => {
  if(e.target.value <= 0) e.target.value = 1
  step = e.target.value
    scaleX(xScaleFuture,xScalePast,timeUnits, step)
})

