module.exports = (req, res, next) => {
    res.status(200);
    res.json({code: 1, message: "Bienvenido"})
};