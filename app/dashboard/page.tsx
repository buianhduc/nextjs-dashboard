// @ts-nocheck
import SideNav from '@/app/ui/dashboard/sidenav';


export default function Layout(props) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{props.children}</div>
    </div>
  );
}