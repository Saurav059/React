import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills(){
    return(
    <section id="Skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill="HTML" />
            <SkillList src = {checkMarkIcon} skill="CSS" />
            <SkillList src = {checkMarkIcon} skill="JavaScript" />
            <SkillList src = {checkMarkIcon} skill="TypeScript" />
            <SkillList src = {checkMarkIcon} skill="Python" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill="React" />
            <SkillList src = {checkMarkIcon} skill="Node" />
            <SkillList src = {checkMarkIcon} skill="Express" />
            <SkillList src = {checkMarkIcon} skill="Bootstrap" />
            <SkillList src = {checkMarkIcon} skill="Tailwind CSS" />    
        
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill="Git" />
            <SkillList src = {checkMarkIcon} skill="Wordpress" />
            <SkillList src = {checkMarkIcon} skill="AWS" />
            <SkillList src = {checkMarkIcon} skill="Docker" />
            <SkillList src = {checkMarkIcon} skill="Kubernetes" />    
        </div>
    </section>
    );
}
export default Skills;