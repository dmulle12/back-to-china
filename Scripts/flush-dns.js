// flush-dns.js – 触发 Surge DNS 缓存刷新
$dns.flush();
$notification.post('Surge', 'DNS Flush', '已成功刷新 DNS 缓存');
$done();
