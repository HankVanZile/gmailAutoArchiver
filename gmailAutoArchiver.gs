function gmailAutoArchiver() {
  
  // Thanks to fw3d for the base code.  
  // https://medium.com/@fw3d/auto-archive-emails-in-gmail-after-2-days-1ebf0e076b1c#.n6lmwlqjm

  var delayDays = 1; // will only impact emails more than 24h old
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays); // what was the date at that time?

  // Get the specified number of threads in the Inbox
  var threads = GmailApp.getInboxThreads(0,50)
  
  // we archive all the threads if they're read AND older than the limit we set in delayDays 
  // AND if the thread does not contain any starred messages
  for (var i = 0; i < threads.length; i++) {
    if ((threads[i].getLastMessageDate()<maxDate) && !threads[i].isUnread() && !thread[i].hasStarredMessages())
    {
      threads[i].moveToArchive();
    }
  }
}
