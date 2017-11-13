var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('PAGE', {
	title: {type: Sequelize.STRING, allowNull: false, notEmpty: true},
	urlTitle: {type: Sequelize.STRING, allowNull: false, notEmpty: true},
	content: {type: Sequelize.TEXT, allowNull: false, notEmpty: true},
	status: {type: Sequelize.ENUM('open', 'closed')},
	date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
	},
	{hooks: {
		beforeValidate: function friendlyURL(page) {
		if(page.title)
			page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
		else
			page.urlTitle = Math.random().toString(36).substring(2, 7);
		}
	}
	},
		{getterMethods: {getURL() {
		return '/wiki/' + this.urlTitle;
	}}}
)
const User = db.define('USER', {
	name: {type: Sequelize.STRING, allowNull: false, notEmpty: true},
	email: {type: Sequelize.STRING, allowNull: false, notEmpty: true, isEmail: true}
})


module.exports = {
	Page: Page,
	User: User
}

