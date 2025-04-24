// pages/client/client.js
Page({
    data: {
      clients: [
        {
          id: 1,
          name: '王总',
          company: '互联网科技公司',
          need: '教育金规划',
          lastContact: '2023-05-05',
          stage: '跟进中'
        },
        {
          id: 2,
          name: '李经理',
          company: '金融服务有限公司',
          need: '养老规划',
          lastContact: '2023-05-02',
          stage: '初步接触'
        },
        {
          id: 3,
          name: '张总',
          company: '医疗器械有限公司',
          need: '保险咨询',
          lastContact: '2023-04-25',
          stage: '已成交'
        }
      ],
      searchValue: ''
    },
    
    onLoad: function() {
      // 页面加载逻辑
    },
    
    searchInput: function(e) {
      this.setData({
        searchValue: e.detail.value
      });
      // 实际应用中可以添加搜索逻辑
    },
    
    viewClientDetail: function(e) {
      const clientId = e.currentTarget.dataset.id;
      // 跳转到客户详情页
      wx.showToast({
        title: '客户ID: ' + clientId,
        icon: 'none'
      });
    },
    
    addNewClient: function() {
      // 跳转到添加客户页
      wx.showToast({
        title: '添加新客户',
        icon: 'none'
      });
    }
  })