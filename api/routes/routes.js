module.exports = function(server) {
    //About route
    server.route({
        method: 'GET',
        path: '/api/about',
        handler: function (request, h) {
    
            var data = {
                message: 'Welcome to XAUth REST API'
            };
    
            return data;
        }
    });


    
    //Add route
    server.route({
        method: 'GET',
        path: '/api/add/{id}/{client}',
        handler: function (request, h) {

            let yee = [1, 2]
            let StringT = request.params.id
            
            if(StringT == yee[0]) {

                return true;

            }
            else {

                return false;

            }
            
        }
    });

    
}