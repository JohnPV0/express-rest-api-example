import { pool } from './db.js';

export const employeesService = {
    findAllEmployees() 
    {
        return pool.query("SELECT * FROM employees");
    },

    insertEmployee(name, salary) {
        return pool.query("INSERT INTO employees (name, salary) VALUES (?, ?)", [name, salary]);
    },

    findEmployeeById(id) {
        return pool.query("SELECT * FROM employees WHERE id = ?", [id]);
    },

    deleteEmployee(id) {
        return pool.query("DELETE FROM employees WHERE id = ?", [id])
    },

    updateEmployee(id, name, salary) {
        return pool.query('UPDATE employees SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
    }
}
