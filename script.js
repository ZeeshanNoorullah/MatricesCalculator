
var arr1 = [];
var arr2 = [];
var row1, col1, row2, col2
var mat1 , mat2

function numOfMat() {                               //to select number of rows and columns
    var nom = document.getElementById("nom").value
    if (nom == 1) {
        document.getElementById("mat").innerHTML = '<label for="row1">Enter Number of Rows: </label><input type="number" name="" id="row1"><br><label for="col1">Enter Number of Columns: </label><input type="number" name="" id="col1"><button onclick="rowcol()">OK</button>'

    } else if (nom == 2) {
        document.getElementById("mat").innerHTML = '<label for="row1">Enter Number of Rows for matrix 1: </label><input type="number" name="" id="row1"><br><label for="col1">Enter Number of Columns for matrix 1: </label><input type="number" name="" id="col1"><br><label for="row2">Enter Number of Rows for matrix 2: </label><input type="number" name="" id="row2"><br><label for="col2">Enter Number of Columns for matrix 2: </label><input type="number" name="" id="col2"><br><button onclick="rowcol1()">OK</button>'
    }
    else {
        document.getElementById("mat").innerHTML = 'Error: Number of matrices can be either 1 or 2'
    }
}
function rowcol() {                                 //checking the number of rows and columns
    row1 = document.getElementById("row1").value
    col1 = document.getElementById("col1").value
    if (row1 < 2 || col1 < 2 || row1 > 5 || col1 > 5) {
        document.getElementById("rowcol").innerHTML = 'rows and colums cannot be greater than 5 or less than 2'
    } else {
        for (let i = 1; i <= row1; i++) {
            for (let j = 1; j <= col1; j++) {

                var node = document.createElement("p");
                node.innerHTML = '<label for="rowcolval">Enter value for of Row ' + i + ' column ' + j + ': </label><input type="number" id="row' + i + 'col' + j + 'val"><br>'
                document.getElementById('vals').appendChild(node)

            }

        }
        var okbutton = document.createElement('button')
        okbutton.innerHTML = 'OK'
        okbutton.setAttribute("onclick", "setmatrices()")
        document.getElementById('vals').appendChild(okbutton)

    }
}

function setmatrices() {                                        //saving elements of matrix in array and showing operations
    for (let k = 1; k <= row1; k++) {
        for (let l = 1; l <= col1; l++) {
            console.log(document.getElementById('row' + k + 'col' + l + 'val').value)
            arr1.push(parseInt(document.getElementById('row' + k + 'col' + l + 'val').value))
        }
    }
    var tempmat = math.matrix(arr1)
    mat1 = math.reshape(tempmat, [row1, col1])
    console.log(mat1)

    document.getElementById('matopr').innerHTML = 'Your matrix is ' + mat1 + '<br><br>'
    var options = document.createElement('p')
    options.innerHTML = '<button onclick="deter()">Find Determinent</button><br><button onclick="transpose()">Find Transpose</button><br><button onclick="inverse()">Find Inverse</button><br><button onclick="addscalor()">Add Scalor</button><br><button onclick="multiplyscalor()">Multiply a scalor</button><br>'
    document.getElementById('matopr').appendChild(options)
}

function deter() {                                  //function to find determinent
    if (row1 != col1) {
        var error1 = document.createElement('p')
        error1.innerHTML = "Error: Matrix must be square to find determinent"
        document.getElementById('matopr').appendChild(error1)
    } else {
        var deterResult = document.createElement('p')
        var determinent = math.det(mat1._data)
        deterResult.innerHTML = "Determinent of given Matrix is " + determinent
        document.getElementById('matopr').appendChild(deterResult)
    }
}
function transpose() {                              //function to find transpose
    var transResult = document.createElement('p')
    var transpose1 = math.transpose(mat1._data)
    transResult.innerHTML = "Transpose of given Matrix is " + math.matrix(transpose1)
    document.getElementById('matopr').appendChild(transResult)
}
function inverse() {                                //function to find inverse
    if (row1 != col1) {
        var error1 = document.createElement('p')
        error1.innerHTML = "Error: Matrix must be square to find inverse"
        document.getElementById('matopr').appendChild(error1)
    } else {
        var inverseResult = document.createElement('p')
        var inverse1 = math.inv(mat1._data)
        inverseResult.innerHTML = "Inverse of given Matrix is " + math.matrix(inverse1)
        document.getElementById('matopr').appendChild(inverseResult)
    }
}
function addscalor() {                          //function to get scalor to add to matrix
    var addsc = document.createElement('p')
    addsc.innerHTML = '<label for="addsc">Enter scalor number to add to the matrix: </label><input type="number" name="" id="addsc"><button onclick="sumscalor()">OK</button>'
    document.getElementById('matopr').appendChild(addsc)
}
function sumscalor() {                          //performing addition
    var sumsc = document.createElement('p')
    sumsc.innerHTML = 'Sum is ' + math.matrix(math.add(mat1._data, parseInt(document.getElementById("addsc").value)))
    document.getElementById('matopr').appendChild(sumsc)
}
function multiplyscalor() {                     //function to get scalor to multiply to matrix
    var mulsc = document.createElement('p')
    mulsc.innerHTML = '<label for="mulsc">Enter scalor number to Multiply to the matrix: </label><input type="number" name="" id="mulsc"><button onclick="mulscalor()">OK</button>'
    document.getElementById('matopr').appendChild(mulsc)
}
function mulscalor() {                          //performing multiplication
    var mulsc = document.createElement('p')
    mulsc.innerHTML = 'Product is ' + math.matrix(math.multiply(mat1._data, parseInt(document.getElementById("mulsc").value)))
    document.getElementById('matopr').appendChild(mulsc)
}


//For 2 matrices

function rowcol1() {                                    //for getting rows and columns of 2 matrices
    row1 = document.getElementById("row1").value
    col1 = document.getElementById("col1").value
    row2 = document.getElementById("row2").value
    col2 = document.getElementById("col2").value
    if (row1 < 2 || col1 < 2 || row1 > 5 || col1 > 5 || row2 < 2 || col2 < 2 || row2 > 5 || col2 > 5) {
        document.getElementById("rowcol").innerHTML = 'rows and colums cannot be greater than 5 or less than 2'
    } else {
        for (let i = 1; i <= row1; i++) {                     //for first matrix
            for (let j = 1; j <= col1; j++) {

                var node = document.createElement("p");
                node.innerHTML = '<label for="rowcolval">Enter value for of Row ' + i + ' column ' + j + ' for matrix 1: </label><input type="number" id="row' + i + 'col' + j + 'valmat1"><br>'
                document.getElementById('vals').appendChild(node)

            }

        }
        for (let i = 1; i <= row2; i++) {                       //for second matrix
            for (let j = 1; j <= col2; j++) {

                var node = document.createElement("p");
                node.innerHTML = '<label for="rowcolval">Enter value for of Row ' + i + ' column ' + j + ' for matrix 2: </label><input type="number" id="row' + i + 'col' + j + 'valmat2"><br>'
                document.getElementById('vals').appendChild(node)

            }

        }
        var okbutton = document.createElement('button')
        okbutton.innerHTML = 'OK'
        okbutton.setAttribute("onclick", "setmatrices2()")
        document.getElementById('vals').appendChild(okbutton)

    }
}

//for taking elements of matrices in an array and converting them to matrices
function setmatrices2() {
    for (let k = 1; k <= row1; k++) {
        for (let l = 1; l <= col1; l++) {
            console.log(document.getElementById('row' + k + 'col' + l + 'valmat1').value)
            arr1.push(parseInt(document.getElementById('row' + k + 'col' + l + 'valmat1').value))
        }
    }
    for (let k = 1; k <= row2; k++) {
        for (let l = 1; l <= col2; l++) {
            console.log(document.getElementById('row' + k + 'col' + l + 'valmat2').value)
            arr2.push(parseInt(document.getElementById('row' + k + 'col' + l + 'valmat2').value))
        }
    }
    var tempmat1 = math.matrix(arr1)
    var tempmat2 = math.matrix(arr2)
    mat1 = math.reshape(tempmat1, [row1, col1])
    mat2 = math.reshape(tempmat2, [row2, col2])
    

    document.getElementById('matopr').innerHTML = 'Your matrix first matrix is ' + mat1 + ' and second matrix is '+ mat2 +'<br><br>'
    var options = document.createElement('p')
    options.innerHTML = '<button onclick="mulmat1mat2()">Multiply the first matrix with the second</button><br><button onclick="mulmat2mat1()">Multiply the second matrix with first</button><br><button onclick="addmat1mat2()">Add both matrices</button><br><button onclick="submat2mat1()">Subtract the first matrix from second</button><br><button onclick="submat1mat2()">Subtract the second matrix from the first</button><br>'
    document.getElementById('matopr').appendChild(options)
}

function mulmat1mat2(){                 //function to perform Multiplication of matrix 1 with matrix 2                   
    var mulmat12 = document.createElement('p')
    mulmat12.innerHTML = 'Multiplication of matrix 1 with matrix 2 is ' + math.matrix(math.multiply(mat1._data, mat2._data))
    document.getElementById('matopr').appendChild(mulmat12)
}
function mulmat2mat1(){                 //function to perform Multiplication of matrix 2 with matrix 1                   
    var mulmat21 = document.createElement('p')
    mulmat21.innerHTML = 'Multiplication of matrix 2 with matrix 1 is ' + math.matrix(math.multiply(mat2._data, mat1._data))
    document.getElementById('matopr').appendChild(mulmat21)
}
function addmat1mat2(){                 //function to perform addition                   
    var addmat = document.createElement('p')
    addmat.innerHTML = 'Sum of both matrices is ' + math.matrix(math.add(mat1._data, mat2._data))
    document.getElementById('matopr').appendChild(addmat)
}
function submat1mat2(){                 //function to perform Subtraction of matrix 2 from matrix 1                   
    var sub12 = document.createElement('p')
    sub12.innerHTML = 'Subtraction of matrix 2 from matrix 1 is ' + math.matrix(math.subtract(mat1._data, mat2._data))
    document.getElementById('matopr').appendChild(sub12)
}
function submat2mat1(){                 //function to perform Subtraction of matrix 1 from matrix 2
    var sub21 = document.createElement('p')
    sub21.innerHTML = 'Subtraction of matrix 1 from matrix 2 is ' + math.matrix(math.subtract(mat2._data, mat1._data))
    document.getElementById('matopr').appendChild(sub21)
}