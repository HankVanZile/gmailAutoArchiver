function gmailAutoArchiver() {
  
  var delayDays = 5; // Emails older than 5 days
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate() - delayDays);
  
  var start = 0;
  var maxThreads = 100; // Fetch threads in smaller batches
  var threadsToArchive = [];

  // Process inbox threads in batches
  while (true) {
    var threads = GmailApp.getInboxThreads(start, maxThreads);
    if (threads.length === 0) break; // Exit loop when no more threads
    
    for (var i = 0; i < threads.length; i++) {
      if (threads[i].getLastMessageDate() < maxDate && !threads[i].isUnread() && !threads[i].hasStarredMessages()) {
        threadsToArchive.push(threads[i]);
      }
    }
    
    // Archive the batch of threads
    if (threadsToArchive.length > 0) {
      GmailApp.moveThreadsToArchive(threadsToArchive);
      threadsToArchive = []; // Reset the array for the next batch
    }
    
    start += maxThreads;
  }
}
