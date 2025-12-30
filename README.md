📝 Tasks & Notes App (Kanban + Notes) For osloop assesment 

This project is a small productivity app where a user can manage tasks and notes according to your requests.
It is built mainly to practice React Query, Next.js App Router, and some advanced UI logic like Kanban drag & drop and autosave editors.


What the app does: ad ma2dar 😂😂😂

Tasks 📝
You can create, edit, and delete tasks
**Tasks have:
title
description
priority (low / medium / high)
status (todo / in-progress / done)
**
Tasks can be viewed in:
Table view 😎 ziada ana 3arf 😎
Kanban View
Tasks are grouped by status (columns)
You can drag a task from one column to another 
When you drop a task in another column:
its status is updated immediately (optimistic update)
you can also reorder tasks inside the same column  😭😭😭😭😭😭 bas mish fe columns tania arraymove lsa 
this order is only remembered in the UI

Sorting & Filtering (Kanban)

Filter by:

priority

status

Sort by:   el 7eta de kant sa3ba shoia ast3nt bel ai (Guilty as charged) 👮👮👮

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
optimistic updates
invalidation & setQueryData a5do mny 2 days 3lshan afhmhom 😑😑😑

Material UI

dnd-kit

drag & drop for Kanban   yasater 3leha 😭😭😭

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

Project Structure  el 7agat el assasia 
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

Because it was a challenge tasked from you and appreciate it I learned alot and imporved my skills and were 2 weeks felt like home
also made me feel pressured and wierd as it is I work better under pressure 😂😂😂

What is not perfect:

Drag & drop can still be optimized (re-renders)
Backend is very basic
No real user management UI
No persistence for Kanban ordering



Final thoughts

Special Thanks To every Team memmber that helped me out:
(CTO)
Eng Mohamed Sakr 
(Front End Team)
Eng megahd  (Front End Leader)
Eng Ahmed   
Eng regad
(Testing)
Eng badr

Deployed at 
https://oslooptasks.vercel.app/

