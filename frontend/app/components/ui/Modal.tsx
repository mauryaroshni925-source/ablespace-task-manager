"use client";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

// Ye ek generic Modal hai - isko hum "Add Task" ke alawa "Add Project",
// "Edit Task" jaise kaafi jagah reuse kar sakte hain future me

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // agar modal band hai, kuch bhi render mat karo
  if (!isOpen) return null;

  return (
    // Overlay - poori screen ko halka dark karta hai background me
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose} // background pe click karne se modal band ho jaye
    >
      {/* Modal box - stopPropagation isliye taaki andar click karne se modal band na ho */}
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}