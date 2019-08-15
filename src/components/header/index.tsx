import React, { useState, useEffect, useRef } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Button, Spinner, Modal } from 'accessible-ui';
import { paths } from '../../routes';
import { toggleAuthModal, closeAuthModal } from '../../redux/auth';

const useClickOutside = (ref, callback) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && callback) {
      callback();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

const Header = (props) => {
  const [isTogglerOpen, setIsTogglerOpen] = useState(false);
  const [isAuthPending, setIsAuthPending] = useState(false);
  const togglerRef = useRef(null);

  useClickOutside(togglerRef, () => setIsTogglerOpen(false));

  const { t, auth, history, location, firebase, isAuthModalOpen } = props;
  const { isLoaded, isEmpty } = auth;
  const { pathname } = location;

  const logout = () => {
    firebase.logout();
    history.push(paths.chapterList);
  };

  const toggle = () => {
    setIsTogglerOpen(!isTogglerOpen);
  };

  const toggleAuthModal = () => {
    setIsAuthPending(false);
    props.toggleAuthModal();
  };

  const signIn = async (provider: string): Promise<void> => {
    const { firebase, ch1Progress } = props;
    const login = firebase.login;

    try {
      setIsAuthPending(true);
      await login({ provider, type: 'popup' });

      // sync progress between localstorage and firestore
      const progress = { chapter1: ch1Progress };
      firebase.updateProfile({ progress });

      props.closeAuthModal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsAuthPending(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark ${
        pathname === paths.home ? 'fixed-top' : ''
      }`}
      style={{ backgroundColor: '#162255' }}
      ref={togglerRef}
    >
      <Link className="navbar-brand" to={paths.home} aria-label={'brand'}>
        {'LearnScilla'}
      </Link>

      <button className="navbar-toggler" onClick={toggle} aria-label={'menu'}>
        <span className="navbar-toggler-icon" />
      </button>

      <div
        data-testid={`collapse-${isTogglerOpen ? 'opened' : 'closed'}`}
        className={`collapse ${isTogglerOpen ? 'show' : ''} navbar-collapse`}
      >
        <ul className="ml-auto navbar-nav">
          <li className="nav-item" style={{ marginLeft: '1rem' }}>
            <Link
              className={`nav-link ${pathname === paths.home ? 'active' : ''}`}
              to={paths.home}
              aria-label={'home'}
            >
              {t('link.home')}
            </Link>
          </li>

          <li className="nav-item" style={{ marginLeft: '1rem' }}>
            <Link
              className={`nav-link ${pathname === paths.chapterList ? 'active' : ''}`}
              to={paths.chapterList}
              aria-label={'tutorial'}
            >
              {t('link.tutorial')}
            </Link>
          </li>

          {!isLoaded ? null : isEmpty ? (
            <li className="nav-item" data-testid="auth-modal">
              <Button
                style={{ marginLeft: '1rem' }}
                level="secondary"
                theme="dark"
                onClick={toggleAuthModal}
                data-testid="toggle"
                text={t('link.signIn')}
              />

              {isAuthModalOpen ? (
                <Modal onClose={toggleAuthModal}>
                  <h3>{t('link.signIn')}</h3>
                  <hr />
                  <div>
                    {!isLoaded || isAuthPending ? (
                      <div className="text-center">
                        <Spinner />
                      </div>
                    ) : (
                      <div className="py-3 text-center">
                        <div className="py-1">
                          <Button
                            data-testid="google-login-button"
                            level="secondary"
                            text={t('auth.signInWithGoogle')}
                            onClick={() => signIn('google')}
                            before={<FaGoogle />}
                            type="button"
                          />
                        </div>
                        <div className="py-1">
                          <Button
                            data-testid="github-login-button"
                            level="secondary"
                            text={t('auth.signInWithGitHub')}
                            onClick={() => signIn('github')}
                            before={<FaGithub />}
                            type="button"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Modal>
              ) : null}
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to={paths.account} className="nav-link" style={{ marginLeft: '1rem' }}>
                  {t('account.account')}
                </Link>
              </li>

              <Button
                style={{ marginLeft: '1rem' }}
                level="secondary"
                theme="dark"
                text={t('link.signOut')}
                onClick={logout}
              />
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

// @ts-ignore
const withTrans = withNamespaces()(Header);

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  isAuthModalOpen: state.auth.isAuthModalOpen,
  ch1Progress: state.persist.ch1Progress
});
const mapDispatchToProps = (dispatch) => ({
  toggleAuthModal: () => dispatch(toggleAuthModal()),
  closeAuthModal: () => dispatch(closeAuthModal())
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(withTrans);
