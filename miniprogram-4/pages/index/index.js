// pages/index/index.js
Page({
    data: {
      isRecording: false,
      recordHint: '点击开始录音',
      showResult: false,
      recordingTime: 0,
      timer: null
    },
    
    onLoad: function() {
      // 页面加载时的逻辑
    },
    
    toggleRecording: function() {
      if (this.data.isRecording) {
        // 停止录音
        this.stopRecording();
      } else {
        // 开始录音
        this.startRecording();
      }
    },
    
    startRecording: function() {
      this.setData({
        isRecording: true,
        recordHint: '录音中...',
        showResult: false,
        recordingTime: 0
      });
      
      // 启动计时器
      this.data.timer = setInterval(() => {
        this.setData({
          recordingTime: this.data.recordingTime + 1
        });
      }, 1000);
    },
    
    stopRecording: function() {
      // 清除计时器
      clearInterval(this.data.timer);
      
      this.setData({
        isRecording: false,
        recordHint: '录音已完成，分析中...'
      });
      
      // 模拟分析过程
      setTimeout(() => {
        this.setData({
          showResult: true,
          recordHint: '点击重新录音'
        });
      }, 2000);
    },
    
    goToConfirm: function() {
      wx.navigateTo({
        url: '/pages/confirm/confirm'
      });
    }
  })