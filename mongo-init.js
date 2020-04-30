

db.auth('root', 'pass123');
db.createUser(
  {
      user: "root",
      pwd: "pass123",
      roles: [
          {
              role: "root",
              db: "BookstoreDb"
          }
      ]
  }
);

