const btn = document.getElementById('btn')

const calculate = () => {
    let eng = document.getElementById('eng').value
    let mat = document.getElementById('mat').value
    let sst = document.getElementById('sst').value
    let hindi = document.getElementById('hindi').value
    let sci = document.getElementById('sci').value
    let  ObtainedGrades = parseFloat(eng)+parseFloat(mat)+parseFloat(sst)+parseFloat(hindi)+parseFloat(sci)
    let percentage = (ObtainedGrades/500)*100

    let grade = ""
    if (percentage<=100 && percentage>= 90.5)
    grade='A+'
    else if (percentage<=90.5 && percentage>= 80.5)
    grade='A'
    if (percentage<=80.4 && percentage>= 70.5)
    grade='B+'
    else if (percentage<=70.4 && percentage>= 60.5)
    grade='B'
    if (percentage<=60.4 && percentage>= 50.5)
    grade='C+'
    else if (percentage<=50.4 && percentage>= 40.5)
    grade='C'
    if (percentage<=40.4 && percentage>= 33)
    grade='D'
    else if (percentage<=32.9 && percentage>= 21)
    grade='E+'
    else if (percentage<= 20.9  && percentage>= 10)
    grade='E'
    else if (percentage<= 10  && percentage>= 0)
    grade='F+'
    else if (percentage<= 0  && percentage>= -100)
    grade='F'

    if(percentage>=50){
        let Result = document.getElementById('Result')
        Result.innerHTML=`You have obtained ${ObtainedGrades} out of 500 and ${percentage} out of 100.Well done you have "Passed" the exam with the grade of ${grade}`
    }else {
        let Result = document.getElementById('Result')
        Result.innerHTML=`You have obtained ${ObtainedGrades} out of 500 and ${percentage} out of 100.Well done you have "FAILED" the exam with the grade of ${grade}.`
    }
}


btn.addEventListener('click',calculate)

