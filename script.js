function validate() {
    var txt;
    if (confirm("Confirm Logout?")) {
      window.location.href="Login.html";
    }
  }

  function emptycheck(){
    var ipt = document.getElementById('message-input').value;

    if (ipt==""){
    }
    else{
      sendMessage();
    }
  }

  function report(){
    var query = document.getElementById("message-input").value;
    alert("We have created an error report to alert the developers to add a response to the prompt : " + query);
  }

  function link(){
    var anchor = document.createElement('a');
    var link = document.createTextNode("https://www.google.com");
    anchor.appendChild(link);
    anchor.href = "https://www.google.com";
    anchor.style.color="white";
    anchor.style.padding = "5px";
    anchor.style.marginTop = "5px";
    anchor.style.maxWidth = "75px";
    anchor.style.display = "inline-block";
    document.getElementById("chat-body").appendChild(anchor);
  }

  function sendMessage(){
      var query = document.getElementById("message-input").value;
      var div = document.createElement("div");
      var p = document.createElement("p");
      p.style.background = "white";
      p.style.color = "black";
      p.style.padding = "10px";
      p.style.borderRadius = "5px";
      p.style.display = "inline-block";
      p.style.maxWidth = "60%";
      p.innerHTML = query;
      document.getElementById("chat-body").appendChild(div);
      document.getElementById("chat-body").appendChild(p);
      response();
    }

  function response(){
      var empty = false;
      var query = document.getElementById("message-input").value;
      var input = query.toLowerCase();
      var div = document.createElement("div");
      var p = document.createElement("p");
      p.style.background = "#2a2a2a";
      p.style.color = "white";
      p.style.padding = "10px";
      p.style.borderRadius = "5px";
      p.style.margin = "0";
      p.style.maxWidth = "75%";
      document.getElementById("chat-body").appendChild(div);
      document.getElementById("chat-body").appendChild(p);

      //Chatbot logic

      if (input.includes("how") && input.includes("are") && input.includes("you")){
        p.innerHTML = "I'm good! How are you doing today?";
      }

      else if(input.includes("Thank")){
        p.innerHTML = "You're Welcome!";
      }

      else if(input.includes("link")){
        p.innerHTML = "Here is a sample link. Click on the link below to go to a random website.";
        link();
      }

      else if(input.includes("you") && input.includes("cant")){
        p.innerHTML = "Oh. I'm sorry I couldn't be helpful :(";
      }

      else if(input.includes("your") && input.includes("name")){
        p.innerHTML = "I don't really have a name at this point :(";
      }

      else if(input.includes("you") && input.includes("name")){
        p.innerHTML = "I'd rather like to stay unnamed for professional reasons :)";
      }

      else if (input.includes("hi") || input.includes("hey")){
        p.innerHTML = "Hello there! How can I help you?";
      }

      else if (input.includes("hello")){
        p.innerHTML = "Hello there! How can I help?";
      }

      else if (input.includes("good") || input.includes("fine") || input.includes("great") || input.includes("too")){
        p.innerHTML = "That's great to hear!";
      }

      else if(input.includes("sad")){
        p.innerHTML = "Oh. I'm sorry to hear that. Please try talking to somebody about it. It can greatly help";
      }

      else if (input.includes("Its") && input.includes("ok")){
        p.innerHTML = "Thank you for understanding";
      }

      else{
        p.innerHTML = "I'm sorry I couldn't understand that. We are working to add a response for your prompt.";
        report();
      }

      document.getElementById("message-input").value = "";
    }
