import React, { Component } from 'react';
import Footer from '../Footer';

import './ToS.css';

export default class ToS extends Component {
  renderCopyRightYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="ToS-container">
        <h1>Terms of Service of <strong>Nu - Events. Today.</strong></h1>

        <h2>Owner</h2>
        {' '}
        <p>
          Occam
          <br />
          <br />
          c/o Pedro Madruga
          <br />
          Vesterbrogade 26
          <br />
          1620 København V
          {' '}
          <br />
          Denmark
        </p>
        {' '}
        <p><b>Owner contact email:</b> hello@occam.ooo</p>

        <h2>1. Terms</h2>

        By accessing the website at&nbsp;http://nuapp.occam.ooo (referred onwards as "The website") or downloading the mobile app "Nu - Events. Today." (referred onwards as "The app") , you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from installing, using or accessing "The website" and "The app". The materials contained in "The website" and "The app" are protected by applicable copyright and trademark law.

        If you don't agree with any of the terms written in this agreement, or part of any term, remove "The app" if you have it installed and disconnect from "The website" immediately.

        <h2>2. Use License</h2>

        Under this license you may not:

        modify or copy the materials;
        use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
        attempt to decompile or reverse engineer any software contained on "The website" and "The app";
        remove any copyright or other proprietary notations from the materials; or
        transfer the materials to another person or "mirror" the materials on any other server.

        This license shall automatically terminate if you violate any of these restrictions and may be terminated by the Owner at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

        <h2>3. Disclaimer</h2>

        The materials on "The website" and "The app" are provided on an 'as is' basis. the Owner makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        Further, the Owner does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.

        The Owner is not responsible and cannot be liable for any of the data included in integration with the Facebook API.

        <h2>4. Limitations</h2>

        In no event shall the Owner or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on "The website" and "The app", even if the Owner or a the Owner authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.

        The Owner has no rights on the contents of the Events in "The app". The user accepts that The Owner has no rights or control on any of the events (that rely on the Facebook API) shown in "The app" or "The website"

        <h2>5. Accuracy of materials</h2>

        The materials appearing on "The website" and "The app" could include technical, typographical, or photographic errors. the Owner does not warrant that any of the materials on its website are accurate, complete or current. the Owner may make changes to the materials contained on its website at any time without notice. However the Owner does not make any commitment to update the materials.

        <h2>6. Links</h2>

        The Owner has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the Owner of the site. Use of any such linked website is at the user's own risk.

        <h2>7. Modifications</h2>

        The Owner may revise these terms of service for its website at any time without notice. By using "The app" and "The website" you are agreeing to be bound by the then current version of these terms of service.

        <h2>8. Governing Law</h2>

        These terms and conditions are governed by and construed in accordance with the laws of Denmark and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        <Footer />
      </div>
    );
  }
}
