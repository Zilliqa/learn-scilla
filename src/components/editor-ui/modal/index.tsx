import React from 'react';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import { FaMedal } from 'react-icons/fa';

interface IProps {
  t: (key: string) => string;
  onSubmit: () => void;
  closeModal: () => void;
  isModalVisible: boolean;
}

const CodeModal: React.SFC<IProps> = (props) => {
  const { isModalVisible, t, closeModal, onSubmit } = props;
  return (
    <div>
      <Modal isOpen={isModalVisible} fade={false} toggle={closeModal}>
        <ModalHeader toggle={closeModal} className="text-secondary">
          <FaMedal /> {t('chapter.goodjob')}
        </ModalHeader>
        <div className="modal-body">{t('chapter.lessonCompleteMessage')}</div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onSubmit}>
            {t('lesson.nextLesson')}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CodeModal;
