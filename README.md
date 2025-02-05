# Axure-ECharts快集成
**一、项目背景**  
本项目针对Axure用户集成ECharts图表时大量重复性的手动复制操作问题，设计开发了一个能够自动捕获网页中的 ECharts 图表代码，并将其处理成适合 Axure 组件链接配置格式的代码片段，通过一键复制功能，为 Axure 用户提供高效、便捷的操作体验，节省大量手动配置时间并减少出错几率。

**二、功能特性**  
1、自动识别捕获：能够精准定位网页中的 ECharts 图表代码，免除手动查找与复制。  
2、组件名称自定义：支持用户输入特定 Axure 组件名称，生成符合需求的链接配置格式。  
3、代码适配优化：对捕获代码进行优化处理(删除注释、格式整理等)，确保其在 Axure 中的完美适配性。  
4、一键复制：直接将配置好的代码复制到剪贴板，用户操作步骤从 5 步缩减至 1 步，手动成本降低 80%。  

**三、安装方法**  
1、下载插件：从 GitHub 仓库下载插件代码包；            
2、解压文件：将下载的压缩包解压到本地指定文件夹；  
3、安装到浏览器：  
>   3.1 打开浏览器;  
    3.2 进入扩展程序页面（可通过在地址栏输入 chrome://extensions/ 访问）;  
    3.3 开启"开发者模式"(每个浏览器开发者模式按钮所在的位置不一致，需自行查找);  
        ![image](https://github.com/user-attachments/assets/1e3da7c2-0239-4f77-9463-1d3016a29902)
    3.4 点击"加载已解压的扩展程序"；  
        ![image](https://github.com/user-attachments/assets/2afbc1a5-82c7-4cd2-a600-ec2570b9d77c)
    3.5 选择之前解压后的文件夹，即可完成插件安装！  
        ![image](https://github.com/user-attachments/assets/e769aed4-37e7-453f-8ffe-5e3980b157b5) ![image](https://github.com/user-attachments/assets/c8ea218e-37a0-4588-8e10-d124e65012bf)
    3.6 在插件中心设置固定到任务栏，方便后续使用！  
        ![image](https://github.com/user-attachments/assets/665e8279-89b1-4276-ab25-f5d8ecd09a44)
>


**四、使用指南**  
1、打开 ECharts 图表网页：https://echarts.apache.org/examples/zh/index.html；  
2、点击插件图标：在浏览器工具栏中点击已安装的 Axure-ECharts 插件图标，激活插件；  
    ![image](https://github.com/user-attachments/assets/f152e6de-4678-41fa-ad9f-f133e2fa4284)  
3、输入Axure组件名称：插件自动识别并捕获当前页面ECharts 图表代码，根据提示输入 Axure 组件名称后，自动生成；  
    ![image](https://github.com/user-attachments/assets/81c4fc0b-2205-4d68-bb17-764cef36b9b5)  
4、一键复制：点击一键复制按钮，将生成的 Axure 组件链接配置格式代码复制到剪贴板，然后粘贴到 Axure 中进行使用；  
    ![image](https://github.com/user-attachments/assets/6594f8e5-b414-47c0-b408-2db9569dd3a5)  
5、Axure中使用：新建矩形组件、命名(与步骤3的命名要一致！！！否则识别不了)，添加交互(显示时-> 打开链接-> 链接到URL或文件路径->粘贴代码ctrl+v或者右键粘贴都可以，注意要把原来的https://清除)；  
   ![image](https://github.com/user-attachments/assets/79c455e9-2235-4d68-8406-5b83ca6e669f)
   <img width="1592" alt="Frame 47" src="https://github.com/user-attachments/assets/6c72aed4-f2b9-43bf-8a0b-5d556865687f" />  
6、点击预览查看效果：本地是无法查看的，需要点击预览查看！  
   ![image](https://github.com/user-attachments/assets/0d3c1e5f-f33d-4245-a166-e04c65539da4)
   ![image](https://github.com/user-attachments/assets/4e86730c-3d71-4934-b520-d9d0d74716ea)








