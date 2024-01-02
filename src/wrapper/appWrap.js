const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const year = new Date().getFullYear();
    return (
      <div id={idName} className={`container ${classNames}`}>
        <div className='wrapper app_flex'>
          <Component />
        </div>
      </div>
    );
  };
export default AppWrap;
