import React, { useState } from 'react';

const LessonItem = ({ title }) => (
  <div className="flex items-center mt-2">
 <span className="text-gray-500 ml-2">&#9658;</span>
    <p className="text-gray-600">{title}</p>
  </div>
);

const AccordionItem = ({ title, lessons }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4" dir='rtl'>
      <div
        className="flex items-center justify-between p-5 rounded-md bg-white text-veryDarkBlue shadow-lg cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white  rounded-b-md">
          <ul className="ml-6">
            {lessons.map((lesson, index) => (
              <li key={index}>
                <LessonItem title={lesson.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CourseAccordion = () => {
  const courseParts = [
    {
      title: "الدرس الاول - المقدمة للكورس",
      


      lessons: [
        { title: "المقدمة - الجزء الأول" },
        { title: "لماذا التحكم بتكاليف المطعم - الجزء الثاني" },

      ],
    },
    {
      title: "الدرس الثاني بعد المقدمة - المخزون",
      lessons: [
        { title: "إدارة المخزون - الجزء الاول" },
        { title: "إدارة المخزون -حساب الهدر- الجزء الثاني" },
        
      ],
    },

    {
        title: "الدرس الثالث - تسعير المواد الغذائية",
        lessons: [
          { title: "مقدمة تسعير المواد الغذائية - الجزء الاول" },
          { title: "تكلفة المنتج - تسعير المنيو - الجزء الثاني" },
          { title: "مقدمة تسعير المواد نسبة تكلفة المواد الغذائية للمنتج- الجزء الثالث" },
          { title: "تكاليف المواد الغذائية للمطعم كامل- الجزء الرابع" },
          { title: "هامش المساهمة الجزء الخامس" },
          { title: "مثال هامش المساهمة الجزء السادس" },
          
        ],
      },

      
    {
        title: "الدرس الرابع - هندسة قائمة الطعام",
        lessons: [
          { title: "هندسة قائمة الطعام" },
         
          
        ],
      },

      {
        title: "الدرس الخامس - إدارة المشتريات",
        lessons: [
          { title: "إدارة المشتريات الجزء الاول" },
          { title: "إدارة المشتريات الجزء الجزء الثاني" },
          { title: "بار ليفل" },
          
        ],
      },
    // Add more course parts with lessons as needed
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {courseParts.map((part, index) => (
        <AccordionItem key={index} title={part.title} lessons={part.lessons} />
      ))}
    </div>
  );
};

export default CourseAccordion;