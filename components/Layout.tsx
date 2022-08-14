interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <div className="h-screen flex items-center bg-slate-300 justify-center">
      {children}
    </div>
  );
}

export default Layout;
