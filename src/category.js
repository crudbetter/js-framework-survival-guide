function Category(name) {
	if (!Category.idCounter) Category.idCounter = 0;

	this.id = Category.idCounter++;
	this.name = name;
}