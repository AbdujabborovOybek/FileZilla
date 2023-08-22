import React, { memo } from "react";
import { Outlet } from "react-router-dom";

export const Layout = memo(() => {
  return (
    <main className="main">
      <aside>
        <h1>aside</h1>
      </aside>
      <section>
        <Outlet />
      </section>
    </main>
  );
});
