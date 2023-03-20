var employees: {
    ID: number;
    Firstname: string;
    Lastname: string;
    Address: string;
    salary: number;
  }[] = [
      {
        ID: 1,
        Firstname: 'Person1',
        Lastname: 'Person1',
        Address: 'location',
        salary: 1234,
      },
      {
        ID: 2,
        Firstname: 'Person2',
        Lastname: 'Person2',
        Address: 'location',
        salary: 4567,
      },
      {
        ID: 3,
        Firstname: 'Person3',
        Lastname: 'Person3',
        Address: 'location',
        salary: 7890,
      },
      {
        ID: 4,
        Firstname: 'Person4',
        Lastname: 'Person4',
        Address: 'location',
        salary: 3456,
      },
      {
        ID: 5,
        Firstname: 'Person5',
        Lastname: 'Person5',
        Address: 'location',
        salary: 45366,
      },
    ];
  
  
  
      
  var placeholder:any=<HTMLElement>document.getElementById('tbody');
  var out=""
  for(let i of employees){
   out+=`
   <tr>
           <td>${i.ID}</td>
           <td>${i.Firstname}</td>
           <td>${i.Lastname}</td>
           <td>${i.Address}</td>
           <td>${i.salary}</td>
         </tr>
   `
  }
  placeholder.innerHTML=out
    
  
    
   function search(){
    console.log("a")
  }
  
  const a = "hello"
  
  
  
  