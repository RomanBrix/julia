const News = require("../models/News");
const { verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const data = req.body;
        const news = await News.create(data);
        res.status(200).json(news._id);
    } catch (error) {
        console.log(error);
        res.status(500).json(false);
    }
});
router.put("/", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const { title, desc, photo } = data;
        await News.findOneAndUpdate(
            { _id: data._id },
            {
                title,
                desc,
                photo,
            }
        );
        // const news = await News.create(data);
        res.status(200).json(true);
    } catch (error) {
        console.log(error);
        res.status(500).json(false);
    }
});
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const { id } = req.params;
        await News.findByIdAndRemove(id);
        res.status(200).json(true);
    } catch (error) {
        console.log(error);
        res.status(500).json(false);
    }
});

router.get("/", async (req, res) => {
    try {
        const { limit } = req.query;
        let setLimit = +limit || 0;

        // console.log(setLimit);
        // console.log(req.query);
        const news = await News.find({}, "-desc")
            .sort({ createdAt: -1 })
            .limit(setLimit)
            .lean();

        res.status(200).json(news);
    } catch (err) {
        console.log(err);
        res.status(400).json(false);
    }
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const news = await News.findById(id).lean();

        if (!news) throw new Error("no");
        res.status(200).json(news);
    } catch (err) {
        console.log(err);
        res.status(400).json(false);
    }
});

module.exports = router;
