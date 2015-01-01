function Article() {
	this.categories = {};
	this.categories.length = 0;
}

Article.prototype.assignCategory = function(category) {
	if (!this.categories.hasOwnProperty(category.id)) {
		this.categories[category.id] = category;
		this.categories.length++;
	}
}