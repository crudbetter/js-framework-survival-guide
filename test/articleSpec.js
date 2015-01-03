describe('An article', function() {
	var article;
	var cat1 = new Category('JavaScript');
	var cat2 = new Category('UX');

	beforeEach(function() {
		article = new Article();
	});

	it('should have unique categories', function() {
		article.assignCategory(cat1);
		article.assignCategory(cat1);

		expect(article.categories.length).toEqual(1);
		expect(article.categories[0]).toEqual(cat1);
	});
});