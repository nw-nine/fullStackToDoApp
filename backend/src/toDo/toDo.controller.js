const service = require("./toDo.service")
const errorBoundry = require('../errors/asyncErrorBoundry')

async function todoExists(req, res, next) {
    const todo = await service.read(req.params.toDo_id)
    if(todo) {
        res.locals.todo = todo
        return next
    }
    return next({
        status: 404,
        message: `toDo id not found ${req.params.toDo_id}`
    })
}

const hasValidFields = (req, res, next) => {
    const requiredFields = [
        "toDo_name",
        "toDo_date",
        "toDo_time",
    ]

    if(!req.body.data) {
        return next({ status: 400, message: "data missing" })
    }

    for(const field of requiredFields) {
        if(!req.body.data.hasOwnProperty(field)) {
            return next({ status: 400, message: `${field} is required` })
        }
    }

    if(req.body.toDo_name === '') {
        return next({
            status:400,
            message: "toDo name is empty"
        })
    }
    if(!req.body.toDo_date.match(/\d{4}-\d{2}-\d{2}/)) {
        return next({
            status: 400,
            message: "invalid input for toDo Date"
        })
    }
    if(!req.body.toDo_time.match(/^[0-9]{2}:[0-9]{2}$/)) {
        return next({
            status: 400,
            message: "invalid input for toDo time"
        })
    }

    res.locals.validToDo = req.body.data
    next()

}



async function read(req, res, next) {
    const id = req.params.toDo_id
    const data = await service.read(id)
    res.json({ data })
}

async function list(req, res, next) {
    const data = await service.list()
    res.json({ data })
}

async function listByDate(req, res, next) {
    const date = res.locals.toDo_date
    const data = await service.listByDate(date)
    res.json({ data })
}

async function create(req, res, next) {
    const data = await service.create(res.locals.validToDo)
    res.json({ data })
}

async function update(req, res, next) {
    const data = await service.update(res.locals.validToDo)
    res.json({ data })
}

async function destroy(req, res, next) {
    await service.destroy(res.locals.todo)
    res.json({ message: "toDo deleted" })
}



module.exports = {
    list: [errorBoundry(list)],
    read: [errorBoundry(todoExists), errorBoundry(read)],
    listByDate: [errorBoundry(todoExists), errorBoundry(listByDate)],
    create: [errorBoundry(hasValidFields), errorBoundry(create)],
    update: [errorBoundry(hasValidFields), errorBoundry(update)],
    delete: [errorBoundry(todoExists), errorBoundry(destroy)]
}