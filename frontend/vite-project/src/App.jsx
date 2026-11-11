import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Page/Homepage/Homepage';
import Courses from './Page/Courses/Courses';
import Course from './Page/Course/Course';
import Events from './Page/Events/Events';
import EventsGrid from './Page/EventsGrid/EventsGrid';
import Event from './Page/Event/Event';
import Contacts from './Page/Contacts/Contacts';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import BlogPost from './Page/BlogPost/BlogPost';
import SignIn from './Page/SignIn/SignIn';
import SignUp from './Page/SignUp/SignUp';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Homepage />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events-grid" element={<EventsGrid />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-post" element={<BlogPost />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
