import React, { useState } from "react";
import "../styles/ProductForm.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    alert("Thanks — this is a demo contact form. Replace with your endpoint if needed.");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="page container">
      <h2>Contact</h2>
      <form className="form" onSubmit={submit}>
        <input required name="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required name="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea required name="message" placeholder="Message" rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
