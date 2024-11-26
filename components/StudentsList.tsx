import React from 'react';
import StudentCard from './StudentCard';

// We have a list of students 
const StudentsList: React.FC = () => {
  const students = [
    { name: 'Jalal uddin', age: 18, rollNumber: '00120839', studentClass: 'Monday 2-5pm' },
    { name: 'Imran Ahmed', age: 18, rollNumber: '00111322', studentClass: 'Monday 2-5pm' },
    { name: 'Hasnain', age: 19, rollNumber: '00120111', studentClass: 'Monday 2-5pm' },
  ];

  // This displays each student card
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Student ID Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            studentClass={student.studentClass}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
