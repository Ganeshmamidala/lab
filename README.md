# Student Notes App - React

A modern, fully-functional student notes application built with React and Vite, featuring complete CRUD operations and local storage persistence.

## Features

✅ **Create** - Add new notes with student name, title, and content
✅ **Read** - Display all notes from local storage
✅ **Update** - Edit existing notes inline
✅ **Delete** - Remove notes with confirmation
✅ **Search** - Filter notes by student name, title, or content
✅ **Local Storage** - All notes persist in browser storage
✅ **Responsive Design** - Works on all screen sizes
✅ **Modern UI** - Clean gradient design with smooth animations

## Project Structure

```
react-notes-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── NoteForm.jsx
│   │   ├── NoteCard.jsx
│   │   └── NotesList.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Installation & Setup

1. Navigate to the project directory:
```bash
cd react-notes-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the local URL shown in the terminal (usually http://localhost:5173)

## Usage

1. **Add a Note**: Fill in the student name, note title, and content, then click "Add Note"
2. **Edit a Note**: Click the "Edit" button on any note card, modify the details, and click "Update Note"
3. **Delete a Note**: Click the "Delete" button on any note card and confirm
4. **Search Notes**: Use the search box to filter notes by any field
5. **Persistent Storage**: All notes are automatically saved to browser's local storage

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Local Storage API** - Data persistence
- **CSS3** - Modern styling with gradients and animations

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Browser Support

Works on all modern browsers that support ES6+ and Local Storage API.
