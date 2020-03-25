import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Button } from 'react-fn-components';
import { paths } from '../../routes';
import A from '../../assets/images/asset_a.png';
import B from '../../assets/images/asset_b.png';
import C from '../../assets/images/asset_c.png';
import D from '../../assets/images/asset_d.png';
import E from '../../assets/images/asset_e.png';

const Home = (props) => {
  const { history } = props;
  const documentTitle = `LearnScilla - Home`;
  return (
    <div>
      <Header {...props} />
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>

      <section
        style={{
          paddingTop: 180,
          paddingBottom: 160,
          backgroundColor: '#162255',
          color: 'white'
        }}
      >
        <div className="container d-flex">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className="my-5">
                <h1 style={{ marginTop: 120 }}>
                  <b>LEARN TO SAFELY CODE ON BLOCKCHAIN</b>
                </h1>

                <p className="py-3">Step by step Interactive Tutorial</p>
                <Button
                  className="px-5"
                  level="secondary"
                  theme="dark"
                  onClick={() => history.push(paths.chapterList)}
                  text="Get Started"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div>
                <img
                  className="img-fluid mx-auto"
                  src={A}
                  alt="asset a"
                  style={{ marginTop: 50 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 150, paddingBottom: 150 }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <h1>What is Blockchain?</h1>
              <br />
              <p>
                A blockchain is a specific type of database that’s not maintained by any one
                particular entity, where you can’t change the previously stored data and all new
                data is updated one block of entries or transactions at a time under public view and
                consensus. In a public blockchain, anybody can choose to maintain the database
                correctly as it grows, and are often rewarded to do so by the internal mechanisms of
                the established blockchain protocol. This reward is usually in the form of the
                digital currency whose balance is maintained in the blockchain database.
              </p>
              <p>
                The first digital currency that used blockchain technology to maintain a correct
                database of ownership is bitcoin.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img className="img-fluid mx-auto" src={D} alt="asset d" />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ paddingTop: 150, paddingBottom: 150, backgroundColor: '#162255', color: 'white' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img className="img-fluid mx-auto" src={E} alt="asset e" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <br />
              <h1>What is a Smart Contract</h1>
              <br />
              <p>
                After the advent of the digital currency ‘bitcoin’, the next step was to have a
                programmable asset which could be transferred based on predetermined conditions,
                rather than human intervention.
              </p>
              <p>
                The set of those predetermined conditions and the way to interact with those set of
                conditions come together in the form of smart contract.
              </p>
              <p>
                More succinctly, in the words of Nick Szabo - who coined the term smart contract - a
                smart contract is a set of promises, specified in digital form, including protocols
                within which the parties perform on these promises.
              </p>
              <p>
                Smart contracts can help mitigate the counterparty risk i.e. helps us transact with
                each other without needing to rely on mutual trust or any arbitration parties such
                as courts if that trust is perceived to be breached.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 150, paddingBottom: 100 }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <h1>What is Scilla</h1>
              <br />
              <p>Scilla is a language for writing smart contracts that are safe by design.</p>
              <p>
                Since smart contracts have to deal with digital assets, they are often targeted by
                hackers for any flaws in the programming which might allow the hackers to exploit
                them.
              </p>
              <p>
                Scilla is based on functional programming languages such as OCaml which makes it
                more friendly towards static checks and formal verification which can help
                programmers make their smart contracts much more secure.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img className="img-fluid mx-auto" src={B} alt="asset b" />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ paddingTop: 150, paddingBottom: 150, backgroundColor: '#162255', color: 'white' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img className="img-fluid mx-auto px-4" src={C} alt="asset c" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <br />
              <h3>So, are you ready to learn how to code a smart contract in Scilla?</h3>
              <br />
              <p>
                We’ll be there with you helping you through a friendly interactive tutorial and a
                link to our chat where you can always discuss your doubts.
                <br />
                Additionally, building with Scilla language can also help you be eligible for a
                grant from Scilla.
                <br />
                <br />
                Learn more about it here.
                <br />
                <br />
                <b>Take the first step to become a programmer on blockchain.</b>
              </p>
              <div className="mt-5">
                <Button
                  className="px-5"
                  level="secondary"
                  theme="dark"
                  onClick={() => history.push("http://learnblockchain.org/")}
                  text="Start Now"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <Footer />
    </div>
  );
};

export default Home;
