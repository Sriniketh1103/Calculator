


function calculate(val){
    let dispval = document.querySelector('.display').value;
    
    

    

    if (val === 'AC'){
 
        document.querySelector('.display').value = `0`
        document.querySelector('.result').innerHTML = ``
        document.querySelector('.resultscreen').classList.remove('result-style')
        
        
    }
   

    else if(val==='C'){
        if(dispval != ``){
            document.querySelector(".display").value=(dispval.slice(0,dispval.length-1))
            dispval = document.querySelector(".display").value
            if(dispval.length===0){
               
                document.querySelector(".display").value = `0`
                document.querySelector('.resultscreen').classList.remove('result-style')
            }
        }
        
        
    }
    else if (val=== '='){
       
        document.querySelector('.result').innerHTML = (eval(document.querySelector('.display').value))
        document.querySelector('.display').value=``
        document.querySelector('.resultscreen').classList.add('result-style')

       


    }
    
    else {
        if(  document.querySelector('.display').value === `0`){
         document.querySelector('.display').value = val
         document.querySelector(".result").innerHTML= eval( document.querySelector('.display').value) 
         document.querySelector('.resultscreen').classList.remove('result-style')
        }
       
         else{
        //   document.querySelector('.result').innerHTML = ``
          document.querySelector('.display').value += val
          document.querySelector('.resultscreen').classList.remove('result-style')
          document.querySelector(".result").innerHTML= eval( document.querySelector('.display').value)
          dispval = document.querySelector(".result").innerHTML
         
          
          
          
         }
  
      }

    

}

// function result(){
//     document.querySelector(".key-result").innerHTML= eval( document.querySelector('.display').value)
//   }

function toggledark(){
    
    if(document.querySelector('.light-dark').value === 'light'){
    document.querySelector('.img-lightdark').src = "images/light.png"
    document.querySelector('.light-dark').value = 'dark'

    document.querySelector('.container').classList.add('darkcontainer');
    let b= document.querySelectorAll('.light-button')

    for (let elem of b){
        elem.classList.add('dark-button')
    }
    document.querySelector(".light-dark").classList.add("darkcont")

    }
    else{
        document.querySelector('.img-lightdark').src = "images/moon.png"
        document.querySelector('.light-dark').value = 'light'
        document.querySelector('.container').classList.remove('darkcontainer');
        document.querySelector('.light-button').classList.remove("dark-button");
        let b= document.querySelectorAll('.light-button')

        for (let elem of b){
            elem.classList.remove('dark-button')
        }
        document.querySelector(".light-dark").classList.remove("darkcont")

        
        
        }


}


