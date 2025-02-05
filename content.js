chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copyCode") {
    try {
      // 注入脚本展开所有代码
      const script = document.createElement('script');
      script.textContent = `
        try {
          // 获取编辑器实例
          var editor = ace.edit(document.querySelector('.ace_editor'));
          // 展开所有折叠
          editor.getSession().unfold();
          // 获取完整代码
          var code = editor.getValue();
          document.body.setAttribute('data-echarts-code', code);
          // 恢复折叠状态
          editor.getSession().foldAll();
        } catch(e) {
          console.error('获取代码失败:', e);
        }
      `;
      document.body.appendChild(script);
      document.body.removeChild(script);

      // 从 body 属性中获取代码
      const code = document.body.getAttribute('data-echarts-code');
      document.body.removeAttribute('data-echarts-code');
      
      if (!code) {
        alert('未找到代码内容，请确保编辑器中有代码！');
        return;
      }

      // 只删除注释，保留其他格式
      let processedCode = code
        .replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, '') // 删除单行和多行注释
        .trim();                                      // 仅删除首尾空格
      
      // 添加固定内容
      processedCode = `javascript:
var script = document.createElement('script');
script.type = "text/javascript";
script.src ="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js";
document.head.appendChild(script);
setTimeout(function(){
  var dom =$('[data-label=${request.dataLabel}]').get(0);
  var myChart = echarts.init(dom);
  
var option;

${processedCode}

if (option && typeof option === "object"){
  myChart.setOption(option, true);    
}}, 100);`;
      
      // 替换旧的复制方法
      navigator.clipboard.writeText(processedCode)
        .then(() => {
          console.log('复制成功');
          sendResponse({ success: true });
        })
        .catch(err => {
          console.error('复制失败:', err);
          // 降级使用旧方法
          const textArea = document.createElement('textarea');
          textArea.value = processedCode;
          document.body.appendChild(textArea);
          textArea.select();
          // @ts-ignore: 忽略废弃警告
          document.execCommand('copy');
          document.body.removeChild(textArea);
          sendResponse({ success: true });
        });
      
    } catch (error) {
      console.error('处理错误:', error);
      sendResponse({ success: false, error: '处理代码时出错，请重试！' });
    }
    return true;
  }
}); 