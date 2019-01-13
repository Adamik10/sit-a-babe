export class User {
    id: string;
    name: string;
    surname: string;
    birth_date: Date;
    email: string;
    password: string;
    user_type: string;
    occupation: string;
    location: string;
    introduction: string;
    picture_location: string;
    children: string;
    deleted: boolean;
}

/*
  users = [
    {
      id: "rgsfsdfae5ef54ff",
      name: "Saska",
      surname: "Labusova",
      birth_date : "23/10/1994",
      email : "s.labus@gmail.com",
      password : "Password123",
      user_type : "sitter",
      occupation : "student",
      location: "Copemhagen",
      introduction : "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/saska.jpg"
    },
    {
      id: "wef1e51fw5e1fwe5f1",
      name: "Adam",
      surname: "Antal",
      birth_date: "10/10/1994",
      email: "a.antal@gmail.com",
      password: "Password123",
      user_type: "sitter",
      occupation: "student",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/adam.jpg"
    },
    {
      id: "5ef5ef5sf4qw5dfwq5fd",
      name: "Katarina",
      surname: "Kukavica",
      birth_date: "30/6/1995",
      email: "k.kukavica@gmail.com",
      password: "Password123",
      user_type: "sitter",
      occupation: "CEO of Rebel Penguin",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/katka.jpg"
    },
    {
      id: "5wef2awd6qwd4qw9fc4ffe",
      name: "Daddy",
      surname: "One",
      birth_date: "30/6/1995",
      email: "d.one@gmail.com",
      password: "Password123",
      user_type: "parent",
      occupation: "COO of Rebel Penguin",
      location: "Copemhagen",
      introduction: "The user hasn't filled out this field yet.",
      picture_location: "src/assets/img/users/daddy1.jpg",
      children: [
        {
          id: "89ew5va15d1qw1fd4s2ce4f",
          name: "Autumn",
          birth_date: "20/9/2006",
          location: "Copemhagen",
          introduction: "Autumn is very nice and calm.",
          allergies: "almonds",
          picture_location: "src/assets/img/users/baby1.jpg",
          babysitting_time: [
            {
              from: "4/12/2018 8:00",
              to: "4/12/2018 15:30"
            }
          ]
        }
      ]
    }
  ]; */
/*
onAddUser(userInfo: object) {
  this.users.push({
    id: this.generateId(),
    name: userInfo.name,
    surname: userInfo.surname,
    birth_date: userInfo.birth_date,
    email: userInfo.email,
    password: userInfo.password,
    user_type: userInfo.user_type,
    occupation: userInfo.occupation,
    location: userInfo.location,
    introduction: userInfo.introduction,
    picture_location: userInfo.picture_location
  })
}

private generateId() {
  return Math.round(Math.random() * 10000);
}
*/