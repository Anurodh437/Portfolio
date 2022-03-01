import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  const colourTheme = {
    level0: "#ecd9fc",
    level1: "#c084f5",
    level2: "#b265f6",
    level3: "#b22ff4",
    level4: "#8400b8",
  };

  return (
    <div>
      <GitHubCalendar
        username="Anurodh437"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubStats;
