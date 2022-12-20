import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./global/Sidebar";
import TopBar from "./global/Topbar";
import {
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Bar,
  Form,
  Line,
  Pie,
  Login,
  Geography,
  Calendar
} from "./pages";
import { ColorModeContext, useMode } from "./theme";
import { RequireAuth, useIsAuthenticated } from 'react-auth-kit'


function App() {
  const isAuthenticated = useIsAuthenticated();
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAuthenticated() && <Sidebar />}
          <main className="content">
            {isAuthenticated() && <TopBar />}
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={
                <RequireAuth loginPath={'/login'}>
                  <Dashboard />
                </RequireAuth>
              } />
              <Route path='/team' element={
                <RequireAuth loginPath={'/login'}>
                  <Team />
                </RequireAuth>
              } />
              <Route path='/contacts' element={
                <RequireAuth loginPath={'/login'}>
                  <Contacts />
                </RequireAuth>
              } />
              <Route path='/invoices' element={
                <RequireAuth loginPath={'/login'}>
                  <Invoices />
                </RequireAuth>
              } />
              <Route path='/form' element={
                <RequireAuth loginPath={'/login'}>
                  <Form />
                </RequireAuth>
              } />
              <Route path='/bar' element={
                <RequireAuth loginPath={'/login'}>
                  <Bar />

                </RequireAuth>
              } />
              <Route path='/pie' element={
                <RequireAuth loginPath={'/login'}>
                  <Pie />
                </RequireAuth>
              } />
              <Route path='/line' element={
                <RequireAuth loginPath={'/login'}>
                  <Line />
                </RequireAuth>
              } />
              <Route path='/geography' element={
                <RequireAuth loginPath={'/login'}>
                  <Geography />
                </RequireAuth>
              } />
              <Route path='/calendar' element={
                <RequireAuth loginPath={'/login'}>
                  <Calendar />
                </RequireAuth>
              } />
              <Route path='/*' element={<Login />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
