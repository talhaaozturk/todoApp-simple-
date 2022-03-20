import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const initialState = [
  {
    id: uuidv4(),
    title: "eve git",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "qwewqe",
    isCompleted: true,
  },
];

const App = () => {
  const [list, setList] = useState(initialState);
  const [newTitle, setNewTitle] = useState(""); //inputa yazılan değeri tutacağımız state

  const addElement = (title) => {
    if (newTitle.length > 1) {
      setList([...list, { id: uuidv4(), title: title, isCompleted: false }]);
      setNewTitle("");
    } else {
      window.alert("Lütfen eklenecek elemanı giriniz.");
    }
  };

  const complete = (id) => {
    setList(
      list.map((element) =>
        element.id === id
          ? {
              ...element,
              isCompleted: !element.isCompleted,
            }
          : element
      )
    );
  };

  const handleRemove = (id) => {
    const newList = list.filter((item) => !item.isCompleted);

    setList(newList);
  };

  return (
    <div className="container">
      <h1>YAPILACAKLAR LİSTESİ</h1>
      <div className="add-form">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          placeholder="Add to the list"
        ></input>
        <button onClick={() => addElement(newTitle)}>EKLE</button>
      </div>

      <div className="list">
        {list.map((item, index) => (
          <div
            onClick={() => complete(item.id)}
            key={index}
            className={item.isCompleted ? "completed" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button onClick={handleRemove} className="clean">
        Tamamlananları temizle
      </button>
    </div>
  );
};

export default App;
