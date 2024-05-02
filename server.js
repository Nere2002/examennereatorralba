const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const {initModels} = require("./models/init-models");
 const {Sequelize} = require("sequelize");

app.use(cors(), express.json());

port = 3000;
app.listen(port, () => {
  console.log(`Port::${port}`);
});
// conexion con connector
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Admin123',
  database: 'universitat',
  port: 3306
});

connection.connect((err)=>{
  if (err) throw err;
  console.log("Conectado")
})
//EX1
app.get('/ex1', (req, res) => {
  connection.query('SELECT assig_codi, assig_nom\n' +
    'FROM professor, departament, assignatures_professor, assignatures\n' +
    'WHERE assig_codi=assigprof_assig_codi\n' +
    'AND prof_dni=assigprof_prof_dni\n' +
    'AND prof_dept_codi=dept_codi\n' +
    'AND dept_nom=\'INFORMATICA I MATEMATICA APLICADA\'\n' +
    'GROUP BY assig_codi, assig_nom', (err, rows) => {
    if (err) throw err;
    console.log("info: ", rows);
    connection.end();
    res.json(rows);
  })
})

const dbauto = new Sequelize('universitat', 'root', 'Admin123', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

const models = initModels(dbauto);


// EX3
app.get('/ex3', async (req, res) => {
  const matr_alum_dnii = await models.matricula.findOne({
    attributes:
      ['MATR_ALUM_DNI'], where: {MATR_NOTA: 10}
  }).then((h) => {
    return h.MATR_ALUM_DNI;
  })
  const p = await models.alumnes.findAll({
    where:
      {ALUMN_DNI: matr_alum_dnii}
  });
  res.send(p)
  console.log(p)
})

//EX4

app.post('/ex4', async (req, res) => {
  const attr = {
    DEPT_CODI: req.body.codi,
    DEPT_NOM: req.body.nom,
    DEPT_UBICACIO: req.body.ubi,
    DEPT_TELEFON: req.body.telf,
    DEPT_PROF_DNI: req.body.dni
  }
  const nouDept = await models.departament.create(attr)

  res.send(nouDept);
});

