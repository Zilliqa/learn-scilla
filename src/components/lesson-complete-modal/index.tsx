import React from 'react';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import { FaMedal } from 'react-icons/fa';
import { Button } from 'accessible-ui';

interface IProps {
  t: (key: string) => string;
  onSubmit: () => void;
  closeModal: () => void;
  isModalVisible: boolean;
}

const LessonCompleteModal: React.SFC<IProps> = (props) => {
  const { isModalVisible, t, closeModal, onSubmit } = props;
  return (
    <div data-testid="lesson-complete-modal">
      <Modal isOpen={isModalVisible} toggle={closeModal}>
        <ModalHeader toggle={closeModal} className="text-secondary">
          <FaMedal /> {t('chapter.goodjob')}
        </ModalHeader>
        <div className="modal-body">{t('chapter.lessonCompleteMessage')}</div>
        <div className="modal-footer">
          <Button level="primary" text={t('lesson.nextLesson')} onClick={onSubmit} type="button" />
        </div>
      </Modal>
    </div>
  );
};

export default LessonCompleteModal;
