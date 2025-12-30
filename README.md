📝 Tasks & Notes App (Kanban + Notes)

This project is a small productivity app where a user can manage tasks and notes.
It is built mainly to practice React Query, Next.js App Router, and some advanced UI logic like Kanban drag & drop and autosave editors.

It’s not meant to be perfect or production-ready, but more like a realistic frontend-heavy project.

What the app does (in simple words)
Tasks
You can create, edit, and delete tasks
**Tasks have:
title
description
priority (low / medium / high)
status (todo / in-progress / done)
**
Tasks can be viewed in:
Table view
Kanban view (Trello-like)

Kanban View

Tasks are grouped by status (columns)

You can drag a task from one column to another

When you drop a task in another column:

its status is updated immediately (optimistic update)

You can also reorder tasks inside the same column

this order is only remembered in the UI

once you refresh the page, it resets (intentionally)

Sorting & Filtering (Kanban)

Filter by:

priority

status

Sort by:

created date

priority

When sorting is active:

manual drag reorder is disabled

drag between columns still works

Notes

Notes are simpler than tasks

A note only has:

content

createdAt / updatedAt

Notes List

Shows all notes in a simple grid layout

You can:

create a new note

delete a note

click a note to open it

Single Note Page

Uses Tiptap rich text editor

Supports autosave

when you stop typing, the note is saved automatically

saving is debounced to avoid spamming the backend

No “Save” button needed (but delete still exists)

Tech Stack (what I used)

Next.js (App Router)

React Query

caching

optimistic updates

invalidation & setQueryData

Material UI

dnd-kit

drag & drop for Kanban

Tiptap

rich text editor for notes

Local JSON database

simple backend logic

per-user data (tasks & notes)

Cookie-based auth

token stored as httpOnly cookie

Important Design Decisions (on purpose)

Drag & drop order is NOT persisted

this keeps backend simple

focus is on frontend behavior

Notes autosave uses HTML content

stored as string

rendered back inside editor

Kanban drag uses drag handle

to avoid conflicts with edit/delete buttons

Tasks and Notes share similar logic

useTasks / useTask

useNotes / useNote

same mental model, different data

Project Structure (simplified)
/app
  /tasks
    page.tsx
    [id]/page.tsx
  /notes
    page.tsx
    [id]/page.tsx

/hooks
  useTasks.ts
  useTask.ts
  useNotes.ts
  useNote.ts

/myComponents
  TasksKanbanView.tsx
  TasksTableView.tsx
  DragableTaskCard.tsx
  TaskPaper.tsx
  NotePaper.tsx
  NoteDetail.tsx

Why I built this

I wanted a project that:

is not trivial

touches real frontend problems

forces me to think about:

state sync

caching

optimistic updates

drag & drop edge cases

editor autosave

Also I wanted something that feels like a real internal tool, not just a demo.

What is not perfect (and that’s ok)

Drag & drop can still be optimized (re-renders)

Backend is very basic

No real user management UI

No persistence for Kanban ordering

All of this is intentional — the goal was learning and architecture, not shipping SaaS 😅

Final thoughts

This project helped me understand:

how React Query really works

why separating list hooks vs single-item hooks matters

why drag & drop + click interactions are tricky

how autosave editors behave in real apps

If I continue this project later, I’d:

optimize DnD performance

add markdown export

maybe persist Kanban order

add search
