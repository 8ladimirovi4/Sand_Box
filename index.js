class Country {
  constructor(cities){
    this.cities = cities
  }
}

class City {
  constructor(name, latitude, longitude){
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude
  }
}

class CapitalCity extends City{
  constructor(name, latitude, longitude, country){
    super(name, latitude, longitude)
    this.contry = country
  }
}

const berlin = new CapitalCity('Berlin', 1.2345, 2.4567, 'Germany')

console.log('===> ', berlin)