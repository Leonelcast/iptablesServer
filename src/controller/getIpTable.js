const child = require('child_process')
const AllIptable =  (res) => {
    try {
        child.exec('iptables -nL', (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                res.status(500).send({
                    message: 'Error en la conexion con el servidor!',
                    error
                })
            }

            res.status(200).send({
                data: {
                    stdout: stdout.split('\n'),
                    stderr
                }
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
        AllIptables: (req, res) => {
            AllIptable(res)
        }
    }

}

