const main = document.querySelector('.main')

const header = document.createElement('div')
header.classList = 'header'
main.before(header)


const footer = document.createElement('div')
footer.classList = 'footer'
main.after(footer)




fetch('/template/header.html')
.then(response => {
    if(!response.ok){
        throw new Error('error load page')
    }else{
        return response.text()
    }
    })
    .then(html => {
    const header = document.querySelector('.header')
    header.innerHTML = html
      })

fetch('/template/footer.html')
.then(response => {
    if(!response.ok){
        throw new Error('error load page')
    }else{
        return response.text()
    }
    })
    .then(html => {
    const footer = document.querySelector('.footer')
   footer.innerHTML = html
      })
