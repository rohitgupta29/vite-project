// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {User, MessageCircle, X, Heart } from 'lucide-react'
import React, {useState, useEffect} from 'react'





const ProfileSelector = () => (
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src="http://127.0.0.1:8080/018aafd0-6a0d-4f38-b2ca-45c0c9b13fa2.jpg" /> 
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
        <h2 className="text-3xl font-bold"> Foo Bar , 30</h2>
      </div>
      </div>
      <div className="p-4">
        <p className="text-grey-600 mb-4">I am a Software Engineer with 10 years of experience in the industry. I am looking for a new job.</p>
      </div>
      <div className="p-4 flex justify-center space-x-4">
      <button className="bg-red-500 rounded-full p4 text-white hover:bg-red-700"
        onClick={() => console.log("left")}> 
        <X size={24} /> </button>
        <button className="bg-green-500 rounded-full p-4 text-white hover:bg-green-700" 
          onClick={() => console.log("right")}>
        <Heart size={24} />
      </button>
      </div>
      </div>
);

const MatchesList = ({onSelectMatch}) => (
  <div className="rounded-lg shadow-lg p-4">
    <h2 className="text-2xl font-bold mb-4">Matches</h2>
    <ul>
    {[
      {id:1, firstName: "foo", lastName: "bar", imageUrl: "http://127.0.0.1:8080/02a70078-23bc-4a0b-8c8d-3a4d039e6d60.jpg"}, 
      {id:2, firstName: "boo", lastName: "far", imageUrl: "http://127.0.0.1:8080/02a70078-23bc-4a0b-8c8d-3a4d039e6d60.jpg"}, 
    ].map(match => (
      <li key={match.id} className="mb-2">
        <button 
        className="w-full hover:bg-grey-100 rounded flex item-center"
        onClick={onSelectMatch}
        >
        <img onScroll={match.imageUrl} className="w-16 h-16 rounded-full mr-3" />
        <span>
          <h3 className="font-bold">{match.firstName} {match.lastName}</h3>
        </span>
        </button>
      </li>
    ))
    }
    </ul>
  </div>

)

const ChatScreen = () => {

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {


    console.log(input); 
    setInput("");
    }
  }
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold nb-4"> Chat with Foo Bar</h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-2">  {
    ["Hi", 
    "How are you?",
    "How are you?",
    "How are you?"
  ].map((message, index) => (
    <div key={index}>
      <div className="mb-4 p-2 rounded bg-grey-100">{message}</div>
    </div>)

)
}
    </div>
    <div className="flex">
      <input type="text" 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border flex-1 rounded p-2 mr-2"
      placeholder="Type a message.." 
      /> 
      <button 
      className="bg-blue-500 text-white rounded p-2"
      onClick={handleSend}
      >Send</button>
    </div>
  </div>
)
};


function App() {

  const [currentScreen, setCurrentScreen] = useState('matches');

  const renderScreen = () => {  
    switch (currentScreen) {
    case 'profile': 
      return <ProfileSelector />;
    case 'matches':
      return <MatchesList onSelectMatch={() => setCurrentScreen('chat')} />;
    case 'chat':
      return <ChatScreen />;
  }
}

  return (
  <div className="max-w-md mx-auto p-4">
  <nav className="flex justify-between mb-4">
  <User onClick={() => setCurrentScreen("profile")} /> 
  <MessageCircle onClick={() => setCurrentScreen("matches")} />
  </nav>
    {renderScreen()}
  <ProfileSelector />
  {/* <MatchesList /> */}
  </div>
) 
 }

export default App

