import '../stylec.css'
function Contact() {
    return (
      <>
        <div>
        <p>WELCOME</p>
        <h1>We are at contact page</h1>
      </div>
      <div id="wrapper">
            <div id="menu">
                <p class="welcome">Welcome, <b></b></p>
                <p class="logout"><a id="exit" href="#">Exit Chat</a></p>
            </div>
 
            <div id="chatbox"></div>
 
            <form name="message" action="">
                <input name="usermsg" type="text" id="usermsg" />
                <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
            </form>
        </div>
        </>
    );
  }
  
  export default Contact;