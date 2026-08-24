const HomePage = () => {
    return (
        <div>
            <h1>Hi, I'm Callum</h1>
            <p>Welcome to my Portfolio! This is a showcase of everything I have learned so far on the step8up bootcamp course.</p>
            <p>
                Please feel free to explore my projects and connect with me on social media:
                <a href="https://github.com/CallumeEdwards777" target="_blank" rel="noreferrer">GitHub</a>
                {' - '}
                <a href="https://www.linkedin.com/in/callum-edwards-1b0a4b1b3/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
            <h2> A Few Highlights</h2>
            <div className="highlights">
                <img src="week1.png" alt="Project 1" />
                <img src="week5.png" alt="Project 2" />
                <img src="week8.png" alt="Project 3" />

            </div>
        </div>
    );
};

export default HomePage;