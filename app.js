const list = document.querySelectorAll('#select');
const btn = document.querySelector("#convert");
const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


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

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let input= document.querySelector("#input");
    let amount = input.value;
    if ( amount == "" || amount < 0)
    {
        input.value = 1;
        amount = 1;
    }
    
});