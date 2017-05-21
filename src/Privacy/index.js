import React, { Component } from 'react';

import './Privacy.css';

export default class Privacy extends Component {
  renderCopyRightYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="Privacy-container">
        <div
          id="iubenda_policy"
          className="iubenda_fluid_policy iubenda_embed_policy"
        >
          <div id="wbars_all">
            <div className="iub_container iub_base_container">
              <div id="wbars">
                <div className="iub_content legal_pp">
                  <div className="iub_header">
                    <h1>
                      Privacy Policy of <strong>Nu - Events. Today.</strong>
                    </h1>
                    <p>
                      This Application collects some Personal Data from its Users.
                    </p>
                  </div>
                  <div className="simple_pp">
                    <div className="one_line_col">
                      <h2>
                        Policy summary
                      </h2>
                      {' '}
                    </div>
                    <h2>
                      Personal Data collected for the following purposes and using the following services:
                    </h2>
                    <ul className="for_boxes cf">
                      <li className="one_line_col">
                        <ul className="for_boxes">
                          <li>
                            <div className="iconed policyicon_purpose_16">
                              <h3>Access to third party accounts</h3>
                              <ul>
                                <li>
                                  <h3>Facebook account access</h3>
                                  <p>
                                    Permissions: Contact email, Events and Friends' Events
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="iconed policyicon_purpose_7">
                              <h3>Advertising</h3>
                              <ul>
                                <li>
                                  <h3>AdMob</h3>
                                  <p>Personal Data: Cookies and Usage Data</p>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="iconed policyicon_purpose_5">
                              <h3>Analytics</h3>
                              <ul>
                                <li>
                                  <h3>Google Analytics</h3>
                                  <p>Personal Data: Cookies and Usage Data</p>
                                </li>
                                <li>
                                  <h3>Facebook Analytics for Apps</h3>
                                  <p>
                                    Personal Data: Usage Data and various types of Data as specified in the privacy policy of the service
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="iconed policyicon_purpose_42">
                              <h3>Hosting and backend infrastructure</h3>
                              <ul>
                                <li>
                                  <h3>Firebase Hosting and Firebase</h3>
                                  <p>
                                    Personal Data: various types of Data as specified in the privacy policy of the service
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="iconed policyicon_purpose_9">
                              <h3>Registration and authentication</h3>
                              <ul>
                                <li>
                                  <h3>Facebook Authentication</h3>
                                  <p>
                                    Personal Data: various types of Data as specified in the privacy policy of the service
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <h2>Contact information</h2>
                    <ul className="for_boxes cf">
                      <li className="one_line_col">
                        <ul className="for_boxes">
                          <li>
                            <div className="iconed icon_owner">
                              <h3>Data owner</h3>
                              <p>
                                Occam
                                <br />
                                <br />c/o Pedro Madruga
                                <br />Vesterbrogade 26
                                <br />1620 Ku00f8benhavn V
                                <br />Denmark
                              </p>
                              <p><b>Owner contact email:</b> hello@occam.ooo</p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="one_line_col">
                    <h2>
                      Full policy
                    </h2>
                    {' '}
                  </div>
                  <div className="one_line_col">
                    <h2>Data Controller and Owner</h2>
                    <p>
                      Occam
                      <br />
                      <br />c/o Pedro Madruga
                      <br />Vesterbrogade 26
                      <br />1620 Ku00f8benhavn V
                      <br />Denmark
                    </p>
                    <p><b>Owner contact email:</b> hello@occam.ooo</p>
                  </div>
                  <div className="one_line_col">
                    <h2>Types of Data collected</h2>
                    <p>
                      {' '}
                      Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookies and Usage Data.
                      {' '}
                    </p>
                    <p>
                      Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection.
                      <br />
                      The Personal Data may be freely provided by the User, or collected automatically when using this Application.
                      <br />
                      Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User.
                      <br />
                      Failure to provide certain Personal Data may make it impossible for this Application to provide its services.
                    </p>
                    <p>
                      Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
                    </p>
                  </div>
                  <div className="one_line_col">
                    <h2>Mode and place of processing the Data</h2>
                    <h3>Methods of processing</h3>
                    <p>
                      The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
                      <br />
                      The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.
                    </p>
                    <h3>Place</h3>
                    <p>
                      The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller.
                    </p>
                    <h3>Retention time</h3>
                    <p>
                      The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.
                    </p>
                  </div>
                  <div className="one_line_col">
                    <h2>The use of the collected Data</h2>
                    <p>
                      {' '}
                      The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Access to third party accounts, Analytics, Advertising, Hosting and backend infrastructure and Registration and authentication.
                      {' '}
                    </p>
                    <p>
                      The Personal Data used for each purpose is outlined in the specific sections of this document.
                    </p>
                  </div>
                  <div className="one_line_col">
                    <h2>Facebook permissions asked by this Application</h2>
                    <p>
                      This Application may ask for some Facebook permissions allowing it to perform actions with the User's Facebook account and to retrieve information, including Personal Data, from it.
                    </p>
                    <p>
                      For more information about the following permissions, refer to the
                      {' '}
                      <a
                        href="https://developers.facebook.com/docs/authentication/permissions/"
                        target="_blank"
                      >
                        Facebook permissions documentation
                      </a>
                      {' '}
                      and to the
                      {' '}
                      <a
                        href="https://www.facebook.com/about/privacy/"
                        target="_blank"
                      >
                        Facebook privacy policy
                      </a>
                      .
                    </p>
                    <p>The permissions asked are the following:</p>
                    <h3>Basic information</h3>
                    <p>
                      By default, this includes certain User’s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available.
                    </p>
                    <h3>Contact email</h3>
                    <p>Access the User's contact email address.</p>
                    <h3>Events</h3>
                    <p>
                      Provides access to the list of events the User is attending.
                    </p>
                    <h3>Friends' Events</h3>
                    <p>
                      Provides access to the list of events the friends are attending.
                    </p>
                  </div>
                  <div className="one_line_col">
                    <h2>
                      Detailed information on the processing of Personal Data
                    </h2>
                    <p>
                      Personal Data is collected for the following purposes and using the following services:
                    </p>
                    <ul className="for_boxes">
                      <li>
                        <div className="box_primary box_10 expand">
                          <h3 className="expand-click w_icon_24 policyicon_purpose_3776892">
                            Access to third party accounts
                          </h3>
                          <div className="expand-content">
                            <p>
                              This type of service allows this Application to access Data from your account on a third party service and perform actions with it.
                              <br />
                              {' '}
                              These services are not activated automatically, but require explicit authorization by the User.
                            </p>
                            <h4>Facebook account access (This Application)</h4>
                            <p>
                              This service allows this Application to connect with the User's account on the Facebook social network, provided by Facebook, Inc.
                            </p>
                            <p>
                              {' '}
                              Permissions asked: Contact email, Events and Friends' Events.
                              {' '}
                            </p>
                            <p>
                              {' '}
                              Place of processing: US –
                              {' '}
                              <a
                                href="https://www.facebook.com/policy.php"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              {' '}
                            </p>
                          </div>

                        </div>
                      </li>
                      <li>
                        <div className="box_primary box_10 expand">
                          <h3 className="expand-click w_icon_24 policyicon_purpose_3776894">
                            Advertising
                          </h3>
                          <div className="expand-content">
                            <p>
                              This type of service allows User Data to be utilized for advertising communication purposes displayed in the form of banners and other advertisements on this Application, possibly based on User interests.
                              <br />
                              {' '}
                              This does not mean that all Personal Data are used for this purpose. Information and conditions of use are shown below.
                              <br />
                              {' '}
                              Some of the services listed below may use Cookies to identify Users or they may use the behavioral retargeting technique, i.e. displaying ads tailored to the Useru2019s interests and behavior, including those detected outside this Application. For more information, please check the privacy policies of the relevant services.
                            </p>
                            <h4>AdMob (AdMob Google Inc.)</h4>
                            <p>
                              AdMob is an advertising service provided by AdMob Google Inc.
                            </p>
                            <p>
                              {' '}
                              Personal Data collected: Cookies and Usage Data.
                              {' '}
                            </p>
                            <p>
                              {' '}
                              Place of processing: US –
                              {' '}
                              <a
                                href="https://www.google.com/policies/technologies/ads/"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              {' '}
                            </p>
                          </div>

                        </div>
                      </li>
                      <li>
                        <div className="box_primary box_10 expand">
                          <h3 className="expand-click w_icon_24 policyicon_purpose_3776893">
                            Analytics
                          </h3>
                          <div className="expand-content">
                            <p>
                              The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.
                            </p>
                            <h4>Google Analytics (Google Inc.)</h4>
                            <p>
                              Google Analytics is a web analysis service provided by Google Inc. (u201cGoogleu201d). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services.
                              <br />
                              {' '}
                              Google may use the Data collected to contextualize and personalize the ads of its own advertising network.
                            </p>
                            <p>
                              {' '}
                              Personal Data collected: Cookies and Usage Data.
                              {' '}
                            </p>
                            <p>
                              {' '}
                              Place of processing: US –
                              {' '}
                              <a
                                href="https://www.google.com/intl/en/policies/privacy/"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              {' '}
                              –
                              {' '}
                              <a
                                href="https://tools.google.com/dlpage/gaoptout?hl=en"
                                target="_blank"
                              >
                                Opt Out
                              </a>
                              {' '}
                            </p>
                            <h4>
                              Facebook Analytics for Apps (Facebook, Inc.)
                            </h4>
                            <p>
                              Facebook Analytics for Apps is an analytics service provided by Facebook, Inc.
                            </p>
                            <p>
                              {' '}
                              Personal Data collected: Usage Data and various types of Data as specified in the privacy policy of the service.
                              {' '}
                            </p>
                            <p>
                              {' '}
                              Place of processing: US –
                              {' '}
                              <a
                                href="https://www.facebook.com/about/privacy/"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              {' '}
                            </p>
                          </div>

                        </div>
                      </li>
                      <li>
                        <div className="box_primary box_10 expand">
                          <h3 className="expand-click w_icon_24 policyicon_purpose_3776895">
                            Hosting and backend infrastructure
                          </h3>
                          <div className="expand-content">
                            <p>
                              This type of service has the purpose of hosting data and files that enable this Application to run and be distributed as well as to provide a ready-made infrastructure to run specific features or parts of this Application. Some of these services work through geographically distributed servers, making it difficult to determine the actual location where the Personal Data are stored.
                            </p>
                            <h4>Firebase Hosting (Firebase, Inc.)</h4>
                            <p>
                              Firebase Hosting is a hosting service provided by Google Inc.
                            </p>
                            <p>
                              {' '}
                              Personal Data collected: various types of Data as specified in the privacy policy of the service.
                              {' '}
                            </p>
                            <p>
                              {' '}
                              Place of processing: US –
                              {' '}
                              <a
                                href="https://www.google.com/intl/en/privacy/"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              {' '}
                            </p>
                            <h4>Firebase (Firebase, Inc.)</h4>
                            <p>
                              Firebase is a hosting and backend service provided by Google Inc.
                            </p>
                            <p>
                              {' '}
                              Personal Data collected: various types of Data as specified in the privacy policy of the service.
                              {' '}
                            </p>
                            <p>
                              {' '}
                              Place of processing: US –
                              {' '}
                              <a
                                href="https://www.google.com/intl/en/privacy/"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              {' '}
                            </p>
                          </div>

                        </div>
                      </li>
                      <li>
                        <div className="box_primary box_10 expand">
                          <h3 className="expand-click w_icon_24 policyicon_purpose_3776897">
                            Registration and authentication
                          </h3>
                          <div className="expand-content">
                            <p>
                              By registering or authenticating, Users allow this Application to identify them and give them access to dedicated services.
                              <br />
                              {' '}
                              Depending on what is described below, third parties may provide registration and authentication services. In this case, this Application will be able to access some Data, stored by these third party services, for registration or identification purposes.
                            </p>
                            <h4>Facebook Authentication (Facebook, Inc.)</h4>
                            <p>
                              Facebook Authentication is a registration and authentication service provided by Facebook, Inc. and is connected to the Facebook social network.
                            </p>
                            <p>
                              {' '}
                              Personal Data collected: various types of Data as specified in the privacy policy of the service.
                              {' '}
                            </p>
                            <p>
                              {' '}
                              Place of processing: US –
                              {' '}
                              <a
                                href="https://www.facebook.com/help/405977429438260"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              {' '}
                            </p>
                          </div>

                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="one_line_col">
                    <h2>
                      Additional information about Data collection and processing
                    </h2>
                    <h3>Legal action</h3>
                    <p>
                      {' '}
                      The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services.
                      <br />
                      The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.
                      {' '}
                    </p>
                    <h3>Additional information about User's Personal Data</h3>
                    <p>
                      {' '}
                      In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.
                      {' '}
                    </p>
                    <h3>System logs and maintenance</h3>
                    <p>
                      {' '}
                      For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System logs) or use for this purpose other Personal Data (such as IP Address).
                      {' '}
                    </p>
                    <h3>Information not contained in this policy</h3>
                    <p>
                      {' '}
                      More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.
                      {' '}
                    </p>
                    <h3>The rights of Users</h3>
                    <p>
                      {' '}
                      Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.
                      {' '}
                    </p>
                    <p>
                      {' '}
                      This Application does not support u201cDo Not Tracku201d requests.
                      <br />
                      To determine whether any of the third party services it uses honor the u201cDo Not Tracku201d requests, please read their privacy policies.
                      {' '}
                    </p>
                    <h3>Changes to this privacy policy</h3>
                    <p>
                      {' '}
                      The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.
                      {' '}
                    </p>
                    <h3>Information about this privacy policy</h3>
                    <p>
                      {' '}
                      The Data Controller is responsible for this privacy policy, prepared starting from the modules provided by Iubenda and hosted on Iubenda's servers.
                      {' '}
                    </p>
                  </div>
                  <div className="one_line_col">
                    <div className="box_primary box_10 definitions expand">
                      <h3 className="expand-click w_icon_24 icon_ribbon">
                        {' '}Definitions and legal references{' '}
                      </h3>
                      <div className="expand-content">
                        <h4>Personal Data (or Data)</h4>
                        <p>
                          Any information regarding a natural person, a legal person, an institution or an association, which is, or can be, identified, even indirectly, by reference to any other information, including a personal identification number.
                        </p>
                        <h4>Usage Data</h4>
                        <p>
                          Information collected automatically from this Application (or third party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.
                        </p>
                        <h4>User</h4>
                        <p>
                          The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers.
                        </p>
                        <h4>Data Subject</h4>
                        <p>
                          The legal or natural person to whom the Personal Data refers.
                        </p>
                        <h4>Data Processor (or Data Supervisor)</h4>
                        <p>
                          The natural person, legal person, public administration or any other body, association or organization authorized by the Data Controller to process the Personal Data in compliance with this privacy policy.
                        </p>
                        <h4>Data Controller (or Owner)</h4>
                        <p>
                          The natural person, legal person, public administration or any other body, association or organization with the right, also jointly with another Data Controller, to make decisions regarding the purposes, and the methods of processing of Personal Data and the means used, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.
                        </p>
                        <h4>This Application</h4>
                        <p>
                          The hardware or software tool by which the Personal Data of the User is collected.
                        </p>
                        <h4>Cookies</h4>
                        <p>Small piece of data stored in the User's device.</p>
                        <hr />
                        <h4>Legal information</h4>
                        <p>
                          Notice to European Users: this privacy statement has been prepared in fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive 2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies.
                        </p>
                        <p>
                          This privacy policy relates solely to this Application.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }
}
