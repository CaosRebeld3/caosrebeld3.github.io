// created by Yipi Reb3l

//imagenes

 

    var imagenes=new Array(

        ['img/one.png'],

        ['img/two.png'],
        
        ['img/three.png'],
        

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

        setInterval(rotarImagenes,5000);

    }



 


 



 

