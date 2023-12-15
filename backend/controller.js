const db = require('./connection')

exports.getData = (req, res, next) => {
  db.execute('SELECT * FROM employee').then(result => {
    console.log(result);
    res.json(result[0])
  }
  ).catch(err => console.log(err))
}

exports.remove = (req, res, next) => {
  const id = req.body.employeeId;
  db.execute(`Delete FROM employee WHERE id=${id}`).then(result => {
    console.log(result);
    res.send({
      status: true,
      message: "Employee deleted successfully"
    })
  }
  ).catch(err => console.log(err))
}

exports.searchData = (req, res, next) => {
  const text = req.body.text;
  db.execute(`Select * FROM employee WHERE city LIKE  '${text}'`).then(result => {
    console.log(result);
    res.send({
      status: true,
      result: result[0]
    })
  }
  ).catch(err => console.log(err))
}

exports.addEmployee = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const city = req.body.city;
  db.execute(`INSERT INTO employee(firstname, lastname,city) VALUES('${firstName}', '${lastName}', '${city}')`).then(result => {
    console.log(result);
    res.send({
      status: true,
      message: "Employee Added Successfully"
    })
  }
  ).catch(err => console.log(err))
}