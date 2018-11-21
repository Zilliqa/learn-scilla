import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
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
        <ModalBody>{t('lesson.chapterCompleteMessage')}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={proceed}>
            {t('lesson.nextLesson')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CodeModal;
