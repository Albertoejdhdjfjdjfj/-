import { Routes, Route } from 'react-router-dom';
import ListOfNotes from './ListOfNotes';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';
export default function Notes(userId) {
  return (
    <Routes>
      <Route index element={<ListOfNotes userId={userId} />} />
      <Route path="/create" element={<CreateNote Id={userId} />} />
      <Route path="/:id" element={<ViewNote />} />
      <Route path="edit/:id" element={<EditNote />} />
    </Routes>
  );
}
