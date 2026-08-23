import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Tech: {project.tech}</p>
      <a href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  );
};

export default ProjectCard;