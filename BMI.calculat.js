 let prabin_mass=80;
 let prabin_height=1.6764;

 let ram_mass =60;
 let ram_height=1.76784;
BMI1= prabin_mass/(prabin_height*prabin_height);
BMI2=ram_mass/(ram_height*ram_height);
let isprabinHigherBMI=(BMI1>BMI2)?"Prabin BMI is greater than Ram":"NODERam BMI is greater than Prabin";
console.log(isprabinHigherBMI);