const child = require('child_process')



const getInterfaces =  (res) => {
    try {
        const command = "/sbin/ip -4 -o a | cut -d ' ' -f 2,7 | cut -d '/' -f 1 | cut -d ' ' -f 1"
        child.exec(command, (error, stdout, stderr) => {
            if (error) {
                res.status(500).send({
                    message: 'Error en la conexion con el servidor!',
                    error
                })
            }

            res.status(200).send({
                data: {
                    stdout: stdout.split('\n'),
                    stderr,
                    message: 'Conexion exitosa',
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
const Output =  (res) => {
    try {
        child.exec('iptables -L OUTPUT --line-numbers', (error, stdout, stderr) => {
            if (error) {
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
const Forward =  (res) => {
    try {
        child.exec('iptables -L FORWARD --line-numbers', (error, stdout, stderr) => {
            if (error) {
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
const Input =  (res) => {
    try {
        child.exec('iptables -L INPUT --line-numbers', (error, stdout, stderr) => {
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
        getInterface: (req, res) => {
            getInterfaces(res)
        },
        getOutput: (req, res) => {
            Output(res)
        },
        getForward: (req, res) => {
            Forward(res)
        },
        getInput: (req, res) => {
            Input(res)
        }
    }

}

