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
  Faq,
  Geography,
  Calendar
} from "./pages";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/invoices' element={<Invoices/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/line' element={<Line/>}/>
              <Route path='/geography' element={<Geography/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
