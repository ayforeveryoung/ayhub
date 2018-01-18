const express = require('express')
const template = require('art-template')
const app = express()

//注意：一定要在加载路由之前配置
app.engine('html', require('express-art-template'))

const router = require('./router')

//将router挂载到app上
app.use(router)




//开放public 和node_modules
app.use('/node_modules/',express.static('./node_modules'))
app.use('/public/',express.static('./public'))
app.use('/public/',express.static('./public'))




//设置端口号
const post = 3000
app.listen(post,function () {
	console.log('running')
})




