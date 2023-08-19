import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

export const metadata = {
  title: "Beauty Queen || Your Trusted Online Shop",
};

export default function DashboardLayout({ children }) {
  return (
    <PrivateRoute>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </PrivateRoute>
  );
}