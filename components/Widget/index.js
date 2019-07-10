const Widget = ({ children, title, error }) => {
  return (
    <div className="widget" style={{ margin: '10px', width: '300px' }}>
      <div className="panel panel-info">
        <div className="panel-heading">
            {`${error ? '' : 'Weather in '}`}
            <b>{title}</b>
        </div>
        <ul className="list-group">{children}</ul>
      </div>
    </div>
  );
};

export default Widget;
