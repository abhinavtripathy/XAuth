module.exports = function(server) {
    //About route
    server.route({
        method: 'GET',
        path: '/api/about',
        handler: function (request, h) {
    
            var data = {
                message: 'Welcome to REST API'
            };
    
            return data;
        }
    });

    //Add route
    server.route({
        method: 'GET',
        path: '/calculator/add/{num1}',
        handler: function (request, h) {

            let StringT = request.params.num1
            
            return JSON.parse(StringT)
        }
    });

    
}