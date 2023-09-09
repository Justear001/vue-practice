import { observer } from "./observe/index"

export function initState(vm) {
  let opts = vm.$options
  // 判断
  if (opts.props) {
    initProps()
  }
  if (opts.data) {
    initData(vm)
  }
  if (opts.watch) {
    initWatch()
  }
  if (opts.computed) {
    initComputed()
  }
  if (opts.methods) {
    initMethods()
  }
}

function initProps(){}
function initComputed(){}
function initWatch(){}
function initMethods(){}
// vue2 对我们data初始化
function initData(vm){
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data
  // data的数据进行劫持
  observer(data)
}

// data (1)对象 (2)数组
