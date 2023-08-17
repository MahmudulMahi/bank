document.getElementById('btn-deposit').addEventListener('click',function(){

  const depositField =document.getElementById('deposit-field');
  const newamountString=depositField.value
  const newamount=parseFloat(newamountString)
  // console.log(amount)

  const depositTotal =document.getElementById('deposit-total')
  const previousDepositString=depositTotal.innerText
  const previousDeposit=parseFloat(previousDepositString)
  // console.log(deposit)

  const currentDepositTotal =previousDeposit+newamount
  depositTotal.innerText=currentDepositTotal

  const balanceTotal=document.getElementById('balance-total');

  const previousbalancestring=balanceTotal.innerText
  const  previousbalance=parseFloat(previousbalancestring)

  const currentBalanceTotal= previousbalance+newamount
  
  balanceTotal.innerText=currentBalanceTotal



  depositField.value=''
})