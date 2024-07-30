import React from 'react'
import './UserCard.css'

interface User {
  id: number;
  name: string;
  profilePhoto: string;
  headline: string;
  about: string;
  experience: any[];
  education: any[];
  skills: string[];
  recommendations: any[];
  accomplishments: any;
  interests: string[];
}

const UserCard = ({ user } : any) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <h2 className="user-name">{user.name}</h2>
      </div>
      <div className="user-card-body">
        <p className="user-about">{user.about}</p>
        <p>Skills</p>
        <div className="user-skills">
          {user.skills.map((skill: any, index: any) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserCard
