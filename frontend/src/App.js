import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProtectedScreen from './screens/ProtectedScreen'

import Header from './components/Header'
import ProfileScreen from './screens/ProfileScreen'
import NotFound from './screens/NotFound'

function App() {
  return (
    <Router>
        <div className="flex flex-col min-h-screen justify-between bg-blue-500">
            <Header />
            <main className="mb-auto">      
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />
                    <Route path="/protectedScreen" element={<ProtectedScreen />} />
                    <Route path="/updateProfile" element={<ProfileScreen />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    </Router>
  );
}

export default App;
