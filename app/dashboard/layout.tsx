import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function Layout({ children }: 
    Readonly<{
    children: React.ReactNode
  }>) {
  return (
    <div className="w-screen h-screen bg-orange-50">
      <Header />
      <div className="flex flex-row items-center">
        <Sidebar />
        {children}
      </div>
    </div>
    )
}