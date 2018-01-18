

exports.showIndex = (req,res) => {
  const db = require('./db')
  db.connection.query('select * from `topic_categories`',(err,results) => {
    if(err) return console.log(err)
      res.render('index.html',{data:results})
  })
  db.connection.end()
}
