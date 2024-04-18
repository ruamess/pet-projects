const sequelize = require('./db')
const { DataTypes } = require('sequelize')

const Client = sequelize.define('client', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	surname: { type: DataTypes.STRING, allowNul: false },
	name: { type: DataTypes.STRING, allowNul: false },
	patronymic: { type: DataTypes.STRING, allowNul: false },
	birthday: { type: DataTypes.DATE, allowNull: false },
	ITN: { type: DataTypes.INTEGER, allowNul: false },
	rp_full_name: { type: DataTypes.STRING, allowNul: false },
	status: { type: DataTypes.STRING, defaultValue: 'Не в работе' }

})

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	full_name: { type: DataTypes.STRING, allowNul: false },
	password: { type: DataTypes.STRING, allowNul: false },

})

// User.hasMany(Client, { as: 'clients', foreignKey: 'rp_full_name' });
// Client.belongsTo(User, { foreignKey: 'full_name' });


module.exports = {
	Client,
	User
}