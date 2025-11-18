// PART ONE: UNDERSTANDING AND CREATING OBJECTS

let student = {
    name: "John Student",
    age: 34,
    enrolled: true,
    courses: ["CPAN-133", "CPAN-113", "CPAN-134", "CPAN-111", "CPAN-116"],
    display: function() {
        console.log(`
                Student name: ${this.name}\n
                 Student age: ${this.age}\n
            Student enrolled: ${this.enrolled}\n
             Student courses: ${this.courses}
            `)
    }
}

console.log(student.name)
console.log(student.age)
student.display()


// PART TWO: WORKING WITH JSON

// convert to json:
let studentJSON = JSON.stringify(student)
console.log(studentJSON)