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

  constructor(memory){
    this.#memory = memory
    this.#photos = []
  }

  #add(userPhotos) {
    if(!Array.isArray(userPhotos)) return 

for (let i = 0; i < userPhotos.length; i++) {
   this.#memory -= userPhotos[i].volume
  if(this.#memory < 0) break;
  this.#photos.push(userPhotos[i])
}
  }

  #remove() {
     this.#photos.pop()
  }

  addPhoto(userPhotos){
       this.#add(userPhotos) 
  }

  removePhoto(){
    this.#remove()
  }

  get photos(){
    return this.#photos
  }

  get memory(){
    return this.#memory
  }

}

const photo1 = new Photo('01.01.0001', 'base64pic', 50)
const photo2 = new Photo('02.02.0002', 'base64pic', 40)
const camera = new Camera(100, [photo1, photo2])

console.log('===> camera.memory', camera.memory)
console.log('===> camera.photos', camera.photos)

camera.addPhoto([photo1, photo2])
console.log('===> camera.photos', camera.photos)
console.log('===> camera.memory', camera.memory)

camera.removePhoto()

console.log('===> camera.photos', camera.photos)
