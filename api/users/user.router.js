const {
    controllerAddUser,
    controllerGetUsers,
    controllerGetUsersById,
    controllerUpdateUser,
    controllerDeleteUser,
    controllerLogin
    } = require("./user.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/add", controllerAddUser);
router.get("/get", controllerGetUsers);
router.get("/get/:id", controllerGetUsersById);
router.patch("/update", controllerUpdateUser);
router.delete("/delete", controllerDeleteUser);
router.post("/login", controllerLogin);

module.exports = router;
