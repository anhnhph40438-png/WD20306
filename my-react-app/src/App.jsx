import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Nguyễn Hoàng Anh";
  const age = 20;

return (
    <div>
        <h1 className="text-3xl font-bold text-blue-600 text-center my-4">Xin chào {name}</h1>
        <p>Tuổi: {age + 1}</p>
        <p>Là học viên: {true ? "Có" : "Không"}</p>
    </div>
);  
}


export default App
