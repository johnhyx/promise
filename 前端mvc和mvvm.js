//mvc  mvvm
//1、mvc
//模型（MOdel）:数据保存
//视图（View）：用户界面
//控制器（Controller）：业务逻辑
//（1）View传送指令到Controller
//（2）Controller完成业务逻辑后，要求Model改变状态
//（3）Model将新的数据发送到View，用户得到反馈所有通信都是单向的


//MVVM
//模型（Model）
//视图（View）
//视图模型（VIewModel）

//（1）各部分都是双向通信
//（2）View和Model不发生联系，都是通过ViewModel传递，
//（3）view非常薄，不部署任何业务逻辑，称为‘波动视图’（Passive View），既没有任何主动性，
//     而ViewModel非常厚，所有逻辑都部署在哪里

//采用双向绑定:View的变动，自动反应到ViewModel，反之也是如此。