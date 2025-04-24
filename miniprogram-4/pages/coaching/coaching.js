// pages/coaching/coaching.js
Page({
    data: {
      messages: [
        {
          type: 'system',
          content: '欢迎使用AI教练，我将协助您进行销售话术练习。'
        },
        {
          type: 'ai',
          content: '基于客户王总的情况，他有两个孩子分别处于高中和初中阶段，核心需求是教育金规划。你可以先了解他的具体需求和预算情况。请开始你的对话。'
        }
      ],
      inputValue: '',
      showActions: false
    },
    
    onLoad: function() {
      // 页面加载逻辑
    },
    
    goBack: function() {
      wx.navigateBack();
    },
    
    inputChange: function(e) {
      this.setData({
        inputValue: e.detail.value
      });
    },
    
    sendMessage: function() {
      if (!this.data.inputValue.trim()) return;
      
      // 添加用户消息
      const messages = this.data.messages;
      messages.push({
        type: 'user',
        content: this.data.inputValue
      });
      
      this.setData({
        messages: messages,
        inputValue: ''
      });
      
      // 模拟AI回复
      setTimeout(() => {
        const aiResponse = {
          type: 'ai',
          content: '很好的开始！针对教育金规划，您可以更具体地询问客户对孩子未来教育的规划，比如是否考虑出国留学，预期的教育费用预算等。这样可以更好地匹配合适的产品。'
        };
        
        messages.push(aiResponse);
        
        this.setData({
          messages: messages,
          showActions: true
        });
        
        // 滚动到底部
        this.scrollToBottom();
      }, 1000);
    },
    
    scrollToBottom: function() {
      wx.createSelectorQuery()
        .select('#message-container')
        .boundingClientRect(function(rect){
          wx.pageScrollTo({
            scrollTop: rect.height,
            duration: 300
          });
        })
        .exec();
    },
    
    likeResponse: function() {
      wx.showToast({
        title: '已收到反馈',
        icon: 'success'
      });
      this.setData({
        showActions: false
      });
    },
    
    dislikeResponse: function() {
      wx.showToast({
        title: '已收到反馈',
        icon: 'success'
      });
      this.setData({
        showActions: false
      });
    }
  })