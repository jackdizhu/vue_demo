function scan(host, start, end, callback) {
    var net = require('net');
    var count = end - start;
    var result = [];
    console.time('port scan time');

    for (var i = start; i <= end; i++) {
        var item = net.connect({
                host: host,
                port: i
            },
            function(i) {
                return function() {
                    result.push(i);
                    this.destroy();
                };
            }(i)
        );

        item.on('error', function(err) {
            if (err.errno == 'ECONNREFUSED') {
                this.destroy();
            }
        });

        item.on('close', function() {
            if (!count--) {
                console.timeEnd('port scan time');
                callback(result);
            }
        });
    }
}

scan('www.bilibili.tv', 1, 65535, function(result) {
    for (var i = 0; i < result.length; i++) {
        console.log('端口:' + result[i]);
    }
});
