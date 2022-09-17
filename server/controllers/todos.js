const Todo = require('../models/todos')

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Todo.findAll()
        return res.status(200).json(ALL)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const todo = await Todo.findByPk(req.params.id)
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.createOne = async (req, res, next) => {
    try {
        const TODO_MODEL = {
            description: req.body.description,
        }

        try {
            const todo = await Todo.create(TODO_MODEL)
            console.log("Todo created.");
            return res.status(201).json(todo)
        } catch(error){
            return res.status(500).json(error)
        }
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.updateOne = async (req, res, next) => {
    try {
        const TODO_MODEL = {
            description: req.body.description,
        }
        try {
            const todo = await Todo.update(TODO_MODEL, {where: {id: req.params.id}})
            console.log("Todo updated.");
            return res.status(201).json(todo)
        } catch(error){
            return res.status(500).json(error)
        }
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.deleteOne = async (req, res, next) => {
    try {
        const todo = await Todo.destroy({where : {id: req.params.id}})
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error)
    }
}