const header = props => (
    <header className="header">
        <div className="container">
            <div className="header__wrap">
                <h2 className="header__title">Where in the world?</h2>
                <div className="theme-mode">
                    <span className="theme-mode__icon">
                        <svg className="moon-outline-icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>dark mode</title><path d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
                        <svg className="moon-icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>light mode</title><path d='M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z'/></svg>
                    </span>
                    <span className="theme-mode__text">dark mode</span>
                </div>
            </div>
        </div>
    </header>
);

export default header;