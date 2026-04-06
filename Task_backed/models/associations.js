const User = require('./userModel')
const Task = require('./taskModel')

// One User → Many Tasks
User.hasMany(Task, {
    foreignKey: 'createdBy',
    onDelete: 'CASCADE'
})

// Each Task → One User
Task.belongsTo(User, {
    foreignKey: 'createdBy'
})

// One User → Many Tasks
User.hasMany(Task, {
    foreignKey: 'updatedBy',
    onDelete: 'CASCADE'
})

// Each Task → One User
Task.belongsTo(User, {
    foreignKey: 'updatedBy'
})