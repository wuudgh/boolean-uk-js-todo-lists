/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
// */
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user 
let userInfo = ""

for(let i = 0; i < users.length; i++){
    userInfo = userInfo + users[i] . name + "\n"
    userInfo = userInfo + users[i].id + "\n"
    userInfo = userInfo + users[i] . address.city + "\n"
}

alert(userInfo)      
    
const user_id = prompt ("Enter an ID:");
 let todoList = " ";

  for (i = 0 ; i < todos.length; i++){
      if (todos[i].userId == user_id) {
          todoList += todos[i].title + "\n;"
      }
  }

alert(todoList);