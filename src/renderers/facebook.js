module.exports.parseAndDisplay = function(data){
    data.response.setHeader('Content-Type', 'application/json');
    data.response.send(data.body);
}
