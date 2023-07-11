import { getConnection } from "./../database/database";

const getCitas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM citas");
        console.log(result, ' result')
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCita = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM citas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCita = async (req, res) => {
    try {
        const { cedula, paciente, medico, fecha, estado } = req.body;

        if (cedula === undefined || paciente === undefined || medico === undefined || fecha === undefined|| estado === undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const body = { cedula, paciente, medico, fecha, estado };
        const connection = await getConnection();
        await connection.query("INSERT INTO citas SET ?", body);
        res.json({ message: "CITA AGENDADA" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateCita = async (req, res) => {
    try {
        const { id } = req.params;
        const { cedula, paciente, medico, fecha, estado } = req.body;

        if (id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const body = { cedula, paciente, medico, fecha, estado };
        const connection = await getConnection();
        const result = await connection.query("UPDATE citas SET ? WHERE id = ?", [body, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteCita = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM citas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getCitas,
    getCita,
    addCita,
    updateCita,
    deleteCita
};
