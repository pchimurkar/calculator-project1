let button = document.getElementById('btn');
button.onclick = () => {
    let x = document.getElementById('x').value;
    let y =document.getElementById('y').value;
    let result= document.getElementById('dropdown').value;
    let output= null;
        if(result ==  '+'){
            output = parseInt(x) + parseInt(y);
        }
        else if(result == '-'){
            output = x - y;
        }
        else if(result == '*'){
            output = x * y;
        }
        else if(result == '/'){
            output = x / y;
        }
        else{
            alert('enter number');
        }






    /* switch(result){
        case '+':
        output = parseInt(x) + parseInt(y);
        break;
         case '-':
        output = parseInt(x) - parseInt(y);
        break;
        case '*':
            output = parseInt(x) * parseInt(y);
            break;
            case '/':
                output = x / y;
                break;
    } */
    document.getElementById('output').innerText=output;
}








/* function calualtor(){
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var operators = document.getElementById('dropdown').value;

    if (operators === '+'){
        document.getElementById('output').value = x + y;
        console.log('called')
    }
    if (operators === '-'){
        document.getElementById('output').value = x - y;
    }
    if (operators === '*'){
        document.getElementById('output').value = x * y;
    }
    if(operators === '/'){
        document.getElementById('output').value = x / y;
    }
} */
