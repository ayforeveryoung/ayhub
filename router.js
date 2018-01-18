const express = require('express')
const router = express.Router()
const indexCtrl = require('./controllers/index')
const userCtrl = require('./controllers/user')
const topicControl = require('./controllers/topic')
//首页
router
  .get('/',indexCtrl.showIndex)
//用户模块
router
  .get('/signin',userCtrl.showSignin)
  .post('/signin',userCtrl.doSignin)
  .get('/signup',userCtrl.showSignup)
  .post('/signup',userCtrl.doSignup)
  .post('/signout',userCtrl.doSignout)
  //话题模块
  router
  .get('/topic/create',topicControl.showCreate)
  .post('/topic/create',topicControl.doCreate)
  .get('/topic/show',topicControl.showTopic)
  .get('/topic/edit',topicControl.showCreate)
  .post('/topic/edit',topicControl.doCreate)
//导出路由对象
//在应用程序 app.js 中使用 app.use(router) 挂载路由容器对象使之生效
module.exports = router
