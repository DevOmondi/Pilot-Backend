 let Scores = [
   {name:'Collins', score:98, gender: 'Male'},
   {name:'Charles', score:96, gender: 'Male'},
   {name: 'James', score: 92, gender: 'Male'},
   {name: 'Peter', score: 88, gender: 'Male'},
   {name:'Tems', score: 86, gender: 'Female'},
 ]

 const students = Scores.map((Score) =>{
   return Score.name
 })

 console.log(students)

 const belowPassmark = Scores.filter((Score) =>{
   return Score.score <= 90
 })

 console.log(belowPassmark)

 const femaleStudent = Scores.find((Score) =>{
   return Score.gender === 'Female'
 })

 console.log(femaleStudent)

 const totalScores = Scores.reduce((currentMark,Score) =>{
       return Score.score + currentMark
 },0) 

  const averagePerfomance = totalScores/Scores.length;
  console.log(averagePerfomance) 

