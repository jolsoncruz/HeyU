import { Routes, Route } from 'react-router-dom';

import './globals.css';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

import { Home, Explore, Saved, AllUsers, CreatePost, EditPost, PostDetails, Profile, UpdateProfile} from './_root/pages';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignInForm />}/>
                <Route path="/sign-up" element={<SignUpForm />}/>
            </Route>

            {/* Private Routes */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />}/>
                <Route path='/explore' element={<Explore />}/>
                <Route path='/saved' index element={<Saved />}/>
                <Route path='/all-users' index element={<AllUsers />}/>
                <Route path='/create-post' index element={<CreatePost />}/>
                <Route path='/update-post/:id' index element={<EditPost />}/>
                <Route path='/posts/:id' index element={<PostDetails />}/>
                <Route path='/profile/:id/*' index element={<Profile />}/>
                <Route path='/update-profile/:id/' index element={<UpdateProfile />}/>
            </Route>
        </Routes>
        <Toaster />
    </main>
  )
}

export default App