const show = () =>{
    let sub1 = document.getElementById("sub1").value.trim();
    let sub2 = document.getElementById("sub2").value.trim();
    let sub3 = document.getElementById("sub3").value.trim();
    let sub4 = document.getElementById("sub4").value.trim();
    let sub5 = document.getElementById("sub5").value.trim();
  
    let mark1 = document.getElementById("mark1").value;
    let mark2 = document.getElementById("mark2").value;
    let mark3 = document.getElementById("mark3").value;
    let mark4 = document.getElementById("mark4").value;
    let mark5 = document.getElementById("mark5").value;
    
    if(sub1 == "" || sub2 == "" || sub3 == "" || sub4 == "" || sub5 == ""){
        alert("Subjects are missing");
    } else {
        if(mark1 > 100 || mark2 > 100 || mark3 > 100 || mark4 > 100 || mark5 > 100){
            alert("Marks is greater than 100");
        } else {
            let total = 0;
            if(mark1.length > 0 && mark2.length > 0 && mark3.length > 0 && mark4.length > 0 && mark5.length > 0){
                total = parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4) + parseInt(mark5);
               

                let perc;

                perc = (total/500)*100;
            
                alert(perc);
            
            } else {
                alert("Some marks are missing.");
            }
        }
    }

  
    
   

}