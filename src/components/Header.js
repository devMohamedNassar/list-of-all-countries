const isDarkMode = () => {
    if(localStorage.getItem('theme-mode') === 'dark'){ 
        document.body.classList.add('dark-mode');
    }
};
isDarkMode();
const toggleDarkMode = () => {
    const mode = localStorage.getItem('theme-mode');
    if(mode === 'dark'){
        localStorage.setItem('theme-mode', 'light');
        document.body.classList.remove('dark-mode');
    } else {
        localStorage.setItem('theme-mode', 'dark');
        document.body.classList.add('dark-mode');
    }
};

const header = props => (
    <header className="header">
        <div className="container">
            <div className="header__wrap">
                <h2 className="header__title">Where in the world?</h2>
                <div className="theme-mode" onClick={toggleDarkMode}>
                    <svg className="theme-mode__icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>dark mode</title><path d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/></svg>
                    <span className="theme-mode__text">dark mode</span>
                </div>
            </div>
        </div>
    </header>
);

export default header;