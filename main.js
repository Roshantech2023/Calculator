let outputScreen=document.getElementById("output-screen");

        function display(num){
            outputScreen.value += num;
        }
    //calculating user defined function for equal button
        function Calculate(){
            try{
                outputScreen.value = eval(outputScreen.value);
            }
            catch(err){
                alert("Invalid")
            }
        }
    //clear user defined function for cl button.this will use to clear the whole screen text on input box
        function Clear(){
            outputScreen.value="";
        }
    //del user defined function for button.this funcion is used to delet the text one by one 
        function del(){
            outputScreen.value=outputScreen.value.slice(0,-1);
        }