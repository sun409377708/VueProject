class BaseModel {

  code=''
  message=''
  results=''

  constructor(json) {
    // json.forEach((value,key) => {
    //   console.log('key:' +key+'\nvalue:'+value)
    // })

    for (let key in json) {
      if (this[key] != undefined) {
        if (BaseModel.classForKey()[key]) {
          this[key] = BaseModel.classForKey()[key](json[key])
        }
        this[key] = json[key]
      }
    }
  }

  static classForKey(){
    return {
      result: NetworkModel
    }
  }
}

class NetworkModel extends BaseModel {
  constructor(imgUrl){
    super(code, message, results)
    this.imgUrl = imgUrl
  }
}

export default {
  BaseModel:BaseModel,
  NetworkModel:NetworkModel
}
