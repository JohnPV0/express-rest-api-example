import { employeesService } from '../service/employees.service.js';

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await employeesService.findAllEmployees();
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
};

export const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await employeesService.findEmployeeById(id);
        if (rows.length <= 0) return res.status(404).json({ message: "Not found" })

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }

}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body;
    try {
        const [rows] = await employeesService.insertEmployee(name, salary);
        res.json({
            id: rows.insertId,
            name: name,
            salary: salary
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
};

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;

    try {
        const [result] = await employeesService.updateEmployee(id, name, salary);

        if (result.affectedRows <= 0) return res.status(404).json({ message: "Not found" });

        const [rows] = await employeesService.findEmployeeById(id);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
};

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await employeesService.deleteEmployee(id);
        if (result.affectedRows <= 0) return res.status(404).json({ message: "Not found" });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};