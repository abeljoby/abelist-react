import React, { useEffect, useRef, useState } from 'react';
import '../pages/Home.css';
import imageMap from '../utils/images';

const ProjectTile = ({ project }) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const slidesRef = useRef([]);
    const dotsRef = useRef([]);

    const showSlides = (n) => {
        let newIndex = n;
        const totalSlides = project.images.length;

        if (n > totalSlides) newIndex = 1;
        if (n < 1) newIndex = totalSlides;

        setSlideIndex(newIndex);
    };

    const plusSlides = (n) => {
        showSlides(slideIndex + n);
    };

    const currentSlide = (n) => {
        showSlides(n);
    };

    useEffect(() => {
        // Initialize: set current slide visible
        slidesRef.current.forEach((slide, index) => {
            slide.style.display = (index + 1 === slideIndex) ? "block" : "none";
        });

        dotsRef.current.forEach((dot, index) => {
            dot.className = "dot" + ((index + 1 === slideIndex) ? " active" : "");
        });
    }, [slideIndex, project.images.length]);

    return (
        <article>
            <div className="project-header">
                <h2><a>.../{project.type}/{project.title}</a></h2>
                <a className="github-link" href={project.link} target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 97 97" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
                </a>
            </div>
            <div className="project-content">
                <div className="slideshow-container">
                    {project.images.map((name, index) => (
                        <div className="mySlides fade" key={index} ref={el => slidesRef.current[index] = el}>
                            <img alt={`Slide ${index}`} src={imageMap[name]}></img>
                        </div>
                    ))}
                    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    <div className="dots">
                        {project.images.map((_, index) => (
                            <span
                                key={index}
                                className="dot"
                                ref={el => dotsRef.current[index] = el}
                                onClick={() => currentSlide(index + 1)}
                            />
                        ))}
                    </div>
                </div>
                <p className="content-text">
                    {project.description}
                </p>
            </div>
        </article>
    );
}

export default ProjectTile;