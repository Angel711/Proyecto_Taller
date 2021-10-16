const { response } = require('express');
const express = require('express');
const empleado = express.Router();
const db = require('../config/database');

empleado.post("/empleado", async(req, res, next) => {
    const { nombre, apellido, telefono, correo, direccion } = req.body;

    if (nombre && apellido && telefono && correo && direccion) {
        let query = "INSERT INTO empleado(nombre, apellido, telefono, correo, direccion)";
        query += `VALUES('${nombre}', '${apellido}', '${telefono}', '${correo}', '${direccion}')`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Empleado insertado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }

    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

empleado.delete("/delete", async(req, res, next) => {
    const { id } = req.body;

    let query = `DELETE FROM empleado WHERE id=${id}`;

    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
        return res.status(200).json({ code: 200, message: "Empleado borrado correctamente" })
    }
    return res.status(404).json({ code: 404, message: "Empleado no encontrado" })
});

empleado.put("/modificar", async(req, res, next) => {
    const { id, nombre, apellido, telefono, correo, direccion } = req.body;

    if (id && nombre && apellido && telefono && correo && direccion) {
        let query = `UPDATE empleado SET nombre='${nombre}', apellido='${apellido}', `;
        query += `telefono='${telefono}', correo='${correo}', direccion='${direccion}' WHERE id=${id};`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Empleado actualizado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }

    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

empleado.patch("/:id([0-9]{1,3})", async(req, res, next) => {

    if (req.body.nombre) {
        let query = `UPDATE empleado SET nombre='${req.body.nombre}' WHERE id=${req.params.id}`;
        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Empleado actualizado correctamente" });
        }

        return res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

empleado.get('/', async(req, res, next) => {
    const emp = await db.query("SELECT * FROM empleado");
    res.status(200).json({ code: 1, message: emp });
});

empleado.get('/', async(req, res, next) => {
    const id = req.params.id;
    if (id >= 1 && id <= 100) {
        const emp = await db.query("SELECT * FROM empleado WHERE id=" + id + ";");
        res.status(200);
        return res.json({ code: 200, message: emp });
    }
    res.status(404);
    res.send({ code: 404, message: "Empleado no encontrado" });
});

empleado.get("/:name([A-Za-z]+)", async(req, res, next) => {
    const name = req.params.name;
    const emp = await db.query("SELECT * FROM empleado WHERE nombre ='" + name + "';")
    return (emp.length > 0) ?
        res.status(201).json({ code: 201, message: emp }) :
        res.status(404).send({ code: 404, message: "This pokemon doesn't exist" });
});

module.exports = empleado;