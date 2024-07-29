import React from 'react';
import Modal from 'react-modal';
import { useScrollContext } from './ScrollContext';
import './MiddleContainer.css';

Modal.setAppElement('#root'); // Replace '#root' with the root element ID of your React app

const MiddleContainer = ({ activeBlock, setActiveBlock }) => {
  const { setIsPopupVisible } = useScrollContext();

  const closeModal = () => {
    setActiveBlock(null);
    setIsPopupVisible(false);
  };

  const handleToggle = (blockId) => {
    setActiveBlock((prevBlock) => {
      const newBlock = prevBlock === blockId ? null : blockId;
      setIsPopupVisible(newBlock !== null);
      return newBlock;
    });
  };

  return (
    <div className="middle-container">
      {/* <button onClick={() => handleToggle('jewelry-block')}>Toggle Jewelry Block</button>
      <button onClick={() => handleToggle('location-block')}>Toggle Location Block</button>
      <button onClick={() => handleToggle('gifts-block')}>Toggle Gifts Block</button> */}

      <Modal
        isOpen={activeBlock === 'jewelry-block'}
        onRequestClose={closeModal}
        contentLabel="Jewelry Block"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-btn">Close</button>
        <div>Jewelry Block Content</div>
      </Modal>

      <Modal
        isOpen={activeBlock === 'location-block'}
        onRequestClose={closeModal}
        contentLabel="Location Block"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-btn">Close</button>
        <div>Location Block Content</div>
      </Modal>

      <Modal
        isOpen={activeBlock === 'gifts-block'}
        onRequestClose={closeModal}
        contentLabel="Gifts Block"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-btn">Close</button>
        <div>Gifts Block Content</div>
      </Modal>
    </div>
  );
};

export default MiddleContainer;
