document.addEventListener('DOMContentLoaded', () => {
    const totalInput = document.getElementById('total');
    const tipInput = document.getElementById('tip');
    const tipPercentValueInput = document.getElementById('tipPercentValue');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalWithTipInput = document.getElementById('totalWithTip');
    const errorMessage = document.getElementById('error-message');

    function calculateTip() {
        const total = parseFloat(totalInput.value);
        const tip = parseFloat(tipInput.value);
    
        if (isNaN(total) || total <= 0) {
          tipInput.value = "";
          totalWithTipInput.value = "";
          return;
        }
    
        const tipAmount = total * (tip / 100);
        const totalWithTip = total + tipAmount;
    
        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
      }
    
      totalInput.addEventListener("input", function () {
        if (isNaN(parseFloat(totalInput.value)) || parseFloat(totalInput.value) < 0) {
          errorMessage.textContent="Please enter a valid positive number for the bill total.";
          totalInput.value = "";
        }
        else{
          errorMessage.textContent='';
        }
        calculateTip();
      });
    
      tipInput.addEventListener("input", function () {
        tipPercentValueInput.textContent = `${tipInput.value}%`;
        calculateTip();
      });
    
      calculateTip();
});
