// Created by CaosRebeld3

//imagenes

 

    var imagenes=new Array(


        ['img/uno.png'],
        
        ['img/dos.png'],
        

      );

    var contador=0;


    function rotarImagenes()

    {
     
      contador++

      document.getElementById("mages").src=imagenes[contador%imagenes.length][0];
      

    }


    onload=function()

    {

        rotarImagenes();

        setInterval(rotarImagenes,7000);

    }



 


 



 

