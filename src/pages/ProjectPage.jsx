import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import {projects} from '../data/projects';
import './ProjectPage.css';

const ProjectPage = () => {
    const { project } = useParams();

    return (
    <>
        <Header></Header>
        <body>
            <section>
                <h1>{project}</h1>
                <em>A collaborative platform for students and teachers to generate and conduct mock tests and quizzes</em>
                <img className="image" src="/home/focusprep1.jpg" alt="" />
                <h2>Tech stack used:</h2>
                <div className="tech">
                    <img title="Flutter" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                </div>
                <div className="tech">
                    <img title="Firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
                </div>
            </section>
        </body>
    </>
    );
};

export default ProjectPage;