export const queries = {
    getAllModulos: `SELECT idModulo, idAplicacion, clave, nombre, estado
                    FROM Modulos;`,
    getModuloById: `SELECT idAplicacion, clave, nombre, estado
                    FROM Modulos
                    WHERE idModulo = ?;`,
    insertModulo: `CALL proc_insert_modulos(?, ?, ?);`,
    updateModulo: `CALL proc_update_modulos(?, ?, ?, ?);`,
    deleteModulo: `CALL proc_delete_modulos(?);`
}