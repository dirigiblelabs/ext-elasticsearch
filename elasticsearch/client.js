
exports.getClient = function() {
    var client = new Client();
    var native = org.eclipse.dirigible.api.elasticsearch.ElasticsearchFacade.getClient();

    client.native = native;

    return client;
} 

function Client() {
    this.getDocumentApi = function() {
        var documentApi = new DocumentApi();

        documentApi.native = this.native;

        return documentApi;
    }
}

function DocumentApi() {
    this.index = function(index, id, documentSource) {
        return org.eclipse.dirigible.api.elasticsearch.ElasticsearchFacade.index(this.native, index, id, documentSource);
    }

    this.get = function(index, id) {
        var document = org.eclipse.dirigible.api.elasticsearch.ElasticsearchFacade.get(this.native, index, id);

        return document.getSourceAsString();
    }

    this.delete = function(index, id) {
        return org.eclipse.dirigible.api.elasticsearch.ElasticsearchFacade.delete(this.native, index, id);
    }
}

