import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import ModalHeader from "./components/header";
import JobResponsibilities from "./components/job-responsibilities";
import Requirements from "./components/requirements";
import Benefits from "./components/benefits";
import { createPortal } from "react-dom";

interface Props {
  onClose: () => void;
  jobTitle: string;
}

interface JobModalHandle {
  open: () => void;
  close: () => void;
}

const JobModal = forwardRef<JobModalHandle, Props>(function JobModal(
  props,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
    close() {
      dialog.current?.close();
    },
  }));

  function handleCloseModal() {
    props.onClose();
  }

  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalContainer(document.getElementById("dialog-modal"));
  }, []);

  if (!modalContainer) {
    return null; 
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="p-5 rounded-md w-3/4"
      onClose={handleCloseModal}
    >
      <div className="flex flex-col gap-y-5">
        <ModalHeader jobTitle={props.jobTitle} />
        <JobResponsibilities />
        <Requirements />
        <Benefits />

        <button
          type="button"
          onClick={handleCloseModal}
          className="w-full font-medium bg-blue-600 text-white p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </dialog>,
    modalContainer
  );
});

export default JobModal;
