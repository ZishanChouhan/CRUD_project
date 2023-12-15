fetch('http://127.0.0.1:3000/employee')
  .then( response => {
    console.log(response);
    return response.json();
    
  }).then(data => {
    console.log(data)
    if (data.length > 0) {

      var temp = "";
      data.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td>" + itemData.id + "</td>";
        temp += "<td>" + itemData.name + "</td>";
        temp += "<td>" + itemData.gender + "</td>";
        temp += "<td>" + itemData.department + "</td>";
        temp += "<td>" + itemData.location + "</td>";
        temp += "<td>" + itemData.salary + "</td></tr>";
      });
      document.getElementById('data').innerHTML = temp;
    }
  }).catch(err => console.log(err))