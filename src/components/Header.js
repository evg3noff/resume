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
				<div className ={styles.Header_main_container}>
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
				<div className = {styles.Header_wrapper_for_info}>
					<div className ={styles.Header_wrapper_for_info_component}>
						<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.0002 2.8335C9.18016 2.8335 2.8335 9.18016 2.8335 17.0002C2.8335 24.8202 9.18016 31.1668 17.0002 31.1668C24.8202 31.1668 31.1668 24.8202 31.1668 17.0002C31.1668 9.18016 24.8202 2.8335 17.0002 2.8335ZM23.5735 12.4668C23.361 14.7052 22.4402 20.1452 21.9727 22.6527C21.7743 23.7152 21.3777 24.0693 21.0093 24.1118C20.1877 24.1827 19.5643 23.5735 18.771 23.0493C17.5243 22.2277 16.816 21.7177 15.6118 20.9243C14.2093 20.0035 15.116 19.4935 15.9235 18.6718C16.136 18.4593 19.7627 15.1585 19.8335 14.861C19.8433 14.8159 19.842 14.7692 19.8297 14.7247C19.8173 14.6803 19.7943 14.6395 19.7627 14.606C19.6777 14.5352 19.5643 14.5635 19.4652 14.5777C19.3377 14.606 17.3543 15.9235 13.4868 18.5302C12.9202 18.9127 12.4102 19.111 11.9568 19.0968C11.4468 19.0827 10.4835 18.8135 9.761 18.5727C8.8685 18.2893 8.17433 18.1335 8.231 17.6377C8.25933 17.3827 8.6135 17.1277 9.27933 16.8585C13.416 15.0593 16.1643 13.8693 17.5385 13.3027C21.4768 11.6593 22.2843 11.376 22.8227 11.376C22.936 11.376 23.2052 11.4043 23.3752 11.546C23.5168 11.6593 23.5593 11.8152 23.5735 11.9285C23.5593 12.0135 23.5877 12.2685 23.5735 12.4668Z" fill="black"/>
						</svg>
						<span className = {styles.Header_wrapper_for_info_txt}><a className={styles.Header_custom_url}>evg3noff</a></span>
					</div>
					<div className ={styles.Header_wrapper_for_info_component}>
						<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.66683 28.3332C4.88766 28.3332 4.22089 28.056 3.6665 27.5016C3.11211 26.9472 2.83444 26.2799 2.8335 25.4998V8.49984C2.8335 7.72067 3.11116 7.05389 3.6665 6.4995C4.22183 5.94511 4.88861 5.66745 5.66683 5.6665H28.3335C29.1127 5.6665 29.7799 5.94417 30.3352 6.4995C30.8906 7.05484 31.1678 7.72162 31.1668 8.49984V25.4998C31.1668 26.279 30.8896 26.9463 30.3352 27.5016C29.7809 28.0569 29.1136 28.3341 28.3335 28.3332H5.66683ZM17.0002 18.4165L5.66683 11.3332V25.4998H28.3335V11.3332L17.0002 18.4165ZM17.0002 15.5832L28.3335 8.49984H5.66683L17.0002 15.5832ZM5.66683 11.3332V8.49984V25.4998V11.3332Z" fill="black"/>
						</svg>
						<span className = {styles.Header_wrapper_for_info_txt}><a href="mailto:evgenkleninoff@gmail.com" className={styles.Header_custom_url}>evgenkleninoff@gmail.com</a></span>
					</div>
					<div className ={styles.Header_wrapper_for_info_component}>
					<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.37833 15.2858C11.4183 19.295 14.705 22.5817 18.7142 24.6217L21.8308 21.505C22.2275 21.1083 22.78 20.995 23.2758 21.1508C24.8625 21.675 26.5625 21.9583 28.3333 21.9583C28.7091 21.9583 29.0694 22.1076 29.3351 22.3733C29.6007 22.6389 29.75 22.9993 29.75 23.375V28.3333C29.75 28.7091 29.6007 29.0694 29.3351 29.3351C29.0694 29.6007 28.7091 29.75 28.3333 29.75C21.946 29.75 15.8203 27.2127 11.3038 22.6962C6.78734 18.1797 4.25 12.054 4.25 5.66667C4.25 5.29094 4.39926 4.93061 4.66493 4.66493C4.93061 4.39926 5.29094 4.25 5.66667 4.25H10.625C11.0007 4.25 11.3611 4.39926 11.6267 4.66493C11.8924 4.93061 12.0417 5.29094 12.0417 5.66667C12.0417 7.4375 12.325 9.1375 12.8492 10.7242C13.005 11.22 12.8917 11.7725 12.495 12.1692L9.37833 15.2858Z" fill="black"/>
					</svg>
						<span className = {styles.Header_wrapper_for_info_txt}><a href="tel:+7(961)052-43-06" className={styles.Header_custom_url}>+7(961)052-43-06</a></span>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default Header;