# 题目
在 demo 02 中连续点击三次 div，demo02 打印几次？

# 作答
初始一次，点击三次打印 2 次

# 分析整个过程
第一， 组件渲染
- 执行函数
- 打印 demo02
- 定义 value 值 0 
- 定义 keepYourEyesOnTheValue 函数
- 渲染 UI
  
第二，点击第一次按钮
- 第一次渲染
  - 执行函数
  - 执行setState 但异步更新
- state 变化触发组件更新
  - 执行函数
  - 打印 demo 02
  - 定义 value 值 1
  - 定义 keepYourEyesOnTheValue 函数
  - 返回 UI

第三，点击第二次按钮
- 操作
  - 执行函数
  - 执行setState 但异步更新
- state 变化触发组件更新
  - 打印 demo 02
  - 定义 value 值 1
  - 定义 keepYourEyesOnTheValue 函数
  - 返回 UI
  
第四，点击第三次按钮


# eagerState 策略
