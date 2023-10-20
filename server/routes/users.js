const router = require("express").Router();
const Admin = require("../models/Users");
const CryptoJS = require("crypto-js");
const { verifyTokenAndAuthorization } = require("./verifyToken");

//delete user
router.delete("/", verifyTokenAndAuthorization, async (req, res) => {
    const { id } = req.body;
    console.log(req.body);
    console.log(req.query);
    try {
        await Admin.findByIdAndRemove(id);
        return res.status(200).json(true);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//change password user
router.put("/", verifyTokenAndAuthorization, async (req, res) => {
    const { user } = req.body;
    console.log(req.body);
    // const { id } = req.params;
    const { password, id } = user;

    try {
        if (!password) throw new Error();
        const newPass = CryptoJS.AES.encrypt(
            password,
            process.env.PASS_SEC
        ).toString();

        await Admin.findByIdAndUpdate(id, { password: newPass });
        return res.status(200).json(true);
    } catch (err) {
        return res.status(500).json(err);
    }
});
//add new user
// verifyTokenAndAuthorization,

router.post("/new", verifyTokenAndAuthorization, async (req, res) => {
    console.log(req.body);
    const user = req.body;
    try {
        if (!user) throw new Error();

        await Admin.create({
            ...user,
            password: CryptoJS.AES.encrypt(
                user.password,
                process.env.PASS_SEC
            ).toString(),
        });
        return res.status(200).json(true);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
//get list of users
//
router.get("/list", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const usersList = await Admin.find({}, "createdAt username _id")
            .sort({ createdAt: -1 })
            .lean();
        return res.status(200).json(usersList);
    } catch (err) {
        return res.status(500).json(err);
    }
});
module.exports = router;
