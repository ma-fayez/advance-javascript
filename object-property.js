const student = [
    { id: 1, Name: 'fayez' },
    { id: 2, Name: 'Rahim' },
    { id: 3, Name: 'Kamal' },
    { id: 4, Name: 'Salimullah' },
];
const output = [];

// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const final = element.Name;
//     output.push(final);

// }
const names = student.map(s => s.Name);

//It's find one object like as id form array list
const ids = student.map(s => s.id);

// It's find some array to maintain this condition
const Filter = student.filter(s => s.id > 2);

// It's just find one element from array
const Find = student.find(s => s.id > 2);

console.log(Find);