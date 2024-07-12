const buildURL = (() => {
    const LINK_FORM = document.querySelector('.container_link-form')
    const REAL_TIME_LINK = document.getElementById('real-time')
    let id = null

    LINK_FORM.addEventListener('submit', (evt) => {
      evt.preventDefault();
      //query
       id = GUID.newID()
       if(id == null) return
       
       REAL_TIME_LINK.href = `/real_time/?camNo=${evt.target['cam-no'].value}&id=${id}`
      //params
      //REAL_TIME_LINK.href = `/real_time/${evt.target['cam-no'].value}/${id}`
  
      evt.target['cam-no'].value = ''
     })
 
    REAL_TIME_LINK.addEventListener('click', (evt) => {
      REAL_TIME_LINK.target = 'blank_' + id
     if(REAL_TIME_LINK.href.includes('#')){
      REAL_TIME_LINK.target = ''
       alert('введите номер камеры')
      }
    })
 
    
 
 })()