export function initState(vm) {
  let opts = vm.$options
  // 判断
  if (opts.props) {
    initProps()
  }
  if (opts.data) {
    initData()
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
function initData(){}
