
const selectTip = document.getElementsByClassName("btn") 
const customBtn= document.getElementById("custom-btn")
const resetBtn = document.querySelector(".reset-btn")

let PerPerson = document.getElementsByClassName("total")
   
        function calculating(){
                for(let i = 0 ; i<5 ;i++){
        
                    selectTip[i].addEventListener("click",function(){
                       
                        const toPay = parseFloat(document.getElementsByClassName("to-pay")[0].value)
                        const customPc=parseFloat( document.getElementsByClassName("custom-pc")[0].value)
                        

                        let perCentPlus= toPay * parseFloat(selectTip[i].value)/100
                    
                        PerPerson[0].textContent =`$ ${perCentPlus / customPc}`
        
                        PerPerson[1].textContent = `$ ${(toPay + perCentPlus) / customPc}`    
                        
                    })
                    resetBtn.addEventListener("click",reseting)
                }
               const customBtn= document.getElementById("custom-btn")
               customBtn.addEventListener("click",function(){
                   let toPay = parseFloat(document.getElementsByClassName("to-pay")[0].value)
                   let customPc=parseFloat( document.getElementsByClassName("custom-pc")[0].value)
                   if (customPc >0){
                    let perCentPlusCustom = toPay * parseFloat(customBtn.value)/100
                   PerPerson[0].textContent =`$ ${  perCentPlusCustom / customPc
                   } `
                   PerPerson[1].textContent = `$ ${(toPay + perCentPlusCustom) / customPc}`
                }else if (customPc === 0){
                    const warning= document.getElementById("warning")
                    warning.textContent = " Darf nicht NULL sein"
                    const border = document.getElementById("icon-input-all")
                    border.classList.add("orange-border")

                }
               })
           
                
            }
        function reseting(){
            
            PerPerson[0].textContent =`--`
            PerPerson[1].textContent = `--`
            document.getElementsByClassName("to-pay")[0].value=""
            document.getElementsByClassName("custom-pc")[0].value=""
            const customBtn= document.getElementById("custom-btn").value=""
            warning.textContent = " "
            const border = document.getElementById("icon-input-all")
            border.classList.remove("orange-border")
        }        

     calculating()
     
    