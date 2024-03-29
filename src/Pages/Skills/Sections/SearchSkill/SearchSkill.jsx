import styles from "./SearchSkill.module.scss";
import Search from "../../../../assets/images/skills/searchSkill.svg";
import Idea from "../../../../assets/images/skills/ideaSkill.svg";
const SearchSkill = () => {
  return (
    <section className={styles.search_skill}>
      <div className={styles.search_skill__wrap}>
        <div className={styles.search_skill_box}>
          <div className={styles.search_skill_img}>
            <img src={Search} alt="coming So" />
          </div>
          <div className={styles.search_skill_input}>
            <div className={styles.search_skill_input_head}>Search Skills</div>
            <div className={styles.search_skill_input_box}>
              <input type="text" placeholder="Coming Soon"></input>
            </div>
          </div>
        </div>
        <div className={styles.search_skill_match}>
          <div className={styles.search_skill_match_img}>
            <img src={Idea} alt="idea" />
          </div>
          <div className={styles.search_skill_match_valuation}>
            <div className={styles.search_skill_match_num}>
              Total Matched Skills 10
            </div>
            <div className={styles.search_skill_match_percentage}>
              Success Score: 95%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSkill;
