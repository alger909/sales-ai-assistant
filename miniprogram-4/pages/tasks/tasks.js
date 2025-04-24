// pages/tasks/tasks.js
Page({
    data: {
      taskList: [
        { id: 1, clientName: '王总', taskType: '教育金规划', dueDate: '2023-05-15', status: '待完成' },
        { id: 2, clientName: '李经理', taskType: '养老规划', dueDate: '2023-05-18', status: '待完成' },
        { id: 3, clientName: '张总', taskType: '保险咨询', dueDate: '2023-05-10', status: '已完成' }
      ]
    },
    
    onLoad: function() {
      // 页面加载时的逻辑
    },
  
    onTaskTap: function(e) {
      const taskId = e.currentTarget.dataset.id;
      // 处理任务点击事件
      wx.showToast({
        title: '点击了任务' + taskId,
        icon: 'none'
      });
    },
    
    addNewTask: function() {
      wx.showToast({
        title: '添加新任务',
        icon: 'none'
      });
    }
  })