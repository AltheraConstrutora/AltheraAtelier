// src/features/contato/Contato.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contato.css";

export default function Contato() {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // envia o formulário (sendForm usa os campos name do form)
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="contato">
      <h1>Fale Conosco</h1>

      <form ref={formRef} onSubmit={handleSubmit} className="contato-form">
        <input type="text" name="from_name" placeholder="Seu nome" required />
        <input type="email" name="reply_to" placeholder="Seu email" required />
        <textarea name="message" placeholder="Sua mensagem" required></textarea>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {status === "success" && <p className="status success">✅ Mensagem enviada com sucesso!</p>}
      {status === "error" && <p className="status error">❌ Erro ao enviar. Tente novamente.</p>}
    </div>
  );
}