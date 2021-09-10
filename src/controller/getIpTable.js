const child = require('child_process')
const AllIptable =  (res) => {
    try {
        child.exec('iptables -nL', (error, rules) => {
            if (error) {
                console.log(error)
                res.status(500).send({
                    message: 'Error en la conexion con el servidor!',
                    error
                })
            }

            res.status(200).send({
               
                    rules: rules.split('\n'),
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
        },
        getIptablesForwards: (req, res) => {
            getIptablesForward(res)
        } 

    }

}

