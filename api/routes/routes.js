module.exports = function(server) {
    //About route
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
    
            var data = {
                message: 'Welcome to our Calculator Service'
            };
    
            return data;
        }
    });

    //Add route
    server.route({
        method: 'GET',
        path: '/calculator/add/{num1}',
        handler: function (request, h) {

            
            const StringT = request.params.num1
            return StringT;
        }
    });

    
}