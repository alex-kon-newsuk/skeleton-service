module.exports.parseAndDisplay = function(data){
    var content = JSON.parse(data.body)
    data.response.render('web',{content:content.body});
}
