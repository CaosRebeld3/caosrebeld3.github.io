// Created by CaosRebeld3

//imagenes

 

    var imagenes=new Array(

     
        ['img/lcdcuno.jpg'],
        
        ['img/lcdcdos.jpg'],
        

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

        setInterval(rotarImagenes,2000);

    }



 

