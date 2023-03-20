var employees = [
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
var placeholder = document.getElementById('tbody');
var out = "";
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var i = employees_1[_i];
    out += "\n   <tr>\n           <td>".concat(i.ID, "</td>\n           <td>").concat(i.Firstname, "</td>\n           <td>").concat(i.Lastname, "</td>\n           <td>").concat(i.Address, "</td>\n           <td>").concat(i.salary, "</td>\n         </tr>\n   ");
}
placeholder.innerHTML = out;
function search() {
    console.log("a");
}
var a = "hello";
