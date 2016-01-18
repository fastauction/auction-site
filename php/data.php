<?php echo ("auction data");
$url = "http://www.beta-myauctiontrader.com/data/data.json";
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$data=curl_exec($ch);
curl_close($ch);
$json = json_decode($data, true);
echo $json;
?>
