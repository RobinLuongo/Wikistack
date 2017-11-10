var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('PAGE', {
	title: Sequelize.STRING,
	urlTitle: Sequelize.STRING,
	content: Sequelize.TEXT,
	status: Sequelize.ENUM('open', 'closed')
}

const User = db.define('USER', {
	name: Sequelize.STRING;
	email: Sequelize.STRING;
})

module.exports = {
	Page: Page,
	User: User
}