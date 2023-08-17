document.getElementById('btn-withdraw').addEventListener('click',function(){

  const withdrawField =document.getElementById('withdraw-field')

  const newWithDrawAmountString =withdrawField.value
  const newWithDrawAmount=parseFloat(newWithDrawAmountString)
  
  const withdrawtTotal =document.getElementById('withdraw-total')
  const previousWithdrawString=withdrawtTotal.innerText
  const previousWithdraw=parseFloat(previousWithdrawString)

  const currentWithdrawtTotal =previousWithdraw+newWithDrawAmount
  withdrawtTotal.innerText=currentWithdrawtTotal

  const balanceTotal=document.getElementById('balance-total');

  const previousbalancestring=balanceTotal.innerText
  const  previousbalance=parseFloat(previousbalancestring)

  const currentBalanceTotal= previousbalance-newWithDrawAmount

  balanceTotal.innerText=currentBalanceTotal

  withdrawField.value=''
})