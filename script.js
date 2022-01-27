let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
function percentage(num)
{
  return (num/100);
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log('Button text is ', btnText);
        if (btnText == 'x') {
            btnText = '*';
            screenValue += btnText;
            display.value = screenValue;
        }
        else if(btnText=='%')
        {
            let p=percentage(display.value)
            display.value=p;
        }
        else if(btnText=="x2")
        {    let s=Math.pow(display.value,2)
            display.value=s;
            
        }
        else if(btnText=='√')
        {
            let v=Math.sqrt(display.value)
            display.value=v
        }
        else if (btnText == 'C') {
            screenValue = "";
            display.value = screenValue;
        }
        else if (btnText == '=') {
            display.value = eval(screenValue);
        }
        else {
            screenValue += btnText;
            display.value = screenValue;
        }

    })
}