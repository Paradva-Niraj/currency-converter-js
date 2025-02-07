const list = document.querySelectorAll('#select');
const btn = document.querySelector("#convert");
const input = document.querySelector("#input");

const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";


for (let select of list)
{
    
    for (code in countryList)
    {
        let newop = document.createElement("option");
        newop.innerText=code;
        newop.value=code;
       
        select.append(newop);
        if(select.name == "from" && code == "USD")
        {
            newop.selected="selected";
        }
        if(select.name == "to" && code == "INR")
        {
            newop.selected="selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        changeflag(evt.target);
    });
}

const changeflag = (element) =>{
    let code = element.value;
    let concode = countryList[code];
    let newsrc=`https://flagsapi.com/${concode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src=newsrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = input.value;
    
    if ( amount == "" || amount < 0)
    {
        input.value = 1;
        amount = 1;
    }
    let responce = await fetch(BASE_URL);
    let formate = await responce.json();
    const from = document.querySelector(".selectfrom").value;
    const to = document.querySelector(".selectto").value;
    // console.log(from);
    // console.log(to);
    var cfrom = formate.eur[from.toLowerCase()];
    var cto = formate.eur[to.toLowerCase()];
    // console.log(cfrom);
    // console.log(cto);
    var result = ((parseFloat(amount))*cto)/cfrom;
    // console.log(result);
    let c = document.querySelector("#result");
    // console.log(c);
    c.innerText = "result :" + result.toFixed(2);
});


