function a (name) {
    this.name = name || 'Karen' 
}

a.prototype.family = function (family) {
    this.family = family || 'Vahik'
    this.family =  this.family + '-Vahidovich'
    return this.family
}

const family = a.prototype.family

function b (name) {
    a.call(this, name)
}

//{
b.prototype = Object.create(a.prototype)
b.prototype.constructor = b
//same mxUtils.extend(b, a); mxGraph library
//}

b.prototype.family = function () {
    family.apply(this, arguments)

    return this.family
}

const bObj = new b()
console.log('===>bObj.name',bObj.name)
console.log('===>bObj.family',bObj.family())