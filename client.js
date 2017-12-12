class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber =employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class
var atticus = new Employee( "Atticus", "2405", "47000", 3 );
var jem = new Employee( "Jem", "62347", "63500", 4 );
var boo = new Employee( "Boo", "11435", "54000", 3 );
var scout = new Employee( "Scout", "6243", "74750", 5 );
var robert = new Employee( "Robert", "26835", "66000", 1 );
var mayella = new Employee( "Mayella", "89068", "35000", 2 );
var employees = [ atticus, jem, boo, scout, robert, mayella ];
console.log(employees);

function calculateEmployee( employee ){
  console.log( 'in calculateEmployee:', employee );
  var bonusPercentage = 0;
  // calculate reviewRating
  if( employee.reviewRating === 3 ){
    bonusPercentage = 0.04;
  } // end 3
  else if( employee.reviewRating === 4 ){
    bonusPercentage = 0.06;
  } // end 4
  else if( employee.reviewRating === 5 ){
    bonusPercentage = 0.10;
  } // end 5
  else{
    bonusPercentage = 0.0;
  } // end other
  console.log( 'bonus after review rating check:', bonusPercentage );

  // employee number
  if( employee.employeeNumber.length === 4 ){
    console.log( 'oldschool cat' );
    bonusPercentage += 0.05;
  } // end oldschool
  console.log( 'bonusPercentage:', bonusPercentage );
  // max salary
  if( Number( employee.annualSalary ) > 65000 ){
    console.log( 'too high salary, adjusting' );
    bonusPercentage -= 0.01;
  } // end salary check
  console.log( 'bonusPercentage:', bonusPercentage );
  // min/max bonus
  if( bonusPercentage > 0.13 ){
    bonusPercentage = 0.13;
  } // end bonus too high
  else if( bonusPercentage < 0.0 ){
    bonusPercentage = 0;
  } // end no negatives
  console.log( 'bonusPercentage:', bonusPercentage );
  // return an object
} // end calculateEmployee

calculateEmployee( scout );
