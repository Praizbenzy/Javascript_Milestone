let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    
    let billAmount = document.getElementById('bill_amount').value;
    let tipPercent = document.getElementById('tip_percent').value;
    let noPeople = document.getElementById('no_people').value; 

    let totalTip = document.getElementById('total_tip').value = billAmount / tipPercent / noPeople;
    let totalBill = document.getElementById('total_bill').value = billAmount ;

    total_tip.value = totalTip.toFixed(2)
})