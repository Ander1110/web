const Mock = require('mockjs');


const swiperList = Mock.mock({
  "data|5":[{
    "img":"@image(800x400,@color,@city)"
  }]
})


const type = ["热门专辑","热门音乐人","音乐人企划","合作媒体"]
const list = Mock.mock({
  "data|5":[{
    "type|+1":type,
    "data|5":[{
      "id":"@id",
      "img":"@image(200x200,@color,@city)",
      "title":"@title"
    }]
  }]
})
module.exports = {
  swiperList,
  list
}