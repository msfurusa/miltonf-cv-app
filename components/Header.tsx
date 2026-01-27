import React from "react";
import type { CV } from "@/types/cv";

export default function Header({ cv }: { cv: CV }) {
  return (
    <header className="site-header">
      <div>
        <h1 className="title">{cv.name}</h1>
        <p className="subtitle">{cv.title}</p>
        <p className="subtitle">{cv.location} · {cv.email} · {cv.phone}</p>
      </div>
      <div className="side-card">
        <p style={{margin:0,fontSize:14,color:'#0b1220'}}>Contact</p>
        <p style={{margin:'6px 0 0 0',color:'#475569'}}>{cv.email}<br/>{cv.phone}</p>
      </div>
    </header>
  );
}
