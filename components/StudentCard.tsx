import React from 'react';

// This is the "blueprint" for our card, explaining what information it needs
interface StudentProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
}

// This builds the card using the "blueprint"
const StudentCard: React.FC<StudentProps> = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto my-4">
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-700">Age: {age}</p>
      <p className="text-gray-700">Roll Number: {rollNumber}</p>
      <p className="text-gray-700">Class: {studentClass}</p>
    </div>
  );
};

export default StudentCard;
