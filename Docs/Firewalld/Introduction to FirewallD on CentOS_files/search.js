var app=app||{};!function(){app.events=_.extend({},Backbone.Events),app.SearchResult=Backbone.Model.extend();var e=Backbone.Collection.extend({model:app.SearchResult,url:"https://www.googleapis.com/customsearch/v1",fetch:function(e){var t=this;e=_.extend(e||{},{type:"GET",dataType:"jsonp",url:this.url,queue:!0,success:function(e){_.isUndefined(e.items)&&!this.length?app.events.trigger("empty"):(_.each(e.items,function(e){t.add(e)}),$(".remove-after-search").remove(),Search.getPageNumber()>1&&Search.showPrevButton(),e.queries.nextPage?Search.showNextButton():Search.hideNextButton(),e.queries.nextPage||app.events.trigger("stop"))}}),$.ajaxq("search",e)}});app.searchResults=new e,app.SearchResultView=Backbone.View.extend({tagName:"div",attributes:{"class":"library-search-result"},template:Handlebars.templates.search,render:function(){return this.$el.html(this.template(this.model.toJSON())),this}}),app.SearchPageView=Backbone.View.extend({el:"#search-results",initialize:function(){this.status=$("#library-search-status"),this.stop=!1,this.listenTo(app.searchResults,"add",this.addResult),app.events.bind("empty",this.noResults,this),app.events.bind("stop",function(){this.stop=!0},this);var e=this;_(Search.numReps).times(function(t){e.stop||app.searchResults.fetch({data:{q:Search.getQuery()+" more:pagemap:techarticle",num:Search.resultsPerPage,start:((Search.getPageNumber()-1)*Search.numReps+t)*Search.resultsPerPage+1,key:"AIzaSyCMGfdDaSfjqv5zYoS0mTJnOT3e9MURWkU",cx:"006150713320016956361:5rcen_5ss4c"}})})},addResult:function(e){if(!this.stop){var t=new app.SearchResultView({model:e});this.$el.append(t.render().el)}},noResults:function(){_gaq.push(["_trackEvent","Search Results","No Results",window.location.search.substr(1).replace("q=","")]),this.status.html("<p>No results found.</p>")}})}();