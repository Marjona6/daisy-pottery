const Modal = ({ showModal = false, modalContent = null, handleClose = () => {} }) => {
  if (!showModal) return null;
  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          alert("wow");
        }}
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-end">
                <button type="button" onClick={handleClose} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:text-terra-cotta sm:mt-0 sm:w-auto">
                  X
                </button>
              </div>
              {modalContent}
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
