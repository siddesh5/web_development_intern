
const calculatefre=() => {

    const number= document.getElementById('temp').value;

    const selecte=document.getElementById('temp_diff');

    const value = temp_diff.options[selecte.selectedIndex].value;
const HtoK=(hert1)=>{
    let hertz = hert1/1000;
    return hertz;
}
const KtoH=(khertz)=>{
    let kilohertz = khertz*1000;
    return kilohertz;
}    

let result;

    if(value== 'hertz'){
        
        result = HtoK(number);
        document.getElementById('fd1').value=result+ ' hertz';
    }
    else{
        result =KtoH(number);
        document.getElementById('fd1').value=result+ 'Kilohertz';
    }

    }