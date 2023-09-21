import DateModal from '../components/Modal/Components/DateModal/DateModal';
import Modal from '../components/Modal/Modal';

export default function Test() {
  return (
    <>
      <Modal isOpen={true} isClose={() => console.log('fechou')}>
        <DateModal />
      </Modal>
    </>
  );
}
