const buildURL = (() => {
    const LINK_FORM = document.querySelector('.container_link-form')
    const REAL_TIME_LINK = document.getElementById('real-time')
 
    REAL_TIME_LINK.addEventListener('click', (evt) => {
     if(REAL_TIME_LINK.href.includes('#')){
       alert('введите номер камеры')
     }
    })
 
    LINK_FORM.addEventListener('submit', (evt) => {
     evt.preventDefault();
     //query
     //REAL_TIME_LINK.href = `/real_time/?camNo=${evt.target['cam-no'].value}`
     //params
     REAL_TIME_LINK.href = `/real_time/${evt.target['cam-no'].value}/1`
 
     evt.target['cam-no'].value = ''
    })
 
 })()