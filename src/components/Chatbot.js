// // import React, { Component } from 'react';
// // import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
// // import 'react-chat-widget/lib/styles.css';

// // class Chatbot extends Component {
// //   handleNewUserMessage = (newMessage) => {
// //     // Send the user message to the Flask backend API
// //     fetch('/api/chatbot', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ message: newMessage }),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const chatbotResponse = data.response;
// //         addResponseMessage(chatbotResponse);
// //       });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <Widget
// //           handleNewUserMessage={this.handleNewUserMessage}
// //           title="Chatbot"
// //         />
// //       </div>
// //     );
// //   }
// // }

// // export default Chatbot;
// import React, { Component } from 'react';

// class Chatbot extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//       userInput: '',
//     };
//   }

//   handleUserInput = (event) => {
//     this.setState({ userInput: event.target.value });
//   };

//   handleSendMessage = () => {
//     const { userInput, messages } = this.state;
//     const newMessages = [...messages, { type: 'user', text: userInput }];
  
//     // Send the user's message to the backend API
//     fetch('/api/chatbot', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ message: userInput }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Add the chatbot's response to the messages
//         newMessages.push({ type: 'bot', text: data.response });
//         this.setState({ messages: newMessages, userInput: '' });
//       });
//   };
  

//   render() {
//     const { messages, userInput } = this.state;
//     return (
//       <div className="chatbot">
//         <div className="chatbot-messages">
//           {messages.map((message, index) => (
//             <div key={index} className={`message ${message.type}`}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div className="chatbot-input">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={userInput}
//             onChange={this.handleUserInput}
//           />
//           <button onClick={this.handleSendMessage}>Send</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Chatbot;


// import React, { Component } from 'react';

// class Chatbot extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//       userInput: '',
//     };
//   }

//   handleUserInput = (event) => {
//     this.setState({ userInput: event.target.value });
//   };

//   handleSendMessage = () => {
//     const { userInput, messages } = this.state;
//     const newMessages = [...messages, { type: 'user', text: userInput }];

//     // Send the user's message to the backend API
//     fetch('http://localhost:5000/api/chatbot', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ message: userInput }),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Add the chatbot's response to the messages
//     newMessages.push({ type: 'bot', text: data.response });
//     this.setState({ messages: newMessages, userInput: '' });
//   })
//   .catch((error) => {
//     console.error('Fetch error:', error);
//     // Handle the error, e.g., show an error message to the user
//   });

//   };

//   render() {
//     const { messages, userInput } = this.state;
//     return (
//       <div className="chatbot">
//         <div className="chatbot-messages">
//           {messages.map((message, index) => (
//             <div key={index} className={`message ${message.type}`}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div className="chatbot-input">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={userInput}
//             onChange={this.handleUserInput}
//           />
//           <button onClick={this.handleSendMessage}>Send</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Chatbot;







import React, { Component , useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessages = [...messages, { type: 'user', text: userInput }];

    fetch('http://localhost:3000/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userInput }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        newMessages.push({ type: 'bot', text: data.response });
        setMessages(newMessages);
        setUserInput('');
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        // Handle the error, e.g., show an error message to the user
      });
  };

  // chatbot.js

// Function to send a message to the server and update the chat
const sendMessageToServer = async (message) => {
  try {
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data; // This will be the product information or the response from the chatbot.
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle the error, e.g., show an error message to the user
  }
};

// Example usage:
const userMessage = 'Tablets'; // Replace with the user's input
sendMessageToServer(userMessage)
  .then((data) => {
    // Handle the response data, which contains product information or chatbot response.
    console.log(data);
    // Update your chat interface with the response.
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle the error, e.g., display an error message to the user.
  });


  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;



