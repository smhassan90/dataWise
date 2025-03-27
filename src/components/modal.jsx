import { motion } from "framer-motion";
import { Button } from "../utils/button";

const Modal = ({ openModal, onClose, onConfirm }) => {
    if (!openModal) return null; 
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Confirm Deletion</h3>
                <p className="text-neutral-700 mb-6">Are you sure you want to delete?</p>
                <div className="flex justify-end gap-3">
                    <Button 
                        onClick={onClose} 
                        className="bg-gray-100 hover:bg-gray-200 text-neutral-900 px-4 py-2 rounded"
                    >
                        No, Cancel
                    </Button>
                    <Button 
                        onClick={onConfirm} 
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Yes, Delete
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;
