// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
const cheerio = require('cheerio')


cloud.init()
const db = cloud.database()
const public = db.collection('public')
const body = db.collection('body')

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  getTitle()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}

const saveBodyData = (data) => {
  console.log('开始存储数据')
  public.add({
    data: data,
    success: function (res) {
      consoe.log('插入数据完成', res)
    }
  })
  console.log('数据库 插入成功')
}


const savePublicData = (data) => {
  console.log('开始存储数据')
  // const todo = db.collection('todos').doc('todo-identifiant-aleatoire')
  public.add({
    // data 字段表示需新增的 JSON 数据
    data: data,
    // data: {
    //   // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    //   description: "learn cloud database",
    //   due: new Date("2018-09-01"),
    //   tags: [
    //     "cloud",
    //     "database"
    //   ],
    //   // 为待办事项添加一个地理位置（113°E，23°N）
    //   location: new db.Geo.Point(113, 23),
    //   done: false
    // },
    success: function (res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      consoe.log('插入数据完成', res)
    }
  })
  console.log('数据库 插入成功')
}



const getTitle = () => {
  console.log('开始搜索文章')
  // 搜文章
  const url = 'https://weixin.sogou.com/weixin?type=2&s_from=input&query=%E4%BD%99%E6%9D%AD&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=5173&sst0=1599088916288&lkt=3%2C1599088912043%2C1599088916184'
  const file = 'msg.html'

  headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36'
  }
  request({ url: url, headers: headers }, function (err, response, body) {
    console.log('获取信息成功')
    const data = handleHtml(body)
    console.log('处理数据完成')
    // 存储文章列表
    // savePublicData(data) 
    //处理文章
    getBody(data)
  })
}

const getData = (data) => {
  console.log('获取原始数据')
  data.forEach((item) => {
    // console.log(item)
    public.where({
      name: item.name,
      h3: item.h3
    }).get({
      success:(res) => {
        // res.data 是包含以上定义的两条记录的数组
        // console.log(res.data)
        console.log(111111,res.data.length)
      }
    })
  })

  // 获取全量数据
  // public.get().then(res => {
  //   // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
  //   // console.log(res.data)
  //   res.data.forEach((itemB)=>{
  //     // console.log(itemB)
  //     data.forEach((itemD)=>{
  //       if(itemD.name === itemB.name){

  //       }
  //     })
  //   })
  // })
}


const handleHtml = (body) => {
  const $ = cheerio.load(body)
  // console.log($('title').text())
  const divList = $('div.txt-box')
  // const divList = $('a[class=account]') 
  let url, h3, time, name, detail, nameImage
  let data = []
  for (let i = 0; i < divList.length; i++) {
    h3 = divList.eq(i).find("h3").eq(0).text()
    url = divList.eq(i).find("a").eq(0).attr("href")
    name = divList.eq(i).find("a[class=account]").text()
    time = divList.eq(i).find("span").html()
    time = time.split('\'')[1]
    time =new Date(time*1000)
    time = time.toLocaleDateString().replace(new RegExp('/','g'),'-')
    detail = divList.eq(i).find("p").eq(0).text()

    // console.log(h3,url)
    data.push({
      'url': url,
      'h3': h3,
      'name': name,
      'time':time,
      'detail':detail,
    })
    //测试
    return data
  }
  return data
}

// const saveFile = () => {
//   cloud.uploadFile({
//     cloudPath: 'msg.html', // 上传至云端的路径
//     filePath: '', // 小程序临时文件路径
//     success: res => {
//       // 返回文件 ID
//       console.log(res.fileID)
//     },
//     fail: console.error
//   })
// }


const getBody = (data) =>  {
 let h3,url
 for(const i in data){
      (function(i) {
          setTimeout(function() {
              console.log('请求:',data[i].url);
              h3 = data[i].h3
              url = `https://weixin.sogou.com/${data[i].url}`
              headers = {
                  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36'
              }
              request({url:url,headers:headers}, function (err, response, body) {
                  //此时body即为 HTML documen
                  // const $ = cheerio.load(body)
                  // console.log($)
                  console.log(body)
                  console.log(response.statusCode)
                  if (response.statusCode === 301){
                    console.log('301',response.headers['location'])
                  }
                  // const $ = cheerio.load(body)
                  // const divList = $('div.rich_media')
                  // const bodyHtml = divList.html()
                  // const bodyData = [{
                  //   'h3':h3,
                  //   'url':url,
                  //   'body':bodyHtml
                  // }]
                  // console.log('开始存储:',bodyData)
                  // savebodydata(bodyData)
              })
          }, (i + 1) * 1000);

      })(i)
    }

}