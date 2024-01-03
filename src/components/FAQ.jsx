import React, { useState } from 'react';

function FAQ() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    if (activeTab === tabIndex) {
      setActiveTab(null);
    } else {
      setActiveTab(tabIndex);
    }
  };

  const faqData = [
    {
      question: 'What is Bookmark?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
    },
    {
      question: 'How can I request a new browser?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
    },
    {
      question: 'What about other Chromium browsers?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
    },
  ];

  return (
    <section id="faq-accordion">
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-2xl m-8 mx-auto overflow-hidden">
          {faqData.map((item, index) => (
            <div key={index} className="py-1 border-b outline-none group" tabIndex={index + 1}>
              <div
                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
                onClick={() => toggleTab(index)}
              >
                <div className={`transition duration-500 ease group-hover:text-red-500 ${activeTab === index ? 'text-red-500' : ''}`}>
                  {item.question}
                </div>
                <div className={`transition duration-500 ease ${activeTab === index ? 'group-focus:-rotate-180 group-focus:text-red-500' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>
              <div className={`overflow-hidden transition duration-500 ${activeTab === index ? 'group-focus:max-h-screen max-h-0 ease' : 'max-h-0 ease'}`}>
                <p className="py-2 text-justify text-gray-400">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
