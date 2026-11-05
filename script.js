class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    getAverage() {
        let sum = this.grades.reduce(function (acc, grade) {
            return acc + grade;
        }, 0);
        return sum / this.grades.length;
    }

    getGrade(avg) {
        if (avg >= 90) {
            return "A";
        } else if (avg >= 80) {
            return "B";
        } else if (avg >= 70) {
            return "C";
        } else if (avg >= 60) {
            return "D";
        } else if (avg >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    getResult() {
        let avg = this.getAverage();
        if (avg >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

let studentsList = [
    new Student(1, "menna", [88, 82, 91], 95),
    new Student(2, "mona", [44, 41, 48], 82),
    new Student(3, "youssef", [62, 58, 64], 72),
    new Student(4, "mariam", [47, 43, 45], 88),
];

console.log("===== تقرير الطلاب =====");
studentsList.forEach(function (student) {
    let avg = student.getAverage();
    console.log("الاسم: " + student.name);
    console.log("المتوسط: " + avg.toFixed(2));
    console.log("التقدير: " + student.getGrade(avg));
    console.log("النتيجة: " + student.getResult());
    console.log("--------------------");
});

let struggling = studentsList.filter(function (student) {
    let avg = student.getAverage();
    return avg >= 40 && avg <= 49;
});

let afterRafa = struggling.map(function (student) {
    let oldAvg = student.getAverage();
    return {
        name: student.name,
        oldAverage: oldAvg,
        newAverage: oldAvg + 5
    };
});

console.log("الطلاب المتعثرين بعد الرأفة:");
console.log(afterRafa);

let total = afterRafa.reduce(function (acc, student) {
    return acc + student.newAverage;
}, 0);

let finalAverage = 0;
if (afterRafa.length > 0) {
    finalAverage = total / afterRafa.length;
}

console.log("متوسط المتعثرين بعد الرأفة: " + finalAverage.toFixed(2));