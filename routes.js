// Controllers
var userController = require('./controllers/user');
var contactController = require('./controllers/contact');

exports.loadRoutes = function(app) {
	app.post('/contact', contactController.contactPost);
	app.put('/account', userController.ensureAuthenticated, userController.accountPut);
	app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
	app.post('/signup', userController.signupPost);
	app.post('/login', userController.loginPost);
	app.post('/forgot', userController.forgotPost);
	app.post('/reset/:token', userController.resetPost);
	app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
	app.post('/auth/facebook', userController.authFacebook);
	app.get('/auth/facebook/callback', userController.authFacebookCallback);
}
