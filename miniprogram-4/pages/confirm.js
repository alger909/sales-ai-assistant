// pages/confirm/confirm.js
Page({
    data: {
      clientInfo: {
        name: '王总',
        age: '45岁',
        job: '互联网公司CEO',
        children: '2个',
        childrenInfo: '大的上高中，小的上初中',
        need: '教育金规划',
        intention: 4
      }
    },
    
    onLoad: function() {
      // 页面加载时的逻辑
    },
    
    goBack: function() {
      wx.navigateBack();
    },
    
    saveInfo: function() {
      wx.showToast({
        title: '信息已保存',
        icon: 'success'
      });
    },
    
    startCoaching: function() {
      wx.navigateTo({
        url: '/pages/coaching/coaching'
      });
    }
  })