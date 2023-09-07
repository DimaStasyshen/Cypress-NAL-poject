import { faker } from "@faker-js/faker";

export const generateUserData = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number("+1415#######"),
  password: "12345",
  existingEmail: "poulpogba@gmail.com",
});