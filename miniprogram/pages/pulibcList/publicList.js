// pages/pulibcList/publicList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aNodes:[{
      name:'a',
      attrs:{class:'',style:"font-size:30px;",href:"http"},
      children:[{type:"text",text:"跳转"}],
    }],
    public:[]
  },
  getData:function(){
    console.log('add点击事件')
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getData',  
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success: function(res) {
        console.log(res)
        // console.log(res.result.sum) // 3
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('请求数据')
    var _this = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getData',  
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success: function(res) {
        console.log('db',res.result.res)
        _this.setData({public:res.result.res})
        // console.log(res.result.sum) // 3
      },
      fail: console.error
    })
  },

  //事件处理函数
  bindItemTap: function() {
    wx.navigateTo({
      url: '../pulibcDetail/publicDetail'
    })
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