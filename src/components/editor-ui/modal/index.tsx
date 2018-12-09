import React from 'react';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import { FaMedal } from 'react-icons/fa';
import Button from '../../button';

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
          <Button
            type="primary"
            text={t('lesson.nextLesson')}
            onClick={onSubmit}
            ariaLabel={'Next'}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CodeModal;
