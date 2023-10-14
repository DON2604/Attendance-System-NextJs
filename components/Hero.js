"use client";
import Navbar from "./Navbar";
import React from "react";
import "../styles/Hero.css";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDoc,
  QuerySnapshot,
  onSnapshot,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";




export default function HeroSection() {
  const [items, setItems] = useState([
    //{ name: "Mrinmay", roll: 35 },
    //{ name: "Tamal", roll: 56 },
  ]);
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState({ name: "", roll: "" });

  //add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.roll !== "") {
      // setItems([...items, newItem]);
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        roll: newItem.roll,
      });
      setNewItem({ name: "", roll: "" });
    }
  };


  //read item from databsae
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubsribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);
    });
  }, []);

  //delete item from database
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <>
      <div className="zoomie">
        <h1>Attendance System</h1>
        <form>
          <input
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            type="text"
            className="nummy"
            placeholder="Enter name"
          />
          <input
            value={newItem.roll}
            onChange={(e) => setNewItem({ ...newItem, roll: e.target.value })}
            type="number"
            className="nummy"
            placeholder="Enter roll"
          />
          <button type="submit" className="butty" onClick={addItem}>
            +
          </button>
        </form>
        <ul>
          {items.map((items, id) => (
            <li key={id}>
              <div>
                <span className="tab">{items.name}</span>
                <span className="tab2">{items.roll}</span>
                <button className="tab3" onClick={() => deleteItem(items.id)}>X</button>
              </div>
            </li>
          ))}
        </ul>
        {items.length < 1 ? (
          ""
        ) : (
          <div>
            <span>Total</span>
            <span>{items.length}</span>
          </div>
        )}
      </div>
    </>
  );
}
