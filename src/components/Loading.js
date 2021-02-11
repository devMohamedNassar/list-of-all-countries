const loading = ({show, children}) => (
    show ? 
    <div className="loading"><div className="spinner"></div></div>
    : children
);

export default loading;