import React from 'react';
import './dashboard.css'; // Make sure to create a Dashboard.css file
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // This data would normally be fetched from a backend
  const courses = [
    {
      id: 1,
      code: '10347.202410',
      name: 'Fall 2023 Computer Networks I: Fundamentals (CS-542-01)',
      instructor: 'Edward Chelebus',
      status: 'Open',
    },
    {
      id: 2,
      code: '10332.202410',
      name: 'Fall 2023 Database Organization (CS-425-02)',
      instructor: 'Gerald Balekaki',
      status: 'Open',
    },
    {
      id: 3,
      code: '14526.202410',
      name: 'Fall 2023 Software Engineering I (CS-487-04)',
      instructor: 'Dennis Hood',
      status: 'Open',
    },
    // Add two more courses
    {
      id: 4,
      code: '10101.202410',
      name: 'Fall 2023 Introduction to Programming (CS-101-01)',
      instructor: 'Jane Doe',
      status: 'Open',
    },
  ]

  return (
    <div className="dashboard">
      <aside className="sidebar">
        {/* Sidebar content */}
        <div className="sidebar-item">My Classroom</div>
        <div className="sidebar-item">Courses</div>
        {/* ... other sidebar items */}
      </aside>
      <main className="content">
        <header className="header">
          <h1>Courses</h1>
          {/* ... other header content */}
        </header>
        <div className="course-list">
          {courses.map((course) => (
            <div key={course.id} className="course">
              <div className="course-info">
                <div className="course-code">{course.code}</div>
                <div className="course-name">{course.name}</div>
                <div className="course-status">{course.status} | {course.instructor}</div>
              </div>
              <Link
            key={course.id}
            to={`/coursepage/${encodeURIComponent(course.name)}/${encodeURIComponent(course.instructor)}`}
          >
            <div className="sidebar-item">{course.name}</div>
          </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
