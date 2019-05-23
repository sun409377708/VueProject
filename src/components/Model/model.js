class BaseModel {

  code = 0
  msg = ""


  static init(objc) {
    let model = new this()
    let obj = JSON.parse(JSON.stringify(objc))
    for (let key in model) {
      if (obj[key]) {
        if (model.arrayForKey()[key] && Array.isArray(obj[key])) {
          model[key] = obj[key].map((value) => {
            return model.arrayForKey()[key].init(value)
          })
        } else if (model.classForKey()[key]) {
          model[key] = model.classForKey()[key].init(obj[key])
        } else {
          model[key] = obj[key]
        }
      }

    }
    return model
  }

  arrayForKey() {
    return {}
  }

  classForKey() {
    return {}
  }
}

class Product extends BaseModel {
  id = 0
  res = undefined
  list = undefined

  classForKey() {
    return {
      res: Product
    }
  }

  arrayForKey() {
    return {
      list:Product
    }
  }
}

let pro = Product.init( {
  id: 123,
  res: {
    id: 456
  },
  list:[
    {
      id: 1
    },{
      id: 2
    },{
      id: 3
    },
  ]
})
console.log(pro)

export default BaseModel
