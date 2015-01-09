function Category(name) {
	this.name = name;
	this.articles = [];
}

Category.prototype.assign = function(article) {
	if (this.articles.indexOf(article) < 0) {
		this.articles.push(article);
	}
}

module.exports = Category;