const fetchData = (url, callback) => {
  setTimeout(() => {
if(!url.startsWith("http")){
    callback(new Error('ошибка'))
}else{
    callback(null, 'http://fake.com success')
}
  },1000)
}

const promisy = (fn) => {
    return function (...args){
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if(error) reject(error)
                    resolve(result)
            })
        })
    }
}

const fetchedData = promisy(fetchData)

fetchedData('http://fake.com')
.then(res => console.log('===> res', res))


