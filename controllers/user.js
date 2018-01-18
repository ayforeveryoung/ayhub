exports.showSignin = (res,req) => {
  req.render('signin.html')
}

exports.doSignin = (res,req) => {
  req.send('doSignin')
}

exports.showSignup = (res,req) => {
  req.render('signup.html')
}

exports.doSignup = (res,req) => {
  req.send('doSignup')
}

exports.doSignout = (res,req) => {
  req.send('doSignout')
}
