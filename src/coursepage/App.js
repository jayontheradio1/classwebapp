// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [professorName, setProfessorName] = useState('Prof. Dennis Hood');
  const [courseName, setCourseName] = useState('Software Engineering CS 487');

  const [tasks, setTasks] = useState([
    { id: 1, description: 'Complete Assignment 1', completed: false, grade: null, taskType: 'assignment', taskDescription: 'Read the assigned chapter and submit a summary.' },
    { id: 2, description: 'Take Quiz 1', completed: true, grade: 85, taskType: 'quiz', taskDescription: 'Quiz on the topics covered in Week 1.' },
    // Add more tasks as needed
  ]);

  const markAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = (description, taskType, taskDescription) => {
    const newTask = {
      id: tasks.length + 1,
      description,
      completed: false,
      grade: null,
      taskType,
      taskDescription,
    };
    setTasks([...tasks, newTask]);
  };

  const handleFileUpload = (taskId, files) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, file: files[0] } : task
    );
    setTasks(updatedTasks);
  };

  const removeCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  const percentageCompleted =
    tasks.length === 0 ? 0 : (completedTasks.length / tasks.length) * 100;

  return (
    <div className="grid-container">
      <div className="title-card">
      <div className="professor-info">
          <div className="professor-picture">
            {/* Add your picture here */}
            <img src= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALIAvQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EADYQAQACAQIEAgYIBgMAAAAAAAABAgMEEQUSITFBUTNhcZHB8BMiIzJScoGxQ2KCodHxFDRC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAdEQEBAQEBAAMBAQAAAAAAAAAAAQIRMQMhUTIS/9oADAMBAAIRAxEAPwD6IA9TIAAAAAAAAE1ra1orWJmfLbdt4+G6nJ/45Pzy5bI7xpi1x8Hn+Lm29VY+MveXh2kwYpvlvfl9do/wn/cOVTj1bl5p5N+Xfpv32QtxAAAAAAAAAAAAAAAJiOaYisbzPRwTWtrzFaxMzM9oWel4TE7W1M/0R8Zbeg0VdLj5rdcsx1ny9UNxlrf4uZeMWLHhry4qRWPVDIDNQ19Xp6arHyZJmNp3jbzbAd4Oa1Wly6W+143pPa3gwOpyUrkrNbxvWe8SoNdo7aS+9frY7dpnw9rbO+os41AGiQAAAAAAAAAAABvcHxRk1nNPbHXf9fmf7NFZ8C9Nl/LH7p1/Ls9XUdgHnaAAAADDqcVc+G2O3aWZE9wcpO8T17+KHvJ6S3tl4eqMgAAAAAAAAAAABacD9Jm9kfFVrXgX3s3sj4o34qergBgsAAAAABymX0t/zShOX0t/zSh6p4yQAAAAAAAAAAAAueDafJii97x0vWJr1U0uk0E82jwz/JEM/kv0rLZAYrAAAAEdN/WkBzGpxXw5LReNpmZmPXG7E3+Nzvq6x5Uj95V70Z8ZgCnAAAAAAAAAABfcHvzaKtfGkzHx+KhbvCss49VWnNtW/SY/b59aNzsVPXQBHYYLAAAAAa+uy/QabJkjvFent8DnRS8Uvz63JMdq9P8ALUTM7zMzO8z4+aHojMAU4AAAAAAAAAAPeG048tMn4bRP93gco6ysxasTHaY6JVXCNZvEafJ3j7k+ceS1eezlagDgAAhV8cy7Upijvaeafn9Vne0VrNp7RG+7mdVnnU5bZZjpPb2LxPvqdViE+xDdAAAAAAAAAAAAAADd4RXfWxP4azPz71+p+C4Mlc1stqTFZptEzHfsuPB5937aTxICXQAGHWf9TN+S37OYdNqqzbTZq1jebUmNo9jm70nHbkyV5bR3iWvxo168iUNUgAAAAAAAAAAADLp8f0ufHTbfe0RMfPqeaUvkty46za3lELbhehy4ck5c0RE7dI33Rq8jsizjskjsMGgAAACFLxzHtnpkiPvRt+sf7XbV1+n/AOTp7Y42i3esz5/O7ubyuWfTnOnh2GfNps2Df6THMR+LvDA9DMAdAAAAAAAbOm0WbUTE1ptX8Vuy003DMGLa1/tb+du3uRdyOyKnBpc+edsVJ28bT0j3rLT8IpXa2e82nyr0hZxtERtAzu7VzLzix0xV5cdYrHlEPYIdAAAAAAAAeZiJ6THRp6jhunzbzEfR286dG8EtgoNRwzPj+tX7SseXf3NKYmJmJjaY7xLq2HPpsWeNslIn1+MNJ8n6m5cyLPU8JtXe2ntzfy27+9XZMd8duS9bVt5TDWWXxPHkSh1x7x475skUxV5rT5LnScMx4oi2b7S8e6GTh2ljT4YmfSX62lusNb6uQgBCgAAAAAAAAAAAAAAABizYceas1y0i1fWygKHXcOtp4nJh+tTxjxq0I7OrmIneJ8XO8R09dNqZry70nrX1Nca6izjpAGSwAAAAAAAAAAAAAAAAAAABU8d/gf1fAFZ9cvj/2Q==" alt="Professor" />
          </div>
          <div className="professor-name">{professorName}</div>
        </div>
        <div className="course-name">{courseName}</div>
        <div className="completion-circle">
          <div
            className="progress-circle"
            style={{
              background: `linear-gradient(90deg, green ${percentageCompleted}%, transparent ${percentageCompleted}%)`,
            }}
          ></div>
          <span className="percentage-label">{Math.floor(percentageCompleted)}%</span>
        </div>
      </div>
      <div className="todo-list">
        <div className="task-controls">
          <button onClick={() => removeCompletedTasks()}>
            Remove Completed
          </button>
          <div>
            <input
              type="text"
              placeholder="Add a new assignment..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addTask(e.target.value, 'assignment', 'New assignment description...');
                  e.target.value = '';
                }
              }}
            />
            <button
              onClick={() => addTask('Take Quiz', 'quiz', 'New quiz description...')}
            >
              Add Quiz
            </button>
          </div>
        </div>
        <div className="tasks">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? 'completed' : ''}`}
            >
              <div className="task-info">
                <span>{task.description}</span>
                <p>{task.taskDescription}</p>
                {task.grade !== null && (
                  <span className="grade">Grade: {task.grade}%</span>
                )}
                {task.file && (
                  <div className="file-info">
                    <strong>File:</strong> {task.file.name}
                  </div>
                )}
              </div>
              <div className="task-actions">
                {task.taskType === 'assignment' && (
                  <div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(task.id, e.target.files)}
                    />
                    <br />
                  </div>
                )}
                <button onClick={() => markAsCompleted(task.id)}>
                  {task.completed ? 'Uncomplete' : 'Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="percentage">
          <strong>Percentage of Course Completed:</strong>{' '}
          {Math.floor(percentageCompleted)}%
        </div>
      </div>
    </div>
  );
};

export default App;
