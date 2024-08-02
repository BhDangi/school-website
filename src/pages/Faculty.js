// src/pages/Faculty.js
import React from 'react';
import '../styles/Faculty.css';


const facultyMembers = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualifications: 'M.Ed',
    experience: '20 years of experience in educational administration'
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualifications: 'M.Sc. in Physics',
    experience: '15 years of teaching experience'
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualifications: 'M.A. in English',
    experience: '10 years of teaching experience'
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualifications: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience'
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualifications: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience'
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    qualifications: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience'
  }
];

const Faculty = () => {
  return (
    <div>
      <header>
        <h1>Faculty</h1>
      </header>

      <section>
        {facultyMembers.map((member, index) => (
          <div key={index} className="faculty-member">
            <h2>{member.name}</h2>
            <p><strong>Position:</strong> {member.position}</p>
            <p><strong>Qualifications:</strong> {member.qualifications}</p>
            <p><strong>Experience:</strong> {member.experience}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faculty;
