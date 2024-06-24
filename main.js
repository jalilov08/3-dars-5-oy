// 1
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// function studentName(students) {
//   return students.map(student => ({
//     name: student.name,
//     age: student.age
//   }));
// }
// console.log(studentName(students));

// 2
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// function old(students) {
//   return students.reduce((max, student) => student.score > max ? student.score : max, 0);
// }
// console.log(old(students));

// 3
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Andrew', age: 23, score: 88, status: 'active' }
// ];
// const filterStudent= students => students.filter(({ name }) => name.startsWith('A'));
// console.log(filterStudent(students));

// 4
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// function studentNatija(students) {
//   let total = 0;
//   for (let student of students) {
//     total += student.score;
//   }
//   return total  students.length;
// }
// console.log(studentNatija(students));

// 5
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'John', age: 22, score: 92, status: 'inactive' },
//   { name: 'Bob', age: 23, score: 88, status: 'active' }
// ];
// const studentName= (students, name) => students.find(student => student.name === name);
// console.log(studentName(students, 'John'));

// 6
// const students = [
//   { name: 'Alice', age: 20, score: 80, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 85, status: 'active' }
// ];
// const natija= students.findIndex(student => student.score > 85);
// console.log(natija);

// 8
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 17, score: 88, status: 'active' }
// ];
// const studentResult= students.every(student => student.age > 18);
// console.log(studentResult);

// 9
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// const studentsBal= students.some(student => student.score > 90);
// console.log(studentsBal);

// 10
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// const name= (students) => {
//   return students.map(student => ({ ...student, name: student.name.toUpperCase() }));
// }
// console.log(name(students));

// 11
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// const res= (students) => students.map(student => student.score);
// console.log(res(students));

// 14
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' }
// ];
// const key= (students) => Object.keys(students[0]);
// console.log(key(students));

// 15
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// const clear= (students, name) => students.filter(student => student.name !== name);
// console.log(clear(students, 'Bob'));

// 16
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// const status= (students) => students.map(student => student.status);
// console.log(status(students));

// 19
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];
// const engYosh= (students) => students.reduce((youngest, student) => student.age < youngest.age ? student : youngest, students[0]);
// console.log(engYosh(students));