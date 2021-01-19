import React, { useState } from "react";
import "./styles.css";

//database this can come from api or db
var emojiDictonary = {
  "😀": "Grinning Face",
  "🙄": "Face with Rolling Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "🤠": "Cowboy Hat Face",
  "🤣": "Rolling on the Floor Laughing"
};
var emojisWeKnow = Object.keys(emojiDictonary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictonary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>

      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> We Have these Emojis </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
