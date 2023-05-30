"use client"

import { useEffect, useState } from "react";
import "./styles.css";

export default function Page() {
    const [albums, setAlbums] = useState([]);

  useEffect(function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data));

  }, []);

  return (
    <div className="App">
      <h1 align="center">Albums</h1>
      <div className="grid-Container">
        {albums.map((album) => (
          <div key={album.id}>
            <p>{album.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
}