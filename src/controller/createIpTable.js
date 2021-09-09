const child = require('child_process')

function createIpTableOutput(req, res) {
    try {
        const iptable = "iptables -A OUTPUT -s 192.168.1.10 -p udp --dport 8080 -j ACCEPT"
        child.exec(iptable, (error) => {
            if (error) {
                res.status(500).send({
                    message: 'Error en la conexion con el servidor!',
                    error
                })
            }

            res.status(200).send({
                data: {
                    ok: true,
                    iptable
                }
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Error en la conexion con el servidor!',
            error
        })
    }
}
function createIpTableInput(req, res) {
    try {
        const iptable = "iptables -A INPUT -s 192.168.1.10 -p tcp --dport 8080 -j ACCEPT"
        child.exec(iptable, (error) => {
            if (error) {
                res.status(500).send({
                    message: 'Error en la conexion con el servidor!',
                    error
                })
            }

            res.status(200).send({
                data: {
                    ok: true,
                    iptable
                }
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Error en la conexion con el servidor!',
            error
        })
    }
}
function createIpTableForward(req, res) {
    try {
        const iptable = "iptables -A FORWARD -s 192.168.1.10 -p tcp --dport 8080 -j ACCEPT"
        child.exec(iptable, (error) => {
            if (error) {
                res.status(500).send({
                    message: 'Error en la conexion con el servidor!',
                    error
                })
            }

            res.status(200).send({
                data: {
                    ok: true,
                    iptable
                }
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Error en la conexion con el servidor!',
            error
        })
    }
}


module.exports = (app) => {
    return {
        createIpTableOutputs: ( req, res) => {
            createIpTableOutput( req, res)
        },
        createIpTableInputs: ( req, res) => {
            createIpTableInput( req, res)
        },
        createIpTableForwards: ( req, res) => {
            createIpTableForward( req, res)
        }
    }

}