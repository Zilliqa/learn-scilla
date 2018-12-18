import React from 'react';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import Button from '../button';
import { FaCode } from 'react-icons/fa';
import './style.css';
import { ButtonType } from '../button';

interface IProps {
  t: (key: string) => string;
  buttonType?: ButtonType;
}

interface IState {
  isModalOpen: boolean;
}

class AuthModal extends React.Component<IProps, IState> {
  public readonly state = {
    isModalOpen: false
  };
  public render(): React.ReactNode {
    const { t, buttonType = 'secondary' } = this.props;

    return (
      <span>
        <Button
          onClick={this.toggleModal}
          type={buttonType}
          size="sm"
          text={t('lesson.cheatSheet')}
          ariaLabel={t('lesson.cheatSheet')}
          icon={{ image: <FaCode />, position: 'before' }}
        />
        <Modal fade={false} isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg">
          <ModalHeader toggle={this.toggleModal}>{t('lesson.cheatSheet')}</ModalHeader>
          <div className="modal-body cheat-sheet-table">
            <table className="table table-hover table-fixed">
              <thead>
                <tr>
                  <th style={{ minWidth: 130 }}>Field Type</th>
                  <th style={{ minWidth: 250 }}>
                    Field Type Keyword <br />
                    (Case Sensitive)
                  </th>
                  <th style={{ minWidth: 400 }}>
                    Mutable var declaration <br />
                    with Null value
                  </th>
                  <th style={{ minWidth: 250 }}>
                    Mutable var declaration <br />
                    with value
                  </th>
                  <th style={{ minWidth: 250 }}>Declaration as a variable in transition</th>
                  <th style={{ minWidth: 250 }}>Declaration in the library</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/8310754a24f6ca79535e14340516435b'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Signed Integer'}
                    >
                      Signed Integer
                    </a>
                  </th>
                  <td>
                    IntX
                    <br />
                    (Where X can be 32, 64, 128, or 256) eg. Int32
                  </td>
                  <td>{'field a: Option Int32 = None {Int32}'}</td>
                  <td>{'field a: Int32 = Int32 5'}</td>
                  <td>{'a = Int32 5'}</td>
                  <td>{'let a= Int32 5'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/3a3959eca79709762ff286d5f9c2913e'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Unsigned Integer'}
                    >
                      Unsigned Integer
                    </a>
                  </th>
                  <td>
                    UintX
                    <br />
                    (Where X can be 32, 64, 128, or 256) eg. Uint32
                  </td>
                  <td>{'field a: Option Uint32 = None {Uint32}'}</td>
                  <td>{'field a : Uint32 = Uint32 5'}</td>
                  <td>{'a = Uint32 5'}</td>
                  <td>{'let a = Uint32 5'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/8310754a24f6ca79535e14340516435b'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'String'}
                    >
                      String
                    </a>
                  </th>
                  <td>{'String'}</td>
                  <td>{'field a : String = ""'}</td>
                  <td>{'field a : String = "hello"'}</td>
                  <td>{'a = "hello";'}</td>
                  <td>{'let a = "xyz"'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/436c75df6da75c694245e70a23d4785b'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Hash'}
                    >
                      Hash
                    </a>
                  </th>
                  <td>ByStr32</td>
                  <td>{'field a: Option ByStr32 = None {ByStr32}'}</td>
                  <td>{'field a: ByStr32 = 0x1234...0abff'}</td>
                  <td>{'a = 0x1234...0abff'}</td>
                  <td>{'let a = 0x1234...0abff'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/2dd3a8f3d048fa9ee5a70204129f7a49'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Address'}
                    >
                      Address
                    </a>
                  </th>
                  <td>ByStr20</td>
                  <td>{'field a: Option ByStr20 = None {ByStr20}'}</td>
                  <td>{'field a: ByStr20 = 0x1234...0abff'}</td>
                  <td>{'a =0x1234...0abff'}</td>
                  <td>{'let a = 0x1234...0abff'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/969321353d4b6116b5ccb04233e460c3'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Block Number'}
                    >
                      Block Number
                    </a>
                  </th>
                  <td>BNum</td>
                  <td>{' field a: Option BNum = None {BNum}'}</td>
                  <td>{'field a : BNum = BNum 5'}</td>
                  <td>{'a = BNum 5'}</td>
                  <td>{'let a = BNum 5'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/77781635267fd5191cc564ae20e38e28'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Boolean'}
                    >
                      Boolean
                    </a>
                  </th>
                  <td>Bool</td>
                  <td>{'field a : Option Bool = None {Bool}'}</td>
                  <td>{'field a : Bool = True'}</td>
                  <td>{'a = True'}</td>
                  <td>{'let a = True'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/daf7d07f210b288f6495a9e8cbc28803'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'List'}
                    >
                      List
                    </a>
                  </th>
                  <td>List</td>
                  <td>{'field a: List(Int32)= Nil {Int32}'}</td>
                  <td>
                    field a: List(Int32) = let b = Nil {`{Int32}`} in
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; let c = Int32 5 in
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; Cons {`{Int32}`} c b
                  </td>
                  <td>{'a = Nil {Int32}'}</td>
                  <td>{'let a = Nil {Int32}'}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/709b8d33ecc83bc8d205a7821d85601e'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Pair'}
                    >
                      Pair
                    </a>
                  </th>
                  <td>Pair (FieldType1) (Fieldtype2)</td>
                  <td>
                    field a: Pair (String) (Option Uint32) =<br /> &nbsp;&nbsp;&nbsp;&nbsp; let b=
                    "" in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let c = None {`{Uint32}`} in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; Pair {`{(String) (Option Uint32)}`} b c
                  </td>
                  <td>
                    field a: Pair (String) (Uint32) =<br /> &nbsp;&nbsp;&nbsp;&nbsp; let b= "Hello"
                    in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let c = {`{Uint32}`} 5 in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; Pair {`{(String) (Uint32)}`} b c
                  </td>
                  <td>
                    a = let b= "Hello" in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let c = {`{Uint32}`} 5 in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; Pair {`{(String) (Uint32)}`} b c
                  </td>
                  <td>
                    let a = let b= "Hello" in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let c = {`{Uint32}`} 5 in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; Pair {`{(String) (Uint32)}`} b c
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <a
                      href={'https://gist.github.com/saibakatar/86790f002a696e453f93ed625371ebdc'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Map'}
                    >
                      Map
                    </a>
                  </th>
                  <td>
                    Map FieldType1(Key) FieldType2(Value).
                    <br />
                    <br /> Keys can have the following types: <br />
                    <ul>
                      <li>IntX</li>
                      <li>UintX</li>
                      <li>String</li>
                      <li>ByStr32</li>
                      <li>ByStr20</li>
                    </ul>
                    Values can be of any type.
                  </td>
                  <td>{'field a: Map FieldType1 FieldType2 = Emp FieldType1 FieldType2'}</td>
                  <td>
                    field a: Map ByStr20 String = let b = Emp ByStr20 String in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let c = 0x1234...0abff in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let d = ""Hello"" in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; builtin put b c d "
                  </td>
                  <td>
                    a = let b = Emp ByStr20 String in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let c = 0x1234...0abff in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let d = ""Hello"" in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; builtin put b c d "
                  </td>
                  <td>
                    let a = let b = Emp ByStr20 String in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let c = 0x1234...0abff in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; let d = ""Hello"" in
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; builtin put b c d "
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
      </span>
    );
  }

  private toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
}

export default AuthModal;
