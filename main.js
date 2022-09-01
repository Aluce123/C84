nameOfTheStudentArray = [];

function submit() {
    var name_1 = document.getElementById("NomedoAluno1").value;
    var name_2 = document.getElementById("NomedoAluno2").value;
    var name_3 = document.getElementById("NomedoAluno3").value;
    var name_4 = document.getElementById("NomedoAluno4").value;

    nameOfTheStudentArray.push(name_1);
    nameOfTheStudentArray.push(name_2);
    nameOfTheStudentArray.push(name_3);
    nameOfTheStudentArray.push(name_4);

console.log(nameOfTheStudentArray);

    document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
}