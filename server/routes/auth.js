const router = require("express").Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
// const { verifyTokenAndAdmin } = require("./verifyToken");

router.post("/", async (req, res) => {
    // console.log(req.body);
    try {
        // console.log(req.body);
        const user = await User.findOne({
            username: req.body.login || req.body.username,
        });
        if (!user) {
            return res.status(401).json("wrong input");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        if (originalPassword != inputPassword) {
            return res.status(401).json("wrong input");
        }
        if (!user.isAdmin) {
            return res.status(401).json("You are not an admin");
        }
        // console.log("first");
        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "1d" }
        );

        const { password, ...others } = user._doc;
        // console.log(token);
        res.status(200).json({ user: others, token });
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
