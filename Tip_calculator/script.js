let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billCurrency = document.getElementById('currency').value;
    let billAmount = document.getElementById('bill_amount').value;
    let tipPercent = document.getElementById('tip_percent').value;
    let noPeople = document.getElementById('no_people').value; 

    let totalTip = document.getElementById('total_tip').value = billAmount / tipPercent / noPeople;
})