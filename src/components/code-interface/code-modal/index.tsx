import React from 'react';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import { FaMedal } from 'react-icons/fa';

interface IProps {
  t: (key: string) => string;
  proceed: () => void;
  closeModal: () => void;
  isModalVisible: boolean;
}

const CodeModal: React.SFC<IProps> = (props) => {
  const { isModalVisible, t, closeModal, proceed } = props;
  return (
    <div>
      <Modal isOpen={isModalVisible} fade={false} toggle={closeModal}>
        <ModalHeader toggle={closeModal} className="text-secondary">
          <FaMedal /> {t('lesson.congratulations')}
        </ModalHeader>
        <div className="modal-body">{t('lesson.chapterCompleteMessage')}</div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={proceed}>
            {t('lesson.nextLesson')}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CodeModal;
