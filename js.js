function testUserText ( userText ) {
      if(userText.indexOf("<") == -1){
         return userText;
      }
      return userText = "as is";
}