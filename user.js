class user {
  constructor(firstName, lasrName, age, location) {
    this.firstName = firstName;
    this.lasrName = lasrName;
    this.age = age;
    this.location = location;
  }
  static theOlder(userA, userB) {
    return userA.age > userB.age
      ? userA.firstName + " e' piu vecchio di " + userB.firstName
      : userB.firstName + " e' piu vecchio di " + userA.firstName;
  }
}

const user1 = new user("mario", "Rossi", 16, "roma");
const user2 = new user("giovanni", "bianchi", 26, "milano");

console.log(user.theOlder(user1, user2));
