import { Outlet } from "react-router-dom";
import Layout from "./Layout/MainLayout";

export default function IoTMain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
