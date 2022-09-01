class User {
   constructor(name, username, email, password, profileImage) {
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
      this.profileImage = profileImage;
      this.createAt = new Date();
      this.updateAt = new Date();
   }
}


module.exports = new User()