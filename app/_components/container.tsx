import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section className='border-r border-b border-black'>{children}</section>
  );
};

export default Container;
