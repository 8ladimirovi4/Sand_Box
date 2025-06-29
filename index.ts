
interface IMusicClient {
    getTracks:() => void;
}

class YandexMusic implements IMusicClient  {
    getTracks(){} 
}

class Spotify implements IMusicClient {
    getTracks(){} 
}

//абстракция, звено между клиентом и API
class MusicClient {
    client: IMusicClient 

    constructor(client){
        this.client = client
    }

    getTracks(){
        this.client.getTracks()
    }
}

const musicApp = () => {
    const API = new MusicClient(new YandexMusic())

    API.getTracks()
}