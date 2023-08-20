import ContextProvider from "./context/context";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ['normal', 'italic'],
});

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ContextProvider>
          {children}
          <ToastContainer/>
          </ContextProvider>
      </body>
    </html>
  )
}
