import users from "./Users.js";

// Task 1
// const getUserNames = users => {
//     return users.map(user => user.name);
// };
// console.log(getUserNames(users));
// ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']


// Task 2

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// TAsk 3

// const getUsersWithGender = (users, gender) => {
//     const newArr = users.filter(user => user.gender === gender);
//     const Arr = newArr.map(userName => userName.name);
//     return Arr;
// };
// console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// Task 4

// const getInactiveUsers = users => {
//     const inactiveUsers = users.filter(user => !user.isActive)
//     return inactiveUsers;
// };

// console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// Task 5

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email)
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Task 6

// const getUsersWithAge = (users, min, max) => {
//     return users.filter(user => user.age >= min && user.age <= max);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]



// Task 7

// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => total + user.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916


// Task 8

// const getUsersWithFriend = (users, friendName) => {
//     const newArr = users.filter(user => user.friends.find(friend => friend === friendName))
//     const Arr = newArr.map(userName => userName.name);
//     return Arr;
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Task 9

// const getNamesSortedByFriendsCount = users => {
//     const newArr = users.sort((user1, user2) => user1.friends.length - user2.friends.length);
//     const Arr = newArr.map(userName => userName.name);
//     return Arr;
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



// Task 10

// const getSortedUniqueSkills = users => {
//     const listSkills = users.reduce(function(skills, user) {
//         const filtered = user.skills.filter(skill => !skills.includes(skill))
//         skills.push(...filtered);
//         return skills;
//     }, []);
//     return listSkills.sort();
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]