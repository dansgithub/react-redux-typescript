import React from "react";

const PageWrapper: React.FC = props => {
  return (
    <main className="app">
      <section className="container">{props.children}</section>
    </main>
  );
};

export default PageWrapper;
