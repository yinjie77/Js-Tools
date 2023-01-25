function inherit(son, father) {
    //使用父类的原型副本作为子类型的原型，避免了创建不必要的属性
    let prototype = Object.create(father.prototype)
    prototype.constructor = son
    son.prototype = prototype
}
function father(name) {
    this.name = name
    this.arr = [1, 2]
}
father.prototype.hello = function () {
    console.log('hello father')
}
function son(name, age) {
    father.call(this, name)
    this.age = age
}
inherit(son, father)
son.prototype.hello = function hello() {
    console.log('hello son')
}
