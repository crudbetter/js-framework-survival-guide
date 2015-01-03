describe('A category', function() {
	it('should be assignable once per article', function() {
		var article1 = new Article('The best way to share data between AngularJS controllers');
		var article2 = new Article('Demystifying React component state');

		var cat1 = new Category('JavaScript');
		var cat2 = new Category('AngularJS');

		cat1.assign(article1);
		cat1.assign(article2);

		expect(cat1.articles.length).toBe(2);

		cat2.assign(article1);
		cat2.assign(article1);

		expect(cat2.articles.length).toBe(1);
	});
});