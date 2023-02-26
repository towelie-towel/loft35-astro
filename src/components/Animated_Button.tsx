import { useRef } from 'react';

export default function Modal() {
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    const modal = modalRef.current;

    if (modal?.classList.contains('scale-0')) {
      modal?.classList.remove('scale-0');
      modal?.classList.add('scale-100');
    } else {
      modal?.classList.remove('scale-100');
      modal?.classList.add('scale-0');
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center">
        <div
          className="bg-white p-4 rounded-lg shadow-lg transform scale-0 transition-transform"
          ref={modalRef}
        ></div>
      </div>
      <div className="flex items-center justify-center w-screen">
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          onClick={toggleModal}
          style={{ zIndex: 100 }}
        >
          Open Modal
        </button>
      </div>
    </div>
  );
}
