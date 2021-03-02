import styles from '../styles/components/AsideMenu.module.css'

export function AsideMenu() {
  return (
    <aside className={styles.menu}>
      <div className={styles.logo}>
        <img src="/logo-icon.svg" alt="logo" />
      </div>

      <div className={styles.options}>
        <a>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" stroke="#5965E0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 29.3333V16H20V29.3333" stroke="#5965E0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0001 19.9999C21.1547 19.9999 25.3334 15.8212 25.3334 10.6666C25.3334 5.51193 21.1547 1.33325 16.0001 1.33325C10.8454 1.33325 6.66675 5.51193 6.66675 10.6666C6.66675 15.8212 10.8454 19.9999 16.0001 19.9999Z" stroke="#5965E0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.9466 18.5199L9.33325 30.6666L15.9999 26.6666L22.6666 30.6666L21.0533 18.5066" stroke="#5965E0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

      <div className={styles.darkTheme}>
        <button type="button">
          <svg aria-hidden="true" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#5965E0" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"></path>
          </svg>
        </button>
      </div>
    </aside >
  );
}