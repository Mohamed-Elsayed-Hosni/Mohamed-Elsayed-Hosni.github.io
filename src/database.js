import { faker } from '@faker-js/faker';

const books =[];
const users = [];
    for (let i = 0; i < 10; i++) {
    books.push({
        id: i+1,
        title : faker.book.title(),
        author: faker.book.author(),
        genre : faker.book.genre(),
    })
    }
    for (let i = 0; i < 10; i++) {
    users.push({
        id: i+1,
        firstname : faker.person.firstName(),
        lastname : faker.person.lastName(),
        gender: faker.person.sex(),
        country : faker.location.country()
    })
    }

    export {users, books}
