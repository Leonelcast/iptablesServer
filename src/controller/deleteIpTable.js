const child = require('child_process')

function deleteIpTable(req, res) {
    try {
        const iptable = "iptables -F"
        child.exec(iptable, (error) => {
            if (error) {
                res.status(500).send({
                    message: 'Error en la conexion con el servidor!',
                    error
                })
            }

            res.status(200).send({
                    ok: true,
                    iptable,
                    message: 'Reglas eliminadas con exito'
            })
        })
    } catch (error) {
        res.status(500).send({
            message: 'Error en la conexion con el servidor!',
            error
        })
    }
}


module.exports = (app) => {
    return {
        deleteIpTables: ( req, res) => {
            deleteIpTable( req, res)
        }
    }

}