// import {useEffect} from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, 
Bar, Pie, Line,Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import {useStateContext} from './context/ContextProvider.jsx';


// Placeholder components (replace these later with actual ones or imports)
// const ECommerce = () => <div>ECommerce Page</div>;
// const Orders = () => <div>Orders Page</div>;
// const Employees = () => <div>Employees Page</div>;
// const Customers = () => <div>Customers Page</div>;
// const Kanban = () => <div>Kanban Page</div>;
// const Editor = () => <div>Editor Page</div>;
// const Calendar = () => <div>Calendar Page</div>;
// const ColorPicker = () => <div>Color Picker Page</div>;
// const Line = () => <div>Line Chart Page</div>;
// const Area = () => <div>Area Chart Page</div>;
// const Bar = () => <div>Bar Chart Page</div>;
// const Pie = () => <div>Pie Chart Page</div>;
// const Financial = () => <div>Financial Chart Page</div>;
// const ColorMapping = () => <div>Color Mapping Page</div>;
// const Pyramid = () => <div>Pyramid Chart Page</div>;
// const Stacked = () => <div>Stacked Chart Page</div>;
function App(){

   const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();

   

  return(
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
         <BrowserRouter>
              <div className = "flex relative dark:bg-[ #20232A]">
                     <div className = "fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                         <TooltipComponent content="Settings" position="Top">
                                <button type="button" className="text-3xl p-3
                                                                           hover : drop-shadow-xl
                                                                           hover:bg-[#F7F7F7] text-white"
                                                                           onClick={() => setThemeSettings(true)}
                                                                           style={{ background : currentColor,
                                                                            borderRadius: '50%'
                                                                           }}>
                                       <FiSettings />
                                </button>
                         </TooltipComponent>
                     </div>
                           {activeMenu ? (
                            <div className="w-72 fixed sidebar
                                                            dark:bg-[#33373E]
                                                            bg-white">
                                 <Sidebar/>
                            </div>
                            ) : (
                              <div className="w-0 dark:bg-[#33373E]">
                                 <Sidebar/>
                              </div>
                            )}
                            {/* this is for navigation bar */}
                          <div className ={
                                     `dark:bg-[#20232A] bg-[#FAFBFB]
                                       min-h-screen w-full ${activeMenu ? 
                                       'md:ml-72' : 'flex-2'
                                      }`
                                  }>
                                <div className="fixed md:static
                                                           bg-[#FAFBFB] dark:bg-[#20232A]
                                                              navbar w-full">
                                                 <Navbar/>
                              
                          </div>

                          <div>
                                 {themeSettings && <ThemeSettings/>}
                                 <Routes>
                                            {/* Dashboard */}
                                           <Route path="/" element={<Ecommerce/>}/>
                                           <Route path="/ecommerce" element={<Ecommerce/>}/>
                                     
                                          {/* pages  */}
                                          <Route path="/orders" element={<Orders/>}/>
                                          <Route path="/employees" element={<Employees/>}/>
                                          <Route path="/customers" element={<Customers/>}/>

                                          {/* Apps */}
                                          <Route path="/kanban" element={<Kanban/>}/>
                                          <Route path="/editor" element={<Editor/>}/>
                                          <Route path="/calendar" element={<Calendar/>}/>
                                          <Route path="/color-picker" element={<ColorPicker/>}/>

                                          {/* Charts */}

                                          <Route path="/line" element={<Line/>}/>
                                          <Route path="/area" element={<Area/>}/>
                                          <Route path="/bar" element={<Bar/>}/>
                                          <Route path="/pie" element={<Pie/>}/>
                                          <Route path="/financial" element={<Financial/>}/>
                                          <Route path="/color-mapping" element={<ColorMapping/>}/>
                                          <Route path="/pyramid" element={<Pyramid/>}/>
                                          <Route path="/stacked" element={<Stacked/>}/>
                                  </Routes>                    
                          </div>
              </div>
          </div>    
         </BrowserRouter>
    </div>
  );
}
export default App;