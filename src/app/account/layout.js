import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AccountSidebar from "@/components/AccountSidebar/AccountSidebar";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

export const metadata = {
  title: "Beauty Queen || Your Trusted Online Shop",
};

export default function AccountLayout({ children }) {
  return (
    <PrivateRoute>
      <Header />
      <main className="container min-h-[70vh] py-4">
        <div className="flex gap-4">
            <AccountSidebar />
            <div className="accountContent">{children}</div>
        </div>
      </main>
      <Footer />
    </PrivateRoute>
  );
}