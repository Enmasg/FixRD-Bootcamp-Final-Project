


import React, {useState} from "react";
import './FQA.css';

interface Pregunta {
  question: string;
  answer: string;
}

const FAQ_DATA: Pregunta[] = [
  {
    question: "¿Cómo sé si un técnico está calificado?",
    answer:
      "Todos los técnicos en FixRD pasan por un proceso de verificación que incluye revisión de antecedentes, validación de licencias, seguro y evaluaciones de habilidades.",
  },
  {
    question: "¿Qué hago si no estoy satisfecho con el servicio?",
    answer:
      "Ofrecemos garantía de satisfacción. Si no estás conforme, puedes contactar al soporte dentro de las primeras 24 horas para recibir solución o reembolso.",
  },
  {
    question: "¿Cuánto cuestan los servicios generalmente?",
    answer:
      "Los precios varían según el tipo de servicio, la complejidad y la ubicación. La mayoría de los técnicos cobran entre RD$ 75–150 por hora, o tarifas fijas para ciertos trabajos.",
  },
  {
    question: "¿Puedo solicitar servicios de emergencia?",
    answer:
      "Sí. Muchos técnicos ofrecen servicios de emergencia 24/7 para problemas como fugas, fallas eléctricas o averías críticas. Pueden aplicar tarifas adicionales.",
  },
  {
    question: "¿Cómo puedo convertirme en técnico dentro de FixRD?",
    answer:
      "Solo debes enviar tus credenciales, licencias y seguro para verificación. Cuando seas aprobado, podrás aceptar trabajos y administrar tus ingresos desde el panel técnico.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
  
    <section className="faq-section">
      <h1 className="faq-title">
        Frequently Asked <span>Questions</span>
      </h1>
      <p className="faq-subtitle">
        Got questions? We've got answers. Here are the most common questions about FixRD and our services.
      </p>

      <div className="faq-container">
        {FAQ_DATA.map((item, i) => (
          <div
            key={i}
            className={`faq-card ${openIndex === i ? "open" : ""}`}
            onClick={() => toggle(i)}
          >
            <div className="faq-question">
              <p>{item.question}</p>

              <span className={`faq-arrow ${openIndex === i ? "rotate" : ""}`}>
                ▼
              </span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}