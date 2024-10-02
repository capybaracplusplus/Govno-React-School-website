import { useState } from 'react';
import './Accordion.css';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{question}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

const Accordion: React.FC = () => {
  const faqs = [
    { question: 'Question 1', answer: 'Answer to question 1' },
    { question: 'Question 2', answer: 'Answer to question 2' },
    { question: 'Question 3', answer: 'Answer to question 3' },
    { question: 'Question 4', answer: 'Answer to question 4' },
    { question: 'Question 5', answer: 'Answer to question 5' },
    { question: 'Как к нам поступить', answer: 'Школа слишком крутая поступить смогут лишь единицы..' },
  ];

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Accordion;