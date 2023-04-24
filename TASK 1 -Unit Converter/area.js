const calculatearea=() => {

    const number= document.getElementById('temp').value;

    const selecte=document.getElementById('temp_diff');

    const value = temp_diff.options[selecte.selectedIndex].value;
const FtoI=(foot)=>{
    let inches = foot*144;
    return inches;
}
const ItoF=(inch)=>{
    let foots = inch/144;
    return foots;
}    

let result;

    if(value== 'foot'){
        
        result = FtoI(number);
        document.getElementById('fd1').value=result+ ' inch';
    }
    else{
        result = ItoF(number);
        document.getElementById('fd1').value=result+ 'foot';
    }

    }