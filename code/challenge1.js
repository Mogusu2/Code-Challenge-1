function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function studentGradeGenerator() {
    const mark = parseInt(prompt('Enter the student mark (0-100):'));

    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert('Invalid input. Please enter a valid mark between 0 and 100.');
    } else {
        const grade = calculateGrade(mark);
        alert(`The student's grade is: ${grade}`);
    }
}

studentGradeGenerator();
