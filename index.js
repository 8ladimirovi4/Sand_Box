class Photo {
  constructor(title, pic, volume){
    this.title = title
    this.pic = pic
    this.volume = volume
  }
}

class Camera {
  #photos
  #memory

  constructor(memory, photos){
    this.#memory = memory
    this.#photos = photos
  }

  #remove() {
     this.#photos.pop()
  }

  removePhoto(){
    this.#remove()
  }

  get photos(){
    return this.#photos
  }

  get memory(){
    this.#photos.forEach(photo => {
          this.#memory -= photo.volume
    })
    return this.#memory
  }

}

const photo1 = new Photo('01.01.0001', 'base64pic', 10)
const photo2 = new Photo('02.02.0002', 'base64pic', 20)
const camera = new Camera(100, [photo1, photo2])

console.log('===> camera.memory', camera.memory)
console.log('===> camera.photos1', camera.photos)

camera.removePhoto()

console.log('===> camera.photos2', camera.photos)
