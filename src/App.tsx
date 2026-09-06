import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./context/AuthProvider";
import { Approuter } from "./routes/Approuter";
import { LoaderProvider } from "./context/LoaderProvider";

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00A86B",
        },
      }}
    >
    <LoaderProvider>
        <ThemeProvider>
          <AuthProvider>
            <RouterProvider router={Approuter} />
          </AuthProvider>
        </ThemeProvider>
      </LoaderProvider>
    </ConfigProvider>
  );
};
