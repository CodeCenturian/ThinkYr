import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import NoteCard from '../components/NoteCard';
import axios from 'axios';
import toast from 'react-hot-toast';
import NotesNotFound from '../components/NoteNotFound';


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchnotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        console.log(res.data);
        setNotes(res.data.notes);
      } catch (error) {
        console.log('The Error is:', error);
        if(error.response.status ==429){
          setIsRateLimited(true);
        }
        else{
          toast.error("Failed to Load your notes");
        }
      }finally{
        setLoading(false);
      }
    };
    fetchnotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-7'>
        {loading && <div className='text-center text-4xl py-10 text-primary'>Loading Your Notes...</div>}

        {notes.length===0 && !isRateLimited && <NotesNotFound/>}

        {notes.length >0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {notes.map(note => (
              <NoteCard key={note._id} note = {note} setNotes = {setNotes}/>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
