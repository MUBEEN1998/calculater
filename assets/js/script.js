
let question = "What Operation Do You Want to Perform?"
let livequestion = document.getElementById("livequestion");
livequestion.innerHTML = question;
let liveinput = "";
let operation = "";
let phase = 0;
let temp = 0;
let loopnumber = 0;
let currentloop = 1;

document.getElementById("liveinput").addEventListener("keyup",(e)=>{
    if(e.keyCode == 13){
        switch(phase){
            case 0:
                switch(e.target.value){
                    case "addition":
                        operation=e.target.value;
                        temp=0;
                        appnedentry();
                        newentry();
                        break;
                    case "multiplication":
                        operation=e.target.value;
                        temp=1;
                        appnedentry();
                        newentry();
                        break;
                    case "division":
                        operation=e.target.value;
                        temp=1;
                        appnedentry();
                        newentry();
                        break;
                    case "subtraction":
                        operation=e.target.value;
                        temp=0;
                        appnedentry();
                        newentry();
                        break;
                    default:
                        alert("Wrong Operation!!");
                }
                break;
            case 1:
                if(parseInt(e.target.value)){
                    loopnumber = parseInt(e.target.value);
                    appnedentry();
                    newentry();
                }else{
                    alert("Enter Valid Number!!");
                }
                break;
            case 2:
                if(parseInt(e.target.value)){
                    switch(operation){
                        case "addition":
                            temp = temp + parseInt(e.target.value);
                            break;
                        case "multiplication":
                            temp = temp * parseInt(e.target.value);
                            break;
                        case "division":
                            if(currentloop==1){
                                temp = parseInt(e.target.value);
                            }else{
                                temp = temp / parseInt(e.target.value);
                            }
                            break;
                        case "subtraction":
                            if(currentloop==1){
                                temp = parseInt(e.target.value);
                            }else{
                                temp = temp - parseInt(e.target.value);
                            }
                            break;
                    }
                    currentloop++;
                    appnedentry();
                    newentry();
                }else{
                    alert("Enter Valid Number!!");
                }
                break;
            case 3:
                if(parseInt(e.target.value)){
                    switch(operation){
                        case "addition":
                            temp = temp + parseInt(e.target.value);
                            break;
                        case "multiplication":
                            temp = temp * parseInt(e.target.value);
                            break;
                        case "division":
                            temp = temp / parseInt(e.target.value);
                            break;
                        case "subtraction":
                            temp = temp - parseInt(e.target.value);
                            break;
                    }
                    currentloop=1;
                    loopnumber=0;
                    appnedentry();
                    newentry();
                }else{
                    alert("Enter Valid Number!!");
                }
                break;
        }
    }else{
        liveinput = e.target.value;
    }
});

function appnedentry(){
    var newHTML = `
        <h3>> ${question}</h3>
        <h3>
            <span class="input-span">></span>
            ${liveinput}
        </h3>
    `;
    let div = document.createElement("div");
    div.innerHTML = newHTML;
    document.getElementById("handler").appendChild(div);
}

function newentry(){
    liveinput = "";
    document.getElementById("liveinput").value=null;
    switch(phase){
        case 0:
            phase=1;
            question = "How Many Numbers do You Want to Enter?";
            break;
        case 1:
            phase=2;
            question = "Enter Number "+currentloop+" of "+loopnumber;
            break;
        case 2:
            question = "Enter Number "+currentloop+" of "+loopnumber;
            if(currentloop == loopnumber){
                phase = 3;
            }
            break;
        case 3:
            phase=0;
            question = "Your Answer for Above Calculation is "+temp+". Now What Operation Do You Want to Perform?";
            break;
    }
    livequestion.innerHTML = question;
}