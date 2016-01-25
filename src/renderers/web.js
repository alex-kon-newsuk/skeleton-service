module.exports.parseAndDisplay = function(data){
    var response = JSON.parse(data.body)
    data.response.render('web',{content:parseArticleContent(response)});
}

function parseArticleContent(content){
    var data = {
        content : processContent(content.body, content.related)
    }
    return data.content;
}

function processContent(body, relatedContent) {
    var regex = /(\<a class="capi-).*?(>)/g,
        placeholders = body.match(regex);
    return replaceContent(body, placeholders, relatedContent);
}

function replaceContent (body, placeholders, relatedContent) {
    var content = body;
    placeholders.forEach(function(item){
        var id = extractAssetId(item);
        var itemAssetData = getRealAssetData(id, relatedContent);
        content = replacePlaceholderWithLink(itemAssetData, content);
    });
    return content;
}

function getRealAssetData(id, relatedContent) {
    var data = {};
    relatedContent.forEach(function(item){
        if(item.id.value === id){
            data.type = item.contentType;
            data.link = item.link;
            data.id = item.id.value;
        }
    });
    return data;
}

function extractAssetId(item){
    var regex = /capiid=".*?(\")/g;
    var string = item.match(regex);
    var lastIndex = string[0].length;
    return string[0].substring(8, lastIndex-1);
}

function replacePlaceholderWithLink(itemAssetData, body) {
    var newBody = body;
    switch(itemAssetData.type){
        case "IMAGE":
            var placeholder = '<a class="capi-image" capiid="'+itemAssetData.id;
            var regex = new RegExp(placeholder+".*?(>)");
            newBody = body.replace(regex, '<img src="'+itemAssetData.link+'">');
            break;
        default:
            break;
    }
    return newBody;
}