function Article() {
	this.categories = [];
}

Article.prototype.assignCategory = function(category) {
	if (this.categories.indexOf(category) < 0) {
		this.categories.push(category);
	}
}