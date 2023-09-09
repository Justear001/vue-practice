import { ArrayMethods } from "./arr";

export function observer(data) {
  // 判断data类型
  if (typeof data !== "object" || data === null) {
    return data;
  }
  // 对象通过一个类
  return new Observer(data);
}

class Observer {
  constructor(value) {
    //
    if (Array.isArray(value)){
      value.__proto__ = ArrayMethods;
      // 如果你是数组对象
      this.observeArray(value)
    } else {
      this.walk(value); // 遍历
    }
    
  }
  walk(data) {
    let keys = Object.keys(data);
    for (let i = 0, l = keys.length; i < l; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
  observeArray(value) {}
}

function defineReactive(data, key, value) {  // { a: { b: {c : 1 } } }
  observer(value); // 深度代理
  Object.defineProperty(data, key, {
    get() {
      console.log("////", "获取了数据");
      return value;
    },
    set(newValue) {
      console.log("////", "设置了数据");
      if (newValue === value) return;
      observer(newValue)
      value = newValue;
    },
  });
}
