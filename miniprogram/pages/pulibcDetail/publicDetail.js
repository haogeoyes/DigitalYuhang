// pages/pulibcDetail/publicDetail.js
const WxParse = require('../../wxParse/wxParse.js')
const getFile = () => {
  return new Promise(resolve => {
    wx.cloud.downloadFile({
      fileID: 'cloud://liping-e11mv.6c69-liping-e11mv-1302733941/body.html'
    }).then(res => {
      console.log(res.tempFilePath)
      let fs=wx.getFileSystemManager()
      let result = fs.readFileSync(res.tempFilePath,"utf-8")
      // resolve(result)
      var article = result
      console.log('请求html成功',article)
      WxParse.wxParse('article', 'html', article, that, 5);

    })
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:'',

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // const body = fs.readFileSync('./data/body.html','utf8')
    // WxParse.wxParse('body', 'html', body, this, 5);
    // console.log(body)

    // var that = this;
    /**
     * 初始化emoji设置
     */

    wx.cloud.downloadFile({
      fileID: 'cloud://liping-e11mv.6c69-liping-e11mv-1302733941/body.html'
    }).then(res => {
      console.log(res.tempFilePath)
      let fs=wx.getFileSystemManager()
      // let result = fs.readFileSync(res.tempFilePath,"utf-8")

      let result = `
      <div id="js_article" class="rich_media">
    
    <div id="js_top_ad_area" class="top_banner"></div>
    
    <div class="rich_media_inner">

        
        
		<div id="page-content" class="rich_media_area_primary">

		  <div class="rich_media_area_primary_inner">

            
                        
                        

            <div id="img-content" class="rich_media_wrp">
                
                <h2 class="rich_media_title" id="activity-name">
                    
                    
                    
余杭绿码，已上线！安全通行，助力防疫！
                </h2>
                <div id="meta_content" class="rich_media_meta_list">
                                                                                
                                        <span class="rich_media_meta rich_media_meta_nickname" id="profileBt">
                      <a href="javascript:void(0);" id="js_name">
                        华数余杭                      </a>
                      <div id="js_profile_qrcode" class="profile_container" style="display:none;">
                          <div class="profile_inner">
                              <strong class="profile_nickname">华数余杭</strong>
                              <img class="profile_avatar" id="js_profile_qrcode_img" src="" alt="">

                              <p class="profile_meta">
                              <label class="profile_meta_label">微信号</label>
                              <span class="profile_meta_value">wasuyuhang</span>
                              </p>

                              <p class="profile_meta">
                              <label class="profile_meta_label">功能介绍</label>
                              <span class="profile_meta_value">华数互动电视新片速递、优惠信息早知道、vip俱乐部活动报名</span>
                              </p>
                              
                          </div>
                          <span class="profile_arrow_wrp" id="js_profile_arrow_wrp">
                              <i class="profile_arrow arrow_out"></i>
                              <i class="profile_arrow arrow_in"></i>
                          </span>
                      </div>
                    </span>
                    <em id="publish_time" class="rich_media_meta rich_media_meta_text">2月8日</em>
                </div>

                
                                                <div id="js_tags" class="article-tag__list" style="display: none;" data-len="0">
                                            
                        <div class="article-tag-card__title">收录于话题</div>
                        <div class="article-tags">
                                                    </div>
                                    </div>

                
                                
                
                

                
                                                                

                
                                


                
                
                
                
                                                
                                                                
                                
                                
                
                <div class="rich_media_content " id="js_content" style="visibility: visible;">
                    

                    

                    
                    
                    <section style="display: none;" data-tools="新媒体管家" data-label="powered by xmt.cn"><br></section><p style="text-align: center;"><img class="rich_pages __bg_gif " data-backh="142" data-backw="574" data-before-oversubscription-url="https://mmbiz.qpic.cn/mmbiz_gif/NRuT2ZRohszF9kaweJiaCsQ3UeoOoAxv5liabnmkHhyA5ojR2dsCTXvribhcR0eo0icLK0gQD76XMuVKx8Lm3Jldxw/640?wx_fmt=gif" data-copyright="0" data-cropselx1="0" data-cropselx2="556" data-cropsely1="0" data-cropsely2="137" data-ratio="0.246875" data-src="https://mmbiz.qpic.cn/mmbiz_gif/NRuT2ZRohszF9kaweJiaCsQ3UeoOoAxv5liabnmkHhyA5ojR2dsCTXvribhcR0eo0icLK0gQD76XMuVKx8Lm3Jldxw/640?wx_fmt=gif" data-type="gif" data-w="1280" style="letter-spacing: 0.544px; white-space: normal; text-align: center; background-color: rgb(255, 255, 255); font-family: -apple-system-font, BlinkMacSystemFont, Arial, sans-serif; font-weight: 700; box-sizing: border-box !important; overflow-wrap: break-word !important; visibility: visible !important; width: 574px !important; height: auto !important;" _width="574px" src="https://mmbiz.qpic.cn/mmbiz_gif/NRuT2ZRohszF9kaweJiaCsQ3UeoOoAxv5liabnmkHhyA5ojR2dsCTXvribhcR0eo0icLK0gQD76XMuVKx8Lm3Jldxw/640?wx_fmt=gif&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" data-order="0" data-fail="0"></p><section data-role="outer" label="Powered by 135editor.com"><section style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;font-size: 15px;line-height: 1.8;letter-spacing: 1px;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;">当前，杭州已就全市企业严格疫情防控有序推进复工有关事项进行部署，为做好我区返岗返工人员和全区居民的健康监测和服务，减少接触、提高效率，决定在杭州市“企业员工健康码”数字平台的框架下，启用余杭绿码。<br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"><p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p><section style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: 10px;margin-bottom: 10px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;height: 8px;background-color: rgb(67, 94, 42);overflow-wrap: break-word !important;"><section style="max-width: 100%;line-height: 0;box-sizing: border-box !important;overflow-wrap: break-word !important;"><svg viewBox="0 0 1 1" width="0" style="vertical-align: top;"><text x="-10" y="-10">_</text></svg></section></section><section style="max-width: 100%;box-sizing: border-box;border-right: 1px solid rgb(204, 204, 204);border-bottom: 1px solid rgb(204, 204, 204);border-left: 1px solid rgb(204, 204, 204);border-top: none rgb(204, 204, 204);box-shadow: rgb(204, 204, 204) 0px 0px 8px;overflow-wrap: break-word !important;"><section style="padding: 5px 10px;max-width: 100%;box-sizing: border-box;font-size: 20px;text-align: center;color: rgb(67, 94, 42);line-height: 2;letter-spacing: 3px;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">余杭绿码</strong></p></section><section style="padding: 10px;max-width: 100%;box-sizing: border-box;border-top: 1px solid rgb(204, 204, 204);overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;vertical-align: middle;display: inline-block;line-height: 0;height: auto;overflow-wrap: break-word !important;"><img data-cropselx1="0" data-cropselx2="222" data-cropsely1="0" data-cropsely2="219" data-ratio="1" data-src="https://mmbiz.qpic.cn/mmbiz_png/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpqyR3ibdYulB7SqWoiaEUa70m2Q9cyX5fFQsSD3NVUn9ZlibWT1XJ8FFQA/640?wx_fmt=png" data-type="png" data-w="300" style="box-sizing: border-box; vertical-align: middle; overflow-wrap: break-word !important; visibility: visible !important; width: 222px !important; height: auto !important;" _width="222px" class="" src="https://mmbiz.qpic.cn/mmbiz_png/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpqyR3ibdYulB7SqWoiaEUa70m2Q9cyX5fFQsSD3NVUn9ZlibWT1XJ8FFQA/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" data-fail="0"></section></section></section></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></section></section><section style="max-width: 100%;text-align: center;line-height: 2em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><span style="max-width: 100%;color: rgb(0, 0, 0);font-size: 17px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">凡余杭居民和<strong style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">需要进入余杭的人员</strong>，</strong></span></section><section style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;font-size: 15px;text-align: center;line-height: 2;color: rgb(77, 114, 176);overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 17px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">请长按识别二维码，</strong></span></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;font-size: 17px;overflow-wrap: break-word !important;">提前填写健康信息登记表，</strong></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 17px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">交由检查点工作人员进行身份比对，</strong><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">激活绿码后，2月10日0时起，</strong></span></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 17px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">区内各检查点可通用！</strong></span></p></section></section><section style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: 8px;margin-bottom: 10px;max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;vertical-align: middle;display: inline-block;line-height: 0;height: auto;overflow-wrap: break-word !important;"><img class="__bg_gif" data-ratio="1.345" data-src="https://mmbiz.qpic.cn/mmbiz_gif/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpzOrslV0Eenl7XAlF4dWEkkRNGNtdzYlS7cXfBrSP9Z83NljGF9kAVA/640?wx_fmt=gif" data-type="gif" data-w="200" style="box-sizing: border-box; vertical-align: middle; overflow-wrap: break-word !important; width: 22px !important; height: auto !important; visibility: visible !important;" _width="22px" src="https://mmbiz.qpic.cn/mmbiz_gif/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpzOrslV0Eenl7XAlF4dWEkkRNGNtdzYlS7cXfBrSP9Z83NljGF9kAVA/640?wx_fmt=gif&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" data-order="1" data-fail="0"></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></section></section><section style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: 10px;margin-bottom: 10px;max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="padding-left: 6px;max-width: 100%;box-sizing: border-box;display: inline-block;vertical-align: middle;overflow-wrap: break-word !important;"><section style="margin-bottom: -9px;margin-left: -6px;max-width: 100%;box-sizing: border-box;border-left: 2px solid rgb(52, 110, 183);border-top: 2px solid rgb(52, 110, 183);height: 16px;width: 16px;border-right-color: rgb(52, 110, 183);border-bottom-color: rgb(52, 110, 183);overflow-wrap: break-word !important;"><section style="max-width: 100%;line-height: 0;box-sizing: border-box !important;overflow-wrap: break-word !important;"><svg viewBox="0 0 1 1" width="0" style="vertical-align: top;"><text x="-10" y="-10">_</text></svg></section></section><section style="padding-right: 10px;padding-left: 10px;max-width: 100%;box-sizing: border-box;background-image: linear-gradient(315deg, rgb(33, 91, 233) 33%, rgb(129, 231, 253) 100%);color: rgb(255, 255, 255);letter-spacing: 2px;line-height: 2;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">居民如何获取绿码</strong></p></section></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;line-height: 1;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;line-height: 1.75em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 15px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;font-size: 16px;letter-spacing: 1px;overflow-wrap: break-word !important;"><span style="max-width: 100%;box-sizing: border-box;color: rgb(52, 110, 183);overflow-wrap: break-word !important;"><br></span></strong></span></section><section style="max-width: 100%;box-sizing: border-box;line-height: 1.75em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 15px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;font-size: 16px;letter-spacing: 1px;overflow-wrap: break-word !important;"><span style="max-width: 100%;box-sizing: border-box;color: rgb(52, 110, 183);overflow-wrap: break-word !important;">方法一：</span></strong>长按识别绿码二维码，进入登记页面。</span></section><section style="max-width: 100%;box-sizing: border-box;line-height: 1.75em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 15px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;font-size: 16px;letter-spacing: 1px;overflow-wrap: break-word !important;"><span style="max-width: 100%;box-sizing: border-box;color: rgb(52, 110, 183);overflow-wrap: break-word !important;">方法二：</span></strong></span><span style="max-width: 100%;font-size: 15px;box-sizing: border-box !important;overflow-wrap: break-word !important;">点击本文文末“阅读原文”，进入登记页面。<br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></span></section><section style="max-width: 100%;box-sizing: border-box;line-height: 1.75em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 15px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;font-size: 16px;letter-spacing: 1px;overflow-wrap: break-word !important;"><span style="max-width: 100%;box-sizing: border-box;color: rgb(52, 110, 183);overflow-wrap: break-word !important;">方法三：</span></strong>点击【余杭发布】菜单栏【我♥余杭】-【余杭绿码】，进入登记页面。</span></section><section style="max-width: 100%;box-sizing: border-box;line-height: 1.75em;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 15px;box-sizing: border-box !important;overflow-wrap: break-word !important;"><br></span></section><section style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: 0.5em;margin-bottom: 0.5em;padding-right: 0.5em;padding-left: 0.5em;max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;width: 661px;border-width: 3px;border-style: solid;border-color: rgb(176, 176, 176);display: inline-block;line-height: 0;box-shadow: rgba(255, 255, 255, 0) 3.2px 3.2px 8px;border-radius: 0px;overflow-wrap: break-word !important;height: auto !important;"><img data-ratio="0.9814815" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpesVicC9MBTARXGFLDwmd96t6ic2rPibDS7icq3taFgs6gUeIV7djtNCsvQ/640?wx_fmt=jpeg" data-type="jpeg" data-w="1080" style="box-sizing: border-box; background-color: rgb(238, 237, 235); border-width: 1px; border-style: solid; border-color: rgb(238, 237, 235); background-size: 22px; background-position: center center; background-repeat: no-repeat; vertical-align: middle; overflow-wrap: break-word !important; width: 549px !important; height: auto !important; visibility: visible !important;" _width="549px" class="" src="https://mmbiz.qpic.cn/mmbiz_jpg/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpesVicC9MBTARXGFLDwmd96t6ic2rPibDS7icq3taFgs6gUeIV7djtNCsvQ/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" data-fail="0"></section></section></section><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></section><section powered-by="135编辑器" style="margin-bottom: 10px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;display: inline-block;width: 677px;vertical-align: top;border-bottom: 2px solid rgba(17, 112, 243, 0.25);border-bottom-right-radius: 0px;background-color: rgba(17, 112, 243, 0.09);border-top: 2px none rgba(17, 112, 243, 0.25);border-top-left-radius: 0px;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: 15px;margin-bottom: 10px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="padding-right: 15px;padding-left: 15px;max-width: 100%;box-sizing: border-box;font-size: 15px;line-height: 1.8;letter-spacing: 1.8px;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">第一步：自行登记本人信息（由本人对信息真实性负责）</strong></p></section></section><section powered-by="135编辑器" style="margin-top: 10px;margin-bottom: 10px;max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;vertical-align: middle;display: inline-block;line-height: 0;width: 270.797px;height: auto;overflow-wrap: break-word !important;"><img data-ratio="1.6069444" data-src="https://mmbiz.qpic.cn/mmbiz_png/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpqGLxmBYVKJERJibknZwx7SEXM4SUNyf1BT6HtgbYPdlQqrqQZ5uCHOQ/640?wx_fmt=png" data-type="png" data-w="720" style="box-sizing: border-box; background-color: rgb(238, 237, 235); border-width: 1px; border-style: solid; border-color: rgb(238, 237, 235); background-size: 22px; background-position: center center; background-repeat: no-repeat; vertical-align: middle; overflow-wrap: break-word !important; width: 271px !important; height: auto !important; visibility: visible !important;" _width="271px" class="" src="https://mmbiz.qpic.cn/mmbiz_png/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpqGLxmBYVKJERJibknZwx7SEXM4SUNyf1BT6HtgbYPdlQqrqQZ5uCHOQ/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" data-fail="0"></section></section><section powered-by="135编辑器" style="margin-bottom: 5px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;font-size: 14px;color: rgba(74, 69, 69, 0.66);overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;overflow-wrap: break-word !important;">手机认证登录</p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;overflow-wrap: break-word !important;"><br></p><p style="text-align: center;"><img class="rich_pages " data-ratio="0.9092284417549168" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/NRuT2ZRohsy0F98ZiapYG6uCCzVPdC3bPhnaKrqNda5f7Uu72HyL5XKYZ3x2KfUzeeaNF4nwZFapvtx1PqY1e6A/640?wx_fmt=png" data-type="png" data-w="661" style="width: 661px !important; height: auto !important; visibility: visible !important;" _width="661px" src="https://mmbiz.qpic.cn/mmbiz_png/NRuT2ZRohsy0F98ZiapYG6uCCzVPdC3bPhnaKrqNda5f7Uu72HyL5XKYZ3x2KfUzeeaNF4nwZFapvtx1PqY1e6A/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" data-fail="0"></p></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;line-height: 1;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></section><section powered-by="135编辑器" style="margin-bottom: 10px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="padding-right: 15px;padding-left: 15px;max-width: 100%;box-sizing: border-box;font-size: 15px;line-height: 1.8;letter-spacing: 1.8px;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">第二步：</strong><strong style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">请等待工作人员审核查验，如确有需要出行，请检查点工作人员审核即可。首次核查时需要出示身份证件。</strong></p></section></section><section powered-by="135编辑器" style="margin-top: 10px;margin-bottom: 10px;max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;vertical-align: middle;display: inline-block;line-height: 0;width: 270.797px;height: auto;overflow-wrap: break-word !important;"><img data-ratio="1.97343" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpEMnxtAVZyMfbaOecmgeJQldIshX315G0WG47I27V2Th8HgxSPmtQjg/640?wx_fmt=jpeg" data-type="jpeg" data-w="828" style="box-sizing: border-box; background-color: rgb(238, 237, 235); border-width: 1px; border-style: solid; border-color: rgb(238, 237, 235); background-size: 22px; background-position: center center; background-repeat: no-repeat; vertical-align: middle; overflow-wrap: break-word !important; width: 271px !important; height: auto !important; visibility: visible !important;" _width="271px" class="" src="https://mmbiz.qpic.cn/mmbiz_jpg/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpEMnxtAVZyMfbaOecmgeJQldIshX315G0WG47I27V2Th8HgxSPmtQjg/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" data-fail="0"></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;font-size: 14px;color: rgba(74, 69, 69, 0.66);overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;overflow-wrap: break-word !important;">居民身份证与表单信息比对</p></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></section><section powered-by="135编辑器" style="margin-bottom: 10px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="padding-right: 15px;padding-left: 15px;max-width: 100%;box-sizing: border-box;font-size: 15px;line-height: 1.8;letter-spacing: 1.8px;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">第三步：核验通过后激活绿码，进出检查点时即可实现扫码通行</strong></p><section powered-by="135编辑器" style="margin-top: 10px;margin-bottom: 10px;max-width: 100%;box-sizing: border-box;font-size: 16px;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;vertical-align: middle;display: inline-block;line-height: 0;width: 231.328px;height: auto;overflow-wrap: break-word !important;"><img data-cropselx1="0" data-cropselx2="232" data-cropsely1="0" data-cropsely2="459" data-ratio="1.9867149758454106" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpDeBL0KNX93dz1XovOvtoht0htwlSk448IVZiccgYpwJBBEW7JIymXgw/640?wx_fmt=jpeg" data-type="jpeg" data-w="828" style="box-sizing: border-box; background-color: rgb(238, 237, 235); border-width: 1px; border-style: solid; border-color: rgb(238, 237, 235); background-size: 22px; background-position: center center; background-repeat: no-repeat; vertical-align: middle; overflow-wrap: break-word !important; width: 231px !important; height: auto !important; visibility: visible !important;" _width="231px" class="" src="https://mmbiz.qpic.cn/mmbiz_jpg/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpDeBL0KNX93dz1XovOvtoht0htwlSk448IVZiccgYpwJBBEW7JIymXgw/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" data-fail="0"></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;font-size: 14px;color: rgba(74, 69, 69, 0.66);overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;overflow-wrap: break-word !important;">出示激活状态的绿码<span style="max-width: 100%;font-size: 16px;letter-spacing: 1.8px;color: rgb(51, 51, 51);box-sizing: border-box !important;overflow-wrap: break-word !important;"></span></p></section></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;line-height: 1;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></section></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p><section style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section powered-by="135编辑器"><section style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: 15px;margin-bottom: 15px;max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;display: inline-block;width: 663.453px;vertical-align: top;border-style: solid;border-width: 1px;border-radius: 0px;border-color: rgb(189, 189, 189);overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="padding-right: 10px;padding-left: 10px;max-width: 100%;box-sizing: border-box;display: inline-block;vertical-align: top;width: 529.156px;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: 8px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;color: rgb(77, 114, 176);text-align: left;overflow-wrap: break-word !important;"><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><strong style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;">使用余杭绿码，您还需要了解这些：</strong></p></section></section><section powered-by="135编辑器" style="margin-top: 5px;max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;height: 2px;background-color: rgb(77, 114, 176);overflow-wrap: break-word !important;"><section style="max-width: 100%;line-height: 0;box-sizing: border-box !important;overflow-wrap: break-word !important;"><svg viewBox="0 0 1 1" width="0" style="vertical-align: top;"><text x="-10" y="-10">_</text></svg></section></section></section></section><section style="max-width: 100%;box-sizing: border-box;display: inline-block;vertical-align: top;width: 132.281px;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="margin-top: -11px;max-width: 100%;box-sizing: border-box;text-align: right;transform: translate3d(1px, 0px, 0px);overflow-wrap: break-word !important;"><section style="padding-top: 10px;max-width: 100%;box-sizing: border-box;display: inline-block;width: 40px;height: 50px;vertical-align: top;overflow: hidden;overflow-wrap: break-word !important;"><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;text-align: center;overflow-wrap: break-word !important;"><section style="max-width: 100%;box-sizing: border-box;vertical-align: middle;display: inline-block;line-height: 0;overflow-wrap: break-word !important;"><img data-ratio="1" data-src="https://mmbiz.qpic.cn/mmbiz_png/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpoE3SmicJj0kHSHPiaQ7eRejAicIOcXTsfIPgOd7h0cIH3679GMVIic4bxw/640?wx_fmt=png" data-type="png" data-w="140" style="box-sizing: border-box; background-color: rgb(238, 237, 235); border-width: 1px; border-style: solid; border-color: rgb(238, 237, 235); background-size: 22px; background-position: center center; background-repeat: no-repeat; vertical-align: middle; overflow-wrap: break-word !important; width: 40px !important; height: auto !important; visibility: visible !important;" _width="40px" src="https://mmbiz.qpic.cn/mmbiz_png/FBY66dvEWQjxpI0eK7yMKqECe29kJ1RpoE3SmicJj0kHSHPiaQ7eRejAicIOcXTsfIPgOd7h0cIH3679GMVIic4bxw/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" class="" data-fail="0"></section></section></section></section></section></section><section powered-by="135编辑器" style="max-width: 100%;box-sizing: border-box;overflow-wrap: break-word !important;"><section style="padding: 20px 10px;max-width: 100%;box-sizing: border-box;display: inline-block;width: 661.453px;vertical-align: top;overflow-wrap: break-word !important;"><section powered-by="135编辑器" data-role="list" style="max-width: 100%;box-sizing: border-box;text-align: justify;font-size: 15px;color: rgb(77, 114, 176);overflow-wrap: break-word !important;"><ul class="list-paddingleft-2" style="list-style-type: square;"><li><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;">为节约首次核验的激活时间，建议您提前完成余杭绿码个人信息部分的提交。</p></li></ul></section><section powered-by="135编辑器" data-role="list" style="max-width: 100%;box-sizing: border-box;text-align: justify;font-size: 15px;color: rgb(77, 114, 176);overflow-wrap: break-word !important;"><ul class="list-paddingleft-2" style="list-style-type: square;"><li><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;">信息提交后，请等待工作人员核验，激活绿码时，请配套出示有效身份证件。<br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p></li></ul></section><section powered-by="135编辑器" data-role="list" style="max-width: 100%;box-sizing: border-box;text-align: justify;font-size: 15px;color: rgb(77, 114, 176);overflow-wrap: break-word !important;"><ul class="list-paddingleft-2" style="list-style-type: square;"><li><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;">余杭绿码目前处于使用初期，功能正在优化，运转中存在的问题，请您谅解并与工作人员取得联系。</p></li><li><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;">如有任何疑问或建议，请致电967999或86212345，也可以在评论区留言，感谢您的配合与支持。</p></li></ul></section></section></section></section></section></section><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;line-height: 2em;overflow-wrap: break-word !important;"><span style="font-size: 15px;">即日起</span></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;line-height: 2em;overflow-wrap: break-word !important;"><span style="font-size: 15px;">“余杭绿码”已在华数互动电视</span><strong><span style="font-size: 15px;color: rgb(233, 99, 95);">“美好余杭”</span></strong><span style="font-size: 15px;">版块上线</span></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;line-height: 2em;overflow-wrap: break-word !important;"><span style="font-size: 15px;"><br></span></p><p style="text-align: center;"><img class="rich_pages " data-ratio="0.5602836879432624" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/NRuT2ZRohsy0F98ZiapYG6uCCzVPdC3bPvRmLL6hLXy8k0q6JTLBwPMj8kFhprQ7Vdco5JjUYbyu5cGrc9Tx9aA/640?wx_fmt=png" data-type="png" data-w="1128" style="width: 677px !important; height: auto !important; visibility: visible !important;" _width="677px" src="https://mmbiz.qpic.cn/mmbiz_png/NRuT2ZRohsy0F98ZiapYG6uCCzVPdC3bPvRmLL6hLXy8k0q6JTLBwPMj8kFhprQ7Vdco5JjUYbyu5cGrc9Tx9aA/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" crossorigin="anonymous" data-fail="0"></p><p><br></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;line-height: 2em;overflow-wrap: break-word !important;"><span style="font-size: 15px;color: rgb(83, 86, 86);">路径：</span><span style="font-size: 15px;color: rgb(83, 86, 86);">华数互动首页-美好余杭</span></p><p><br></p><p style="text-align: center;"><img class="rich_pages img_loading" data-ratio="0.5308254963427377" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/NRuT2ZRohsy0F98ZiapYG6uCCzVPdC3bPeAryzC9gGWky8EzkDsLh0Rvgak5pNzgG3RnN1lpYwQU513KVosXW0g/640?wx_fmt=png" data-type="png" data-w="957" style="width: 677px !important; height: 360.307px !important;" _width="677px" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" crossorigin="anonymous"></p><p><br></p><p style="max-width: 100%;box-sizing: border-box;min-height: 1em;text-align: center;line-height: 2em;overflow-wrap: break-word !important;"><span style="font-size: 15px;">电视扫码更方便哦</span></p></section></section></section></section></section></section><p><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p><p style="text-align: center;"><img class="rich_pages img_loading" data-ratio="0.6430288461538461" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_png/NRuT2ZRohsy0F98ZiapYG6uCCzVPdC3bPFRqiaozNUBatibZwtjgtTLFjiazPJKbuYf98q0o6B1ib8BU0ZxTjwjE0Lg/640?wx_fmt=png" data-type="png" data-w="832" style="width: 677px !important; height: 436.044px !important;" _width="677px" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" crossorigin="anonymous"></p><p style="max-width: 100%;min-height: 1em;text-align: center;letter-spacing: 0.544px;font-family: -apple-system-font, BlinkMacSystemFont, Arial, sans-serif;box-sizing: border-box !important;overflow-wrap: break-word !important;"><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p><hr style="max-width: 100%;border-style: solid;border-right-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-color: rgba(0, 0, 0, 0.1);transform-origin: 0px 0px 0px;transform: scale(1, 0.5);box-sizing: border-box !important;overflow-wrap: break-word !important;"><p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><br></p><p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 12px;color: rgb(178, 178, 178);box-sizing: border-box !important;overflow-wrap: break-word !important;">内容支持/<span style="max-width: 100%;letter-spacing: 0.544px;text-align: left;font-family: -apple-system-font, system-ui, Arial, sans-serif;box-sizing: border-box !important;overflow-wrap: break-word !important;">区新型冠状病毒感染的肺炎疫情防控工作领导小组指挥部办公室</span></span><span style="max-width: 100%;letter-spacing: 0.544px;text-align: left;font-size: 12px;color: rgb(178, 178, 178);font-family: -apple-system-font, system-ui, Arial, sans-serif;box-sizing: border-box !important;overflow-wrap: break-word !important;"></span></p><p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 12px;color: rgb(178, 178, 178);box-sizing: border-box !important;overflow-wrap: break-word !important;">编辑/言卿</span></p><p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><span style="max-width: 100%;font-size: 12px;color: rgb(178, 178, 178);box-sizing: border-box !important;overflow-wrap: break-word !important;">稿件统筹/唐</span><span style="max-width: 100%;font-size: 12px;color: rgb(178, 178, 178);box-sizing: border-box !important;overflow-wrap: break-word !important;">文薇</span></p><p style="max-width: 100%;min-height: 1em;text-align: center;box-sizing: border-box !important;overflow-wrap: break-word !important;"><br></p></section><p style="text-align: center;"><strong style="max-width: 100%;font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif;letter-spacing: 0.544px;white-space: normal;background-color: rgb(255, 255, 255);box-sizing: border-box !important;overflow-wrap: break-word !important;"><span style="max-width: 100%;color: rgb(255, 41, 65);box-sizing: border-box !important;overflow-wrap: break-word !important;"><img data-ratio="0.4255555555555556" data-src="https://mmbiz.qpic.cn/mmbiz_png/NRuT2ZRohsziccA6pTJYNiawWNgGqAk0Dla2RQaPqFXlObY8z8DScIJIetGJ69vUMqzUfhciaQEc55IbNlaNrt5ibg/640?wx_fmt=png" data-type="png" data-w="900" style="font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; white-space: normal; text-align: center; border-width: 0px; border-style: initial; border-color: initial; color: rgb(87, 107, 149); background-color: rgb(255, 255, 255); letter-spacing: 1.5px; font-size: 15px; caret-color: red; box-sizing: border-box !important; overflow-wrap: break-word !important; visibility: visible !important; width: 677px !important; height: 288.101px !important;" _width="677px" class="img_loading" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" crossorigin="anonymous"></span></strong></p>
                </div>

                <script nonce="" type="text/javascript">
                    var first_sceen__time = (+new Date());

                    if ("" == 1 && document.getElementById('js_content')) {
                        document.getElementById('js_content').addEventListener("selectstart",function(e){ e.preventDefault(); });
                    }

                    
                    (function(){
                        if (navigator.userAgent.indexOf("WindowsWechat") != -1){
                            var link = document.createElement('link');
                            var head = document.getElementsByTagName('head')[0];
                            link.rel = 'stylesheet';
                            link.type = 'text/css';
                            link.href = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg_new/winwx502975.css";
                            head.appendChild(link);
                        }
                    })();
                </script>

                
<div id="js_sponsor_ad_area" style="display: none;"></div>


                
                <div class="read-more__area" id="js_more_read_area" style="display:none;">
                    
                </div>

                 
                                                    
                              
            </div>
                                        <div id="js_tags_preview_toast" class="article-tag__error-tips" style="display: none;">预览时标签不可点</div>
                                        
                                

                        
            <ul id="js_hotspot_area" class="article_extend_area"></ul>


            

            


<div class="rich_media_tool" id="js_toobar3" style="display: none;">
  <div class="weui-flex">
    <div class="weui-flex__item">
      
      
      
            
      <div id="js_read_area3" class="media_tool_meta tips_global_primary meta_primary" style="display:none;">
        <span id="readTxt">阅读</span>
        <span id="readNum3"></span>
      </div>
    </div>
  </div> 
  <div class="weui-flex sns_opr_area sns_opr_overflow" id="js_bottom_opr_right" style="display: none;">
    <div class="weui-flex__item">
      
      <span style="display: none;" class="media_tool_meta meta_primary meta_share js_media_tool_meta" id="js_bottom_share">
        <button class="sns_opr_btn sns_share_btn" id="js_bottom_share_btn"><span class="sns_opr_gap">分享</span></button>
      </span>
    </div> 

    
    <span style="display:none;" class="media_tool_meta meta_extra meta_praise js_media_tool_meta" id="like_old">
      <button class="sns_opr_btn sns_praise_btn" id="js_bottom_zan_btn"><span class="sns_opr_gap">赞</span><span class="sns_opr_num sns_opr_gap" id="likeNum_old" style="display: none;"></span></button>
    </span>

    
    <span style="display:none;" class="media_tool_meta meta_extra meta_like js_media_tool_meta" id="like3">
      
      <button class="sns_opr_btn sns_like_btn" id="js_like_btn"><span class="sns_opr_gap" id="js_like_wording">在看</span><span class="sns_opr_num sns_opr_gap" id="likeNum3"></span></button>
    </span>
  </div> 
</div>
  
  <div class="like_comment_wrp" id="js_like_comment" style="display: none;">
    <div class="like_comment_inner">
      <div class="like_comment_hd" style="display:none" id="js_like_title"></div>
      <div class="like_comment_bd">
        <div class="like_comment_tips" id="js_comment_area">
          <i class="weui-icon-success"></i><i class="icon-success-primary"></i>已同步到看一看<a href="javascript:;" class="like_comment_share_link" id="js_like_comment_share">写下你的想法</a>
        </div>
        <div class="like_comment_extra_info" id="js_like_educate" style="display: none">
          <p class="like_comment_extra_tips">
            <span id="js_friend_like_area" style="display: none"></span>
            <span id="js_friend_like_word">前往“发现”-“看一看”浏览“朋友在看”</span>
          </p>
          <p class="like_comment_pic_wrp">
                          <img class="like_comment_pic" src="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/appmsg/pic_like_comment492329.png">
                      </p>
          <button class="weui-btn weui-btn_primary" id="js_go_wow">前往看一看</button>
        </div>
      </div>
    </div>
  </div>
  <div style="display:none;" id="wow_close_inform">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__hd"><strong class="weui-dialog__title">看一看入口已关闭</strong></div>
      <div class="weui-dialog__bd">
        在“设置”-“通用”-“发现页管理”打开“看一看”入口      </div>
      <div class="weui-dialog__ft" id="wow_close_ack">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">我知道了</a>
      </div>
    </div>
  </div>

<div id="js_like_toast" style="display: none;">
  <div class="weui-mask_transparent"></div>
  <div class="weui-toast">
    <i class="weui-icon-success-no-circle weui-icon_toast"></i>
    <p class="weui-toast__content" id="js_toast_msg">已发送</p>
  </div>
</div>

<div style="display: none;" id="js_comment_panel">
  <div class="like_comment_primary_wrp editing" id="js_comment_wrp">
    <div class="like_comment_primary_inner">
      <div class="like_comment_primary_hd">
        <div class="like_comment_primary_hd_side">
          <button class="like_comment_primary_cancel" id="js_comment_cancel">
            取消            <i class="weui-icon-close-thin"></i>
          </button>
        </div>
        <h4 class="like_comment_primary_title"> 发送到看一看 </h4>
        <div class="like_comment_primary_hd_side">
          <button class="like_comment_primary_btn" id="js_comment_confirm" disabled="disabled">发送</button>
        </div>
      </div>
      <div class="like_comment_primary_bd">
        <div class="like_comment_media_title" id="js_panel_like_title">
                      余杭绿码，已上线！安全通行，助力防疫！
                  </div>
        <div class="like_comment_textarea_wrp">
          <textarea class="like_comment_textarea weui-textarea" placeholder="写下你的想法..." id="js_comment_text"></textarea>
        </div>
      </div>
      <span class="like_comment_msg" id="js_like_comment_msg" style="visibility: hidden;">最多200字，当前共<span id="js_like_current_cnt"></span>字</span>
    </div>
  </div>
  <div class="like_comment_primary_mask" id="js_mask_2"></div>
</div>

<div id="js_loading" style="display: none;">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">发送中</p>
    </div>
</div>



                        <div class="rich_media_tool" id="js_sg_bar">

                                
            </div>
                      </div>
        </div>

        <div class="rich_media_area_primary sougou" id="sg_tj" style="display:none"></div>


        
        <div class="rich_media_area_extra">
          <div class="rich_media_area_extra_inner">
              
              <div id="js_share_appmsg">
              </div>

              

<div class="mpda_bottom_container" id="js_bottom_ad_area" style="display: none;"></div>
              
              <div id="js_iframetest" style="display:none;"></div>
                            
                            
              <div class="rich_media_extra rich_media_extra_discuss" id="js_cmt_container" style="display:none">
                

                
                <div class="discuss_mod" id="js_friend_cmt_area" style="display:none">
                  
                  
                  
                </div>

                                <div class="discuss_mod" id="js_cmt_area" style="display:none">
                </div>
                              </div>

              <div class="function_mod function_mod_index" id="js_related_area" style="display:none;">
                <div class="function_hd">相关阅读</div>
                <div class="function_bd">
                  <div class="relate_article_index_list relate_article_list" id="js_related"></div>

                  
                  <div class="relate_loadmore" id="js_related_opr" style="display: none;">
                    <a href="javascript:;" class="weui-media-box weui-media-box_loadmore hide" id="js_related_load_more">
                        <div class="weui-media-box__bd">更多文章</div>
                        <div class="weui-media-box__ft"></div>
                    </a>
                    <div class="function_mod_empty_msg" style="display: none;" id="js_more_article">
                        <a class="function_mod_empty_more_access" href="javascript:;">查看更多相关内容</a>
                    </div>
                  </div>

                  
                  <div class="relate_loadmore_pc" id="js_related_opr_pc" style="">
                    <a href="javascript:;" class="weui-media-box weui-media-box_loadmore weui-media-box_loadmore_pc" id="js_related_load_more_pc">
                      <div class="weui-media-box__bd">更多文章</div>
                      <div class="weui-media-box__ft"></div>
                    </a>
                    <div class="function_mod_empty_msg" id="js_more_article_pc" style="display: none;">
                        <a class="function_mod_empty_more_access" href="javascript:;">查看更多相关内容</a>
                    </div>
                    <div class="weui-media-box weui-media-box_loadmore" style="display: none;" id="js_related_loading_pc">
                      <div class="weui-loadmore">
                        <i class="weui-loading"></i>
                        <span class="weui-loadmore__tips">正在加载</span>
                      </div>
                    </div>
                    <div class="weui-media-box weui-media-box_loadmore" style="display: none;" id="js_related_all_pc">
                      <div class="weui-loadmore">
                        <span class="weui-loadmore__tips">以上推荐为优质及原创文章</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        
        <div id="js_pc_qr_code" class="qr_code_pc_outer" style="display: block;">
            <div class="qr_code_pc_inner">
                <div class="qr_code_pc">
                    <img id="js_pc_qr_code_img" class="qr_code_pc_img" src="/rr?timestamp=1599893952&amp;src=11&amp;ver=1&amp;signature=E3lFOor70wzdzk0-iP31lpr-wK6gy5dWjoMV6JnjhUDBhrRuYLIw-3BE1hbPbEDKhsTlFNc46xVCwnJMxV*D5Gp1QNjAuy7n*qdVzyRrETs=">
                    <p>微信扫一扫<br>关注该公众号</p>
                </div>
            </div>
        </div>
    </div>
</div>

      `
      // resolve(result)
      var that = this;
      var article = result
      console.log('请求html成功',article)
      WxParse.wxParse('article', 'html', article, that, 5);

    })


    var that = this;
    WxParse.emojisInit('[]', "/wxParse/emojis/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
    });
    /**
     * html解析示例
     */
    var article = `< !DOCTYPE HTML ><!--注释: wxParse试验文本-->
      <div style="text-align:center;margin-top:10px;">
		<img src="https://weappdev.com/uploads/default/original/1X/84512e0f4591bcf0dee42c3293f826e0c24b560c.jpg" alt="wxParse-微信小程序富文本解析组件Logo">
		<h1 style="color:red;">wxParse-微信小程序富文本解析组件</h1>
		<h2 >支持Html及markdown转wxml可视化</h2>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持video</h3>
		<div style="margin-top:10px;">
			<video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
		</div>
	</div>
	

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持的标签</h3>
		<blockquote>wxParse支持70%的html的标签</blockquote>
		<div style="margin-top:10px;">
			<span>span标签</span>
			<strong style="color: red;">strong标签</strong>
		</div>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持的标签ul/li</h3>
		<blockquote>带有内联的li</blockquote>
		<div style="margin-top:10px;">
			<ul>
				<li style="color: red;">我是li 红色</li>
				<li style="color: blue;">我是li 蓝色</li>
				<li style="color: yelloe;">我是li 黄色</li>
			</ul>
		</div>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持内联样式style</h3>
		<blockquote>wxParse可以渲染原html带有的style样式</blockquote>
		<div style="margin-top:10px;">
			<span>span标签</span>
			<strong>strong标签</strong>
		</div>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持class潜入</h3>
		<blockquote>wxParse可以注入html带有的class属性</blockquote>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持emojis小表情</h3>
		<blockquote>wxParse可以解析固定格式的小表情标签</blockquote>
		<div style="margin-top:10px;">
			<p>这里可以解析出emoji的表情[00][01][02][03][04][05][06][07][08][09]</p>
		</div>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持图片自适应</h3>
		<blockquote>wxParse可以动态计算图片大小并进行自适应适配</blockquote>
		<div style="margin-top:10px;">
			<img src="http://a.hiphotos.baidu.com/image/pic/item/9a504fc2d5628535959cf4cf94ef76c6a6ef63db.jpg" alt="">
			<img src="http://e.hiphotos.baidu.com/image/pic/item/48540923dd54564e1e1ac2d7b7de9c82d0584fe4.jpg" alt="">
		</div>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持图片点击预览,左右滑动预览</h3>
		<blockquote>wxParse可以讲一篇文章中的几个图片一起预览</blockquote>
		<div style="margin-top:10px;">
			你可以点击上面的图片，将会进入预览视图，同时左右滑动可以切换图片预览
		</div>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持多数据循环渲染</h3>
		<blockquote>wxParse支持特定设置下的多数据渲染，适用于在评论、多文本分别渲染等</blockquote>
		<div style="margin-top:10px; text-align:center;">
			请继续向下看，循环渲染多条html评论
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持短table标签</h3>
		<blockquote>wxParse目前对于table的支持比较有限</blockquote>
		<div style="margin-top:10px; text-align:center;">
			<table>
	  <tr>
			<th>标题1</th>
			<th>标题2</th>
			<th>标题3</th>
			<th>标题4</th>
			<th>标题5</th>
		</tr>
	  <tr>
		  <td>cell1</td>
			<td>cell2</td>
			<td>cell3</td>
			<td>cell4</td>
			<td>cell5</td>
		</tr>
		<tr>
		  <td>cell1</td>
			<td>cell2</td>
			<td>cell3</td>
			<td>cell4</td>
			<td>cell5</td>
		</tr>
	</table>
		</div>
	</div>
	<!--ap-->
    `;
    // article = await getFile()

    // WxParse.wxParse('article', 'html', article, that, 5);
    // getFile()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})