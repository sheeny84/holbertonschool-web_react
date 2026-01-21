interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Task 6
type Employee = Director | Teacher;

function isDirector(employee: Employee): boolean {
 if (employee instanceof Director) {
  return true;
 }
 return false;
}

/* type predicate?
function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined; // Runtime check for the property
} */

function executeWork(employee: Employee) {
  if (employee instanceof Director){
    console.log(employee.workDirectorTasks());
  }
  else {
    console.log(employee.workTeacherTasks());
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// Task 7
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string{
  return 'Teaching ' + todayClass;
}

console.log(teachClass('Math'));
console.log(teachClass('History'));