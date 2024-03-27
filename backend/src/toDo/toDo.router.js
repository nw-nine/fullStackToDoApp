const router = require("express").Router()
const controller = require("./toDo.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")


router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/:toDo_id")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed)

router.route("/:toDo_date")
    .get(controller.listByDate)
    .post(controller.create)

module.exports = router