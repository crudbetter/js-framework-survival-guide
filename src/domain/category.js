function Category(name) {
	this.name = name;
	this.articles = [];
}

Category.prototype.toggle = function(article) {
  var index = this.articles.indexOf(article);

  if (index == -1) {
    this.articles.push(article);
  } else {
    this.articles.splice(index, 1);
  }
}

module.exports = Category;