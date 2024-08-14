import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header>
        <nav>navbar</nav>
      </header>
      <section>
        {children}
        TODO: ADD Navbar and Dark mode
      </section>
      <footer className="back">footer</footer>
    </main>
  );
}
