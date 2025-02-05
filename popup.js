document.addEventListener('DOMContentLoaded', function() {
  const axureNameInput = document.getElementById('axureName');
  const copyButton = document.getElementById('copyButton');
  const successMessage = document.getElementById('successMessage');

  // 监听输入变化
  axureNameInput.addEventListener('input', function() {
    if (this.value.trim()) {
      copyButton.disabled = false;
      this.classList.remove('error');
    } else {
      copyButton.disabled = true;
      this.classList.add('error');
    }
    successMessage.classList.remove('show');
  });

  // 生成并复制按钮点击事件
  copyButton.addEventListener('click', function() {
    const dataLabel = axureNameInput.value.trim();
    if (!dataLabel) {
      axureNameInput.classList.add('error');
      return;
    }

    // 向content script发送消息
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0] && tabs[0].url.includes('echarts.apache.org/examples')) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "copyCode",
          dataLabel: dataLabel
        }, function(response) {
          if (response && response.success) {
            successMessage.classList.add('show');
            setTimeout(() => {
              window.close();
            }, 1000); // 缩短到1秒
          } else if (response && response.error) {
            alert(response.error);
          }
        });
      } else {
        alert('请在ECharts示例页面使用此扩展！');
      }
    });
  });
}); 