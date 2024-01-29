if (window.Worker) {
    const geolocationWorker = new Worker('geolocationWorker.js');

    // 10秒ごとに位置情報を取得
    setInterval(function() {
        geolocationWorker.postMessage('getLocation');
    }, 10000); // 10000ミリ秒 = 10秒

    geolocationWorker.onmessage = function(e) {
        // WebWorkerからのメッセージを受け取り、画面に表示
        displayLocation('Message received from worker: ' + e.data);
    };
} else {
    displayLocation('Your browser does not support Web Workers.');
}
