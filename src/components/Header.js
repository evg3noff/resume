import styles from "./header.module.css"; 
import classNames from 'classnames';

const Header = () => (
	<>
		<div className = {styles.Header}>
			<div className={styles.Header_wrapper_for_position_content}>
				<div className = {styles.Header_menu}>
					<span className = {styles.Header_logo}>EVGEN</span><span className = {classNames(styles.Header_logo_color, styles.Header_logo)}>OFF</span>
					<ul className={styles.ul_Header}>
						<li className={styles.Header_menu_navigation}>About-me</li>
						<li className={styles.Header_menu_navigation}>Education</li>
						<li className={styles.Header_menu_navigation}>Hard-skills</li>
						<li className={styles.Header_menu_navigation}>Languages</li>
					</ul>
				</div>
				<div>
					<div className ={styles.Header_stub_background}></div>
				</div>
			</div>
			<div className ={styles.Header_showcase_body}>
				<div className = {styles.Header_showcase_title_content}>
					<div className = {styles.Header_showcase_title_mainText}>EVGENY-KLENIN</div>
					<div className = {styles.Header_showcase_title_subText}>Junior front-end developer</div>
					<div className = {styles.Header_showcase_title_carousel_points}>
						<div className = {styles.Header_showcase_title_carousel_point}></div>
						<div className = {classNames(styles.Header_showcase_title_carousel_point, styles.Header_showcase_title_carousel_point_active)}></div>
					</div>
					<div className = {styles.Header_showcase_title_descriptionTxt}>
					JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  JUTST YOUR TEXT  
					</div>
				</div>
				<div className = {styles.Header_showcase_title_content}>
					<img className = {styles.Header_showcase_title_portrait}/>
				</div>
			</div>
		</div>
	</>
);

export default Header;