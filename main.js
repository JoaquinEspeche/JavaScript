


function despedida(){
   alert("Espero que su problema se haya solucionado")
}

alert ("Bienvenido a tu medico virtual");
let consulta;
do{
   let consulta=parseInt(prompt("Indique su malestar e selecione el numero segun corresponda \n1-Dolor de cabeza \n2-Dolor de pansa\n3-Dolor muscular \n4-Diarrea \n5-Mocos"));
   if (consulta==0){
   break;
   }
   console.log (consulta);

   switch (consulta){
       case 1:
           alert ("ha elegido:'Dolor de cabeza'");
           if (consulta==1);
           alert("Es un dolor o molestia en la cabeza, el cuero cabelludo o el cuello. Las causas graves de los dolores de cabeza son raras. La mayoría de las personas con dolores de cabeza se pueden sentir mucho mejor haciendo cambios en su estilo de vida, aprendiendo formas de relajarse y, algunas veces, tomando medicamentos.")
           despedida();
           break;
       case 2:
           alert ("elegiste:'Dolor de pansa'");
           if (consulta==2);
           alert("Es más probable que este tipo de dolor sea un signo de un problema en un órgano, como el apéndice, la vesícula biliar o el estómago. Dolor tipo calambre: la mayoría de las veces este dolor no es grave y es más probable que se deba a gases y distensión. Con frecuencia va seguido de diarrea.")
           despedida();
           break;
       case 3:
           alert ("elegiste:'disminucion de Dolor muscular'");
           if (consulta==3);
           alert ("Cuando se presenta dolor muscular por sobrecarga o lesión, descanse la parte afectada del cuerpo y tome paracetamol o ibuprofeno. Aplique hielo dentro de las primeras 24 a 72 horas posteriores a la lesión para reducir la inflamación y el dolor.");
           despedida();
           break
       case 4:
           alert ("elegiste:'Diarrea'");
           if (consulta==4);
           alert("Las enfermedades diarreicas son infecciones del tracto digestivo ocasionadas por bacterias, virus o parásitos, cuyo principal síntoma es la diarrea. Esto es, la deposición 3 o más veces al día de heces sueltas o líquidas.");
           despedida();
           break;
       case 5:
           alert ("elegiste:'Mocos'");
           if (consulta==5);
           alert("Por lo general, el cuerpo produce una mucosidad más espesa cuando tiene un resfriado (causado por virus) o una infección sinusal (causada por bacterias). La mayoría de los problemas de mucosidad son temporales. Sin embargo, producir demasiada mucosidad contribuye a la aparición de algunas afecciones graves.");
           despedida();
           break;
   }
   consulta=prompt ("si desea salir de menu precione el numero 0 si desea volver al menu principal precione cualquier letra")
}while(consulta!=0)
