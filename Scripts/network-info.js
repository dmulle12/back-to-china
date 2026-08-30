// network-info.js – 返回当前网络信息（IP、出口等）
$network = $network || {};
$network.ip = $network.ip || $request.ip;
$network.type = $network.type || $environment.networkType;
$done({
  body: JSON.stringify($network, null, 2)
});
