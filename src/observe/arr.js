// 重写数组

// 获取原来的数组的方法
let oldArrayProtoMethods = Array.prototype

// 继承
export let ArrayMethods = Object.create(oldArrayProtoMethods)

// 劫持
let methods = [
  'push',
  'pop',
  'unshift',
  'shift',
  'splice',
  'reverse',
  'sort'
]

methods.forEach(item => {
  ArrayMethods[item] = function(...args) {
    // 执行数组原来的方法
    let result = oldArrayProtoMethods[item].apply(this, args)
    return result
  }
})