const calculateTemp=() => {

    const number= document.getElementById('temp').value;

    const selecte=document.getElementById('temp_diff');

    const value = temp_diff.options[selecte.selectedIndex].value;
const celToFah=(cel)=>{
    let fahrenheit = (cel*9/5)+32;
    return fahrenheit;
}
const fehToCel=(fehr)=>{
    let celsius = (fehr-32)*5/9;
    return celsius;
}    

let result;

    if(value== 'cel'){
        
        result = celToFah(number);
        document.getElementById('fd1').value=result+ ' Fahrenheit';
    }
    else{
        result = fehToCel(number);
        document.getElementById('fd1').value=result+ 'celsius';
    }

    }

