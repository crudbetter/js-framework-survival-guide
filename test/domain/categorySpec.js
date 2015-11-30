var Article = require('../../src/domain/article');
var Category = require('../../src/domain/category');	

describe('A category', function() {
	it('should only contain distinct articles', function() {
		var article1 = new Article('The best way to share data between AngularJS controllers');
		var article2 = new Article('Demystifying React component state');

		var cat1 = new Category('JavaScript');
		var cat2 = new Category('AngularJS');

		cat1.toggle(article1);
		cat1.toggle(article2);

		expect(cat1.articles.length).toBe(2);

		cat2.toggle(article1);
		cat2.toggle(article1);

		expect(cat2.articles.length).toBe(0);
	});
});