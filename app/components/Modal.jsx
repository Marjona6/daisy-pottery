import { X } from 'react-feather';

const Modal = ({ showModal = false, modalContent = null, handleClose = () => {} }) => {
  if (!showModal) return null;
  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          ></div>
          <div className="flex min-h-full items-center justify-center p-0 text-center">
            <div className="relative w-screen h-screen bg-transparent text-left overflow-hidden">
              <div className="bg-transparent p-0">
                <div className="sm:flex justify-end mt-[-16px]">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex w-auto justify-center rounded-md bg-transparent py-2 text-md font-semibold text-white hover:text-terra-cotta absolute right-3 top-3 z-50"
                  >
                    <X />
                  </button>
                </div>
                {modalContent}
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
