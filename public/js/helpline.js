
fetch('https://api.rootnet.in/covid19-in/contacts').then((response)=>{
    response.json().then((data)=>{
      console.log(data.data.contacts.regional)
      let html=``;
      res = data.data.contacts.regional
      res.forEach(element => {
          html+=`<tr>
          <td>${element.loc}</td>
          <td>${element.number}</td>
      </tr>`
          
      });
       document.getElementById('data').innerHTML=html
    })
    
  })

  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    tbody = document.getElementById("data");
    tr = tbody.getElementsByTagName('tr');
    console.log(tr)
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      a = tr[i].getElementsByTagName("td")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }