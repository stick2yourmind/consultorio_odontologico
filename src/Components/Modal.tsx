import { useState } from 'react'
import { motion } from 'framer-motion'

const ModalButton = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="save-button"
      onClick={() => (modalOpen ? close() : open())}
    >
      Launch modal
    </motion.button>
  )
}

const ModalBackdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
//  Variant 'dropIn' for Modal
const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const Modal = ({ handleClose, text }) => {
  return (
    <ModalBackdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p>{text}</p>
          <button onClick={handleClose}>Close</button>
        </motion.div>
    </ModalBackdrop>
  )
}

/* eslint-disable*/
// let Modal = {Button: ModalButton, Backdrop: ModalBackdrop}
Modal.Button = ModalButton
Modal.Backdrop = ModalBackdrop
/* eslint-enable */
export default Modal
