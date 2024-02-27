import { Outlet } from "react-router-dom";

const styles = {
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      margin: 0,
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
          'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
      WebkitFontSmoothing: 'antialiased',
    },
    code: {
      fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
    },
  };

export default function Root() {
    return (
        <>
            <div style={styles.body}>
                <Outlet />
            </div>
        </>
    );
}