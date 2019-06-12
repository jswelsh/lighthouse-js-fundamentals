const whichSchool  = function (age) {
  // Your code in here ...
  if (age < 13){
    console.log("Elementary School");
    return "Elementary School";
  } else if ((age >= 13) && (age <= 18)){
    console.log("Secondary School");
    return "Secondary School";
  } else 
    console.log("Lighthouse Labs");
  return "Lighthouse Labs";
}