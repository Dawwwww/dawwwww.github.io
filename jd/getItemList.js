function makeInner(innerParent,text){
    var key = document.getElementById("item").value;
    for(var i = 0; i < text.length; ++i){
        if(key.indexOf(text[i])!=-1){
            var keyInner = document.createElement("strong");
            keyInner.style="color:red";
            keyInner.appendChild(document.createTextNode(text[i]));
            innerParent.appendChild(keyInner);
            continue;
        }
        innerParent.appendChild(document.createTextNode(text[i]));
        continue;
    }
}
function  appendItemTd(itemTr,itemTdInner){
    var items = document.getElementById("items");
    var itemTd = document.createElement("td");
    itemTd.appendChild(itemTdInner);
    itemTr.appendChild(itemTd);
    items.appendChild(itemTr);
}
function appendItem(itemInputValue,item){
    var itemTr = document.createElement("tr");
    var itemName = document.createElement("a");
    itemName.title=item.itemName+"京东优惠券";
    itemName.alt=itemName.title;
    itemName.href=item.url;
    itemName.target="_blank";
    makeInner(itemName, item.itemName);
    appendItemTd(itemTr, itemName);
    var itemShop = document.createElement("p");
    makeInner(itemShop, item.shop);
    appendItemTd(itemTr, itemShop);
    var itemLinePrice = document.createElement("del");
    itemLinePrice.appendChild(document.createTextNode("原价:"+item.linePrice));
    appendItemTd(itemTr, itemLinePrice);
    appendItemTd(itemTr, document.createTextNode("现价:"+item.price));
    appendItemTd(itemTr, document.createTextNode("优惠"+item.cou+"元"));
    appendItemTd(itemTr, document.createTextNode(item.date));
}
function getItemByInput(itemKey,list){
    for(item in list){
        if((list[item].itemName.indexOf(itemKey) != -1)||list[item].shop.indexOf(itemKey) != -1){
            appendItem(itemKey,list[item]);
        }
    }
    return;
}
function Search(){
    document.getElementById("items").innerHTML="";;
    var itemKey = document.getElementById("item").value;
    if(itemKey==""){
        return;
    }
    getItemByInput(itemKey, itemList);
    return;
}
