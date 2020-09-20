
const request = require('request')
const cheerio = require('cheerio')
const fs = require("fs");
function testWrite(file,data){
    fs.writeFile(file,data,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
        if(err){
            console.log("文件写入失败")
        }else{
            console.log(file,"文件写入成功");
        }
       }) 
}

function testRead(file){
    fs.readFile(file,'utf8',function(err,data){
        // console.log(data)
        console.log('读取文件成功')
        return(data)
    })


}

function getTitle(){
    //传递 HTML document
    // const url = 'https://www.baidu.com/'
    // const url = 'https://weixin.sogou.com/'
    // 搜文章
    // const url = 'https://weixin.sogou.com/weixin?type=2&s_from=input&query=余杭&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=7202&sst0=1599002468988&lkt=11%2C1599002464679%2C1599002468884'
    const url = 'https://weixin.sogou.com/weixin?type=2&s_from=input&query=%E4%BD%99%E6%9D%AD&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=5173&sst0=1599088916288&lkt=3%2C1599088912043%2C1599088916184'
    const file = 'msg.html'
    // 搜公众号
    // const url = 'https://weixin.sogou.com/weixin?type=1&s_from=input&query=余杭&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=2510&sst0=1599002499704&lkt=0%2C0%2C0'
    // const file ='public.html'

    // 文章ajax接口
    // const url = 'https://weixin.sogou.com/pcindex/pc/web/web.js?t=1599004145546'
    // const file = 'ajaxMsx.json'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36'
    }
    request({url:url,headers:headers}, function (err, response, body) {
        //此时body即为 HTML documen
        // const $ = cheerio.load(body)
        // console.log($)
        console.log(body)
        testWrite(file,body)
    })
    //传递标签字符串
    // const $ = cheerio.load('<div class="text">...</div>')
}

function getUrl(file,url){
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
        'Cookie': 'pgv_pvi=357708800; RK=Obn30vfaFX; pgv_pvid=3987143316; o_cookie=361340499; ptcz=ca6554e772b66be08df6653ea2a75dfc759cc7424fd475ea23aabecba6413a77; pac_uid=1_361340499; tvfe_boss_uuid=f860116db8b7412d; ts_uid=1348833671; noticeLoginFlag=1; wxuin=93838300162971; remember_acct=haooyes%40163.com; ptui_loginuin=361340499@qq.com; pgv_si=s4397519872; rewardsn=; wxtokenkey=777'
    }
    request({url:url,headers:headers}, function (err, response, body) {
        //此时body即为 HTML documen
        // const $ = cheerio.load(body)
        // console.log($)
        // console.log(response)
        console.log(response.statusCode)
        console.log(body)
        testWrite(file,body)
    })
}




function handleHtml(body){
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
      }
      return data
}

function handleBody(body){
    const $ = cheerio.load(body)
    const divBody = $('div[class=rich_media]') 
    console.log(divBody.html())
}

function getBody(data){
    let url ,file
    for(const i in data){
        (function(i) {
                    setTimeout(function() {
                        url = `https://weixin.sogou.com/${data[i].url}`
                        file = `./data/${i}.html`
                        getUrl(file,url)
                    }, (i + 1) * 1000);
        })(i)
    }
}

function getbody(body){
    const $ = cheerio.load(body)
    const divList = $('div.rich_media')
    const bodyHtml = divList.html()
}

function readBody(body){
    const $ = cheerio.load(body)
    const divList = $('div.rich_media')
    const bodyHtml = divList.html()
    console.log(bodyHtml)
}




// getTitle()
// const body = fs.readFileSync('public.html','utf8')

// 文章列表
// const file = './data/msg2.html'
// const url = 'https://weixin.sogou.com/weixin?type=2&s_from=input&query=%E4%BD%99%E6%9D%AD&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=5173&sst0=1599088916288&lkt=3%2C1599088912043%2C1599088916184'
// getUrl(file,url)
// const body = fs.readFileSync('./data/msg2.html','utf8')
// const data = handleHtml(body)
// console.log(data)
// getBody(data)

// const body = fs.readFileSync('./data/0.html','utf8')
// readBody(body)

// const file = 'body.html'
// const url = 'https://mp.weixin.qq.com/s?src=11&timestamp=1599893893&ver=2579&signature=87KiomP8FFnuA8FyMZAd5LxajSzKcKWejLbkc*zCGesPLBhyV3Sm27a5C8nm*xSTrWecpng7AG4vND*TVnsMcYBRmoQ9wGwur1C7Q6XFwWUwybtrP*9fSmZgS6svF2m0&new=1'
// // getUrl(file,url)
// const body = fs.readFileSync('./data/body.html','utf8')
// handleBody(body)

const file = './data/body1.html'
const url = 'https://weixin.sogou.com/link?url=dn9a_-gY295K0Rci_xozVXfdMkSQTLW6cwJThYulHEtVjXrGTiVgS_ebTjeDJbzRIUNDSTrJGMChYTg9WI5RvlqXa8Fplpd9cpm-cYzAXk24euuKV0HIcG00LzbCc6zOptr4g6K7p4a9VI3H5sf7OUFbQFCvfK4h2CCSZ2jJ19HAC1MoH7ZeQ_bbDnYvwnkx_feQdxlDFW5zqd2KC0bSaHln8MZQz0RbXJyxVFbOGaYFAZVKn8q1AnK669wp76zv64WOcVeeS49Ae0f8bRARvQ..&type=2&query=%E4%BD%99%E6%9D%AD&token=E5AA4AA7C910F697E7E24846A0BE1A21E8F0002B5F65F3A0&k=23&h=j'
// const url = 'https://mp.weixin.qq.com/s?src=11&timestamp=1600517024&ver=2594&signature=LzWNCFFX*zL8kiQ-oH1SFzor8JmBVTHwQaukY5BfroMyLLFADEI*5s95zD*D7nnwfu1*UEiMDGS2XJvqReBoSnTAOVCrh4b9A7lkbf9LQufURFTruZOFQIJmPKVpQ4TD&new=1'

// const url = 'https://weixin.sogou.com/link?url=dn9a_-gY295K0Rci_xozVXfdMkSQTLW6cwJThYulHEtVjXrGTiVgS_ebTjeDJbzRIUNDSTrJGMChYTg9WI5RvlqXa8Fplpd9f8Nmrytsxb-8Gg4HVALWIpCAkBAkYid4oRCymcxYp86NIz0MA89333kSAhMXv-Q9nB8TA7W936CaXsVUcU_EiftyZaacgGoAT8UHX7aGJhi08NFPD01YUlzX4MTvlN8TK_xgDMclfOYwfhl0a4v9fIcJ4EohOTB81FIAA1khVObm0CtGSSkZQQ..&type=2&query=余杭&token=E5AA4AA7C910F697E7E24846A0BE1A21E8F0002B5F65F3A0&k=64&h=l'
getUrl(file,url)
// const body = fs.readFileSync('./data/body1.html','utf8')
// readBody(body)


