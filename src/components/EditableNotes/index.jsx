import React, { useState } from "react";
import { Trash2, Plus, Save, X, Edit2 } from "lucide-react";

const EditableNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "Lembrar de verificar os agendamentos pendentes",
      isEditing: false,
    },
    {
      id: 2,
      content: "Ligar para cliente - Thor - (48) 99999-9999",
      isEditing: false,
    },
    {
      id: 3,
      content: "Atualizar horários da próxima semana",
      isEditing: false,
    },
  ]);
  const [newNote, setNewNote] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          content: newNote,
          isEditing: false,
        },
      ]);
      setNewNote("");
      setIsAddingNote(false);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEditing = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isEditing: true } : note
      )
    );
  };

  const saveEdit = (id, newContent) => {
    if (newContent.trim()) {
      setNotes(
        notes.map((note) =>
          note.id === id
            ? { ...note, content: newContent, isEditing: false }
            : note
        )
      );
    }
  };

  const cancelEdit = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isEditing: false } : note
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-lg">Notas</h4>
        {!isAddingNote && (
          <button
            onClick={() => setIsAddingNote(true)}
            className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700"
          >
            <Plus size={16} />
            Adicionar Nota
          </button>
        )}
      </div>

      {isAddingNote && (
        <div className="mb-4">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Digite sua nota aqui..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
            rows={3}
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => setIsAddingNote(false)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
            <button
              onClick={addNote}
              className="px-3 py-1 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Salvar
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-3 bg-orange-50 rounded-md relative group"
          >
            {note.isEditing ? (
              <div>
                <textarea
                  defaultValue={note.content}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                  rows={3}
                  id={`note-${note.id}`}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={() => cancelEdit(note.id)}
                    className="p-1 text-gray-600 hover:text-gray-800"
                  >
                    <X size={16} />
                  </button>
                  <button
                    onClick={() =>
                      saveEdit(
                        note.id,
                        document.getElementById(`note-${note.id}`).value
                      )
                    }
                    className="p-1 text-green-600 hover:text-green-700"
                  >
                    <Save size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm pr-16">{note.content}</p>
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => startEditing(note.id)}
                    className="p-1 text-gray-600 hover:text-orange-600"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="p-1 text-gray-600 hover:text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {notes.length === 0 && !isAddingNote && (
        <p className="text-center text-gray-500 text-sm py-4">
          Nenhuma nota adicionada. Clique em "Adicionar Nota" para começar.
        </p>
      )}
    </div>
  );
};

export default EditableNotes;
